(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a91263b4"],{"25a7":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-sheet",{attrs:{color:"rgba(0,0,0,0.7)",rounded:""}},[e("v-row",{staticClass:"white--text"},[e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e("span",{staticClass:"white--text text-md-h3 text-h4"},[t._v("Justificar Falta")])])],1),t.No_FJ<3?e("v-row",[e("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"3"}},[e("span",{staticClass:"white--text text-md-h5 text-h6"},[t._v("Justificar por: ")])]),e("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",md:"3"}},[e("v-radio-group",{attrs:{mandatory:"",dark:""},model:{value:t.radios,callback:function(a){t.radios=a},expression:"radios"}},[e("v-radio",{attrs:{label:"Falta De Horas",value:"1"}}),e("v-radio",{attrs:{label:"Omiti Salida",value:"2"}})],1)],1),(t.radios,t._e()),t._e()],1):t._e(),2==t.radios2&&1==t.radios&&t.dias.length&&t.No_FJ<3?e("v-row",[e("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"3"}},[e("span",{staticClass:"white--text text-md-h5 text-h6"},[t._v("Seleccione Una Fecha:")])]),e("v-col",{staticClass:"text-center text-capitalize",attrs:{cols:"12",md:"5"}},[e("v-date-picker",{staticClass:"text-capitalize",attrs:{dark:"","allowed-dates":t.allowedDates2,max:t.max,min:t.min},model:{value:t.fecha,callback:function(a){t.fecha=a},expression:"fecha"}})],1),e("v-col",{attrs:{cols:"12",md:"4"}},[e("v-select",{attrs:{items:t.Nombres_Incidencias,label:"Motivo",dark:""},model:{value:t.valor,callback:function(a){t.valor=a},expression:"valor"}})],1),t.valor&&t.fecha?e("v-col",{attrs:{cols:"12",md:"5"}},[e("v-btn",{attrs:{small:"",block:"",dark:""},on:{click:function(a){return t.Justificar_Falta()}}},[t._v("Confirmar")])],1):t._e()],1):t._e(),2==t.radios&&t.dias2.length&&t.No_FJ<3?e("v-row",[e("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"3"}},[e("span",{staticClass:"white--text text-md-h5 text-h6"},[t._v("Seleccione Una Fecha:")])]),e("v-col",{staticClass:"text-center text-capitalize",attrs:{cols:"12",md:"5"}},[e("v-date-picker",{staticClass:"text-capitalize",attrs:{dark:"","allowed-dates":t.allowedDates3,max:t.max,min:t.min},model:{value:t.fecha,callback:function(a){t.fecha=a},expression:"fecha"}})],1),t.fecha?e("v-col",{attrs:{cols:"12",md:"5"}},[e("v-btn",{attrs:{small:"",block:"",dark:""},on:{click:function(a){return t.Justificar_Omision()}}},[t._v("Confirmar")])],1):t._e()],1):t._e(),0==t.dias2.length&&t.No_FJ<3?e("v-row",[e("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"3"}},[e("span",{staticClass:"white--text text-md-h5 text-h6"},[t._v("No Hay Datos Para Mostrar")])])],1):t._e(),t.No_FJ>=3?e("v-row",[e("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"3"}},[e("span",{staticClass:"white--text text-md-h5 text-h6"},[t._v("Ya no puedes justificar más")])])],1):t._e()],1)],1)},o=[],r=e("1da1"),n=e("5530"),s=(e("96cf"),e("caad"),e("2532"),e("e9c4"),e("d3b7"),e("159b"),e("7db0"),e("2f62")),c=e("bc3a"),l=e.n(c),d={computed:Object(n["a"])({},Object(s["c"])(["ip"])),mounted:function(){this.allowedDates(),this.Cargar_Motivos(),this.No_FALTAS_Justificadas()},data:function(){return{radios:null,radios2:null,fecha:"",min:null,max:null,dias:[],Faltas_Dias:[],picker:null,Faltas_Omision:[],dias2:[],Incidencias:[],Nombres_Incidencias:[],valor:"",No_FJ:0}},methods:Object(n["a"])(Object(n["a"])({},Object(s["b"])(["Modificar_cargar","Checar_Token","Salir","Modificar_Informacion","Modificar_Espera","Modificar_Correcto","Modificar_Datos","Modificar_Boton","Modificar_ruta"])),{},{allowedDates:function(){var t=new Date,a=new Date(t);this.max=t.toISOString().substring(0,10),t.getDate()<=15?a.setDate(1):a.setDate(16),this.min=a.toISOString().substring(0,10),this.Cargar_Datos()},allowedDates2:function(t){return this.dias.includes(t)},allowedDates3:function(t){return this.dias2.includes(t)},No_FALTAS_Justificadas:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.Docentes=[],t.id_Docentes=[],t.Modificar_cargar(!0),t.Modificar_Informacion("Cargando Faltas"),t.Modificar_Espera(!0),a.prev=5,e=JSON.stringify({token:localStorage.getItem("Token"),fechaI:t.min,fechaF:t.max}),a.next=9,l.a.post("http://"+t.ip+"/api/docente/No_FJ",e,{headers:{"Content-Type":"application/json"}});case 9:i=a.sent,t.error||i.data.Error?i.data.Error&&(t.Modificar_Espera(!1),t.Modificar_Correcto(!1),t.Modificar_Datos(i.data.status),t.Modificar_Boton(!0)):(t.No_FJ=i.data.Datos,t.Modificar_Espera(!1),t.Modificar_Correcto(!0),t.Modificar_cargar(!1)),a.next=19;break;case 13:a.prev=13,a.t0=a["catch"](5),t.Modificar_Espera(!1),t.Modificar_Correcto(!1),t.Modificar_Boton(!0),console.log(a.t0);case 19:case"end":return a.stop()}}),a,null,[[5,13]])})))()},Cargar_Datos:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,i,o,r,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.fecha="",t.valor="",t.Modificar_cargar(!0),t.Modificar_Informacion("Cargando Registro"),t.Modificar_Espera(!0),e=JSON.stringify({token:localStorage.getItem("Token"),id:t.no_trabajador,fechaI:t.min,fechaF:t.max}),a.prev=6,a.next=9,l.a.post("http://"+t.ip+"/api/docente/Falta-Rango",e,{headers:{"Content-Type":"application/json"}});case 9:i=a.sent,t.error||i.data.Error?i.data.Error&&(t.Modificar_Espera(!1),t.Modificar_Correcto(!1),t.Modificar_Datos("Sin Registros"),t.Modificar_Boton(!0)):(t.Modificar_Espera(!1),t.Modificar_Correcto(!0),t.Modificar_Informacion("Cargando Faltas"),o=[],r=[],n=[],s=[],i.data.Datos.forEach((function(t){1==t.No_MotivoF?(n.push({id:t.No_Falta,Nombre:t.Nombre,ApellidoP:t.ApellidoP,Fecha:t.Fecha.substring(0,10),No_Empleado:t.No_Empleado}),s.push(t.Fecha.substring(0,10))):(o.push({id:t.No_Falta,Nombre:t.Nombre,ApellidoP:t.ApellidoP,Fecha:t.Fecha.substring(0,10),No_Empleado:t.No_Empleado}),r.push(t.Fecha.substring(0,10)))})),t.dias=r,t.Faltas_Dias=o,t.Faltas_Omision=n,t.dias2=s,t.Modificar_Boton(!0)),a.next=19;break;case 13:a.prev=13,a.t0=a["catch"](6),t.Modificar_Espera(!1),t.Modificar_Correcto(!1),t.Modificar_Boton(!0),console.log(a.t0);case 19:case"end":return a.stop()}}),a,null,[[6,13]])})))()},Cargar_Motivos:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.Modificar_cargar(!0),t.Modificar_Informacion("Cargando Motivos"),t.Modificar_Espera(!0),t.Nombres_Incidencias=[],t.Incidencias=[],e=JSON.stringify({token:localStorage.getItem("Token")}),a.prev=6,a.next=9,l.a.post("http://"+t.ip+"/api/motivo/all",e,{headers:{"Content-Type":"application/json"}});case 9:i=a.sent,t.error||i.data.Error?i.data.Error&&(t.Modificar_Espera(!1),t.Modificar_Correcto(!1),t.Modificar_Datos("Sin Registros"),t.Modificar_Boton(!0)):(t.Modificar_Espera(!1),t.Modificar_Correcto(!0),t.Modificar_Informacion("Cargando Datos"),i.data.Datos.forEach((function(a){t.Nombres_Incidencias.push(a.Descripcion),t.Incidencias.push(a)})),t.Modificar_Boton(!0)),a.next=19;break;case 13:a.prev=13,a.t0=a["catch"](6),t.Modificar_Espera(!1),t.Modificar_Correcto(!1),t.Modificar_Boton(!0),console.log(a.t0);case 19:case"end":return a.stop()}}),a,null,[[6,13]])})))()},Justificar_Omision:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.Modificar_cargar(!0),t.Modificar_Informacion("Justificando"),t.Modificar_Espera(!0),e={},t.Faltas_Omision.forEach((function(a){a.Fecha==t.fecha&&(e={No_Falta:a.id})})),i=JSON.stringify({token:localStorage.getItem("Token"),No_Falta:e.No_Falta,FechaS:(new Date).toISOString().substring(0,10),No_Motivo:-1}),a.prev=6,a.next=9,l.a.post("http://"+t.ip+"/api/justificante/",i,{headers:{"Content-Type":"application/json"}});case 9:o=a.sent,t.error||o.data.Error?o.data.Error&&(t.Modificar_Espera(!1),t.Modificar_Correcto(!1),t.Modificar_Datos(o.data),t.Modificar_Boton(!0)):(t.Modificar_Espera(!1),t.Modificar_Correcto(!0),t.Modificar_Informacion("Justificado"),t.Modificar_Boton(!0),t.Cargar_Datos()),a.next=19;break;case 13:a.prev=13,a.t0=a["catch"](6),t.Modificar_Espera(!1),t.Modificar_Correcto(!1),t.Modificar_Boton(!0),console.log(a.t0);case 19:case"end":return a.stop()}}),a,null,[[6,13]])})))()},Justificar_Falta:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,i,o,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.Modificar_cargar(!0),t.Modificar_Informacion("Justificando"),t.Modificar_Espera(!0),e={},t.Faltas_Dias.forEach((function(a){a.Fecha==t.fecha&&(e={No_Falta:a.id})})),i=t.Incidencias.find((function(a){return a.Descripcion==t.valor})),o=JSON.stringify({token:localStorage.getItem("Token"),No_Falta:e.No_Falta,FechaS:(new Date).toISOString().substring(0,10),No_Motivo:i.No_Motivo}),a.prev=7,a.next=10,l.a.post("http://"+t.ip+"/api/justificante/",o,{headers:{"Content-Type":"application/json"}});case 10:r=a.sent,t.error||r.data.Error?r.data.Error&&(t.Modificar_Espera(!1),t.Modificar_Correcto(!1),t.Modificar_Datos(r.data),t.Modificar_Boton(!0)):(t.Modificar_Espera(!1),t.Modificar_Correcto(!0),t.Modificar_Informacion("Justificado"),t.Modificar_Boton(!0),t.Cargar_Datos()),a.next=20;break;case 14:a.prev=14,a.t0=a["catch"](7),t.Modificar_Espera(!1),t.Modificar_Correcto(!1),t.Modificar_Boton(!0),console.log(a.t0);case 20:case"end":return a.stop()}}),a,null,[[7,14]])})))()}})},u=d,h=e("2877"),p=e("6544"),f=e.n(p),m=e("8336"),v=e("62ad"),_=e("a523"),g=e("2e4b"),b=e("15fd"),M=(e("b0c0"),e("2c64"),e("ba87")),C=e("9d26"),x=e("c37a"),w=e("7e2b"),S=e("a9ad"),k=e("4e82"),F=e("5311"),D=e("7560"),I=e("fe09"),E=e("80d2"),N=e("58df"),O=e("d9f7"),y=["title"],j=Object(N["a"])(w["a"],S["a"],F["a"],Object(k["a"])("radioGroup"),D["a"]),V=j.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return I["a"].options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return x["a"].options.computed.computedId.call(this)},hasLabel:x["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return I["a"].options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return I["a"].options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(M["a"],{on:{click:I["b"]},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(E["t"])(this,"label")||this.label):null},genRadio:function(){var t=this.attrs$,a=(t.title,Object(b["a"])(t,y));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(C["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(n["a"])({name:this.computedName,value:this.value},a)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var a={staticClass:"v-radio",class:this.classes,on:Object(O["c"])({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return t("div",a,[this.genRadio(),this.genLabel()])}}),J=(e("a9e3"),e("ec29"),e("3d86"),e("604c")),B=e("8547"),R=Object(N["a"])(B["a"],J["a"],x["a"]),A=R.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},x["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},x["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=x["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=x["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:J["a"].options.methods.onClick},render:function(t){var a=x["a"].options.render.call(this,t);return this._b(a.data,"div",this.attrs$),a}}),$=e("0fd9"),T=e("b974"),G=e("8dd9"),L=Object(h["a"])(u,i,o,!1,null,null,null);a["default"]=L.exports;f()(L,{VBtn:m["a"],VCol:v["a"],VContainer:_["a"],VDatePicker:g["a"],VRadio:V,VRadioGroup:A,VRow:$["a"],VSelect:T["a"],VSheet:G["a"]})},"2c64":function(t,a,e){},"3d86":function(t,a,e){},5311:function(t,a,e){"use strict";var i=e("5607"),o=e("2b0e");a["a"]=o["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},afdd:function(t,a,e){"use strict";var i=e("8336");a["a"]=i["a"]},ec29:function(t,a,e){},fe09:function(t,a,e){"use strict";e.d(a,"b",(function(){return s}));e("d3b7"),e("25f0"),e("4de4");var i=e("c37a"),o=e("5311"),r=e("8547"),n=e("58df");function s(t){t.preventDefault()}a["a"]=Object(n["a"])(i["a"],o["a"],r["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,a=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((function(e){return t.valueComparator(e,a)})):void 0===this.trueValue||void 0===this.falseValue?a?this.valueComparator(a,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=i["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:s},t):t},genInput:function(t,a){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},a),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:s},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var a=this.value,e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);var i=e.length;e=e.filter((function(e){return!t.valueComparator(e,a)})),e.length===i&&e.push(a)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:a?this.valueComparator(e,a)?null:a:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-a91263b4.078c5abe.js.map