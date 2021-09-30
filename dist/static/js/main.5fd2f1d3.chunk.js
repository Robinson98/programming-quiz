(this.webpackJsonptesting_app=this.webpackJsonptesting_app||[]).push([[0],{213:function(e,t,a){e.exports=a(405)},218:function(e,t,a){},405:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(209),i=a.n(c),l=(a(218),a(22)),o=a(23),s=a(25),u=a(24),m=a(6),d=a(29),h=a(7),p=Object(h.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(m.c,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))})),E=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(m.c,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/signin"},"Login")))},f=Object(h.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile;console.log(t);var n=t.uid?r.a.createElement(p,{profile:a}):r.a.createElement(E,null);return r.a.createElement("nav",{className:"nav.nav-wrapper.gret.darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(m.b,{to:"/",className:"brand-logo"},"MarioPlan"),n))})),b=a(46),g=a.n(b),N=function(e){var t=e.notifications;return console.log("notification",t),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},g()(e.time.toDate()).fromNow()))}))))))},v=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text tex-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},g()(t.createdAt.toDate()).calendar())))},j=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(m.b,{to:"/project/"+e.id,key:e.id},r.a.createElement(v,{project:e}))})))},O=a(27),y=a(16),C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(j,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(N,{notifications:n})))):r.a.createElement(d.a,{to:"/signin"})}}]),a}(n.Component),S=Object(y.d)(Object(h.b)((function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notification}})),Object(O.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notification",limit:3,orderBy:["time","desc"]}]))(C),w=Object(y.d)(Object(h.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(O.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action gret lighten04 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,g()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(d.a,{to:"/signin"})})),R=a(28),F=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),a}(n.Component),x=Object(h.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(F),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign up")),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null)))}}]),a}(n.Component),I=Object(h.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(k),P=a(17),A=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{className:"materialize-textarea",id:"content",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(d.a,{to:"/signin"})}}]),a}(n.Component),_=Object(h.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(P.a)(Object(P.a)({},e),{},{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(A),U=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:S}),r.a.createElement(d.b,{path:"/project/:id",component:w}),r.a.createElement(d.b,{path:"/signin",component:x}),r.a.createElement(d.b,{path:"/signup",component:I}),r.a.createElement(d.b,{path:"/create",component:_}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L={authError:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(P.a)(Object(P.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(P.a)(Object(P.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(P.a)(Object(P.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(P.a)(Object(P.a)({},e),{},{authError:t.err.message});default:return e}},T={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},D=a(58),B=Object(y.c)({auth:G,project:z,firestore:D.firestoreReducer,firebase:O.firebaseReducer}),J=a(212),W=a(90),V=a.n(W);a(400),a(403);V.a.initializeApp({apiKey:"AIzaSyBW_Yz9q3ECfQEcVVvp8BiFDLVYnYbYAu0",authDomain:"testingapp-5f2e6.firebaseapp.com",databaseURL:"https://testingapp-5f2e6.firebaseio.com",projectId:"testingapp-5f2e6",storageBucket:"testingapp-5f2e6.appspot.com",messagingSenderId:"708553436182",appId:"1:708553436182:web:94d60647796687421a1937",measurementId:"G-4PJ0K4VW2D"}),V.a.firestore();var Y=V.a,K=Object(y.e)(B,Object(y.d)(Object(y.a)(J.a.withExtraArgument({getFirebase:O.getFirebase,getFirestore:D.getFirestore})),Object(D.reduxFirestore)(Y),Object(O.reactReduxFirebase)(Y,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));K.firebaseAuthIsReady.then((function(){i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:K},r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}))}},[[213,1,2]]]);
//# sourceMappingURL=main.5fd2f1d3.chunk.js.map