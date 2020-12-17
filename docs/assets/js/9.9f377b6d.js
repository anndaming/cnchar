(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{633:function(t,e,a){"use strict";a.r(e);var _=a(21),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[t._v("#")]),t._v(" 1. 介绍")]),t._v(" "),a("p",[t._v("cnchar 库是基本库，主要包含汉字 "),a("code",[t._v("拼音")]),t._v(" 和 "),a("code",[t._v("笔画数")]),t._v(" 的获取")]),t._v(" "),a("p",[t._v("除此之外，还支持 "),a("code",[t._v("通过拼音查询原汉字")]),t._v(", "),a("code",[t._v("通过笔画数查询原汉字")]),t._v(", "),a("code",[t._v("查询拼音详细信息")]),t._v(" 等功能")]),t._v(" "),a("p",[t._v("ts类型声明："),a("a",{attrs:{href:"https://github.com/theajack/cnchar/blob/master/src/main/index.d.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("cnchar.d.ts"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_2-spell-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-spell-方法"}},[t._v("#")]),t._v(" 2. spell 方法")]),t._v(" "),a("p",[t._v("spell 方法用户获取汉字拼音，支持 数组分割、首字母，大小写、候选多音字、音调、繁简体功能")]),t._v(" "),a("h3",{attrs:{id:"_2-1-api使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-api使用"}},[t._v("#")]),t._v(" 2.1. api使用")]),t._v(" "),a("p",[t._v("api调用方式如下，所有 arg 参数都是可选的")]),t._v(" "),a("div",[a("highlight-code",{attrs:{lang:"javascript"}},[t._v("\ncnchar.spell(string,arg1,arg2,...);\nstring.spell(arg1,arg2,...); // string prototype 调用\n  ")])],1),t._v(" "),a("p",[t._v("以下是几个简单的例子：")]),t._v(" "),a("div",[a("codebox",{attrs:{id:"spell"}})],1),t._v(" "),a("h3",{attrs:{id:"_2-2-参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-参数说明"}},[t._v("#")]),t._v(" 2.2. 参数说明")]),t._v(" "),a("p",[t._v("arg 参数信息如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("作用")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否默认")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("依赖库")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回数组")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("first")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回拼音首字母")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("up")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("将结果全部大写")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("low")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("将结果全部小写")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("会被 up 参数覆盖")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("poly")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用候选多音字")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("tone")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("启用音调")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("simple")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否禁用繁体字的拼音功能")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("cnchar-trad")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用 cnchar-trad 之后，默认对繁体字拼音进行转换，该参数用于禁用繁体字拼音")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-stroke-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-stroke-方法"}},[t._v("#")]),t._v(" 3. stroke 方法")]),t._v(" "),a("h3",{attrs:{id:"_2-1-api使用-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-api使用-2"}},[t._v("#")]),t._v(" 2.1. api使用")]),t._v(" "),a("p",[t._v("api调用方式如下，所有 arg 参数都是可选的")]),t._v(" "),a("div",[a("highlight-code",{attrs:{lang:"javascript"}},[t._v("\ncnchar.stroke(string,arg1,arg2,...);\nstring.stroke(arg1,arg2,...); // string prototype 调用\n  ")])],1),t._v(" "),a("p",[t._v("以下是几个简单的例子：")]),t._v(" "),a("div",[a("codebox",{attrs:{id:"stroke"}})],1),t._v(" "),a("h3",{attrs:{id:"_2-2-参数说明-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-参数说明-2"}},[t._v("#")]),t._v(" 2.2. 参数说明")]),t._v(" "),a("p",[t._v("arg 参数信息如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("作用")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否默认")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("依赖库")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回数组")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用 cnchar-order 且启用 order 参数后该参数被忽略")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("order")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("启用笔画顺序")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("cnchar-order")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("letter")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用笔画顺序字母序列")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("cnchar-order")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当启用 order 后，该值是默认值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("detail")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用笔画顺序详情作为返回值，每个汉字对应一个 json")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("cnchar-order")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("优先级小于 letter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("shape")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用笔画形状作为返回值")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("cnchar-order")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("优先级小于 detail")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("name")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用笔画名称作为返回值")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("cnchar-order")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("优先级小于 shape")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("count")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用笔画数作为返回值")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("cnchar-poly")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("优先级小于 name")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("simple")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否禁用繁体字的笔画功能")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("cnchar-trad")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用 cnchar-trad 之后，默认对繁体字启用笔画功能，该参数用于禁用繁体字笔画功能")])])])]),t._v(" "),a("h2",{attrs:{id:"_4-通过拼音查询原汉字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-通过拼音查询原汉字"}},[t._v("#")]),t._v(" 4. 通过拼音查询原汉字")]),t._v(" "),a("h3",{attrs:{id:"_4-1-api使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-api使用"}},[t._v("#")]),t._v(" 4.1 api使用")]),t._v(" "),a("p",[t._v("api调用方式如下，所有 arg 参数都是可选的")]),t._v(" "),a("div",[a("highlight-code",{attrs:{lang:"javascript"}},[t._v("\ncnchar.spellToWord(spell,arg1,arg2,...);\n  ")])],1),t._v(" "),a("p",[t._v("spell 表示拼音，可以使用音调字母或音调数标方式：")]),t._v(" "),a("p",[a("strong",[t._v("例："),a("code",[t._v("shàng 等价于 shang4")])])]),t._v(" "),a("p",[a("strong",[t._v("ü 可以使用 v 表示，例："),a("code",[t._v("lü 等价于 lv")])])]),t._v(" "),a("p",[t._v("以下是几个简单的例子：")]),t._v(" "),a("div",[a("codebox",{attrs:{id:"spellToWord"}})],1),t._v(" "),a("h3",{attrs:{id:"_4-2-参数信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-参数信息"}},[t._v("#")]),t._v(" 4.2 参数信息")]),t._v(" "),a("p",[t._v("arg 参数信息如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("作用")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否默认")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("依赖库")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("simple")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅匹配简体字")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("trad")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅匹配繁体字")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("cnchar-trad")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("该参数仅在引入了 "),a("code",[t._v("cnchar-trad")]),t._v(" 后有效")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("poly")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅匹配多音字")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("alltone")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配该拼音所有音调的汉字")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("没有音调的拼音表示轻声")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回符合条件的数组，默认返回的是字符串")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])])])]),t._v(" "),a("p",[t._v("注："),a("code",[t._v("simple")]),t._v("与"),a("code",[t._v("trad")]),t._v("参数若是都不存在，则当引入"),a("code",[t._v("cnchar-trad")]),t._v("时会同时匹配繁简体，没有引入"),a("code",[t._v("cnchar-trad")]),t._v("时则只匹配简体")]),t._v(" "),a("h2",{attrs:{id:"_5-通过笔画数查询原汉字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-通过笔画数查询原汉字"}},[t._v("#")]),t._v(" 5. 通过笔画数查询原汉字")]),t._v(" "),a("h3",{attrs:{id:"_5-1-api使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-api使用"}},[t._v("#")]),t._v(" 5.1 api使用")]),t._v(" "),a("p",[t._v("api调用方式如下，count表示笔画数，所有 arg 参数都是可选的")]),t._v(" "),a("div",[a("highlight-code",{attrs:{lang:"javascript"}},[t._v("\ncnchar.strokeToWord(count,arg1,arg2,...);\n  ")])],1),t._v(" "),a("p",[t._v("以下是几个简单的例子：")]),t._v(" "),a("div",[a("codebox",{attrs:{id:"strokeToWord"}})],1),t._v(" "),a("h3",{attrs:{id:"_5-2-参数信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-参数信息"}},[t._v("#")]),t._v(" 5.2 参数信息")]),t._v(" "),a("p",[t._v("arg 参数信息如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("作用")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否默认")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("依赖库")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("simple")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅匹配简体字")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("trad")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅匹配繁体字")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("cnchar-trad")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("该参数仅在引入了 "),a("code",[t._v("cnchar-trad")]),t._v(" 后有效")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回符合条件的数组，默认返回的是字符串")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])])])]),t._v(" "),a("p",[t._v("注："),a("code",[t._v("simple")]),t._v("与"),a("code",[t._v("trad")]),t._v("参数若是都不存在，则当引入"),a("code",[t._v("cnchar-trad")]),t._v("时会同时匹配繁简体，没有引入"),a("code",[t._v("cnchar-trad")]),t._v("时则只匹配简体")]),t._v(" "),a("h2",{attrs:{id:"_6-其他api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-其他api"}},[t._v("#")]),t._v(" 6. 其他api")]),t._v(" "),a("h3",{attrs:{id:"_6-1-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-use"}},[t._v("#")]),t._v(" 6.1 .use()")]),t._v(" "),a("p",[t._v("这个 api 的功能是显式启用 "),a("code",[t._v("poly")]),t._v("、"),a("code",[t._v("order")]),t._v("、"),a("code",[t._v("trad")]),t._v("、"),a("code",[t._v("draw")]),t._v(" 四个功能库")]),t._v(" "),a("div",[a("highlight-code",{attrs:{lang:"javascript"}},[t._v("\n    cnchar.use(...libs);\n  ")])],1),t._v(" "),a("p",[t._v("这个启用在非浏览器环境（比如 nodejs 等）中是必须的，使用如下：")]),t._v(" "),a("div",[a("highlight-code",{attrs:{lang:"javascript"}},[t._v("\n// 请保证最先引入 cnchar 基础库，其他几个库顺序无所谓\nvar cnchar = require('cnchar');\nvar poly = require('cnchar-poly');\nvar order = require('cnchar-order');\nvar trad = require('cnchar-trad');\ncnchar.use(poly, order, trad); // 参数顺序无关，三个参数可以任意选择\n  ")])],1),t._v(" "),a("p",[t._v("在浏览器环境中则无需调用：")]),t._v(" "),a("div",[a("highlight-code",{attrs:{lang:"javascript"}},[t._v("\n// 请保证最先引入 cnchar 基础库，其他几个库顺序无所谓\nimport cnchar from 'cnchar';\nimport 'cnchar-poly';\nimport 'cnchar-order';\nimport 'cnchar-trad';\nimport 'cnchar-draw';\n  ")])],1),t._v(" "),a("h3",{attrs:{id:"_6-2-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-type"}},[t._v("#")]),t._v(" 6.2 .type")]),t._v(" "),a("p",[t._v("type 对象用户获取当前可用的 "),a("code",[t._v("spell")]),t._v(" 、 "),a("code",[t._v("stroke")]),t._v(" 、 "),a("code",[t._v("orderToWord")]),t._v(" 、"),a("code",[t._v("spellToWord")]),t._v("、"),a("code",[t._v("strokeToWord")]),t._v(" 参数类型：")]),t._v(" "),a("div",[a("codebox",{attrs:{id:"type"}})],1),t._v(" "),a("h3",{attrs:{id:"_6-3-check"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-check"}},[t._v("#")]),t._v(" 6.3 .check")]),t._v(" "),a("p",[t._v("该值是一个 布尔类型，用于控制是否开启参数校验，默认值为 true")]),t._v(" "),a("p",[t._v("cnchar带有的参数校验功能能够对 "),a("code",[t._v("spell")]),t._v(" 和 "),a("code",[t._v("stroke")]),t._v(" 传入的参数进行检查，在控制台显示 "),a("code",[t._v("无效·")]),t._v("，"),a("code",[t._v("忽略")]),t._v("和"),a("code",[t._v("冗余")]),t._v("的参数")]),t._v(" "),a("div",[a("highlight-code",{attrs:{lang:"javascript"}},[t._v("\ncnchar.check = false; // 关闭参数校验\n  ")])],1),t._v(" "),a("h3",{attrs:{id:"_6-4-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-version"}},[t._v("#")]),t._v(" 6.4 .version")]),t._v(" "),a("p",[t._v("获取当前版本：")]),t._v(" "),a("div",[a("codebox",{attrs:{id:"version"}})],1),t._v(" "),a("h3",{attrs:{id:"_6-5-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-plugins"}},[t._v("#")]),t._v(" 6.5 .plugins")]),t._v(" "),a("p",[t._v("当前使用的功能库列表，最多的情况为 "),a("code",[t._v('["order", "trad", "poly", "draw"]')])]),t._v(" "),a("div",[a("codebox",{attrs:{id:"plugins"}})],1)])}),[],!1,null,null,null);e.default=v.exports}}]);