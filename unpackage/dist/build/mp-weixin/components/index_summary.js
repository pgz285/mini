(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/index_summary"],{"076a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){n.e("components/clause_popup").then(function(){return resolve(n("84d5"))}.bind(null,n)).catch(n.oe)},u={name:"index_summary",components:{Popup:o},data:function(){return{agree:!1,color:"",buttonColor:""}},mounted:function(){this.color=this.$store.state.Color.themeColor,this.buttonColor=this.$store.state.Color.buttonColor},methods:{change:function(){this.agree=!this.agree},settlement:function(){this.agree?t.navigateTo({url:"/pages/settlement/settlement"}):t.showToast({icon:"none",title:"請先同意網站的相關條款"})},open:function(){this.$refs.popups.$emit("open")}}};e.default=u}).call(this,n("543d")["default"])},"0c4d":function(t,e,n){"use strict";var o=n("c9a4"),u=n.n(o);u.a},"618e":function(t,e,n){"use strict";n.r(e);var o=n("b990"),u=n("aea7");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("0c4d");var r,c=n("f0c5"),i=Object(c["a"])(u["default"],o["b"],o["c"],!1,null,"b3e3a6fe",null,!1,o["a"],r);e["default"]=i.exports},aea7:function(t,e,n){"use strict";n.r(e);var o=n("076a"),u=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=u.a},b990:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var u=function(){var t=this,e=t.$createElement;t._self._c},a=[]},c9a4:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/index_summary-create-component',
    {
        'components/index_summary-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("618e"))
        })
    },
    [['components/index_summary-create-component']]
]);
