import{f as c}from"./numberFormat.773889d3.js";import"./index.09a07ba8.js";import{t as m}from"./fc_tile.1c1565e6.js";import{R as u}from"./resourceMonitor.59fb4385.js";import{n as d}from"./index.d80d9492.js";import"./index.a9d6c6c2.js";import"./timeseries.9158092b.js";import"./vendor.6aa46313.js";var v=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t.data!=null?e("v-breadcrumbs",{attrs:{items:[{text:"Hosts",to:{name:"hosts"},exact:!0},{text:t.data.domain_name}],divider:"/"}}):t._e(),e("v-container",[e("fc-tile",{staticClass:"mb-5",attrs:{title:"Info",loading:t.data==null}},[t.data!=null?e("v-list",[e("v-list-item",[e("v-list-item-icon",[e("v-icon",[t._v("mdi-desktop-classic")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" "+t._s(t.data.domain_name)+" ")]),e("v-list-item-subtitle",[t._v(" User: "+t._s(t.data.user.name)+" ")])],1)],1),e("v-list-item",[e("v-list-item-icon",[e("v-icon",[t._v(t._s(t.getOsIcon(t.data.os_name)))])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" "+t._s(t.data.os_name)+" ")])],1)],1),e("v-list-item",[e("v-list-item-icon",[e("v-icon",[t._v("mdi-memory")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" "+t._s(t.data.p_model)+" ")])],1)],1)],1):t._e()],1),e("fc-tile",{staticClass:"mb-5",attrs:{title:"Devices",loading:t.data===null}},[t.data!=null?e("v-list",t._l(t.data.devices,function(s){return e("v-list-item",{key:s.id},[e("v-list-item-icon",[s.device_info[0].temperature>100?e("v-icon",[t._v("mdi-fire")]):e("v-icon",[t._v(t._s(s.type==="GPU"?"mdi-expansion-card":"mdi-expansion-card-variant"))])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" "+t._s(s.name)+" ")]),t.$moment.utc(s.device_info[0].time).isBefore(t.$moment.utc().subtract(10,"minutes"))?e("v-list-item-subtitle",[t._v(" Inactive \u2013 no current data. ")]):e("v-list-item-subtitle",[t._v(" Hashrate: "+t._s(s.device_info[0].hashrate)+" H/s"),e("span",{directives:[{name:"show",rawName:"v-show",value:s.device_info[0].temperature>=0,expression:"device.device_info[0].temperature >= 0"}]},[t._v(", Temp: "+t._s(s.device_info[0].temperature)+" \xB0C, Util: "+t._s(s.device_info[0].utilization)+" %")])]),e("div",{staticClass:"device-charts"},[e("res-mon",{staticClass:"chart",attrs:{"usage-data":s.device_info.slice(0,30),metrics:["hashrate"],"unit-callback":function(i){return i+" H/s"}}}),e("res-mon",{directives:[{name:"show",rawName:"v-show",value:s.device_info[0].temperature>=0,expression:"device.device_info[0].temperature >= 0"}],staticClass:"chart",attrs:{"usage-data":s.device_info.slice(0,30),metrics:["utilization","temperature"],max:100,"right-scale":!0,"max-right":100}})],1)],1)],1)}),1):t._e()],1),e("fc-tile",{staticClass:"mb-5",attrs:{title:"Jobs",loading:t.data===null}},[t.data!==null?e("v-data-table",{attrs:{headers:t.jobHeaders,items:t.data.jobs,"footer-props":{itemsPerPageOptions:[10,25,50,100],itemsPerPageText:"Jobs per page"}},scopedSlots:t._u([{key:"item.name",fn:function(s){var i=s.item;return[e("router-link",{staticClass:"middle",attrs:{to:{name:"jobDetail",params:{id:i.id}}}},[t._v(" "+t._s(i.name)+" ")])]}},{key:"item.status",fn:function(s){var i=s.item;return[e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[e("span",t._g({class:i.status_type+"--text"},n),[t._v(" "+t._s(i.status_text)+" ")])]}}],null,!0)},[e("span",[t._v(t._s(i.status_tooltip))])])]}},{key:"item.progress",fn:function(s){var i=s.item;return[e("div",{staticClass:"d-flex align-center justify-end"},[e("span",{staticClass:"mr-2"},[t._v(t._s(t.progressToPercentage(i.progress)))]),e("v-progress-circular",{staticClass:"jobProgress",attrs:{size:"18",width:3,rotate:270,color:"primary",value:i.progress}})],1)]}},{key:"item.time",fn:function(s){var i=s.item;return[t._v(" "+t._s(t.$moment.utc(i.time).local().format("D.M.YYYY H:mm:ss"))+" ")]}},{key:"item.actions",fn:function(s){var i=s.item;return[e("div",{staticClass:"d-flex justify-end actionsBtns"},[e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[e("v-btn",t._g({staticClass:"mx-0",attrs:{icon:"",disabled:i.status!=="0"},on:{click:function(r){return t.operateJob(i.id,"start")}}},n),[e("v-icon",{attrs:{color:"success"}},[t._v(" mdi-play-circle ")])],1)]}}],null,!0)},[e("span",[t._v("Start job")])]),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[e("v-btn",t._g({staticClass:"mx-0",attrs:{icon:"",disabled:i.status!=="10"},on:{click:function(r){return t.operateJob(i.id,"stop")}}},n),[e("v-icon",{attrs:{color:"error"}},[t._v(" mdi-pause-circle ")])],1)]}}],null,!0)},[e("span",[t._v("Stop job")])]),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[e("v-btn",t._g({staticClass:"mx-0",attrs:{icon:"",disabled:i.status>=10},on:{click:function(r){return t.operateJob(i.id,"restart")}}},n),[e("v-icon",{attrs:{color:"info"}},[t._v(" mdi-restart ")])],1)]}}],null,!0)},[e("span",[t._v("Restart job")])])],1)]}}],null,!1,4220099537)}):t._e()],1)],1)],1)},_=[];const p={name:"HostDetailView",components:{"fc-tile":m,"res-mon":u},data:function(){return{data:null,jobHeaders:[{text:"Name",align:"start",value:"name"},{text:"Attack type",value:"attack",align:"end"},{text:"Status",value:"status",align:"end"},{text:"Progress",value:"progress",align:"end"},{text:"Added",value:"time",align:"end"},{text:"Actions",value:"actions",sortable:!1,align:"end"}],jobs_statuses:[{text:"ready",code:0},{text:"finished",code:1},{text:"exhausted",code:2},{text:"malformed",code:3},{text:"timeout",code:4},{text:"running",code:10},{text:"finishing",code:12}]}},mounted:function(){this.loadData()},methods:{fmt:c,loadData:function(){this.axios.get(this.$serverAddr+"/hosts/"+this.$route.params.id).then(t=>{this.data=t.data})},getOsIcon(t){return/(windows|microsoft)/ig.test(t)?"mdi-windows":/(linux)/ig.test(t)?"mdi-linux":/(apple|mac)/ig.test(t)?"mdi-apple":"mdi-application"},progressToPercentage:function(t){return t.toFixed()+"%"},operateJob:function(t,o){this.axios.get(this.$serverAddr+"/job/"+t+"/action",{params:{operation:o}}).then(e=>{console.log(e.data),this.loadJobs()})}}},l={};var f=d(p,v,_,!1,g,"0290b4f7",null,null);function g(t){for(let o in l)this[o]=l[o]}var $=function(){return f.exports}();export{$ as default};