"use strict";(self["webpackChunkhieu_ttn"]=self["webpackChunkhieu_ttn"]||[]).push([[389],{815:function(t,e,i){i.d(e,{A:function(){return v}});var s=i(6375),n=i(5372),r=n.A,a=i(6291),l=i(9316),o=i(6139),u=i(291),d=i(4906),c=i(4497),h=i(3651),f=i(7726),g=i(432);const p=(0,h.A)(s.A,d.A,u.A,c.A,(0,a.P)("btnToggle"),(0,l.P)("inputValue"));var v=p.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...d.A.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return o.A.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!==(t=this.ripple)&&void 0!==t?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,f.q4)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},(0,g.$c)(this))},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},(0,g.$c)(this,"loader")||[this.$createElement(r,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:i,data:s}=this.generateRouteLink(),n=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===i&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(i,this.disabled?s:n(this.color,s),e)}})},8518:function(t,e,i){i(3766);var s=i(2893),n=i(2001),r=i(432);const a=["sm","md","lg","xl"],l=(()=>a.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),o=(()=>a.reduce(((t,e)=>(t["offset"+(0,r.Zb)(e)]={type:[String,Number],default:null},t)),{}))(),u=(()=>a.reduce(((t,e)=>(t["order"+(0,r.Zb)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(l),offset:Object.keys(o),order:Object.keys(u)};function c(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(s+=`-${i}`,s.toLowerCase()):s.toLowerCase()}}const h=new Map;e.A=s["default"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:r}){let a="";for(const n in e)a+=String(e[n]);let l=h.get(a);if(!l){let t;for(t in l=[],d)d[t].forEach((i=>{const s=e[i],n=c(t,i,s);n&&l.push(n)}));const i=l.some((t=>t.startsWith("col-")));l.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),h.set(a,l)}return t(e.tag,(0,n.Ay)(i,{class:l}),s)}})},9978:function(t,e,i){i.d(e,{A:function(){return a}});i(5941),i(3766);var s=i(2893);function n(t){return s["default"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:s,children:n}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:r}=s;if(r){s.attrs={};const t=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(s.staticClass+=` ${t.join(" ")}`)}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),e(i.tag,s,n)}})}var r=i(2001),a=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:s}){let n;const{attrs:a}=i;return a&&(i.attrs={},n=Object.keys(a).filter((t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,(0,r.Ay)(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),s)}})},5324:function(t,e,i){i(3766);var s=i(2893),n=i(2001),r=i(432);const a=["sm","md","lg","xl"],l=["start","end","center"];function o(t,e){return a.reduce(((i,s)=>(i[t+(0,r.Zb)(s)]=e(),i)),{})}const u=t=>[...l,"baseline","stretch"].includes(t),d=o("align",(()=>({type:String,default:null,validator:u}))),c=t=>[...l,"space-between","space-around"].includes(t),h=o("justify",(()=>({type:String,default:null,validator:c}))),f=t=>[...l,"space-between","space-around","stretch"].includes(t),g=o("alignContent",(()=>({type:String,default:null,validator:f}))),p={align:Object.keys(d),justify:Object.keys(h),alignContent:Object.keys(g)},v={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,i){let s=v[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const m=new Map;e.A=s["default"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...d,justify:{type:String,default:null,validator:c},...h,alignContent:{type:String,default:null,validator:f},...g},render(t,{props:e,data:i,children:s}){let r="";for(const n in e)r+=String(e[n]);let a=m.get(r);if(!a){let t;for(t in a=[],p)p[t].forEach((i=>{const s=e[i],n=b(t,i,s);n&&a.push(n)}));a.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),m.set(r,a)}return t(e.tag,(0,n.Ay)(i,{staticClass:"row",class:a}),s)}})},5372:function(t,e,i){i.d(e,{A:function(){return a}});var s=i(6709),n=i(9151),r=i(432),a=n.A.extend({name:"v-progress-circular",directives:{intersect:s.A},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,r.Dg)(this.calculatedSize),width:(0,r.Dg)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},(0,r.$c)(this))},onObserve(t,e,i){this.isVisible=i}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},6291:function(t,e,i){i.d(e,{P:function(){return n}});var s=i(7324);function n(t,e,i){return(0,s.W)(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(t){this.disabled&&t?t.preventDefault():this.$emit("change")}}})}n("itemGroup")},7324:function(t,e,i){i.d(e,{G:function(){return l},W:function(){return a}});var s=i(2893),n=i(7726);function r(t,e){return()=>(0,n.OP)(`The ${t} component must be used inside a ${e}`)}function a(t,e,i){const n=e&&i?{register:r(e,i),unregister:r(e,i)}:null;return s["default"].extend({name:"registrable-inject",inject:{[t]:{default:n}}})}function l(t,e=!1){return s["default"].extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},4497:function(t,e,i){var s=i(2893);e.A=s["default"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},9316:function(t,e,i){i.d(e,{P:function(){return n}});var s=i(2893);function n(t="value",e="input"){return s["default"].extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(i){!!i!==this[t]&&this.$emit(e,i)}}})}const r=n();e.A=r},8870:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var s=i(815),n=i(8518),r=i(9978),a=i(5324),l=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(r.A,{staticClass:"text-center",attrs:{"fill-height":""}},[e(a.A,{attrs:{align:"center"}},[e(n.A,[e("h1",{staticClass:"display-2 primary--text"},[t._v("Whoops, 404")]),e("p",[t._v("The page you were looking for does not exist")]),e(s.A,{attrs:{color:"primary",outlined:""}},[t._v(" Get me out of here! ")])],1)],1)],1)},o=[],u=i(1635),d=i(9603);let c=class extends d.lD{};c=(0,u.Cg)([(0,d.uA)({name:"NotFoundPage"})],c);var h=c,f=h,g=i(845),p=(0,g.A)(f,l,o,!1,null,null,null),v=p.exports},3766:function(){},5941:function(){}}]);
//# sourceMappingURL=404-vue.c28e3871.js.map