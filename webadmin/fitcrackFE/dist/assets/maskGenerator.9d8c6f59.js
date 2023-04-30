import{f as m}from"./numberFormat.773889d3.js";import{t as u}from"./fc_tile.1427abec.js";import{n as h}from"./index.9d8a666c.js";import"./vendor.6aa46313.js";var p=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{staticClass:"title-width"},[t("fc-tile",{staticClass:"ma-2",attrs:{title:"Mask generator",icon:e.$route.meta.icon}},[t("v-row",{staticStyle:{"margin-bottom":"-10mm"}},[t("v-col",{attrs:{cols:"4"}},[t("v-card-title",{staticClass:"pb-0 mb-2"},[t("span",[e._v("Patterns")])])],1),t("v-col",{attrs:{cols:"8",align:"right"}},[t("v-btn",{staticClass:"text-lowercase",attrs:{disabled:e.charset1=="",color:"primary",outlined:""},on:{click:function(i){return e.updatePattern("?1")}}},[e._v(" ?1 ")]),t("v-btn",{staticClass:"text-lowercase",attrs:{disabled:e.charset2=="",color:"primary",outlined:""},on:{click:function(i){return e.updatePattern("?2")}}},[e._v(" ?2 ")]),t("v-btn",{staticClass:"text-lowercase",attrs:{disabled:e.charset3=="",color:"primary",outlined:""},on:{click:function(i){return e.updatePattern("?3")}}},[e._v(" ?3 ")]),t("v-btn",{staticClass:"text-lowercase",attrs:{disabled:e.charset4=="",color:"primary",outlined:""},on:{click:function(i){return e.updatePattern("?4")}}},[e._v(" ?4 ")])],1)],1),t("v-row",[t("v-col",{attrs:{align:"right"}},[t("div",{staticClass:"bottom-space"},[t("v-btn",{staticClass:"text-lowercase",attrs:{color:"primary",outlined:""},on:{click:function(i){return e.updatePattern("?l")}}},[e._v(" ?l ")]),t("v-btn",{staticClass:"text-lowercase",attrs:{color:"primary",outlined:""},on:{click:function(i){return e.updatePattern("?u")}}},[e._v(" ?u ")]),t("v-btn",{staticClass:"text-lowercase",attrs:{color:"primary",outlined:""},on:{click:function(i){return e.updatePattern("?d")}}},[e._v(" ?d ")]),t("v-btn",{staticClass:"text-lowercase",attrs:{color:"primary",outlined:""},on:{click:function(i){return e.updatePattern("?s")}}},[e._v(" ?s ")]),t("v-btn",{staticClass:"text-lowercase",attrs:{color:"primary",outlined:""},on:{click:function(i){return e.updatePattern("?a")}}},[e._v(" ?a ")]),t("v-btn",{staticClass:"text-lowercase",attrs:{disabled:!e.useHex,color:"primary",outlined:""},on:{click:function(i){return e.updatePattern("?h")}}},[e._v(" ?h ")]),t("v-btn",{staticClass:"text-lowercase",attrs:{disabled:!e.useHex,color:"primary",outlined:""},on:{click:function(i){return e.updatePattern("?H")}}},[e._v(" ?H ")])],1)])],1),e.patternInvalid?t("v-alert",{staticClass:"mb-0",attrs:{tile:"",text:"",type:"error"}},[e._v(" Pattern cannot be empty. ")]):e._e(),t("v-text-field",{attrs:{label:"Enter mask pattern",filled:"",outlined:"",clearable:"",dense:"","single-line":"",readonly:!0},model:{value:e.pattern,callback:function(i){e.pattern=i},expression:"pattern"}}),t("v-row",[t("v-col",{attrs:{align:"left"}},[t("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(i){return e.includePattern()}}},[e._v(" Include pattern "),t("v-icon",{attrs:{right:""}},[e._v(" mdi-plus-circle ")])],1)],1),t("v-col",{attrs:{align:"right"}},[t("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(i){return e.excludePattern()}}},[e._v(" Exclude pattern "),t("v-icon",{attrs:{right:""}},[e._v(" mdi-minus-circle ")])],1)],1)],1),t("v-row",[t("v-col",{attrs:{align:"left",cols:"5"}},[t("ul",{staticStyle:{"list-style-type":"disc"}},e._l(e.incPatterns,function(i){return t("li",{key:i.id},[t("b",{staticStyle:{"font-size":"1.1em"}},[e._v(e._s(i.text))]),t("button",{on:{click:function(r){return e.removeIncPattern(i)}}},[t("v-icon",{attrs:{right:""}},[e._v(" mdi-close-outline ")])],1)])}),0)]),t("v-col",{attrs:{cols:"2"}}),t("v-col",{attrs:{align:"left",cols:"5"}},[t("ul",{staticStyle:{"list-style-type":"disc"}},e._l(e.excPatterns,function(i){return t("li",{key:i.id},[t("b",{staticStyle:{"font-size":"1.1em"}},[e._v(e._s(i.text))]),t("button",{on:{click:function(r){return e.removeExcPattern(i)}}},[t("v-icon",{attrs:{right:""}},[e._v(" mdi-close-outline ")])],1)])}),0)])],1),t("v-card-title",{staticClass:"pb-0 mb-2"},[t("span",[e._v("Custom character sets")])]),t("v-row",{staticClass:"negative-bottom-space"},[t("v-col",{attrs:{cols:"6",align:"left"}},[t("v-text-field",{attrs:{label:"Character set 1",filled:"",outlined:"",dense:"","single-line":""},model:{value:e.charset1,callback:function(i){e.charset1=i},expression:"charset1"}})],1),t("v-col",{attrs:{cols:"6",align:"left"}},[t("v-text-field",{attrs:{label:"Character set 2",filled:"",outlined:"",dense:"","single-line":""},model:{value:e.charset2,callback:function(i){e.charset2=i},expression:"charset2"}})],1)],1),t("v-row",[e.charset1?t("v-col",{attrs:{cols:"1"}},[t("b",[e._v("Min")])]):t("v-col",{attrs:{cols:"6"}}),e.charset1?t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mincharset1,expression:"mincharset1"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.mincharset1},on:{input:[function(i){i.target.composing||(e.mincharset1=i.target.value)},function(i){return e.checkCustomInc()}]}})]):e._e(),e.charset1?t("v-col",{attrs:{cols:"1"}},[t("b",[e._v("Max")])]):e._e(),e.charset1?t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.maxcharset1,expression:"maxcharset1"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.maxcharset1},on:{input:[function(i){i.target.composing||(e.maxcharset1=i.target.value)},function(i){return e.checkCustomDec()}]}})]):e._e(),e.charset2?t("v-col",{attrs:{cols:"1"}},[t("b",[e._v("Min")])]):e._e(),e.charset2?t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mincharset2,expression:"mincharset2"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.mincharset2},on:{input:[function(i){i.target.composing||(e.mincharset2=i.target.value)},function(i){return e.checkCustomInc()}]}})]):e._e(),e.charset2?t("v-col",{attrs:{cols:"1"}},[t("b",[e._v("Max")])]):e._e(),e.charset2?t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.maxcharset2,expression:"maxcharset2"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.maxcharset2},on:{input:[function(i){i.target.composing||(e.maxcharset2=i.target.value)},function(i){return e.checkCustomDec()}]}})]):e._e()],1),t("v-row",{staticClass:"negative-bottom-space"},[t("v-col",{attrs:{cols:"6",align:"left"}},[t("v-text-field",{attrs:{label:"Character set 3",filled:"",outlined:"",dense:"","single-line":""},model:{value:e.charset3,callback:function(i){e.charset3=i},expression:"charset3"}})],1),t("v-col",{attrs:{cols:"6",align:"left"}},[t("v-text-field",{attrs:{label:"Character set 4",filled:"",outlined:"",dense:"","single-line":""},model:{value:e.charset4,callback:function(i){e.charset4=i},expression:"charset4"}})],1)],1),t("v-row",[e.charset3?t("v-col",{attrs:{cols:"1"}},[t("b",[e._v("Min")])]):t("v-col",{attrs:{cols:"6"}}),e.charset3?t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mincharset3,expression:"mincharset3"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.mincharset3},on:{input:[function(i){i.target.composing||(e.mincharset3=i.target.value)},function(i){return e.checkCustomInc()}]}})]):e._e(),e.charset3?t("v-col",{attrs:{cols:"1"}},[t("b",[e._v("Max")])]):e._e(),e.charset3?t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.maxcharset3,expression:"maxcharset3"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.maxcharset3},on:{input:[function(i){i.target.composing||(e.maxcharset3=i.target.value)},function(i){return e.checkCustomDec()}]}})]):e._e(),e.charset4?t("v-col",{attrs:{cols:"1"}},[t("b",[e._v("Min")])]):e._e(),e.charset4?t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mincharset4,expression:"mincharset4"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.mincharset4},on:{input:[function(i){i.target.composing||(e.mincharset4=i.target.value)},function(i){return e.checkCustomInc()}]}})]):e._e(),e.charset4?t("v-col",{attrs:{cols:"1"}},[t("b",[e._v("Max")])]):e._e(),e.charset4?t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.maxcharset4,expression:"maxcharset4"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.maxcharset4},on:{input:[function(i){i.target.composing||(e.maxcharset4=i.target.value)},function(i){return e.checkCustomDec()}]}})]):e._e()],1),t("v-card-title",{staticClass:"pb-0 mb-2"},[t("span",[e._v("Criteria")])]),t("v-row",{attrs:{"max-height":"50px"}},[t("v-col",{attrs:{cols:"2"}}),t("v-col",{attrs:{cols:"2",align:"right"}},[t("b",[e._v("Min")])]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("b",[e._v("Max")])]),t("v-col",{attrs:{cols:"2"}}),t("v-col",{attrs:{cols:"2",align:"right"}},[t("b",[e._v("Min")])]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("b",[e._v("Max")])])],1),t("v-row",[t("v-col",{attrs:{cols:"2"}},[t("b",[e._v("Lowercase")])]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.minLower,expression:"minLower"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.minLower},on:{input:[function(i){i.target.composing||(e.minLower=i.target.value)},function(i){return e.checkMinInc()}]}})]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.maxLower,expression:"maxLower"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.maxLower},on:{input:[function(i){i.target.composing||(e.maxLower=i.target.value)},function(i){return e.checkMaxDec()}]}})]),t("v-col",{attrs:{cols:"2"}},[t("b",[e._v("Digits")])]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.minDigits,expression:"minDigits"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.minDigits},on:{input:[function(i){i.target.composing||(e.minDigits=i.target.value)},function(i){return e.checkMinInc()}]}})]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.maxDigits,expression:"maxDigits"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.maxDigits},on:{input:[function(i){i.target.composing||(e.maxDigits=i.target.value)},function(i){return e.checkMaxDec()}]}})])],1),t("v-row",[t("v-col",{attrs:{cols:"2"}},[t("b",[e._v("Uppercase")])]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.minUpper,expression:"minUpper"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.minUpper},on:{input:[function(i){i.target.composing||(e.minUpper=i.target.value)},function(i){return e.checkMinInc()}]}})]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.maxUpper,expression:"maxUpper"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.maxUpper},on:{input:[function(i){i.target.composing||(e.maxUpper=i.target.value)},function(i){return e.checkMaxDec()}]}})]),t("v-col",{attrs:{cols:"2"}},[t("b",[e._v("Special")])]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.minSpecial,expression:"minSpecial"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.minSpecial},on:{input:[function(i){i.target.composing||(e.minSpecial=i.target.value)},function(i){return e.checkMinInc()}]}})]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.maxSpecial,expression:"maxSpecial"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.maxSpecial},on:{input:[function(i){i.target.composing||(e.maxSpecial=i.target.value)},function(i){return e.checkMaxDec()}]}})])],1),t("v-row",{staticClass:"bottom-space"},[t("v-col",{attrs:{cols:"2"}},[t("b",[e._v("Length")])]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.minLength,expression:"minLength"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.minLength},on:{input:[function(i){i.target.composing||(e.minLength=i.target.value)},function(i){return e.checkMinInc()}]}})]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.maxLength,expression:"maxLength"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.maxLength},on:{input:[function(i){i.target.composing||(e.maxLength=i.target.value)},function(i){return e.checkMaxDec()}]}})]),t("v-col",{attrs:{cols:"6"}})],1),e.useHex?t("v-row",[t("v-col",{attrs:{cols:"2"}},[t("b",[e._v("Lower HEX")])]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.minLowerHex,expression:"minLowerHex"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.minLowerHex},on:{input:[function(i){i.target.composing||(e.minLowerHex=i.target.value)},function(i){return e.checkMinInc()}]}})]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.maxLowerHex,expression:"maxLowerHex"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.maxLowerHex},on:{input:[function(i){i.target.composing||(e.maxLowerHex=i.target.value)},function(i){return e.checkMaxDec()}]}})]),t("v-col",{attrs:{cols:"2"}},[t("b",[e._v("Upper HEX")])]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.minUpperHex,expression:"minUpperHex"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.minUpperHex},on:{input:[function(i){i.target.composing||(e.minUpperHex=i.target.value)},function(i){return e.checkMinInc()}]}})]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.maxUpperHex,expression:"maxUpperHex"}],attrs:{type:"number",min:"0",max:"99",size:"4"},domProps:{value:e.maxUpperHex},on:{input:[function(i){i.target.composing||(e.maxUpperHex=i.target.value)},function(i){return e.checkMaxDec()}]}})])],1):e._e(),t("v-row",[t("v-col",{attrs:{align:"right"}},[t("label",{attrs:{for:"hexCheckbox"}},[t("b",[e._v("Use hexadecimal ")])]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.useHex,expression:"useHex"}],attrs:{type:"checkbox",id:"hexCheckbox"},domProps:{checked:Array.isArray(e.useHex)?e._i(e.useHex,null)>-1:e.useHex},on:{change:function(i){var r=e.useHex,s=i.target,n=!!s.checked;if(Array.isArray(r)){var c=null,o=e._i(r,c);s.checked?o<0&&(e.useHex=r.concat([c])):o>-1&&(e.useHex=r.slice(0,o).concat(r.slice(o+1)))}else e.useHex=n}}})])],1),t("v-card-title",{staticClass:"pb-0 mb-2 bottom-space"},[t("span",[e._v("Cracking task options")])]),t("v-row",{staticClass:"top-space"},[t("v-col",{attrs:{cols:"2"}},[t("b",[e._v("Time:")])]),t("v-col",{attrs:{cols:"1"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.timeHours,expression:"timeHours"}],attrs:{type:"number",min:"0",size:"4"},domProps:{value:e.timeHours},on:{input:function(i){i.target.composing||(e.timeHours=i.target.value)}}})]),t("v-col",{attrs:{cols:"1"}},[t("b",[e._v("h")])]),t("v-col",{attrs:{cols:"1"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.timeMins,expression:"timeMins"}],attrs:{type:"number",min:"0",size:"4",max:"59"},domProps:{value:e.timeMins},on:{input:function(i){i.target.composing||(e.timeMins=i.target.value)}}})]),t("v-col",{attrs:{cols:"1"}},[t("b",[e._v("m")])]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("b",[e._v("Speed:")])]),t("v-col",{attrs:{cols:"2",align:"right"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.speed,expression:"speed"}],attrs:{type:"number",min:"0",size:"8",step:"10000"},domProps:{value:e.speed},on:{input:function(i){i.target.composing||(e.speed=i.target.value)}}})]),t("v-col",{attrs:{cols:"2",align:"left"}},[t("b",[e._v("keys/s")])])],1),t("v-card-title",{staticClass:"pb-0 mb-2"},[t("span",[e._v("Dictionaries")])]),t("v-data-table",{attrs:{headers:e.headers,items:e.dictionaries.items,loading:e.loading,"footer-props":{itemsPerPageOptions:[5,10,25],itemsPerPageText:"Dictionaries per page"}},scopedSlots:e._u([{key:"item.name",fn:function(i){var r=i.item;return[t("router-link",{attrs:{to:"dictionaries/"+r.id}},[e._v(" "+e._s(r.name)+" ")])]}},{key:"item.time",fn:function(i){var r=i.item;return[e._v(" "+e._s(e.$moment.utc(r.time).local().format("DD.MM.YYYY HH:mm"))+" ")]}},{key:"item.keyspace",fn:function(i){var r=i.item;return[e._v(" "+e._s(e.fmt(r.keyspace))+" ")]}},{key:"item.analyze",fn:function(i){var r=i.item;return[t("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(s){return s.on,[t("v-btn",{attrs:{icon:""},on:{click:function(n){return e.addDictionary(r.name)}}},[t("v-icon",[e._v(e._s(e.selectedDictionaries.includes(r.name)?"mdi-minus-circle":"mdi-plus-circle"))])],1)]}}],null,!0)},[t("span",[e._v("Analyze")])])]}}])}),t("v-row",{staticClass:"top-space"},[t("v-col",{attrs:{align:"right"}},[t("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(i){return e.showOrdering()}}},[e._v(" Change charset priorities ")])],1)],1),t("v-row",[t("v-col",{attrs:{cols:"4","align-self":"center"}},[t("b",[e._v("Minimum occurrences:")])]),t("v-col",{attrs:{cols:"2",align:"left","align-self":"center"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.minOcc,expression:"minOcc"}],attrs:{type:"number",min:"1",size:"4"},domProps:{value:e.minOcc},on:{input:function(i){i.target.composing||(e.minOcc=i.target.value)}}})]),t("v-col",{attrs:{cols:"2","align-self":"center"}},[t("b",[e._v("Sorting mode:")])]),t("v-col",{attrs:{cols:"4"}},[t("v-select",{attrs:{items:["Optimal","Occurrence","Complexity"]},model:{value:e.sortingMode,callback:function(i){e.sortingMode=i},expression:"sortingMode"}})],1)],1),e.charset1||e.charset2||e.charset3||e.charset4?t("v-alert",{staticClass:"mb-0",attrs:{tile:"",text:"",type:"warning"}},[e._v(" You are using custom character sets. Make sure to select respective character sets during job creation. ")]):e._e(),t("v-row",[t("v-col",{attrs:{cols:"6",align:"left"}},[t("v-text-field",{attrs:{label:"Mask file name",filled:"",outlined:"",dense:"","single-line":""},model:{value:e.filename,callback:function(i){e.filename=i},expression:"filename"}})],1),t("v-col",{attrs:{cols:"6",align:"right"}},[t("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(i){return e.generateMasks()}}},[e._v(" "+e._s(e.showItemState)+" "),e.awaitingResponse?t("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):e._e()],1)],1)],1)],1),t("v-dialog",{attrs:{"max-width":"700"},model:{value:e.orderingVisible,callback:function(i){e.orderingVisible=i},expression:"orderingVisible"}},[t("v-card",[t("v-card-title",[e._v(" Change character set priorities ")]),t("v-card-text",[e.orderingVisible?t("v-data-table",{staticClass:"bottom-space",attrs:{headers:e.charsetOrderHeaders,items:e.charsetOrderList,loading:!1,"sort-by":["order"],"hide-default-footer":!0},scopedSlots:e._u([{key:"item.order",fn:function(i){var r=i.item;return[e._v(" "+e._s(r.order)+" ")]}},{key:"item.name",fn:function(i){var r=i.item;return[e._v(" "+e._s(r.name)+" ")]}},{key:"item.placeholder",fn:function(i){var r=i.item;return[e._v(" "+e._s(r.placeholder)+" ")]}},{key:"item.move",fn:function(i){var r=i.item;return[t("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(s){return s.on,[t("v-btn",{attrs:{icon:""},on:{click:function(n){return e.moveCharsetUp(r.name)}}},[t("v-icon",[e._v("mdi-arrow-up")])],1),t("v-btn",{attrs:{icon:""},on:{click:function(n){return e.moveCharsetDown(r.name)}}},[t("v-icon",[e._v("mdi-arrow-down")])],1)]}}],null,!0)},[t("span",[e._v("Analyze")])])]}}],null,!1,2074536822)}):e._e(),t("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(i){return e.showOrdering()}}},[e._v(" Close charset priorities ")])],1)],1)],1)],1)},v=[];let d=0,x=0;const g={data:function(){return{patternInvalid:!1,orderingVisible:!1,loading:!1,useHex:!1,awaitingResponse:!1,pattern:"",minLower:0,minUpper:0,maxLower:0,maxUpper:0,minDigits:0,maxDigits:0,minSpecial:0,maxSpecial:0,maxLength:0,minLength:0,minLowerHex:0,minUpperHex:0,maxLowerHex:0,maxUpperHex:0,timeHours:0,timeMins:0,speed:1e5,minOcc:1,mincharset1:0,maxcharset1:0,mincharset2:0,maxcharset2:0,mincharset3:0,maxcharset3:0,mincharset4:0,maxcharset4:0,sortingMode:"Optimal",charset1:"",charset2:"",charset3:"",charset4:"",incPatterns:[],excPatterns:[],headers:[{text:"Name",align:"start",value:"name"},{text:"Keyspace",value:"keyspace",align:"end"},{text:"Time",value:"time",align:"end"},{text:"Analyze",value:"analyze",align:"end",sortable:!1}],charsetOrderHeaders:[{text:"Order",align:"start",value:"order",sortable:!1},{text:"Name",value:"name",align:"end",sortable:!1},{text:"Placeholder",value:"placeholder",align:"end",sortable:!1},{text:"Move",value:"move",align:"end",sortable:!1}],charsetOrderList:[{order:1,name:"Custom character set 1",placeholder:"?1"},{order:2,name:"Custom character set 2",placeholder:"?2"},{order:3,name:"Custom character set 3",placeholder:"?3"},{order:4,name:"Custom character set 4",placeholder:"?4"},{order:5,name:"Lowercase letters",placeholder:"?l"},{order:6,name:"Uppercase letters",placeholder:"?u"},{order:7,name:"Digits",placeholder:"?d"},{order:8,name:"Special characters",placeholder:"?s"},{order:9,name:"Lowercase hexadecimal",placeholder:"?h"},{order:10,name:"Uppercase hexadecimal",placeholder:"?H"}],dictionaries:[],selectedDictionaries:[],filename:""}},mounted:function(){this.loadDictionaries()},name:"MaskGenerator",components:{"fc-tile":u},computed:{showItemState(){return this.awaitingResponse?"Generating...  ":"Generate masks"}},methods:{fmt:m,updatePattern:function(e){this.pattern==null&&(this.pattern=""),this.pattern+=e},showOrdering:function(){this.orderingVisible=!this.orderingVisible},includePattern:function(){this.pattern==""||this.pattern==null?this.patternInvalid=!0:(this.incPatterns.push({id:d++,text:this.pattern}),this.pattern="",this.patternInvalid=!1)},excludePattern:function(){this.pattern==""||this.pattern==null?this.patternInvalid=!0:(this.excPatterns.push({id:x++,text:this.pattern}),this.pattern="",this.patternInvalid=!1)},removeIncPattern:function(e){this.incPatterns=this.incPatterns.filter(a=>a!==e)},removeExcPattern:function(e){this.excPatterns=this.excPatterns.filter(a=>a!==e)},moveCharsetUp:function(e){let a=this.charsetOrderList.find(t=>t.name==e);if(a.order!=1){let t=this.charsetOrderList.find(i=>i.order==a.order-1);a.order=a.order-1,t.order=t.order+1}},moveCharsetDown:function(e){let a=this.charsetOrderList.find(t=>t.name==e);if(a.order!=10){let t=this.charsetOrderList.find(i=>i.order==a.order+1);a.order=a.order+1,t.order=t.order-1}},addDictionary:function(e){this.selectedDictionaries.includes(e)?this.selectedDictionaries.splice(this.selectedDictionaries.indexOf(e),1):this.selectedDictionaries.push(e)},loadDictionaries:function(){this.loading=!0,this.axios.get(this.$serverAddr+"/dictionary",{}).then(e=>{this.dictionaries=e.data,this.loading=!1})},checkMinInc:function(){this.minLower>this.maxLower&&(this.maxLower=this.minLower),this.minUpper>this.maxUpper&&(this.maxUpper=this.minUpper),this.minSpecial>this.maxSpecial&&(this.maxSpecial=this.minSpecial),this.minDigits>this.maxDigits&&(this.maxDigits=this.minDigits),this.minLength>this.maxLength&&(this.maxLength=this.minLength),this.minLowerHex>this.maxLowerHex&&(this.maxLowerHex=this.minLowerHex),this.minUpperHex>this.maxUpperHex&&(this.maxUpperHex=this.minUpperHex)},checkMaxDec:function(){this.minLower>this.maxLower&&(this.minLower=this.maxLower),this.minUpper>this.maxUpper&&(this.minUpper=this.maxUpper),this.minSpecial>this.maxSpecial&&(this.minSpecial=this.maxSpecial),this.minDigits>this.maxDigits&&(this.minDigits=this.maxDigits),this.minLength>this.maxLength&&(this.minLength=this.maxLength),this.minLowerHex>this.maxLowerHex&&(this.minLowerHex=this.maxLowerHex),this.minUpperHex>this.maxUpperHex&&(this.minUpperHex=this.maxUpperHex)},checkCustomInc:function(){this.mincharset1>this.maxcharset1&&(this.maxcharset1=this.mincharset1),this.mincharset2>this.maxcharset2&&(this.maxcharset2=this.mincharset2),this.mincharset3>this.maxcharset3&&(this.maxcharset3=this.mincharset3),this.mincharset4>this.maxcharset4&&(this.maxcharset4=this.mincharset4)},checkCustomDec:function(){this.mincharset1>this.maxcharset1&&(this.mincharset1=this.maxcharset1),this.mincharset2>this.maxcharset2&&(this.mincharset2=this.maxcharset2),this.mincharset3>this.maxcharset3&&(this.mincharset3=this.maxcharset3),this.mincharset4>this.maxcharset4&&(this.mincharset4=this.maxcharset4)},generateMasks:function(){var e=[];this.excPatterns.forEach(function(t){e.push(t.text)});var a=[];this.incPatterns.forEach(function(t){a.push(t.text)}),this.awaitingResponse=!0,this.axios.post(this.$serverAddr+"/maskGenerator",{minlength:this.minLength,maxlength:this.maxLength,minlower:this.minLower,minupper:this.minUpper,maxlower:this.maxLower,maxupper:this.maxUpper,mindigit:this.minDigits,maxdigit:this.maxDigits,minspecial:this.minSpecial,maxspecial:this.maxSpecial,minlowerhex:this.minLowerHex,maxlowerhex:this.maxLowerHex,minupperhex:this.minUpperHex,maxupperhex:this.maxUpperHex,mincharset1:this.mincharset1,maxcharset1:this.maxcharset1,mincharset2:this.mincharset2,maxcharset2:this.maxcharset2,mincharset3:this.mincharset3,maxcharset3:this.maxcharset3,mincharset4:this.mincharset4,maxcharset4:this.maxcharset4,time:this.timeHours*3600+this.timeMins*60,speed:this.speed,minocc:this.minOcc,sortingMode:this.sortingMode,charset1:this.charset1,charset2:this.charset2,charset3:this.charset3,charset4:this.charset4,patinc:a,patexc:e,wordlists:this.selectedDictionaries,filename:this.filename,charsetOrderList:this.charsetOrderList,useHex:this.useHex}).then(t=>{console.log(t),this.awaitingResponse=!1}).catch(t=>{console.log(t),this.awaitingResponse=!1})}}},l={};var f=h(g,p,v,!1,b,"27491aa6",null,null);function b(e){for(let a in l)this[a]=l[a]}var L=function(){return f.exports}();export{L as default};