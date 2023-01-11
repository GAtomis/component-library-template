(function(o,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(o=typeof globalThis<"u"?globalThis:o||self,e(o.index={},o.Vue))})(this,function(o,e){"use strict";const p={data:{type:Array,default:[],required:!0}},N="",h=()=>e.createVNode("svg",{style:"vertical-align: middle;",t:"1671772859005",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8599",width:"16",height:"16"},[e.createVNode("path",{d:"M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z","p-id":"8600"},null),e.createVNode("path",{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z",style:"vertical-align: middle;","p-id":"8601"},null)]),g=()=>e.createVNode("svg",{t:"1671772792969",class:"icon",style:"vertical-align: middle;",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2668",width:"16",height:"16"},[e.createVNode("path",{d:"M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z","p-id":"2669"},null),e.createVNode("path",{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z","p-id":"2670"},null)]);function u(c){const d=l=>l.reduce((r,t)=>t!=null&&t.open?r.concat(t,d((t==null?void 0:t.children)??[])):r.concat(t),[]),a=e.ref(d(c));return{openedTree:d,openedData:a,toggle:l=>{console.log("toggle",l),l.open=!l.open,a.value=d(c)}}}const s=e.defineComponent({name:"DTreeTest",props:p,emits:[],setup(c,d){const{openedTree:a,openedData:i,toggle:l}=u(c.data),r=()=>e.createVNode("span",{style:"display:inline-block; width:16px;"},null),t=n=>e.createVNode(e.Fragment,null,[e.createVNode("div",{onClick:()=>{n!=null&&n.children&&l(n)},style:{paddingLeft:`${20*(((n==null?void 0:n.level)??1)-1)}px`}},[n.children?n.open?e.createVNode(h,null,null):e.createVNode(g,null,null):e.createVNode(r,null,null),e.createVNode("span",{style:"vertical-align: middle;"},[n.label])])]),T=n=>n.map(f=>t(f));return()=>e.createVNode("div",{class:"devui-tree-test"},[e.createTextVNode("   "),T(i.value)])}}),V={title:"TreeTest 树测试",category:"数据展示",status:"1%",install(c){c.component(s.name,s)}};o.TreeTest=s,o.default=V,o.treeTestProps=p,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});