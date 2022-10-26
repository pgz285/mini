(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/form/summary"],{"359b":function(t,n,e){"use strict";var o=e("6572"),a=e.n(o);a.a},"4b6a":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){e.e("components/form/total").then(function(){return resolve(e("52b6"))}.bind(null,e)).catch(e.oe)},a={name:"summary",components:{Total:o},data:function(){return{notes:""}},mounted:function(){this.$nextTick((function(){this.$on("saveNotes",(function(){t.setStorage({key:"notes",data:this.notes})})),this.notes=t.getStorageSync("notes")||""}))},methods:{saveNotes:function(){t.setStorage({key:"notes",data:this.notes})}}};n.default=a}).call(this,e("543d")["default"])},6572:function(t,n,e){},a4db:function(t,n,e){"use strict";e.r(n);var o=e("fbe1"),a=e("e83a");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("359b");var r,c=e("f0c5"),s=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"6627507b",null,!1,o["a"],r);n["default"]=s.exports},e83a:function(t,n,e){"use strict";e.r(n);var o=e("4b6a"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=a.a},fbe1:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var a=function(){var t=this,n=t.$createElement;t._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/form/summary-create-component',
    {
        'components/form/summary-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a4db"))
        })
    },
    [['components/form/summary-create-component']]
]);
