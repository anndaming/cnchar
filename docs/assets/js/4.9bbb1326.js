(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{546:function(t,s,a){},621:function(t,s,a){t.exports=a.p+"assets/img/logo.6cd28633.png"},622:function(t,s,a){"use strict";var i=a(546);a.n(i).a},631:function(t,s,a){"use strict";a.r(s);var i=[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("img",{staticClass:"logo",attrs:{src:a(621),alt:"",srcset:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"feature-w"},[a("div",{staticClass:"f-i"},[a("div",{staticClass:"f-t"},[a("i",{staticClass:"ei-rocket"}),t._v("功能全面")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("拼音/笔画数")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("多音字词")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("繁体字/火星文")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("汉字笔顺/偏旁部首")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("多种模式绘制汉字")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("汉字推算/拼音排序")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("...")])]),t._v(" "),a("div",{staticClass:"f-i"},[a("div",{staticClass:"f-t"},[a("i",{staticClass:"ei-tablet"}),t._v("多端支持")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("浏览器")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("nodejs")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("小程序/小游戏")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("ReactNative/Weex/Uniapp/Electron")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("webpack")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("typescript开发")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("...")])]),t._v(" "),a("div",{staticClass:"f-i"},[a("div",{staticClass:"f-t"},[a("i",{staticClass:"ei-cubes"}),t._v("按需取用")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("支持自定义数据")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("功能分包")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("体积小巧")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("简单易用")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("npm")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("cdn")]),t._v(" "),a("div",{staticClass:"f-des"},[t._v("...")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"copy-right"},[this._v("MIT Licensed | Copyright © 2020 present "),s("a",{attrs:{href:"https://www.github.com/theajack",target:"view_window"}},[this._v("theajack")])])}],e=(a(201),a(40),a(59),a(96),{data:function(){return{text:"",spell:"",stroke:"",trad:"",spark:"",order:""}},methods:{input:function(){if(this.text){this.spell=this.text.spell("array","tone").join(" "),this.stroke=this.text.stroke(),this.trad=this.text.convertSimpleToTrad("trad"),this.spark=this.text.convertSimpleToSpark("spark"),this.order=JSON.stringify(this.text.stroke("order","shape")).replace(/"/g,"").replace(/null/g,"无");var t=this.pickCnChar(this.text),s=document.getElementById("draw-area");s.innerHTML="",""!==t&&window.cnchar.draw(t,{el:s})}},isCnChar:function(t){var s=t.charCodeAt(0);return s>=19968&&s<=40869},pickCnChar:function(t){for(var s="",a=0;a<t.length;a++)this.isCnChar(t[a])&&(s+=t[a]);return s},start:function(){window.location.href="/cnchar/guide/"},run:function(){window.open("https://theajack.gitee.io/jsbox/?theme=dark&lang=html&lib=cnchar-all&code=DwZwLgngNgpgfAWAFAAI0oMQGMB2WAWAhgE4C0JMhA3sunSlAJY4yn4yMDm+YAXCgGYADAAcAHgG5a6AL7JgAenDR48gCaMAbikZqAvAHI1xQgHdyxSgbiKNmxEmB2d+g7gIkLVmwrsPQWMSMImAOdJokKMZmAIKWhCh6UQD2WACuALYwOGAAdJwwYACisFk5AEIQAJJqABRGJuYUhAYAlFKo6NGmcZS5zCzEABIAKgCyADKJKAYGHeGRySGMyTjTNJ30KFiwJPwAZoRQIDAANNJbMFD83b2E55v0yrD8G1tbJhpYRwDCyVDJYj8AwYAAsoP2Bge73oACNCFgANacYjJNI4NR-AFAmYYGD4qEXGEMbKcMD4fgANiERLocke9LoSzAKxwuUgIhg03cRGIuW6uRGAE0AApFXIAOQA8gAlMYxCbzdA8kj8xr1QAG8oBfTShKGZrPayCJ+tW7IgnO5eF5arMgtF4oAyiMZVKANJFJVoFV87r1QCSNoB1bV1JpwhqQxuWpo5XKS3ptpjtYtyMQlVXlIyqUolnu2VtVvoMgAj9QDuicHI6GOkSIsQUJYQNMANq05V5vmaGDEECs6HvOPgVGImCanWnGaAtQd3UGEBETltHtbPtgAdDgyAf1TAHPqU-Hk9HBhwhCy8+bXtbuR3xBGyQA6uPag2DIAqKyngHCTKeAL2MDABdVoL+hxrBVnbYg8i7DIRFgK8Rk+epAFo5QBftU3Y9HjoACgI7PJl0INQrwdRhwNgepACJ7INfxPGZADj-LVABC3QAGdUATtMDFyEBOSgKB6jAVYYGQmF10Ack1ADC5JiWKudiyJQ9B+KE5jWPYgwRH+CAeN7M9+2SQcr1vYg6gAJgAVj3MCIO48SYTjXQVgye8DEAFLkpynQBBZXsn8-1Qs8xHwCB6j4wAWG0AJsUBMATPzAGjnQBMvWUxcz0+Rhvjk7VAAEVCL-1UwEwAdWTrMAAn1AEg5KdMr4qEDEAOXNAG21QrgrslzyL7VKHWXdShwfDUpxHGZEqqiTTw8PlGBAH4cB+Xl6hiJK6AAKQdLNmOXZhOEYfYvL7WSqhwfZknqIYAAOcDaUz0C-Ik1FSTJsjyApilKU7KhqepvS8FpWn6HBBhGGAxDAaY61yAArZJmHqAAdHbWiJQCcBAf4YFyAFOFqOsQccJRAmCUIgA")}},mounted:function(){var t=setInterval((function(){var s=document.getElementById("vcomments");s&&(s.className+=" home-comment",clearInterval(t))}),500)}}),v=(a(622),a(21)),c=Object(v.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home-wrapper"},[t._m(0),t._v(" "),a("div",{staticClass:"title"},[t._v("cnchar")]),t._v(" "),a("div",{staticClass:"desc"},[t._v("功能全面、多端支持的汉字拼音笔画js库")]),t._v(" "),a("div",{staticClass:"test"},[a("el-input",{staticClass:"test-input",attrs:{type:"text",placeholder:"输入一些汉字试试"},on:{input:t.input},model:{value:t.text,callback:function(s){t.text=s},expression:"text"}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:""!==t.text,expression:'text!==""'}],staticClass:"show-area"},[a("div",[t._v(t._s(t.spell)+" "),a("span",{staticClass:"split"},[t._v("|")]),t._v(" 共"+t._s(t.stroke)+"笔")]),t._v(" "),a("div",[t._v("繁体: "+t._s(t.trad)+" "),a("span",{staticClass:"split"},[t._v("|")]),t._v(" 火星文: "+t._s(t.spark))]),t._v(" "),a("div",[t._v("笔顺: "+t._s(t.order))]),t._v(" "),a("div",{attrs:{id:"draw-area"}})])],1),t._v(" "),a("div",{staticClass:"start-w"},[a("el-button",{attrs:{type:"primary"},on:{click:t.start}},[t._v("开始 "),a("i",{staticClass:"ei-location-arrow"})]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.run}},[t._v("运行 "),a("i",{staticClass:"ei-play"})])],1),t._v(" "),t._m(1),t._v(" "),t._m(2)])}),i,!1,null,null,null);s.default=c.exports}}]);