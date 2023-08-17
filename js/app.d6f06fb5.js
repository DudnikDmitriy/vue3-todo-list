(function(){"use strict";var t={1397:function(t,e,i){var n=i(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("ToDoHeader"),e("ToDoItems")],1)},s=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{attrs:{id:"to-do-items"}},[0===t.totalItems?e("p",[t._v("No items to display.")]):t._e(),t._l(t.items,(function(t){return e("ToDoItem",{key:t.id,attrs:{initialItem:t}})}))],2)])},l=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"to-do-item"},[e("div",{staticClass:"item-left"},[e("input",{attrs:{type:"checkbox"},domProps:{checked:t.item.completed},on:{change:t.changeCheck}})]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],staticClass:"item",class:{completed:t.item.completed},attrs:{disabled:!t.isEditing},domProps:{value:t.item.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateItem.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.item,"title",e.target.value)}}}),e("div",{staticClass:"item-right"},[e("i",{staticClass:"fas fa-edit green",on:{click:function(e){t.isEditing=!0}}}),e("i",{staticClass:"fas fa-trash red",on:{click:function(e){return t.deleteItem(t.item.id)}}})])])},m=[],d={name:"ToDoItems",props:{initialItem:{type:Object,required:!0}},data(){return{item:{...this.initialItem},isEditing:!1}},methods:{updateItem(){this.$store.commit("updateItem",{id:this.item.id,completed:this.item.completed,title:this.item.title}),this.isEditing=!1},deleteItem(t){this.$store.commit("deleteItem",{id:t})},changeCheck(){this.item.completed=!this.item.completed,this.$store.commit("updateItem",{id:this.item.id,completed:this.item.completed,title:this.item.title})}}},u=d,c=i(1001),p=(0,c.Z)(u,a,m,!1,null,"37e9d77a",null),f=p.exports,h=i(3822),v={name:"ToDoItems",components:{ToDoItem:f},computed:{...(0,h.Se)(["items","totalItems"])}},I=v,g=(0,c.Z)(I,r,l,!1,null,"2ed5433b",null),y=g.exports,k=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"to-do-header"}},[e("div",{staticClass:"container"},[e("h1",[t._v("ToDo List Vue3")]),e("ToDoInput"),e("p",[t._v("Completed "+t._s(t.totalCompletedItems)+" of "+t._s(t.totalItems)+" tasks")])],1)])},_=[],b=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"to-do-input"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"New task",id:"input"},domProps:{value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addItem.apply(null,arguments)},input:function(e){e.target.composing||(t.title=e.target.value)}}}),e("button",{staticClass:"reset-button custom-button",attrs:{id:"butAdd"},on:{click:t.addItem}},[t._v("Add")])])},C=[],x={name:"ToDoInput",data(){return{title:""}},methods:{addItem(){""!==this.title.trim()&&(this.$store.commit("addItem",{title:this.title,completed:!1,id:this.$store.state.items.length+1}),this.title="")}}},O=x,T=(0,c.Z)(O,b,C,!1,null,"ffc5f874",null),w=T.exports,D={name:"ToDoHeader",components:{ToDoInput:w},computed:{...(0,h.Se)(["totalItems","totalCompletedItems"])}},P=D,Z=(0,c.Z)(P,k,_,!1,null,"1cfaf0f9",null),j=Z.exports,E={name:"App",components:{ToDoHeader:j,ToDoItems:y}},S=E,$=(0,c.Z)(S,o,s,!1,null,null,null),N=$.exports;i(7658);function A(t){localStorage.setItem("items",JSON.stringify(t))}n.ZP.use(h.ZP);const H=new h.ZP.Store({state:{items:JSON.parse(localStorage.getItem("items"))||[]},getters:{items:t=>t.items,completedItems:t=>t.items.filter((t=>t.completed)),totalItems:t=>t.items.length,totalCompletedItems:(t,e)=>e.completedItems.length},mutations:{addItem:(t,e)=>{t.items.push(e),A(t.items)},updateItem:(t,e)=>{const i=t.items.findIndex((t=>t.id===e.id));t.items[i].completed=e.completed,t.items[i].title=e.title,A(t.items)},deleteItem:(t,e)=>{const i=t.items.findIndex((t=>t.id===e.id));i>-1&&t.items.splice(i,1),A(t.items)}}});n.ZP.config.productionTip=!1,new n.ZP({store:H,render:t=>t(N)}).$mount("#app")}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,n,o,s){if(!n){var r=1/0;for(d=0;d<t.length;d++){n=t[d][0],o=t[d][1],s=t[d][2];for(var l=!0,a=0;a<n.length;a++)(!1&s||r>=s)&&Object.keys(i.O).every((function(t){return i.O[t](n[a])}))?n.splice(a--,1):(l=!1,s<r&&(r=s));if(l){t.splice(d--,1);var m=o();void 0!==m&&(e=m)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[n,o,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,s,r=n[0],l=n[1],a=n[2],m=0;if(r.some((function(e){return 0!==t[e]}))){for(o in l)i.o(l,o)&&(i.m[o]=l[o]);if(a)var d=a(i)}for(e&&e(n);m<r.length;m++)s=r[m],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(d)},n=self["webpackChunkvue_do"]=self["webpackChunkvue_do"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(1397)}));n=i.O(n)})();
//# sourceMappingURL=app.d6f06fb5.js.map