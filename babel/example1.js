// 这样做会破坏格式化  空格不会变成ast  或者可以用orginCode做字符replace
// 这个更合适?
// https://github.com/facebook/jscodeshift

const parser = require('@babel/parser')
const t = require('@babel/types')
const traverse = require('@babel/traverse').default
const generate = require("@babel/generator").default;
// const template = require('@babel/template').default;

const glob = require('glob');
const fs = require('fs');
// const path = require('path');

// 这东西 百度搜 babel/types 生成可选链  或者用template生成出一个来  然后看 t.xx的ts定义 
// const getNode = template('`customPath=${abc}-efg&text=${abc}-efg`')
// console.log(JSON.stringify(getNode(),null,2))
// 看t.templateLiteral的定义
//  babel/types 生成模板文字  
// const template = t.templateLiteral(
//   [
//     t.templateElement({ raw: 'Hello, ', cooked: 'Hello, ' }, false),
//     t.templateElement({ raw: '!', cooked: '!' }, true)
//   ],
//   [t.identifier('name')]
// );


// 可选链
// const f = t.identifier('VersionDetailNewContextCurrentLeftMenu')
// const s = t.identifier('flowNodeName')
// const template = t.optionalMemberExpression(f, s, false, true);

// 模板字符
// const template = t.templateLiteral(
//   [
//     t.templateElement({ raw: 'text=', cooked: 'text=' }, false),
//     t.templateElement({ raw: '-新增渠道', cooked: '-新增渠道' }, true)
//   ],
//   [t.identifier('VersionDetailNewContextCurrentLeftMenu')]
// );

// const output = generate(template);

// console.log(output.code,'output===');
// VersionDetailNewContextCurrentLeftMenu?.flowNodeName 
// `Hello, ${name}!` output===

// Babel 配置
const BABEL_OPTIONS = {
  // presets: ['env'],
  // sourceMap: 'inline'
  sourceType: 'module',
  "presets": [
    "@babel/preset-react",
    "@babel/preset-typescript",
    "@babel/plugin-transform-typescript",
    "@babel/preset-flow",
    "stage-0",
    "es2015",
    'env'
  ],
  plugins: [
    'jsx', 
    'typescript',
    'decorators-legacy'
  ]
};

// 要转换的文件模式
const FILE_PATTERN = './testabc/*.tsx';


