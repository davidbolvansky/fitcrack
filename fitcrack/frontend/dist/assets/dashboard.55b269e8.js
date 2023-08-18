import{n as i}from"./index.f593e833.js";import{j as r,a as _}from"./iconMaps.0c6dd037.js";import{w as n}from"./jobWorkunits.89ec9546.js";import{D as m,m as p,c as h}from"./timeseries.9158092b.js";import{j as f}from"./jobProgress.3ec1aae8.js";import{D as b}from"./datetime.224b1831.js";import"./vendor.6aa46313.js";var C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"host-grid"},[t._l(t.active,function(a){return s("v-sheet",{key:"ha"+a,staticClass:"host-icon host-online rounded-xl",attrs:{rounded:"",color:"success"}})}),t._l(t.inactive,function(a){return s("v-sheet",{key:"hi"+a,staticClass:"host-icon host-offline rounded-xl",attrs:{rounded:""}})})],2)},g=[];const x={props:{active:{type:Number,default:0},inactive:{type:Number,default:0}}},o={};var y=i(x,C,g,!1,j,"78bf414a",null,null);function j(t){for(let e in o)this[e]=o[e]}var $=function(){return y.exports}(),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard-status"},[s("div",{staticClass:"py-4 px-8 top-panel d-flex justify-space-between align-center"},[s("div",[s("h1",[t._v("Hello, "+t._s(t.$store.state.user.userData.username)+"!")]),s("h2",[t._v(" There "+t._s(t.pluralJobs?"are":"is")+" currently "+t._s(t.activeJobs)+" active job"+t._s(t.pluralJobs?"s":"")+" with "+t._s(t.hosts.activeHosts)+" host"+t._s(t.pluralHosts?"s":"")+" connected. ")])]),s("div",{staticClass:"shortcuts"},[s("v-btn",{staticClass:"mr-2",attrs:{large:"",text:"",to:{name:"hashes"}}},[s("v-icon",{attrs:{left:""}},[t._v(" mdi-book-lock ")]),s("span",[t._v("Hashes")])],1),s("v-btn",{attrs:{large:"",color:"primary",elevation:"0",to:{name:"addJob"}}},[s("v-icon",{attrs:{left:""}},[t._v(" mdi-briefcase-plus ")]),s("span",[t._v("New job")])],1)],1)]),s("v-divider"),s("div",{staticClass:"d-flex flex-wrap"},[s("div",{staticClass:"status-tile jobs"},[s("v-card-title",{staticClass:"py-0"},[t._v(" Jobs ")]),s("div",{staticClass:"jobs-wrapper"},t._l(t.jobs,function(a){return s("div",{key:a.status,staticClass:"job-tile"},[s("v-icon",{attrs:{left:"",color:t.jobColor(a.status)}},[t._v(" "+t._s(t.jobIcon(a.status))+" ")]),s("span",[s("strong",[t._v(t._s(a.count))]),t._v(" "+t._s(a.status))])],1)}),0)],1),s("div",{staticClass:"status-tile hosts"},[s("v-card-title",{staticClass:"py-0"},[t._v(" Hosts ")]),s("div",{staticClass:"host-summary mx-4"},[s("span",{staticClass:"mono"},[t._v(t._s(t.hosts.activeHosts))]),t._v(" of "),s("span",{staticClass:"mono"},[t._v(t._s(t.hosts.totalHosts))]),t._v(" online ")]),s("host-grid",{staticClass:"ma-3",attrs:{active:t.hosts.activeHosts,inactive:t.hosts.inactiveHosts}})],1),s("div",{staticClass:"status-tile server"},[s("v-card-title",{staticClass:"py-0 d-flex justify-space-between"},[t._v(" Server "),s("v-btn",{attrs:{"x-small":"",color:"info",elevation:"0",to:{name:"server"}}},[s("v-icon",{attrs:{small:"",left:""}},[t._v(" mdi-chart-multiline ")]),s("span",[t._v("Monitor")])],1)],1),s("div",{staticClass:"server-wrapper"},[t._t("default")],2)],1)])],1)},k=[];const I={components:{hostGrid:$},props:{jobs:{type:Array,default:()=>[]},hosts:{type:Object,default:()=>{}},server:{type:Array,default:()=>[]}},computed:{activeJobs(){return this.jobs.filter(t=>t.status==="running"||t.status==="finishing").reduce((t,e)=>t+=e.count,0)},pluralJobs(){return this.activeJobs!==1},pluralHosts(){return this.hosts.activeHosts!==1}},methods:{jobIcon:r,jobColor(t){return{ready:"info",finished:"success",exhausted:"error",malformed:"error",finishing:"info"}[t]}}},l={};var S=i(I,w,k,!1,J,"5bd53039",null,null);function J(t){for(let e in l)this[e]=l[e]}var N=function(){return S.exports}(),D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{class:["minijob rounded-lg",{detailed:t.detailed}]},[s("div",{staticClass:"minijob-main"},[s("v-sheet",{staticClass:"ma-2 overflow-hidden minijob-sheet",attrs:{color:t.data.status_type,dark:"",rounded:""}},[s("router-link",{staticClass:"transparent-link",attrs:{to:{name:"jobDetail",params:{id:t.data.id}}}},[s("v-card-title",{staticClass:"mj-title pb-0"},[t._v(" "+t._s(t.data.name)+" ")])],1),s("div",{staticClass:"mj-progress px-4"},[t._v(" "+t._s(t.data.progress)),s("span",[t._v(" %")])]),s("v-progress-linear",{attrs:{value:t.data.status_text==="finishing"?0:t.data.progress,color:"white",indeterminate:t.data.status_text==="finishing"}})],1),s("v-list",{staticClass:"minijob-list",attrs:{dense:""}},[s("v-list-item",[s("v-list-item-action",[s("v-icon",[t._v(t._s(t.jobIcon(t.data.status_text)))])],1),s("v-list-item-content",{staticClass:"text-capitalize"},[s("v-list-item-subtitle",{staticClass:"overline"},[t._v(" Status ")]),s("v-list-item-title",[t._v(" "+t._s(t.data.status_text)+" ")])],1)],1),s("v-list-item",[s("v-list-item-action",[s("v-icon",[t._v(t._s(t.attackIcon(t.data.attack)))])],1),s("v-list-item-content",{staticClass:"text-capitalize"},[s("v-list-item-subtitle",{staticClass:"overline"},[t._v(" Type ")]),s("v-list-item-title",[t._v(" "+t._s(t.data.attack)+" attack ")])],1)],1),s("v-list-item",{directives:[{name:"show",rawName:"v-show",value:parseInt(t.data.status)>0,expression:"parseInt(data.status) > 0"}]},[s("v-list-item-action",[s("v-icon",[t._v("mdi-textbox-password")])],1),s("v-list-item-content",{staticClass:"text-capitalize"},[s("v-list-item-subtitle",{staticClass:"overline"},[t._v(" Cracked Hashes ")]),s("v-list-item-title",[t._v(" "+t._s(t.data.cracked_hashes_str)+" ")])],1)],1),s("v-list-item",{directives:[{name:"show",rawName:"v-show",value:parseInt(t.data.status)>=10,expression:"parseInt(data.status) >= 10"}]},[s("v-list-item-action",[s("v-icon",[t._v("mdi-bell-check-outline")])],1),s("v-list-item-content",{staticClass:"text-capitalize"},[s("v-list-item-subtitle",{staticClass:"overline"},[t._v(" ETA ")]),s("v-list-item-title",[t._v(" "+t._s(t.data.estimated_cracking_time_str)+" ")])],1)],1)],1)],1),t.detailed?s("v-divider",{staticClass:"ml-2",attrs:{vertical:""}}):t._e(),t.detailed?s("div",{staticClass:"minijob-detail"},[s("wu",{attrs:{id:t.data.id}})],1):t._e()],1)},H=[];const A={components:{wu:n},props:{detailed:Boolean,data:{type:Object,default:()=>{}}},methods:{jobIcon:r,attackIcon:_}},c={};var F=i(A,D,H,!1,M,"71f7af06",null,null);function M(t){for(let e in c)this[e]=c[e]}var z=function(){return F.exports}(),E={extends:m,mixins:[p.reactiveProp],props:{overrides:{type:Object,default:null}},computed:{options(){return h({maintainAspectRatio:!1,plugins:{tooltip:{enabled:!1}},hover:{mode:null},animation:{animateScale:!0},cutout:"65%",rotation:-135,circumference:270},this.overrides)}},mounted(){this.renderChart(this.chartData,this.options)}},G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gauge-container"},[s("div",{staticClass:"gauge-inner-wrapper"},[s("gauge",{staticClass:"gauge",style:{maxHeight:t.size+"px",maxWidth:t.size+"px"},attrs:{"chart-data":t.chartdata,overrides:t.options}}),s("div",{staticClass:"gauge-value"},[t._v(" "+t._s(t.valueFormat(t.value))+" ")])],1),s("div",{staticClass:"gauge-label"},[t._t("default")],2)])},P=[];const R={components:{Gauge:E},props:{min:{type:Number,default:0},max:{type:Number,default:100},value:{type:Number,default:50},color:{type:String,default:void 0},size:{type:[String,Number],default:128},valueFormat:{type:Function,default:t=>t}},data:()=>({options:{plugins:{legend:{display:!1}}}}),computed:{fillColor(){return this.color||this.$vuetify.theme.currentTheme.primary},chartdata(){const t=this.max-this.min,e=this.value,s=t-e;return{datasets:[{backgroundColor:[this.fillColor,"#9994"],borderWidth:0,data:[e,s]}]}}}},v={};var T=i(R,G,P,!1,U,"143f20ce",null,null);function U(t){for(let e in v)this[e]=v[e]}var O=function(){return T.exports}(),W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"server-gauges-container"},[s("gauge",{staticClass:"mr-8",attrs:{value:t.cpu,"value-format":function(a){return(a||"--")+"%"},color:t.gaugeColor(t.cpu)}},[s("div",{staticClass:"d-flex flex-column g-label-wrapper"},[s("v-icon",{staticClass:"mb-1"},[t._v(" mdi-memory ")]),s("span",{staticClass:"overline g-label-text"},[t._v("CPU")])],1)]),s("gauge",{staticClass:"mr-10",attrs:{value:t.ram,"value-format":function(a){return(a||"--")+"%"},color:t.gaugeColor(t.ram)}},[s("div",{staticClass:"d-flex flex-column g-label-wrapper"},[s("v-icon",{staticClass:"mb-1"},[t._v(" mdi-chip ")]),s("span",{staticClass:"overline g-label-text"},[t._v("Memory")])],1)]),s("div",{staticClass:"text-module disk-usage my-2 mr-10"},[s("div",{staticClass:"stat-label mb-1"},[s("v-icon",[t._v("mdi-harddisk")]),s("span",{staticClass:"overline g-label-text"},[t._v("Disk")])],1),s("div",{staticClass:"stat"},[s("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-arrow-top-right ")]),s("span",{staticClass:"overline"},[t._v("read")]),s("div",{staticClass:"stat-value"},[t._v(" "+t._s(t.hdd_read||"--")),s("span",{staticClass:"stat-unit"},[t._v(" kb/s")])])],1),s("div",{staticClass:"stat"},[s("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-arrow-bottom-left ")]),s("span",{staticClass:"overline"},[t._v("write")]),s("div",{staticClass:"stat-value"},[t._v(" "+t._s(t.hdd_write||"--")),s("span",{staticClass:"stat-unit"},[t._v(" kb/s")])])],1)]),s("div",{staticClass:"text-module net-usage my-2 mr-10"},[s("div",{staticClass:"stat-label mb-1"},[s("v-icon",[t._v("mdi-ethernet")]),s("span",{staticClass:"overline g-label-text"},[t._v("Network")])],1),s("div",{staticClass:"stat"},[s("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-arrow-bottom-left ")]),s("span",{staticClass:"overline"},[t._v("download")]),s("div",{staticClass:"stat-value"},[t._v(" "+t._s(t.net_recv||"--")),s("span",{staticClass:"stat-unit"},[t._v(" kb/s")])])],1),s("div",{staticClass:"stat"},[s("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-arrow-top-right ")]),s("span",{staticClass:"overline"},[t._v("upload")]),s("div",{staticClass:"stat-value"},[t._v(" "+t._s(t.net_sent||"--")),s("span",{staticClass:"stat-unit"},[t._v(" kb/s")])])],1)]),s("div",{staticClass:"text-module services my-2"},[s("div",{staticClass:"stat-label mb-1"},[s("v-icon",[t._v("mdi-toolbox-outline")]),s("span",{staticClass:"overline g-label-text"},[t._v("Services")])],1),t.failedServices.length>0?s("v-sheet",{staticClass:"highlighted-stat px-2 pb-1 mb-1",attrs:{rounded:"",color:"error",dark:""}},[s("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-heart-broken ")]),s("span",{staticClass:"overline"},[t._v("Down")]),s("ul",{staticClass:"font-weight-bold"},t._l(t.failedServices,function(a){return s("li",{key:a},[t._v(" "+t._s(a)+" ")])}),0)],1):t._e(),s("div",{staticClass:"stat"},[s("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-heart ")]),s("span",{staticClass:"overline"},[t._v("running")]),t.failedServices.length==0?s("div",{staticClass:"stat-value"},[t._v(" All good ")]):s("div",{staticClass:"stat-value"},[t._v(" "+t._s(t.runningServices.length||"--")),s("span",{staticClass:"stat-unit"},[t._v(" daemons OK")])])],1)],1)],1)},B=[];const K={components:{Gauge:O},props:{cpu:{type:Number,default:0},ram:{type:Number,default:0},hdd_read:{type:Number,default:0},hdd_write:{type:Number,default:0},net_recv:{type:Number,default:0},net_sent:{type:Number,default:0},services:{type:Array,default:()=>[]}},computed:{runningServices(){return this.services.filter(t=>t.status==="running").map(t=>t.name)},failedServices(){return this.services.filter(t=>t.status!=="running").map(t=>t.name)}},methods:{gaugeColor(t){const e=this.$vuetify.theme.currentTheme;return t<50?e.success:t<80?e.warning:e.error}}},d={};var L=i(K,W,B,!1,q,"32057e3e",null,null);function q(t){for(let e in d)this[e]=d[e]}var Q=function(){return L.exports}(),V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dash-container"},[s("v-sheet",{staticClass:"dash-row pa-0"},[t.hostsInfo?s("status",{attrs:{jobs:t.jobsInfo,hosts:t.hostsInfo,server:t.serverInfo}},[s("server-gauges",t._b({attrs:{services:t.serverInfo}},"server-gauges",t.actualUsage,!1))],1):t._e()],1),s("v-divider"),s("v-card-title",{staticClass:"px-8"},[t._v(" Last jobs ")]),t.lastJobs?s("div",{staticClass:"minijobs overflowing dash-row pt-0 pb-7 px-8"},[s("minijob",{attrs:{detailed:"",data:t.lastJobs[0]}}),t._l(t.lastJobs.slice(1),function(a){return s("minijob",{key:a.id,attrs:{data:a}})})],2):t._e()],1)},X=[];const Y={name:"Dashboard",components:{status:N,minijob:z,serverGauges:Q,jobProgress:f,jobWorkunits:n,dtPicker:b},data(){return{hostsInfo:null,jobsInfo:[],serverInfo:[],lastJobs:null,actualUsage:{cpu:0,ram:0,hdd_read:0,hdd_write:0,net_recv:0,net_sent:0}}},mounted(){this.loadData(),this.interval=setInterval(this.loadData,5e3)},beforeDestroy(){clearInterval(this.interval)},methods:{loadData(){this.axios.get(this.$serverAddr+"/job/lastJobs").then(t=>{this.lastJobs=t.data.items}),this.axios.get(this.$serverAddr+"/serverInfo/actualUsageData").then(t=>{this.actualUsage=t.data}),this.axios.get(this.$serverAddr+"/hosts/info").then(t=>{this.hostsInfo=t.data}),this.axios.get(this.$serverAddr+"/job/info").then(t=>{this.jobsInfo=t.data}),this.axios.get(this.$serverAddr+"/serverInfo/info").then(t=>{this.serverInfo=t.data.subsystems})}}},u={};var Z=i(Y,V,X,!1,tt,"2eb067fc",null,null);function tt(t){for(let e in u)this[e]=u[e]}var lt=function(){return Z.exports}();export{lt as default};