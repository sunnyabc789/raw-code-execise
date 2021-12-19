// express-static中搬出来的 存在对外依赖 本用例存在删减 去掉了缓存等逻辑
// destroy  range-parser  ms  on-finished
 
const http = require("http");
const path = require("path");
const fs = require("fs");
const Stream = require("stream");
var ms = require("ms");
var parseRange = require("range-parser");
var destroy = require("destroy");

var sep = path.sep;
var resolve = path.resolve;
var join = path.join;
var normalize = path.normalize;
var extname = path.extname;

const server = http.createServer((req, res) => {
  let pathname = req.url;
  if (pathname === "/") {
    fs.readFile(path.resolve(__dirname + "/public/index.html"), (err, data) => {
      res.end(data);
    });
  } else {
    // var parseUrl = require("parseurl");
    // parseUrl(req).pathname;
    var stream = new SendStream(req, pathname, {
      root: resolve(path.join(__dirname, "public")),
    });
    stream.pipe(res);
    //  fs.readFile(path.resolve(__dirname + "/public/" +pathname), (err, data) => {
    //    res.end(data);
    //  });
  }
});

server.listen(3000);

class SendStream extends Stream {
  constructor(req, path, options) {
    super();
    var opts = options || {};

    this.options = opts;
    this.path = path;
    this.req = req;

    this._acceptRanges =
      opts.acceptRanges !== undefined ? Boolean(opts.acceptRanges) : true;

    this._cacheControl =
      opts.cacheControl !== undefined ? Boolean(opts.cacheControl) : true;

    this._etag = opts.etag !== undefined ? Boolean(opts.etag) : true;

    this._dotfiles = opts.dotfiles !== undefined ? opts.dotfiles : "ignore";

    if (
      this._dotfiles !== "ignore" &&
      this._dotfiles !== "allow" &&
      this._dotfiles !== "deny"
    ) {
      throw new TypeError(
        'dotfiles option must be "allow", "deny", or "ignore"'
      );
    }

    this._hidden = Boolean(opts.hidden);

    // legacy support
    if (opts.dotfiles === undefined) {
      this._dotfiles = undefined;
    }

    this._extensions =
      opts.extensions !== undefined
        ? normalizeList(opts.extensions, "extensions option")
        : [];

    this._immutable =
      opts.immutable !== undefined ? Boolean(opts.immutable) : false;

    this._index =
      opts.index !== undefined
        ? normalizeList(opts.index, "index option")
        : ["index.html"];

    this._lastModified =
      opts.lastModified !== undefined ? Boolean(opts.lastModified) : true;

    this._maxage = opts.maxAge || opts.maxage;
    this._maxage =
      typeof this._maxage === "string"
        ? ms(this._maxage)
        : Number(this._maxage);
    this._maxage = !isNaN(this._maxage)
      ? Math.min(Math.max(0, this._maxage), MAX_MAXAGE)
      : 0;

    this._root = opts.root ? resolve(opts.root) : null;

    // if (!this._root && opts.from) {
    //   this.from(opts.from);
    // }
  }

  pipe(res) {
    // root path
    var root = this._root;

    // references
    this.res = res;

    // decode the path
    var path = decode(this.path);
    if (path === -1) {
      this.error(400);
      return res;
    }

    // null byte(s)
    if (~path.indexOf("\0")) {
      this.error(400);
      return res;
    }

    var UP_PATH_REGEXP = /(?:^|[\\/])\.\.(?:[\\/]|$)/;

    var parts;
    if (root !== null) {
      // normalize
      if (path) {
        path = normalize("." + sep + path);
      }

      // malicious path
      if (UP_PATH_REGEXP.test(path)) {
        // debug('malicious path "%s"', path);
        this.error(403);
        return res;
      }

      // explode path parts
      parts = path.split(sep);

      // join / normalize from optional root dir
      path = normalize(join(root, path));
    } else {
      // ".." is malicious without "root"
      if (UP_PATH_REGEXP.test(path)) {
        // debug('malicious path "%s"', path);
        this.error(403);
        return res;
      }

      // explode path parts
      parts = normalize(path).split(sep);

      // resolve the path
      path = resolve(path);
    }

    // dotfile handling
    if (containsDotFile(parts)) {
      var access = this._dotfiles;

      // legacy support
      if (access === undefined) {
        access =
          parts[parts.length - 1][0] === "."
            ? this._hidden
              ? "allow"
              : "ignore"
            : "allow";
      }

      // debug('%s dotfile "%s"', access, path);
      switch (access) {
        case "allow":
          break;
        case "deny":
          this.error(403);
          return res;
        case "ignore":
        default:
          this.error(404);
          return res;
      }
    }

    // index file support
    if (this._index.length && this.hasTrailingSlash()) {
      this.sendIndex(path);
      return res;
    }

    this.sendFile(path);
    return res;
  }

