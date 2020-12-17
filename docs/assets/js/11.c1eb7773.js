(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{642:function(r,t,n){"use strict";n.r(t);var e=n(21),a=Object(e.a)({},(function(){var r=this,t=r.$createElement,n=r._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[n("h2",{attrs:{id:"_1-介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[r._v("#")]),r._v(" 1. 介绍")]),r._v(" "),n("p",[n("code",[r._v("cnchar-draw")]),r._v(" 库的汉字绘制功能封装基于 "),n("a",{attrs:{href:"https://github.com/chanind/hanzi-writer",target:"_blank",rel:"noopener noreferrer"}},[r._v("hanzi-writer"),n("OutboundLink")],1),r._v(", 特此表示感谢！")]),r._v(" "),n("p",[n("code",[r._v("cnchar-draw")]),r._v(" 库是用于支持可视化绘制汉字，有 normal,animation,stroke,test 四种模式可选，该库仅在浏览器环境下可用，且该库支持脱离cnchar使用")]),r._v(" "),n("p",[r._v("另外，该库支持繁体字且不依赖 "),n("code",[r._v("cnahr-trad")]),r._v("库")]),r._v(" "),n("p",[r._v("draw 的参数比较繁多，首先需要理解的是，draw 分为四种绘制模式：")]),r._v(" "),n("ul",[n("li",[r._v("normal: 常规绘制")]),r._v(" "),n("li",[r._v("animation: 带有绘制动画，支持连续绘制、同时绘制、循环绘制")]),r._v(" "),n("li",[r._v("stroke: 按汉字笔顺单步绘制")]),r._v(" "),n("li",[r._v("test: 测试模式，用户可以在容器内绘制汉字，cnchar-draw会检测是否绘制正确")])]),r._v(" "),n("p",[r._v("具体使用也可以参考"),n("code",[r._v("cnchar-draw")]),r._v("的类型声明文件："),n("a",{attrs:{href:"https://github.com/theajack/cnchar/blob/master/src/plugin/draw/index.d.ts",target:"_blank",rel:"noopener noreferrer"}},[r._v("cnchar.draw.d.ts"),n("OutboundLink")],1)]),r._v(" "),n("p",[r._v("npm安装")]),r._v(" "),n("div",[n("highlight-code",[r._v("\nnpm i cnchar-draw\n  ")])],1),r._v(" "),n("p",[r._v("cdn使用")]),r._v(" "),n("div",[n("highlight-code",{attrs:{lang:"html"}},[r._v('\n<script src="https://cdn.jsdelivr.net/npm/cnchar-draw/cnchar.draw.min.js"><\/script>\n  ')])],1),r._v(" "),n("p",[r._v("使用")]),r._v(" "),n("div",[n("highlight-code",{attrs:{lang:"javascript"}},[r._v("\nimport cnchar from 'cnchar';\nimport draw from 'cnchar-draw';\ncnchar.use(draw); // use 在浏览器环境中非必须\n  ")])],1),r._v(" "),n("p",[r._v("脱离cnchar 独立使用")]),r._v(" "),n("div",[n("highlight-code",{attrs:{lang:"javascript"}},[r._v("\nimport draw from 'cnchar-draw';\ndraw('你好')\n  ")])],1),r._v(" "),n("h2",{attrs:{id:"_2-使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用"}},[r._v("#")]),r._v(" 2. 使用")]),r._v(" "),n("p",[r._v("引入cnchar-draw之后，cnchar上会新增一个draw方法，使用方式如下：")]),r._v(" "),n("div",[n("highlight-code",{attrs:{lang:"javascript"}},[r._v("\ncnchar.draw('你好', options); // options 为可选参数\n  ")])],1),r._v(" "),n("p",[r._v("以下是 options 的所有可选参数及描述，具体使用可以在 "),n("a",{attrs:{href:"https://theajack.gitee.io/jsbox?theme=dark&config=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Ftheajack%2Fcnchar%2Fdocs%2Fconfig.js&id=normal-draw",target:"_blank",rel:"noopener noreferrer"}},[r._v("JSBox"),n("OutboundLink")],1),r._v(" 上自行在线尝试")]),r._v(" "),n("div",[n("highlight-code",{attrs:{lang:"typescript"}},[r._v("\ndeclare interface DrawOption {\n    el?: string | HTMLElement; // 绘制的容器，支持id和dom，若是不填，会在body后append一个dom作为容器\n    type?: DrawType; // 绘制模式，默认为normal\n    style?: { // 样式类\n        showOutline?: boolean;//: true,\n        showCharacter?: boolean;//: true,\n        currentColor?: string;//: '#b44', // 仅在stroke模式下有效\n        length?: number;//: 60,\n        padding?: number;//: 5, // 数值, 默认 20。 画布的汉字和边缘之间的填充\n        outlineColor?: string;//: '#ddd', // 十六进制字符, 默认 '#DDD'。\n        strokeColor?: string;//: '#555', // 十六进制字符, 默认 '#555'。绘制每个笔划的颜色。\n        radicalColor?: string;//: null, // 十六进制字符, 默认 null。 如果存在偏旁部首数据，则在笔划中绘制偏旁部首的颜色。 如果没有设置，激光将绘制与其他笔划相同的颜色。\n        strokeFadeDuration?: number; //400\n    },\n    line?: { // 背景线条类\n        lineStraight?: boolean;// : true,\n        lineCross?: boolean;// : true,\n        lineWidth?: number;// : 1,\n        lineColor?: string;// : '#ddd',\n        lineDash?: boolean;// : true,\n        border?: boolean;// : true,\n        borderWidth?: number;// : 1,\n        borderColor?: string;// : '#ccc',\n        borderDash?: boolean;// : false,\n    },\n    animation?: {\n        strokeAnimationSpeed?: number;// : 1, // 数值, 默认 1。 绘制每个笔划的速度必须大于0。增加此数字可以更快地绘制笔划，减少绘制笔划的速度更慢。\n        delayBetweenStrokes?: number;// : 1000, // 数值, 默认 1000。 动画进行中每个笔画之间的间隔时间（以毫秒为单位）。\n        delayBetweenLoops?: number;// : 200, // 数值, 默认 2000。 循环动画时每个动画循环之间的时间（以毫秒为单位）。\n        autoAnimate?: boolean;// : true,\n        animateComplete?: Function;// : () => {},\n        stepByStep?: boolean;// : true,\n        loopAnimate?: boolean;// : false,\n    },\n    test?: {\n        strokeHighlightSpeed?: number;// : 20, // 数值, 默认 20。 在测验中给出提示时突出显示每个笔划的速度必须大于0。增加此数字以突出显示更快，减少以突出显示更慢。\n        highlightColor?: number;// : '#aaf', // 十六进制字符, 默认 '#AAF'。 用于在测验中突出显示的颜色。\n        drawingColor?: number;// : '#333', // 十六进制字符, 默认 '#333'。 测验期间绘制的线条颜色。\n        drawingWidth?: number;// : 4, // 数值, 默认 4。 进行测验时绘制的线条宽度。\n        showHintAfterMisses?: number;// : 3, // 整数, 默认 3 中风高亮提示之前的未命中数被给予用户。 设置为 false 以禁用。 创建测验时也可以设置此项。\n        highlightOnComplete?: number;// : true, // 布尔值, 默认 true。 控制当用户完成绘制整个字符时，测验是否会短暂突出显示字符。 创建测验时也可以设置此项。\n        highlightCompleteColor?: number;// : null, // 十六进制字符, 默认 null。 在测验中突出显示字符时使用的颜色。 如果未设置，则将使用highlightColor。 仅当highlightOnComplete为true时才相关。\n        onTestStatus?(args: TestStatus):void;// : null, // ({index, status, data})=>{}\n    }\n};\n  ")])],1),r._v(" "),n("h2",{attrs:{id:"_3-常规绘制实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-常规绘制实例"}},[r._v("#")]),r._v(" 3. 常规绘制实例")]),r._v(" "),n("p",[r._v("绘制模式默认为常规模式 "),n("code",[r._v("type=normal")])]),r._v(" "),n("div",[n("codebox",{attrs:{id:"normal-draw"}})],1),r._v(" "),n("h2",{attrs:{id:"_4-笔顺绘制实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-笔顺绘制实例"}},[r._v("#")]),r._v(" 4. 笔顺绘制实例")]),r._v(" "),n("p",[r._v("当"),n("code",[r._v("type=stroke")]),r._v("时，笔顺模式启用，该模式会单笔绘制汉字的每一个笔划，并且为每一个笔划生成一个绘制块")]),r._v(" "),n("div",[n("codebox",{attrs:{id:"stroke-draw"}})],1),r._v(" "),n("h2",{attrs:{id:"_5-动画绘制模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-动画绘制模式"}},[r._v("#")]),r._v(" 5. 动画绘制模式")]),r._v(" "),n("p",[r._v("当"),n("code",[r._v("type=animation")]),r._v("时，动画模式启用，该模式会按笔顺用动画绘制每一个笔划")]),r._v(" "),n("div",[n("codebox",{attrs:{id:"animation-draw"}})],1),r._v(" "),n("h2",{attrs:{id:"_6-测验模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-测验模式"}},[r._v("#")]),r._v(" 6. 测验模式")]),r._v(" "),n("p",[r._v("当"),n("code",[r._v("type=test")]),r._v("时，测验模式启用，该模式用户可以在容器内绘制汉字，cnchar-draw会检测是否绘制正确")]),r._v(" "),n("p",[r._v("请用鼠标在绘制出的"),n("strong",[r._v("测验")]),r._v("两个字上按顺序画上笔画")]),r._v(" "),n("div",[n("codebox",{attrs:{id:"test-draw"}})],1),r._v(" "),n("h2",{attrs:{id:"_7-微信小程序中使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-微信小程序中使用"}},[r._v("#")]),r._v(" 7. 微信小程序中使用")]),r._v(" "),n("p",[r._v("该库由 HanziWriter 驱动，目前仅支持在web环境下使用，如需微信小程序使用请参考 "),n("a",{attrs:{href:"https://hanziwriter.org/docs.html#wechat-miniprograms",target:"_blank",rel:"noopener noreferrer"}},[r._v("HanziWriter API"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);