(this["webpackJsonpredux-heros-firebase08"]=this["webpackJsonpredux-heros-firebase08"]||[]).push([[0],{183:function(e,a,r){},184:function(e,a,r){"use strict";r.r(a);var t=r(7),c=r(39),s=r.n(c),n=r(26),i=r(14),l=r(18),o=r(16),d=r(0),u=r.n(d),m=r(2),j=r(36);r(83),r(185);j.a.initializeApp({apiKey:"AIzaSyByF_5J4pNNZPryG1xDKuE4yTjAEhswkFI",authDomain:"react-auth-app-14089.firebaseapp.com",projectId:"react-auth-app-14089",storageBucket:"react-auth-app-14089.appspot.com",messagingSenderId:"1087135847650",appId:"1:1087135847650:web:4b120186a6469c1e527abb"});j.a.firestore();var h=new j.a.auth.GoogleAuthProvider,b="[Auth] Login",p="[Auth] Logout",O="[UI] Set Error",x="[UI] Remove Error",f="[UI] Start Loading",v="[UI] Finish Loading",g=function(e){return{type:O,payload:e}},N=function(){return{type:v}},y=function(e,a){return function(r){r({type:f}),j.a.auth().signInWithEmailAndPassword(e,a).then((function(e){var a=e.user;r(C(a.uid,a.displayName)),r(N())})).catch((function(e){r(N()),console.log(e)}))}},C=function(e,a){return{type:b,payload:{uid:e,displayName:a}}},_=function(){return{type:p}},w=r(69),k=r.n(w),S=r(4),D=r(21),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(i.a)(a,2),c=r[0],s=r[1],n=function(){s(e)},l=function(e){var a=e.target;"checkbox"===a.type?s(Object(D.a)(Object(D.a)({},c),{},Object(S.a)({},a.name,a.checked))):s(Object(D.a)(Object(D.a)({},c),{},Object(S.a)({},a.name,a.value)))};return[c,l,n]},M=r(5),A=function(){var e=Object(n.b)(),a=Object(n.c)((function(e){return e.ui})).loading,r=I({email:"prueba@gmail.com",password:"123456"}),t=Object(i.a)(r,2),c=t[0],s=t[1],o=c.email,d=c.password;return Object(M.jsxs)("div",{className:"container mt-5",children:[Object(M.jsx)("h1",{children:"Login Screen"}),Object(M.jsx)("hr",{}),Object(M.jsxs)("form",{onSubmit:function(a){a.preventDefault(),e(y(o,d))},children:[Object(M.jsxs)("div",{className:"mb-3",children:[Object(M.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(M.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"email",value:o,onChange:s}),Object(M.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(M.jsxs)("div",{className:"mb-3",children:[Object(M.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(M.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",name:"password",value:d,onChange:s})]}),Object(M.jsx)("button",{type:"submit",disabled:a,className:"btn btn-outline-dark w-100",children:"Login with email and password"})]}),Object(M.jsxs)("div",{className:"mt-3",children:[Object(M.jsx)("p",{children:"or"}),Object(M.jsx)(k.a,{type:"dark",onClick:function(){console.log("Google Login TODO"),e((function(e){j.a.auth().signInWithPopup(h).then((function(a){var r=a.user;e(C(r.uid,r.displayName))}))}))}}),Object(M.jsx)("hr",{}),Object(M.jsx)(l.b,{to:"/register",children:"Create an account"})]})]})},E=r(70),P=r.n(E),F=function(){var e=Object(n.b)(),a=Object(n.c)((function(e){return e.ui})).msgError,r=I({name:"Andr\xe9s",email:"prueba@gmail.com",password:"123456",password2:"123456",terms:!0}),t=Object(i.a)(r,2),c=t[0],s=t[1],o=c.name,d=c.email,h=c.password,b=c.password2,p=c.terms,O=function(){return o.trim().length<2?(e(g("El nombre debe ser de 2 o m\xe1s caracteres")),!1):h.length<6||h!==b?(e(g("Las contrase\xf1as deben ser iguales y de 6 o m\xe1s caracteres")),!1):P.a.isEmail(d)?p?(e({type:x}),!0):(e(g("Debe confirmar los t\xe9rminos para continuar")),!1):(e(g("El correo no es v\xe1lido")),!1)};return Object(M.jsxs)("div",{className:"container mt-5",children:[Object(M.jsx)("h1",{children:"Register Screen"}),Object(M.jsx)("hr",{}),Object(M.jsxs)("form",{onSubmit:function(a){a.preventDefault(),O()&&e(function(e,a,r){return function(t){j.a.auth().createUserWithEmailAndPassword(e,a).then(function(){var e=Object(m.a)(u.a.mark((function e(a){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.user,e.next=3,c.updateProfile({displayName:r});case 3:t(C(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}}(d,h,o))},children:[a&&Object(M.jsx)("div",{className:"alert alert-danger animate__animated animate__fadeIn",role:"alert",children:a}),Object(M.jsxs)("div",{className:"mb-3",children:[Object(M.jsx)("label",{htmlFor:"exampleInputName",className:"form-label",children:"Name"}),Object(M.jsx)("input",{type:"text",className:"form-control",id:"exampleInputName",name:"name",value:o,onChange:s,autoComplete:"off",required:!0})]}),Object(M.jsxs)("div",{className:"mb-3",children:[Object(M.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(M.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"email",value:d,onChange:s,autoComplete:"off",required:!0}),Object(M.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(M.jsxs)("div",{className:"mb-3",children:[Object(M.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(M.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",name:"password",value:h,onChange:s,autoComplete:"off",required:!0})]}),Object(M.jsxs)("div",{className:"mb-3",children:[Object(M.jsx)("label",{htmlFor:"exampleInputPassword2",className:"form-label",children:"Confirm Password"}),Object(M.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword2",name:"password2",value:b,onChange:s,autoComplete:"off",required:!0})]}),Object(M.jsxs)("div",{className:"mb-3",children:[Object(M.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheckbox1",name:"terms",onChange:s,checked:p}),Object(M.jsx)("label",{htmlFor:"exampleCheckbox1",className:"form-check-label ms-2",children:"Confirm terms"})]}),Object(M.jsx)("button",{type:"submit",className:"btn btn-outline-dark w-100",children:"Create Account"})]}),Object(M.jsxs)("div",{className:"mt-3",children:[Object(M.jsx)("hr",{}),Object(M.jsx)(l.b,{to:"/login",children:"Already have an account? Sign in"})]})]})},B=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],L=function(e){var a=e.id,r=e.superhero,t=(e.publisher,e.alter_ego),c=e.first_appearance,s=e.characters;return Object(M.jsx)("div",{children:Object(M.jsx)("div",{className:"col animate__animated animate__fadeIn",children:Object(M.jsxs)("div",{className:"card h-100",children:[Object(M.jsx)("div",{className:"col-5 align-self-center",children:Object(M.jsx)("img",{src:"/assets/".concat(a,".jpg"),style:{maxHeight:"100px",objectFit:"scale-down"},className:"card-img-top",alt:r})}),Object(M.jsxs)("div",{className:"card-body",children:[Object(M.jsx)("h3",{className:"card-title",children:r}),Object(M.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(M.jsxs)("li",{className:"list-group-item",children:[" ",t," "]}),Object(M.jsxs)("li",{className:"list-group-item",children:[" ",c," "]}),Object(M.jsxs)("li",{className:"list-group-item",children:[" ",s," "]})]})]}),Object(M.jsx)("div",{className:"card-footer",children:Object(M.jsx)(l.b,{to:"/hero/".concat(a),children:"Ver m\xe1s ..."})})]})},a)})},T=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){return B.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(M.jsx)("div",{className:"row row-cols-1 row-cols-md-4 row-cols-lg-3 g-4 animate__animated animate__fadeIn",children:r.map((function(e){return Object(M.jsx)(L,Object(D.a)({},e),e.id)}))})},H=function(){return Object(M.jsxs)("div",{children:[Object(M.jsx)("h1",{className:"animate__animated animate__fadeInLeft",children:"DC Screen"}),Object(M.jsx)("hr",{}),Object(M.jsx)(T,{publisher:"DC Comics"})]})},J=function(){var e=Object(o.h)().heroId,a=Object(o.g)(),r=Object(t.useMemo)((function(){return function(e){return B.find((function(a){return a.id===e}))}(e)}),[e]);if(!r)return Object(M.jsx)(o.a,{to:"/marvel"});var c=r.id,s=r.superhero,n=r.publisher,i=r.alter_ego,l=r.first_appearance,d=r.characters;return Object(M.jsxs)("div",{children:[Object(M.jsxs)("h1",{children:[" ",n," "]}),Object(M.jsx)("hr",{}),Object(M.jsx)("div",{className:"col-4 mx-auto",children:Object(M.jsxs)("div",{className:"card h-100",children:[Object(M.jsx)("div",{className:"col-5 align-self-center",children:Object(M.jsx)("img",{src:"/assets/".concat(c,".jpg"),className:"card-img-top",alt:s})}),Object(M.jsxs)("div",{className:"card-body",children:[Object(M.jsx)("h3",{className:"card-title",children:s}),Object(M.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(M.jsxs)("li",{className:"list-group-item",children:[Object(M.jsx)("b",{children:" Alter Ego: "})," ",i," "]}),Object(M.jsxs)("li",{className:"list-group-item",children:[" ",Object(M.jsx)("b",{children:" First appearance: "})," ",l," "]}),Object(M.jsxs)("li",{className:"list-group-item",children:[" ",Object(M.jsx)("b",{children:" Character: "})," ",d," "]})]})]}),Object(M.jsx)("div",{className:"card-footer text-end",children:Object(M.jsx)("button",{className:"btn btn-primary",onClick:function(){a(-1)},children:"Regresar"})})]})},c)]})},G=function(){return Object(M.jsxs)("div",{children:[Object(M.jsx)("h1",{children:"Marvel Screen"}),Object(M.jsx)("hr",{}),Object(M.jsx)(T,{publisher:"Marvel Comics"})]})},R=r(71),W=r.n(R),q=function(){var e=Object(o.f)(),a=Object(o.g)(),r=W.a.parse(e.search).q,c=void 0===r?"":r,s=I({searchText:c}),n=Object(i.a)(s,2),l=n[0],d=n[1],u=l.searchText,m=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return console.log("getHeroesByName"),0===e.length?[]:(e=e.toLowerCase(),B.filter((function(a){return a.superhero.toLowerCase().includes(e)})))}(c)}),[c]);return Object(M.jsxs)("div",{children:[Object(M.jsx)("h1",{children:"Search Screen"}),Object(M.jsx)("hr",{}),Object(M.jsxs)("div",{className:"row",children:[Object(M.jsxs)("div",{className:"col-5",children:[Object(M.jsx)("h3",{children:"B\xfasqueda de H\xe9roes"}),Object(M.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a("?q=".concat(u))},children:[Object(M.jsx)("input",{type:"text",placeholder:"Ingrese el nombre del h\xe9roe",className:"form-control mt-4",name:"searchText",autoComplete:"off",value:u,onChange:d}),Object(M.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Buscar"})]})]}),Object(M.jsxs)("div",{className:"col-7",children:[Object(M.jsx)("h3",{children:"Resultados"}),Object(M.jsx)("hr",{}),m.map((function(e){return Object(M.jsx)(L,Object(D.a)({},e),e.id)}))]})]})]})},z=function(){var e=Object(n.c)((function(e){return e.auth})).name,a=Object(n.b)();return Object(M.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark px-5",children:[Object(M.jsx)(l.b,{className:"navbar-brand",to:"/",children:"Navbar"}),Object(M.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(M.jsxs)("div",{className:"navbar-nav",children:[Object(M.jsx)(l.c,{className:function(e){return"nav-link "+(e.isActive?"active":"")},to:"/dc",children:"DC"}),Object(M.jsx)(l.c,{className:function(e){return"nav-link "+(e.isActive?"active":"")},to:"/marvel",children:"Marvel"}),Object(M.jsx)(l.c,{className:function(e){return"nav-link "+(e.isActive?"active":"")},to:"/search",children:"Search"})]})}),Object(M.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end",children:Object(M.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(M.jsx)("span",{className:"nav-item nav-link text-info",children:e}),Object(M.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){a(function(){var e=Object(m.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.auth().signOut();case 2:a(_());case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())},children:"Logout"})]})})]})},K=function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(z,{}),Object(M.jsx)("div",{className:"container mt-5",children:Object(M.jsxs)(o.d,{children:[Object(M.jsx)(o.b,{path:"/",element:Object(M.jsx)(G,{})}),Object(M.jsx)(o.b,{path:"/dc",element:Object(M.jsx)(H,{})}),Object(M.jsx)(o.b,{path:"/marvel",element:Object(M.jsx)(G,{})}),Object(M.jsx)(o.b,{path:"/search",element:Object(M.jsx)(q,{})}),Object(M.jsx)(o.b,{path:"/hero/:heroId",element:Object(M.jsx)(J,{})})]})})]})},U=function(e){var a=e.children,r=e.isLogged,t=Object(o.f)(),c=t.pathname,s=t.search;return localStorage.setItem("lastPath",c+s),r?a:Object(M.jsx)(o.a,{to:"/login"})},X=function(e){var a=e.children,r=e.isLogged,t=localStorage.getItem("lastPath")||"/marvel";return r?Object(M.jsx)(o.a,{to:t}):a},Q=function(){var e=Object(n.b)(),a=Object(t.useState)(!1),r=Object(i.a)(a,2),c=r[0],s=r[1],d=Object(t.useState)(!0),u=Object(i.a)(d,2),m=u[0],h=u[1];return Object(t.useEffect)((function(){j.a.auth().onAuthStateChanged((function(a){(null===a||void 0===a?void 0:a.uid)?(s(!0),e(C(a.uid,a.displayName))):s(!1),h(!1)}))}),[e]),m?Object(M.jsx)("div",{className:"d-flex justify-content-center mt-5",children:Object(M.jsx)("div",{className:"spinner-grow text-danger",role:"status",style:{width:"3rem",height:"3rem"},children:Object(M.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(M.jsx)(l.a,{children:Object(M.jsxs)(o.d,{children:[Object(M.jsx)(o.b,{path:"/register",element:Object(M.jsx)(F,{})}),Object(M.jsx)(o.b,{path:"/login",element:Object(M.jsx)(X,{isLogged:c,children:Object(M.jsx)(A,{})})}),Object(M.jsx)(o.b,{path:"/*",element:Object(M.jsx)(U,{isLogged:c,children:Object(M.jsx)(K,{})})})]})})},V=r(37),Z=r(72),Y={loading:!1,msgError:null},$=Object(V.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case b:return{uid:a.payload.uid,name:a.payload.displayName};case p:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case O:return Object(D.a)(Object(D.a)({},e),{},{msgError:a.payload});case x:return Object(D.a)(Object(D.a)({},e),{},{msgError:null});case f:return Object(D.a)(Object(D.a)({},e),{},{loading:!0});case v:return Object(D.a)(Object(D.a)({},e),{},{loading:!1});default:return e}}}),ee="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.c,ae=Object(V.d)($,ee(Object(V.a)(Z.a))),re=function(){return Object(M.jsx)(n.a,{store:ae,children:Object(M.jsx)(Q,{})})};r(183);s.a.render(Object(M.jsx)(re,{}),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.f40ad79a.chunk.js.map