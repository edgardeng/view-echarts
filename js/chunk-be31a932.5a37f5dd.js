(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be31a932"],{2567:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("vi-line",{staticClass:"custom-class",attrs:{data:t.chartData,width:"300px",height:"300px"}}),e("button",{on:{click:t.changeSettings}},[t._v("trigger change")]),e("br"),t._v(" change delay 0 "),e("vi-line",{attrs:{data:t.chartData,"after-config":t.afterConfig,settings:t.chartSettings}}),t._v(" change delay 2000 "),e("vi-line",{attrs:{data:t.chartData,"after-config":t.afterConfig.bind(this,2),"change-delay":2e3,settings:t.chartSettings}})],1)},i=[],c=e("f9f8"),s=e("a4d3"),o={data:function(){return{chartData:s["a"],chartSettings:{}}},methods:{changeSettings:function(){this.timer=Date.now(),console.log("触发 watch"),this.changeLegend()},changeLegend:function(){this.chartSettings={legend:{show:!0,left:"right",top:"top",orient:"vertical"}}},changeAxis:function(){this.chartSettings={yAxisType:["0.0a"]}},afterConfig:function(){return console.log(arguments),console.log("绘制延迟时间",Date.now()-(this.timer||Date.now())),arguments[arguments.length-1]}},components:{ViLine:c["a"]}},r=o,h=e("0c7c"),g=Object(h["a"])(r,a,i,!1,null,null,null);n["default"]=g.exports},a4d3:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var a={columns:["日期","访问用户","下单用户"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]}}}]);