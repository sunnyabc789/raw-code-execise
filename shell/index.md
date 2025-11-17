
js的 console  可以给shell暴露参数
```
eval "$(bun run scripts/utils/get-pub-tag-and-version.ts)" 

const res = fun();

console.log(`export PUB_TAG=${res.pubTag}\n`);
console.log(`export VERSION=${res.version}\n`);
console.log(`export xxUI_VERSION=${res.version}\n`);

```