  sendIndex(path) {
    var i = -1;
    var self = this;

    function next(err) {
      if (++i >= self._index.length) {
        if (err) return self.onStatError(err);
        return self.error(404);
      }

      var p = join(path, self._index[i]);

      // debug('stat "%s"', p);
      fs.stat(p, function (err, stat) {
        if (err) return next(err);
        if (stat.isDirectory()) return next();
        // self.emit("file", p, stat);
        self.send(p, stat);
      });
    }

    next();
  }

  hasTrailingSlash() {
    return this.path[this.path.length - 1] === "/";
  }

  error(status, err) {
    // emit if listeners instead of responding
    // if (hasListeners(this, "error")) {
    //   return this.emit(
    //     "error",
    // http-errors
    //     createError(status, err, {
    //       expose: false,
    //     })
    //   );
    // }

    var res = this.res;
    // var statuses = require("statuses");
    // var msg = statuses[status] || String(status);
    // var escapeHtml = require("escape-html");
    // var doc = createHtmlDocument("Error", escapeHtml(msg));

    // clear existing headers
    clearHeaders(res);

    // add error headers
    if (err && err.headers) {
      setHeaders(res, err.headers);
    }

    // send basic response
    res.statusCode = status;
    res.setHeader("Content-Type", "text/html; charset=UTF-8");
    // res.setHeader("Content-Length", Buffer.byteLength(doc));
    res.setHeader("Content-Security-Policy", "default-src 'none'");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.end("error");
  }

  onStatError(error) {
    switch (error.code) {
      case "ENAMETOOLONG":
      case "ENOENT":
      case "ENOTDIR":
        this.error(404, error);
        break;
      default:
        this.error(500, error);
        break;
    }
  }

  headersAlreadySent() {
    var err = new Error("Can't set headers after they are sent.");
    // debug("headers already sent");
    this.error(500, err);
  }

  type(path) {
    var res = this.res;

    if (res.getHeader("Content-Type")) return;

    // var type = mime.lookup(path);

    // if (!type) {
    //   // debug("no content-type");
    //   return;
    // }

    // var charset = mime.charsets.lookup(type);

    // debug("content-type %s", type);
    // res.setHeader(
    //   "Content-Type",
    //   type + (charset ? "; charset=" + charset : "")
    // );
  }

  setHeader(path, stat) {
    var res = this.res;

    // this.emit('headers', res, path, stat)

    if (this._acceptRanges && !res.getHeader("Accept-Ranges")) {
      // debug('accept ranges')
      res.setHeader("Accept-Ranges", "bytes");
    }

    if (this._cacheControl && !res.getHeader("Cache-Control")) {
      var cacheControl = "public, max-age=" + Math.floor(this._maxage / 1000);

      if (this._immutable) {
        cacheControl += ", immutable";
      }

      // debug('cache-control %s', cacheControl)
      res.setHeader("Cache-Control", cacheControl);
    }
  }

  isConditionalGET() {
    return (
      this.req.headers["if-match"] ||
      this.req.headers["if-unmodified-since"] ||
      this.req.headers["if-none-match"] ||
      this.req.headers["if-modified-since"]
    );
  }

