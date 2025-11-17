https://unifiedjs.com/

ReactMarkdown 的实现逻辑
ReactMarkdown 是基于一套成熟的文本处理生态 ——unified 搭建的，
1.
 unified 的基本概述
官网定义：
﻿unified is a friendly interface backed by an ecosystem of plugins built for creating and manipulating content. It does this by taking Markdown, HTML, plain text, or other content, then turning it into structured data, thus making it available to over 100 plugins. Plugins for example do tasks such as spellchecking, linting, or minifying.
unified 是一个强大的文本处理框架，能够支持多种输入和输出格式，包括 Markdown、HTML。在 unified 的生态系统中，你可以创建管道（pipeline），通过一系列的处理器（processor）来处理和转换文本。它支持插件系统，可以通过安装或编写插件来扩展功能。