(function(t){function e(e){for(var s,r,n=e[0],l=e[1],c=e[2],u=0,m=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},o={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"096e":function(t,e,a){},"0e1f":function(t,e,a){"use strict";var s=a("dccf"),o=a.n(s);o.a},1:function(t,e){},"158c":function(t,e,a){"use strict";var s=a("ce1b"),o=a.n(s);o.a},"16c0":function(t,e,a){},"1a12":function(t,e,a){},"24fa":function(t,e,a){},"32e5":function(t,e,a){t.exports=a.p+"img/x.598ebccc.png"},"35cc":function(t,e,a){},3712:function(t,e,a){},"3b8a":function(t,e,a){"use strict";var s=a("3712"),o=a.n(s);o.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),t._v(" "),a("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("Kanban")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t._v(" "),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"boards"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"boards"}}},[t._v("My-Dashboard")])],1):t._e()]),t._v(" "),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Login")])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("bc3a"),c=a.n(l);c.a.create({baseURL:"https://localhost:3000",withCredentials:!0});var d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){await this.$auth.logout({returnTo:"window.location.href"}),this.$store.dispatch("resetBearer"),this.$router.push({name:"home"})}}},u=d,m=(a("5dfc"),a("2877")),p=Object(m["a"])(u,r,n,!1,null,null,null),h=p.exports,b=a("335d"),v={name:"App",async beforeCreate(){try{await Object(b["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),this.$store.dispatch("initializeSocket",this.$auth.bearer)}catch(t){this.$router.push({name:"home"})}},components:{Navbar:h}},f=v,g=(a("5c0b"),Object(m["a"])(f,o,i,!1,null,null,null)),k=g.exports,w=a("8c4f"),_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home bg-secondary text-dark"},[a("div",{staticClass:"container vh-100"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[t._v("KanBam!")])])])])])}],y={name:"home",data(){return{}},computed:{},methods:{},components:{}},$=y,I=(a("0e1f"),Object(m["a"])($,_,C,!1,null,"eb180396",null)),x=I.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark text-success"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!t.create,expression:"!create"}],staticClass:"btn btn-success mt-5",on:{click:function(e){t.create=!t.create}}},[t._v("Create Board")]),t._v(" "),a("div",{staticClass:"container"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.create,expression:"create"}],staticClass:"row"},[a("div",{staticClass:"boards col-12 col-md-6 offset-md-3 pb-2"},[a("h1",{staticClass:"border-bottom border-success"},[t._v("Create a Board!")]),t._v(" "),a("form",{staticClass:"create-board",on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],staticClass:"rounded-pill border-0 height-2 form-control form-control-default mb-5 mt-3 p-2 border-bottom border-success",attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],staticClass:"rounded-pill border-0 height-2 form-control form-control-default mb-5 p-2",attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-light",attrs:{type:"submit"}},[t._v("Create Board")]),t._v(" "),a("button",{staticClass:"btn btn-warning",on:{click:function(e){t.create=!t.create}}},[t._v("Cancel")])])])]),t._v(" "),a("div",{staticClass:"row"},t._l(t.boards,(function(t){return a("div",{key:t._id,staticClass:"col-12 col-md-3"},[a("board",{attrs:{boardData:t,boardId:t.id}})],1)})))])])},T=[],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card text-dark mt-5",attrs:{id:"card-bg"}},[a("div",{attrs:{id:"real-bg"}},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.boardData.title))]),t._v(" "),a("h6",{staticClass:"card-text"},[t._v(t._s(t.boardData.description))]),t._v(" "),a("router-link",{attrs:{to:{name:"board",params:{boardId:t.boardId}}}},[a("button",{staticClass:"btn btn-primary"},[t._v("View Board")])]),t._v(" "),a("button",{staticClass:"btn btn-warning",on:{click:t.deleteBoard}},[t._v("Delete")])],1)])},D=[],j={name:"board",props:["boardData","boardId"],mounted(){},data(){return{newBoard:{}}},computed:{},methods:{deleteBoard(){this.$store.dispatch("deleteBoardById",this.boardId)}}},O=j,E=(a("b2e8"),Object(m["a"])(O,L,D,!1,null,null,null)),P=E.exports,N={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:"",collabEmail:[]},create:!1}},computed:{boards(){return this.$store.state.boards}},methods:{async addBoard(){await this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""},this.create=!1}},components:{Board:P}},A=N,M=(a("3b8a"),Object(m["a"])(A,B,T,!1,null,null,null)),R=M.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board bg-dark text-secondary",attrs:{id:"bg"}},[t.board.title?a("h1",[t._v(t._s(t.board.title))]):a("h1",[t._v("Loading...")]),t._v(" "),a("create-list"),t._v(" "),a("add-collab",{attrs:{boardData:t.board}}),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.lists,(function(t){return a("div",{key:t.id,staticClass:"col-6 col-md-4"},[a("list",{attrs:{listData:t}})],1)})))])],1)},U=[],z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list bg-primary rounded mt-5 text-warning p-2"},[s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("h1",[t._v(t._s(t.listData.title))]),t._v(" "),s("span",{staticClass:"d-flex align-items-center"},[s("img",{attrs:{src:a("b32a"),alt:"delete"},on:{click:t.deleteList}}),t._v(" "),s("create-task",{attrs:{listId:t.listData.id,boardId:t.listData.boardId}})],1)]),t._v(" "),t._l(t.tasks,(function(e){return s("div",{key:e.id},[s("task",{attrs:{taskData:e,listTitle:t.listData.title}})],1)}))],2)},V=[],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column align-items-end"},[t.form?a("form",{on:{submit:function(t){t.preventDefault()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.title,expression:"newTask.title"}],staticClass:"rounded-pill border-0 pl-1 mb-1",attrs:{type:"text"},domProps:{value:t.newTask.title},on:{input:function(e){e.target.composing||t.$set(t.newTask,"title",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-secondary",on:{click:t.CreateTask}},[t._v("create task")])]):t._e(),t._v(" "),t.form?a("button",{staticClass:"btn btn-warning mr-1",on:{click:function(e){t.form=!t.form}}},[t._v("-")]):a("button",{staticClass:"btn btn-secondary mr-1",on:{click:function(e){t.form=!t.form}}},[t._v("+")])])},J=[],K={data(){return{newTask:{listId:this.listId,boardId:this.boardId,authorId:this.$auth.userInfo.email},form:!1}},methods:{async CreateTask(){console.log(this.newTask),await this.$store.dispatch("createTask",this.newTask),this.newTask.title="",this.form=!1}},props:["listId","boardId"]},X=K,H=(a("fa19"),Object(m["a"])(X,q,J,!1,null,null,null)),W=H.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task bg-light rounded mt-2 p-2"},[s("div",{staticClass:"d-flex justify-content-between"},[s("h3",[t._v(t._s(t.taskData.title))]),t._v(" "),s("div",{staticClass:"dropdown"},[s("button",{staticClass:"btn btn-light dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}}),t._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},t._l(t.lists,(function(e){return s("a",{directives:[{name:"show",rawName:"v-show",value:e.id!=t.taskData.listId,expression:"list.id != taskData.listId"}],key:e.id,staticClass:"dropdown-item",on:{click:function(a){t.changeList(e.id)}}},[t._v("Move to "+t._s(e.title))])}))),t._v(" "),s("img",{staticClass:"delete-task",attrs:{src:a("ff45"),alt:"delete"},on:{click:function(e){t.destroy(t.taskData)}}})])]),t._v(" "),s("div",{staticClass:"d-flex justify-content-between"},[t.form?s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.comment,expression:"newComment.comment"}],staticClass:"rounded-pill border-0 pl-1",attrs:{type:"text",placeholder:"Create Comment"},domProps:{value:t.newComment.comment},on:{input:function(e){e.target.composing||t.$set(t.newComment,"comment",e.target.value)}}}):s("button",{staticClass:"btn btn-light add-button",on:{click:function(e){t.form=!t.form}}},[t._v("+")]),t._v(" "),t.form?s("img",{staticClass:"form",attrs:{src:a("722d"),alt:""},on:{click:function(e){t.comment()}}}):t._e(),t._v(" "),t.form?s("img",{staticClass:"form",attrs:{src:a("32e5"),alt:""},on:{click:function(e){t.form=!t.form}}}):t._e()]),t._v(" "),t._l(t.taskData.comments,(function(e){return s("div",{key:e.id,staticClass:"d-flex justify-content-between bg-primary text-light rounded mb-1 comment pl-1"},[t._v("\n    "+t._s(e.comment)+"\n    "),s("img",{staticClass:"form",attrs:{src:a("32e5"),alt:""},on:{click:function(a){t.deleteComment(e)}}})])}))],2)},F=[],G={name:"task",props:["taskData","listTitle"],mounted(){console.log(this.taskData)},data(){return{newComment:{creator:this.$auth.userInfo.name,taskId:this.taskData.id,listId:this.taskData.listId,comment:""},form:!1}},computed:{lists(){return this.$store.state.lists}},methods:{destroy(t){this.$store.dispatch("deleteTaskById",t)},async comment(){await this.$store.dispatch("createComment",this.newComment),this.newComment.comment="",this.form=!1},deleteComment(t){let e={commentId:t.id,listId:this.taskData.listId,taskId:this.taskData.id};this.$store.dispatch("deleteComment",e)},changeList(t){if(this.taskData.listId==t)return"youre already here!";let e={taskId:this.taskData.id,listId:t,boardId:this.taskData.boardId,priorList:this.taskData.listId};this.$store.dispatch("changeList",e)}}},Q=G,Z=(a("fcc1"),Object(m["a"])(Q,Y,F,!1,null,null,null)),tt=Z.exports,et={name:"list",props:["listData"],computed:{tasks(){return this.$store.state.tasks[this.listData._id]}},mounted(){this.$store.dispatch("getTasksByListId",this.listData._id),this.$store.dispatch("joinRoom","tasks")},beforeDestroy(){this.$store.dispatch("leaveRoom","tasks")},data(){return{}},methods:{deleteList(){this.$store.dispatch("deleteList",this.listData)}},components:{Task:tt,CreateTask:W}},at=et,st=(a("f62b"),Object(m["a"])(at,z,V,!1,null,null,null)),ot=st.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 offset-md-3 col-12 d-flex flex-column align-items-center"},[a("form",{on:{submit:function(t){t.preventDefault()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],staticClass:"rounded-pill pl-1 border-0 form-control-sm create-list",attrs:{placeholder:"List Title",type:"text"},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),t._v(" "),a("h3",{staticClass:"create",on:{click:t.CreateList}},[t._v("Create List")])])])},rt=[],nt={data(){return{newList:{boardId:this.$route.params.boardId,authorId:this.$auth.userInfo.email}}},methods:{async CreateList(){await this.$store.dispatch("createList",this.newList),console.log(this.newList),this.newList.title=""}}},lt=nt,ct=(a("c49f"),Object(m["a"])(lt,it,rt,!1,null,null,null)),dt=ct.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.collaborator,expression:"collaborator"}],attrs:{type:"text"},domProps:{value:t.collaborator},on:{input:function(e){e.target.composing||(t.collaborator=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-primary",on:{click:function(e){t.addCollab()}}},[t._v("Add collaborator")])])},mt=[],pt={props:["boardData"],mounted(){},data(){return{collab:{id:this.boardData.id,collabEmail:this.boardData.collabEmail},collaborator:""}},computed:{board(){return this.$store.state.activeBoard}},methods:{async addCollab(){await this.collab.collabEmail.push(this.collaborator),await this.$store.dispatch("editBoard",this.collab),this.collaborator=""}}},ht=pt,bt=Object(m["a"])(ht,ut,mt,!1,null,null,null),vt=bt.exports,ft={name:"board",computed:{board(){return console.log("ACTIVE "+this.$store.state.activeBoard),this.$store.state.activeBoard},lists(){return this.$store.state.lists}},mounted(){this.$store.dispatch("joinRoom","lists"),this.$store.dispatch("setActiveBoard",this.$route.params.boardId),this.$store.dispatch("getList",this.$route.params.boardId)},beforeDestroy(){this.$store.dispatch("leaveRoom","lists")},components:{List:ot,CreateList:dt,AddCollab:vt},props:["boardId"]},gt=ft,kt=(a("158c"),Object(m["a"])(gt,S,U,!1,null,null,null)),wt=kt.exports;s["a"].use(w["a"]);var _t=new w["a"]({routes:[{path:"/",name:"home",component:x},{path:"/boards",name:"boards",component:R,beforeEnter:b["b"]},{path:"/boards/:boardId",name:"board",component:wt,beforeEnter:b["b"]},{path:"*",redirect:"/"}]}),Ct=a("2f62"),yt=a("8055"),$t=a.n(yt);let It={};const xt={actions:{initializeSocket({commit:t,dispatch:e}){It=$t()("//localhost:3000"),It.on("CONNECTED",t=>{console.log("Connected to socket, villany may commence")}),It.on("createList",e=>{t("addList",e)}),It.on("deleteList",e=>{t("deleteList",e)}),It.on("createTask",e=>{t("addTask",e)}),It.on("removeTask",e=>{t("deleteTask",e)}),It.on("changeTask",e=>{t("editTask",e)})},joinRoom({commit:t,dispatch:e},a){It.emit("dispatch",{action:"JoinRoom",data:a})}}};s["a"].use(Ct["a"]);let Bt=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",Tt=c.a.create({baseURL:Bt+"api",timeout:3e3,withCredentials:!0});var Lt=new Ct["a"].Store({state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setActiveBoard(t,e){t.activeBoard=e},setList(t,e){t.lists=e},deleteList(t,e){t.lists=t.lists.filter(t=>t._id!=e)},addList(t,e){t.lists.push(e)},addTask(t,e){t.tasks[e.listId].push(e)},editTask(t,e){let a=t.tasks.find(t=>t.id==e.id);a=e},deleteTask(t,e){t.tasks[e.listId]=t.tasks[e.listId].filter(t=>t.id!=e.id),console.log(t.tasks[e.listId].filter(t=>t.id!=e.id))},setTasks(t,e){s["a"].set(t.tasks,e.listId,e.tasks)}},actions:{setBearer({},t){Tt.defaults.headers.authorization=t},resetBearer(){Tt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await Tt.get("/profile");t("setUser",e.data)}catch(e){console.error(e)}},getBoards({commit:t,dispatch:e}){Tt.get("boards").then(e=>{t("setBoards",e.data)})},async setActiveBoard({commit:t},e){let a=await Tt.get(`boards/${e}`);t("setActiveBoard",a.data)},addBoard({commit:t,dispatch:e},a){Tt.post("boards",a).then(t=>{e("getBoards")})},async editBoard({dispatch:t},e){await Tt.put(`boards/${e.id}`,e),t("getBoards")},async deleteBoardById({commit:t,dispatch:e},a){await Tt.delete(`boards/${a}`),e("getBoards")},getList({commit:t},e){Tt.get(`boards/${e}/lists`).then(e=>{t("setList",e.data)})},createList({commit:t},e){Tt.post("lists",e)},async deleteList({commit:t,dispatch:e},a){await Tt.delete(`lists/${a.id}`)},async createTask({commit:t},e){await Tt.post("tasks",e)},async getTasksByListId({commit:t},e){let a=await Tt.get(`lists/${e}/tasks`);t("setTasks",{tasks:a.data,listId:e})},async deleteTaskById({commit:t,dispatch:e},a){await Tt.delete(`tasks/${a.id}`)},async createComment({commit:t,dispatch:e},a){await Tt.post(`tasks/${a.taskId}/comments`,a),e("getTasksByListId",a.listId)},async deleteComment({dispatch:t},e){await Tt.delete(`tasks/${e.taskId}/comments/${e.commentId}`),t("getTasksByListId",e.listId)},async changeList({dispatch:t},e){await Tt.put(`tasks/${e.taskId}`,{listId:e.listId})}},modules:{socketStore:xt}});const Dt="ten-1085.auth0.com",jt="kanbam-server",Ot="U19KB59qcbPwzIMXXMaV3qYVw04a2Ds7";s["a"].use(b["a"],{domain:Dt,clientId:Ot,audience:jt,onRedirectCallback:t=>{_t.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:_t,store:Lt,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),o=a.n(s);o.a},"5dfc":function(t,e,a){"use strict";var s=a("1a12"),o=a.n(s);o.a},"65da":function(t,e,a){},"722d":function(t,e,a){t.exports=a.p+"img/check.681f0b9a.png"},"9c0c":function(t,e,a){},b2e8:function(t,e,a){"use strict";var s=a("16c0"),o=a.n(s);o.a},b32a:function(t,e,a){t.exports=a.p+"img/delete.33aebc22.png"},c49f:function(t,e,a){"use strict";var s=a("35cc"),o=a.n(s);o.a},ce1b:function(t,e,a){},dccf:function(t,e,a){},f62b:function(t,e,a){"use strict";var s=a("65da"),o=a.n(s);o.a},fa19:function(t,e,a){"use strict";var s=a("096e"),o=a.n(s);o.a},fcc1:function(t,e,a){"use strict";var s=a("24fa"),o=a.n(s);o.a},ff45:function(t,e,a){t.exports=a.p+"img/deleteTask.07330b37.png"}});