(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/footer"],{1752:function(t,n,o){"use strict";var e=o("5f45"),c=o.n(e);c.a},"1af5":function(t,n,o){"use strict";o.r(n);var e=o("28c9"),c=o("c678");for(var r in c)"default"!==r&&function(t){o.d(n,t,(function(){return c[t]}))}(r);o("1752");var u,a=o("f0c5"),f=Object(a["a"])(c["default"],e["b"],e["c"],!1,null,"d1ce4de2",null,!1,e["a"],u);n["default"]=f.exports},"28c9":function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return c})),o.d(n,"c",(function(){return r})),o.d(n,"a",(function(){return e}));var c=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"5f45":function(t,n,o){},"8fab":function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"footer",data:function(){return{color:"",info:[]}},mounted:function(){this.color=this.$store.state.Color.themeColor,this.getData()},methods:{backTop:function(){t.vibrateShort({success:function(){}}),t.pageScrollTo({scrollTop:0})},getData:function(){var t=this;this.$request("store-service/config/host/demo.shoppoint.online",{},"GET").then((function(n){t.info=n.store_info}))}}};n.default=o}).call(this,o("543d")["default"])},c678:function(t,n,o){"use strict";o.r(n);var e=o("8fab"),c=o.n(e);for(var r in e)"default"!==r&&function(t){o.d(n,t,(function(){return e[t]}))}(r);n["default"]=c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/footer-create-component',
    {
        'components/footer-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1af5"))
        })
    },
    [['components/footer-create-component']]
]);