  isPreconditionFailure() {
    var req = this.req;
    var res = this.res;

    // if-match
    var match = req.headers["if-match"];
    if (match) {
      var etag = res.getHeader("ETag");
      return (
        !etag ||
        (match !== "*" &&
          parseTokenList(match).every(function (match) {
            return (
              match !== etag && match !== "W/" + etag && "W/" + match !== etag
            );
          }))
      );
    }

    // if-unmodified-since
    var unmodifiedSince = parseHttpDate(req.headers["if-unmodified-since"]);
    if (!isNaN(unmodifiedSince)) {
      var lastModified = parseHttpDate(res.getHeader("Last-Modified"));
      return isNaN(lastModified) || lastModified > unmodifiedSince;
    }

    return false;
  }

  isCachable() {
    var statusCode = this.res.statusCode;
    return (statusCode >= 200 && statusCode < 300) || statusCode === 304;
  }

  // isFresh() {
  //   // var fresh = require("fresh");
  //   return fresh(this.req.headers, {
  //     etag: this.res.getHeader("ETag"),
  //     "last-modified": this.res.getHeader("Last-Modified"),
  //   });
  // }

  isRangeFresh() {
    var ifRange = this.req.headers["if-range"];

    if (!ifRange) {
      return true;
    }

    // if-range as etag
    if (ifRange.indexOf('"') !== -1) {
      var etag = this.res.getHeader("ETag");
      return Boolean(etag && ifRange.indexOf(etag) !== -1);
    }

    // if-range as modified date
    var lastModified = this.res.getHeader("Last-Modified");
    return parseHttpDate(lastModified) <= parseHttpDate(ifRange);
  }

  stream(path, options) {
    // TODO: this is all lame, refactor meeee
    var finished = false;
    var self = this;
    var res = this.res;

    // pipe
    var stream = fs.createReadStream(path, options);
    // this.emit("stream", stream);
    stream.pipe(res);

    // response finished, done with the fd
    var onFinished = require("on-finished");
    onFinished(res, function onfinished() {
      finished = true;
      destroy(stream);
    });

    // error handling code-smell
    stream.on("error", function onerror(err) {
      // request already finished
      if (finished) return;

      // clean up stream
      finished = true;
      destroy(stream);

      // error
      self.onStatError(err);
    });

    // end
    stream.on("end", function onend() {
      self.emit("end");
    });
  }

  send(path, stat) {
    var len = stat.size;
    var options = this.options;
    var opts = {};
    var res = this.res;
    var req = this.req;
    var ranges = req.headers.range;
    var offset = options.start || 0;

    if (headersSent(res)) {
      // impossible to send now
      this.headersAlreadySent();
      return;
    }

    // debug('pipe "%s"', path);

    // set header fields
    this.setHeader(path, stat);

    // set content-type
    this.type(path);

    // conditional GET support
    if (this.isConditionalGET()) {
      if (this.isPreconditionFailure()) {
        this.error(412);
        return;
      }

      // if (this.isCachable() && this.isFresh()) {
      //   this.notModified();
      //   return;
      // }
    }

    // adjust len to start/end options
    len = Math.max(0, len - offset);
    if (options.end !== undefined) {
      var bytes = options.end - offset + 1;
      if (len > bytes) len = bytes;
    }

    var BYTES_RANGE_REGEXP = /^ *bytes=/;
    // Range support
    if (this._acceptRanges && BYTES_RANGE_REGEXP.test(ranges)) {
      // parse

      ranges = parseRange(len, ranges, {
        combine: true,
      });

      // If-Range support
      if (!this.isRangeFresh()) {
        // debug("range stale");
        ranges = -2;
      }

      // unsatisfiable
      if (ranges === -1) {
        // debug("range unsatisfiable");

        // Content-Range
        res.setHeader("Content-Range", contentRange("bytes", len));

        // 416 Requested Range Not Satisfiable
        return this.error(416, {
          headers: { "Content-Range": res.getHeader("Content-Range") },
        });
      }

      // valid (syntactically invalid/multiple ranges are treated as a regular response)
      if (ranges !== -2 && ranges.length === 1) {
        // debug("range %j", ranges);

        // Content-Range
        res.statusCode = 206;
        res.setHeader("Content-Range", contentRange("bytes", len, ranges[0]));

        // adjust for requested range
        offset += ranges[0].start;
        len = ranges[0].end - ranges[0].start + 1;
      }
    }

    // clone options
    for (var prop in options) {
      opts[prop] = options[prop];
    }
    // set read options
    opts.start = offset;
    opts.end = Math.max(offset, offset + len - 1);

    // content-length
    res.setHeader("Content-Length", len);

    // HEAD support
    if (req.method === "HEAD") {
      res.end();
      return;
    }

    this.stream(path, opts);
  }