// 转换文件
function transformFile(filePath) {
  const originalCode = fs.readFileSync(filePath, 'utf-8');
  // const { code } = babel.transform(originalCode, BABEL_OPTIONS);


const ast = parser.parse(originalCode, BABEL_OPTIONS)

  // const ast = parser.parse(sourceCode, BABEL_OPTIONS)
  // console.log(ast,'ast===')
  traverse(ast, {
    enter(path) {
      const { node } = path
      if (t.isJSXElement(node) && (node.openingElement.name.name === 'Button' || node.openingElement.name.name === 'CnButton')) {

        let targetAttr = node.openingElement.attributes
        .find(({type, name}) => type === 'JSXAttribute' && name.name === 'data-autolog');
        // undefined | Node
        if (!targetAttr) return 

        // 这样改是有效的 但是只对字符串
        // targetAttr.value.value = 'efg'

        // 一个三元表达式的节点  在 expression属性上
        // 一个文本节点 在 value属性上

        // 例如
        // targetAttr.value.expression
        // targetAttr.value.value = 'efg' 
        // 文本节点可以直接改
        

        // 三元表达式节点长这样
        // {
        //   type: 'ConditionalExpression',
        //   start: 7731,
        //   end: 7846,
        //   loc: SourceLocation {
        //     start: Position { line: 292, column: 28, index: 7731 },
        //     end: Position { line: 292, column: 143, index: 7846 },
        //     filename: undefined,
        //     identifierName: undefined
        //   },
        // 第一部分
        //   test: Node {
        //     type: 'Identifier',
        //     start: 7731,
        //     end: 7769,
        //     loc: SourceLocation {
        //       start: [Position],
        //       end: [Position],
        //       filename: undefined,
        //       identifierName: 'VersionDetailNewContextCurrentLeftMenu'
        //     },
        //     name: 'VersionDetailNewContextCurrentLeftMenu'
        //   },
        // 第二部分
        //   consequent: Node {
        //     type: 'TemplateLiteral',
        //     start: 7772,
        //     end: 7839,
        //     loc: SourceLocation {
        //       start: [Position],
        //       end: [Position],
        //       filename: undefined,
        //       identifierName: undefined
        //     },
        //     expressions: [ [Node] ],
        //     quasis: [ [Node], [Node] ]
        //   },
        // 第三部分
        //   alternate: Node {
        //     type: 'NullLiteral',
        //     start: 7842,
        //     end: 7846,
        //     loc: SourceLocation {
        //       start: [Position],
        //       end: [Position],
        //       filename: undefined,
        //       identifierName: undefined
        //     }
        //   }
        // } 
        // VersionDetailNewContextCurrentLeftMenu ? `text=${VersionDetailNewContextCurrentLeftMenu?.flowNodeName}-新增渠道` : null

        // targetAttr.value.expression.consequent.expressions获取到
        // `text=${VersionDetailNewContextCurrentLeftMenu?.flowNodeName}-新增渠道`

        // {
        //   type: 'TemplateLiteral',
        //   start: 7772,
        //   end: 7839,
        //   loc: SourceLocation {
        //     start: Position { line: 292, column: 69, index: 7772 },
        //     end: Position { line: 292, column: 136, index: 7839 },
        //     filename: undefined,
        //     identifierName: undefined
        //   },
        //   expressions: [
        //     Node {
        //       type: 'OptionalMemberExpression',
        //       start: 7780,
        //       end: 7832,
        //       loc: [SourceLocation],
        //       object: [Node],
        //       computed: false,
        //       property: [Node],
        //       optional: true
        //     }
        //   ],
        //   quasis: [
        //     Node {
        //       type: 'TemplateElement',
        //       start: 7773,
        //       end: 7778,
        //       loc: [SourceLocation],
        //       value: [Object],
        //       tail: false
        //     },
        //     Node {
        //       type: 'TemplateElement',
        //       start: 7833,
        //       end: 7838,
        //       loc: [SourceLocation],
        //       value: [Object],
        //       tail: true
        //     }
        //   ]
        // } 
        // 其中 consequent 部分对应 ${VersionDetailNewContextCurrentLeftMenu?.flowNodeName}  targetAttr.value.expression.consequent
        // quasis 部分对应 text= 和  -新增渠道 两个 是个数组  targetAttr.value.expression.quasis
        // console.log(targetAttr.value.expression.consequent.quasis,'targetAttr===')
    

        console.log(targetAttr.value.expression.consequent.expressions,'targetAttr.value.expression===')
        
        const f = t.identifier('VersionDetailNewContextCurrentLeftMenu')
        const s = t.identifier('flowNodeName')
        const abc = t.optionalMemberExpression(f, s, false, true);

        const template = t.templateLiteral(
          [
            t.templateElement({ raw: 'customPath=', cooked: 'customPath=' }, false),
            
            // t.templateElement({ raw: 'text=', cooked: 'text=' }, false),
            t.templateElement({ raw: '-新增渠道&text=', cooked: '-新增渠道&text=' }, true),
             t.templateElement({ raw: '-新增渠道', cooked: '-新增渠道' }, false),
          ],
          [abc, abc]
        );


        // expression 也可以直接替换

        targetAttr.value.expression = t.conditionalExpression(
          // 变量
          // t.identifier('VersionDetailNewContextCurrentLeftMenu'),
          targetAttr.value.expression.test,
          template,
            // t.nullLiteral()
          targetAttr.value.expression.alternate
        )

        // 如果需要去掉某个东西 需要新生成一个jsx  例如去掉x-if
        // let jsxOpeningElement = t.JSXOpeningElement( 
        //   node.openingElement.name,
        //   node.openingElement.attributes
        //       ? node.openingElement.attributes.filter((attr)=> attr !== targetAttr)
        //       : null
        // );

        // console.log('efg===')

        // let jsxElement = t.JSXElement(
        //   jsxOpeningElement,
        //   node.closingElement,
        //   node.children
        // );

        // console.log(targetAttr)
        // console.log(targetAttr.value.expression,'ef123g===')

        // let expression = t.conditionalExpression(
        //   targetAttr.value.value, // r-if=“true” 
        //   jsxElement, // 创建好的react组件
        //   t.nullLiteral() // 这个方法会返回一个 null
        // );
        // let expression = t.callExpression(jsxElement, [])

        // console.log('efabcg===')
        //  replaceWith 方法为替换方法
        // path.replaceWith(expression);

        // path.insertBefore(node)




      }
    },

  })
  const output = generate(ast);

  console.log(output.code,'output===');

  // fs.writeFileSync(filePath, output.code, 'utf-8');
}

// let files = glob.globSync(
//   // 起始路径  命令行所在路径  改为path工具生成
//   [
//     './src/**/*.jsx',
//     './src/**/*.tsx',
//     './src/**/*.ts', 
//     './src/**/*.js'
//   ],
//   // ['src/**/*.js'],
//   { 
//     ignore: [
//       // 'node_modules/**' 
//       '**/types/**',
//       '**/*.d.ts'
//     ]
//     // ignore: {
//     //   ignored: p => {
//     //     console.log(p,'p===')
//     //     return true 
//     //   }
//     // }
//   }
// )

// 批量转换
let files = glob.sync(FILE_PATTERN)
console.log(files,'files===')
files.forEach(filePath => {
  transformFile(filePath);
});


// let code = 'function a() {}'
// const ast = parser.parse(code)
// traverse(ast, {
//   FunctionDeclaration(path) {
//     const node = path.node
//     // 获取函数名称等
//     path.replaceWith()//替换为新的节点
//     path.remove() // 删除当前节点
//     path.skip() //跳过子节点
//     let copyNode = t.cloneNode(node)//复制当前节点
//     traverse(copyNode, {}, {}, path)// 对子树进行遍历和替换，不影响当前的path
//   }
// })

// 参考文档
// https://juejin.cn/post/6899256692615413767
// https://juejin.cn/post/6844903809940979726
// https://juejin.cn/post/6850037265675223054
