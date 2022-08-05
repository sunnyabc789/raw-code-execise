module.exports.decorates = {
    state: {
        visible: !1
    },
    onEnter: function(t) {
        console.log('here===')
        this.setState({
            visible: !this.state.visible
        })
    },
    onClose: function(t) {
        this.setState({
            visible: !this.state.visible
        })
    }
}, module.exports.logicTree = function() {
    var t = walle.h;
    return [
        [1, "link", {
            href: "index.css"
        }],
        [2, "View", 0, [
            [2, "Dialog", {
                    className: "tanchuang",
                    visible: function t(e) {
                        with(e) return this.state.visible
                    },
                    closable: "esc,mask,close",
                    onClose: function t(e) {
                        with(e) return this.onClose
                    },
                    onCancel: function t(e) {
                        with(e) return this.onClose
                    },
                    shouldUpdatePosition: function t(e) {
                        with(e) return !0
                    },
                    hasMask: function t(e) {
                        with(e) return !1
                    },
                    hasClose: function t(e) {
                        with(e) return !1
                    },
                    canCloseByMask: function t(e) {
                        with(e) return !1
                    },
                    canCloseByEsc: function t(e) {
                        with(e) return !0
                    },
                    canCloseByOutSideClick: function t(e) {
                        with(e) return !1
                    }
                },
                [
                    [0, 0, 0, "abc"]
                ]
            ]
        ]]
    ]
}(), module.exports.styles =
".btn{margin-left:111px;margin-top:51px;width:100px}.input{white-space:nowrap}.tanchuang{width:1000px}.tc{word-wrap:break-word;white-space:pre-wrap}pre{display:block;font-family:monospace;white-space:pre;margin:1em 0}";