  sendFile(path, stat) {
    var i = 0;
    var self = this;

    // debug('stat "%s"', path);
    fs.stat(path, function onstat(err, stat) {
      if (
        err &&
        err.code === "ENOENT" &&
        !extname(path) &&
        path[path.length - 1] !== sep
      ) {
        // not found, check extensions
        return next(err);
      }
      if (err) return self.onStatError(err);
      // if (stat.isDirectory()) return self.redirect(path);
      self.emit("file", path, stat); // pubsub emit, sub on outer
      self.send(path, stat);
    });

    function next(err) {
      if (self._extensions.length <= i) {
        return err ? self.onStatError(err) : self.error(404);
      }

      var p = path + "." + self._extensions[i++];

      // debug('stat "%s"', p);
      fs.stat(p, function (err, stat) {
        if (err) return next(err);
        if (stat.isDirectory()) return next();
        self.emit("file", p, stat);
        self.send(p, stat);
      });
    }
  }
}

function normalizeList(val, name) {
  var list = [].concat(val || []);

  for (var i = 0; i < list.length; i++) {
    if (typeof list[i] !== "string") {
      throw new TypeError(name + " must be array of strings or false");
    }
  }

  return list;
}

function createHtmlDocument(title, body) {
  return (
    "<!DOCTYPE html>\n" +
    '<html lang="en">\n' +
    "<head>\n" +
    '<meta charset="utf-8">\n' +
    "<title>" +
    title +
    "</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "<pre>" +
    body +
    "</pre>\n" +
    "</body>\n" +
    "</html>\n"
  );
}

function hasListeners(emitter, type) {
  var count =
    typeof emitter.listenerCount !== "function"
      ? emitter.listeners(type).length
      : emitter.listenerCount(type);

  return count > 0;
}

function clearHeaders(res) {
  var headers = getHeaderNames(res);

  for (var i = 0; i < headers.length; i++) {
    res.removeHeader(headers[i]);
  }
}

function setHeaders(res, headers) {
  var keys = Object.keys(headers);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    res.setHeader(key, headers[key]);
  }
}

function headersSent(res) {
  return typeof res.headersSent !== "boolean"
    ? Boolean(res._header)
    : res.headersSent;
}

function contentRange(type, size, range) {
  return (
    type + " " + (range ? range.start + "-" + range.end : "*") + "/" + size
  );
}

function parseTokenList(str) {
  var end = 0;
  var list = [];
  var start = 0;

  // gather tokens
  for (var i = 0, len = str.length; i < len; i++) {
    switch (str.charCodeAt(i)) {
      case 0x20 /*   */:
        if (start === end) {
          start = end = i + 1;
        }
        break;
      case 0x2c /* , */:
        list.push(str.substring(start, end));
        start = end = i + 1;
        break;
      default:
        end = i + 1;
        break;
    }
  }

  // final token
  list.push(str.substring(start, end));

  return list;
}

function parseHttpDate(date) {
  var timestamp = date && Date.parse(date);

  return typeof timestamp === "number" ? timestamp : NaN;
}

function decode(path) {
  try {
    return decodeURIComponent(path);
  } catch (err) {
    return -1;
  }
}

function containsDotFile(parts) {
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (part.length > 1 && part[0] === ".") {
      return true;
    }
  }

  return false;
}

function getHeaderNames(res) {
  return typeof res.getHeaderNames !== "function"
    ? Object.keys(res._headers || {})
    : res.getHeaderNames();
}
