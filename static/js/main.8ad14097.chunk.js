(this.webpackJsonpportifolio=this.webpackJsonpportifolio||[]).push([[0],{204:function(e,t){},242:function(e,t,a){},243:function(e,t,a){},245:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(20),s=a.n(n),r=a(32),i=a(26),l=a(27),o=a(29),j=a(28),d=a(12),m=a(264),b=a(266),h=a(267),O=a(69),u=a(268),x=a(299),p=a(265),v=a(1),g=Object(m.a)((function(e){return{root:{flexGrow:1,fontSize:"1.7rem"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},loginBtn:{fontSize:"1.4rem"},purple:{color:e.palette.getContrastText(p.a[400]),backgroundColor:p.a[400],width:e.spacing(5),height:e.spacing(5),fontSize:"1.8rem",fontWeight:"bold"},mainTitle:{textAlign:"center"}}}));function f(){var e=g();return Object(v.jsx)("div",{className:e.root,children:Object(v.jsx)(b.a,{position:"fixed",children:Object(v.jsxs)(h.a,{children:[Object(v.jsx)(O.a,{variant:"h4",className:e.title,children:Object(v.jsx)("a",{href:"/",children:Object(v.jsx)(x.a,{className:e.purple,children:"NX"})})}),Object(v.jsx)(u.a,{color:"inherit",variant:"outlined",className:e.loginBtn,children:"Login"})]})})})}var N=a(273),y=a(270),k=a(30),w=a(36),S=a.n(w),E=a(45),C="GET_ARTICLES",T="GET_ARTICLES_ERROR",R="GET_ARTICLES",L="GET_ARTICLES_ERROR",B="GET_PROJECTS",_="GET_PROJECTS_ERROR",M=a(38),A=a.n(M),G=a(269),I=a(271),J=a(25),W=a.n(J),P=function(){return Object(v.jsx)("div",{className:"",children:[1,2,3].map((function(e){return Object(v.jsxs)(G.a,{lg:12,md:12,sm:12,children:[Object(v.jsx)(y.a,{lg:4,md:4,sm:4,children:Object(v.jsx)("div",{className:"article-img",children:Object(v.jsx)(W.a,{height:"100%",className:"skeleton-img"})})}),Object(v.jsxs)(y.a,{lg:8,md:8,sm:8,children:[Object(v.jsxs)(I.a,{children:[Object(v.jsx)(O.a,{gutterBottom:!0,variant:"h4",className:"mb-4",children:Object(v.jsx)(W.a,{})}),Object(v.jsx)(O.a,{color:"textSecondary",className:"article-text",children:Object(v.jsx)(W.a,{count:5})})]}),Object(v.jsx)(I.a,{children:Object(v.jsx)(O.a,{gutterBottom:!0,children:Object(v.jsx)(W.a,{})})})]})]},e)}))})},D=a(272),q=a(63),H=a.n(q),z=function(e){var t=e.article;return Object(v.jsxs)(G.a,{lg:12,md:12,sm:12,children:[Object(v.jsx)(y.a,{lg:4,md:4,sm:4,children:Object(v.jsx)(D.a,{className:"article-img",image:t.image,title:"Paella dish"})}),Object(v.jsxs)(y.a,{lg:8,md:8,sm:8,children:[Object(v.jsxs)(I.a,{children:[Object(v.jsx)(O.a,{gutterBottom:!0,variant:"h4",children:t.title}),Object(v.jsx)(O.a,{color:"textSecondary",className:"article-text",children:H()(t.content.substr(0,250)+"...")})]}),Object(v.jsx)(I.a,{children:Object(v.jsxs)(O.a,{gutterBottom:!0,children:["Edited by ",t.author," on ",function(e){var t=e.split("T")[0].split("-");return"".concat(["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"][Number(t[1])-1]," ").concat(t[2],", ").concat(t[0])}(t.date)]})})]})]},t._id)};function F(){var e=Object(k.c)(),t=Object(k.d)((function(e){return e.articlesList})),a=t.loading,n=t.error,s=t.posts;return Object(c.useEffect)((function(){e(function(){var e=Object(E.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("https://morning-thicket-92126.herokuapp.com/api/v1/blogs");case 3:a=e.sent,t({type:C,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:T,payload:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(v.jsx)("div",{className:"articles",children:Object(v.jsx)(N.a,{children:Object(v.jsx)(y.a,{children:a?Object(v.jsx)(P,{}):n?n.message:s.data.articles?s.data.articles.map((function(e,t){return Object(v.jsx)(r.b,{to:"/blogs/"+e._id,className:"article-link",children:Object(v.jsx)(z,{article:e},e._id)},t)})):Object(v.jsx)(P,{})})})})}var Q=a(274),X=a(275),K=a(276),Y=a(65),U=a(121),V=a.n(U),Z=a(122),$=a.n(Z),ee=a(123),te=a.n(ee),ae=a(124),ce=a.n(ae),ne=a(125),se=a.n(ne),re=Object(m.a)((function(e){return{grey:{color:e.palette.getContrastText(Y.a[900]),backgroundColor:Y.a[900],marginRight:"2rem"}}}));var ie=function(){var e=re(),t=[{icon:Object(v.jsx)(V.a,{}),link:"https://www.facebook.com/ndagijimana.xavier.1"},{icon:Object(v.jsx)($.a,{}),link:"https://twitter.com/ncutixavier"},{icon:Object(v.jsx)(te.a,{}),link:"https://www.instagram.com/ncutixavier/?hl=en"},{icon:Object(v.jsx)(ce.a,{}),link:"http://linkedin.com/in/ncuti-xavier-979284197"},{icon:Object(v.jsx)(se.a,{}),link:"https://github.com/ncutixavier"}];return Object(v.jsx)("div",{className:"icons",children:t.map((function(t,a){return Object(v.jsx)("a",{rel:"noreferrer",href:t.link,target:"_blank",children:Object(v.jsx)(x.a,{className:e.grey,children:t.icon})})}))})};function le(){return Object(v.jsxs)("div",{className:"footer",children:[Object(v.jsxs)(Q.a,{className:"subscribe",children:[Object(v.jsx)(X.a,{type:"email",name:"email",id:"email",placeholder:"Email",className:"email"}),Object(v.jsx)(K.a,{color:"primary",children:"subscribe"})]}),Object(v.jsx)(ie,{})]})}a(78);var oe=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(f,{}),Object(v.jsx)(F,{}),Object(v.jsx)(le,{})]})}}]),a}(c.Component),je=oe,de=a(46),me=a(49),be=a(37),he=function(e){var t=e.split("T")[0].split("-");return"".concat(["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"][Number(t[1])-1]," ").concat(t[2],", ").concat(t[0])},Oe=a(277),ue=a(296);function xe(e){return Object(v.jsx)("div",{children:Object(v.jsx)(G.a,{lg:12,md:12,sm:12,children:Object(v.jsxs)(y.a,{children:[Object(v.jsx)(Oe.a,{variant:"rect",width:"100%",height:350,animation:"wave"}),Object(v.jsx)(ue.a,{my:2,lineHeight:2,children:Object(v.jsx)(O.a,{variant:"h2",children:Object(v.jsx)(Oe.a,{})})}),Object(v.jsx)(ue.a,{my:2,lineHeight:2,children:Object(v.jsxs)(O.a,{my:4,children:[Object(v.jsx)(Oe.a,{}),Object(v.jsx)(Oe.a,{}),Object(v.jsx)(Oe.a,{}),Object(v.jsx)(Oe.a,{}),Object(v.jsx)(Oe.a,{width:"60%"})]})}),Object(v.jsx)(ue.a,{my:2,lineHeight:2,children:Object(v.jsxs)(O.a,{my:4,children:[Object(v.jsx)(Oe.a,{}),Object(v.jsx)(Oe.a,{}),Object(v.jsx)(Oe.a,{}),Object(v.jsx)(Oe.a,{}),Object(v.jsx)(Oe.a,{width:"20%"})]})}),Object(v.jsx)(ue.a,{my:2,lineHeight:2,children:Object(v.jsxs)(O.a,{my:4,children:[Object(v.jsx)(Oe.a,{}),Object(v.jsx)(Oe.a,{}),Object(v.jsx)(Oe.a,{}),Object(v.jsx)(Oe.a,{}),Object(v.jsx)(Oe.a,{width:"40%"})]})}),Object(v.jsx)(ue.a,{my:2,lineHeight:2,children:Object(v.jsx)(O.a,{my:4,children:Object(v.jsx)(Oe.a,{})})})]})})})}var pe=a(126),ve=a.n(pe),ge=a(281),fe=a(66),Ne=a(298),ye=a(282),ke=a(283),we=a(286),Se=a(284),Ee=a(285);function Ce(e){var t={};return e.name.trim()||(t.name="Name is required"),e.comment.trim()||(t.comment="Comment is required"),t}var Te=a(287),Re=a(278),Le=a(279),Be=a(280),_e=Object(m.a)((function(e){return{large:{width:e.spacing(25),height:e.spacing(25)},media:{height:350,width:"100%",borderRadius:"5px",margin:"10px"},commentBtn:{fontSize:"1.3rem"},pink:{color:e.palette.getContrastText(fe.a[500]),backgroundColor:fe.a[500]},root:{maxWidth:345}}}));function Me(e){var t=_e(),a=Object(c.useState)({name:"",comment:""}),n=Object(be.a)(a,2),s=n[0],i=n[1],l=Object(c.useState)({}),o=Object(be.a)(l,2),j=o[0],d=o[1],m=Object(c.useState)(!1),b=Object(be.a)(m,2),h=b[0],p=b[1],g=function(e){var t=e.target,a=t.name,c=t.value;i(Object(me.a)(Object(me.a)({},s),{},Object(de.a)({},a,c)))},f=Object(k.c)(),w=Object(k.d)((function(e){return e.article})),C=w.loading,T=w.error,B=w.post;Object(c.useEffect)((function(){var t;f((t=e.id,function(){var e=Object(E.a)(S.a.mark((function e(a){var c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("https://morning-thicket-92126.herokuapp.com/api/v1/blogs/".concat(t));case 3:c=e.sent,a({type:R,payload:c.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({type:L,payload:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))}));var _=Object(c.useState)(!1),M=Object(be.a)(_,2),J=M[0],W=M[1],P=function(){return W(!J)};return Object(v.jsx)("div",{className:"articles",children:Object(v.jsx)(N.a,{children:Object(v.jsx)(y.a,{children:C?Object(v.jsx)(xe,{}):T?Object(v.jsx)("div",{class:"error-message",children:Object(v.jsx)(G.a,{className:"back-btn",children:Object(v.jsxs)(Re.a,{className:t.root,children:[Object(v.jsx)(Re.a,{children:Object(v.jsx)(I.a,{children:Object(v.jsx)(O.a,{variant:"h3",component:"body2",children:"NOT FOUND"})})}),Object(v.jsx)(Le.a,{children:Object(v.jsx)(I.a,{children:Object(v.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"The article you're trying to retrieve is no longer existed. Please go back to access existed articles."})})}),Object(v.jsx)(Be.a,{children:Object(v.jsx)("a",{href:"/blogs",children:Object(v.jsx)("span",{className:"back-btn-div",children:"Go Back"})})})]})})}):B.data.article?Object(v.jsxs)("div",{children:[Object(v.jsx)(G.a,{className:"back-btn",children:Object(v.jsx)(r.b,{to:"/blogs",children:Object(v.jsxs)("div",{className:"back-btn-div",children:[Object(v.jsx)("span",{className:"back-arrow",children:Object(v.jsx)(ve.a,{})}),Object(v.jsx)("span",{children:"Back"})]})})}),Object(v.jsxs)(G.a,{lg:12,md:12,sm:12,children:[Object(v.jsx)(D.a,{className:t.media,image:B.data.article.image,title:"Paella dish"}),Object(v.jsxs)(I.a,{children:[Object(v.jsx)(O.a,{gutterBottom:!0,variant:"h2",className:"full-article-title ma-5",children:B.data.article.title}),Object(v.jsx)("div",{className:"full-article-text",children:H()(B.data.article.content)})]}),Object(v.jsx)(I.a,{children:Object(v.jsxs)(O.a,{gutterBottom:!0,children:["Edited by ",B.data.article.author," on"," ",he(B.data.article.date)]})})]}),Object(v.jsx)(G.a,{children:Object(v.jsxs)(y.a,{className:"py-2",children:[Object(v.jsx)(ue.a,{color:"text.primary",children:Object(v.jsx)(O.a,{gutterBottom:!0,variant:"h3",className:"full-article-title ma-5",children:"Comments"})}),Object(v.jsx)("div",{className:"my-5",children:B.data.article.comments.map((function(e,a){return Object(v.jsx)(ge.a,{className:"card-header",avatar:Object(v.jsx)(x.a,{"aria-label":"recipe",className:t.pink,children:e.name.charAt(0).toUpperCase()}),title:e.name,subheader:e.comment},a)}))}),Object(v.jsx)(u.a,{variant:"contained",color:"primary",disableElevation:!0,className:t.commentBtn,onClick:P,children:"Leave a comment"}),Object(v.jsxs)(Ne.a,{isOpen:J,toggle:P,className:"mt-5",centered:!0,children:[Object(v.jsx)(ye.a,{toggle:P,children:"Send your comment"}),Object(v.jsxs)(Q.a,{onSubmit:function(t){t.preventDefault(),d(Ce(s)),p(!0),0===Object.keys(Ce(s)).length?A.a.patch("https://morning-thicket-92126.herokuapp.com/api/v1/blogs/comment/".concat(e.id),s).then((function(e){e&&(p(!1),s.name="",s.comment="",W(!J),window.location.reload())})).catch((function(e){e&&p(!1)})):(p(!1),console.log("Error occurred"))},children:[Object(v.jsxs)(ke.a,{children:[Object(v.jsxs)(Se.a,{children:[Object(v.jsx)(Ee.a,{for:"name",children:"Name"}),Object(v.jsx)(X.a,{type:"text",id:"name",name:"name",value:s.name,onChange:g}),j.name&&Object(v.jsx)("p",{className:"error",children:j.name})]}),Object(v.jsxs)(Se.a,{children:[Object(v.jsx)(Ee.a,{for:"name",children:"Comment"}),Object(v.jsx)(X.a,{type:"textarea",name:"comment",id:"comment",value:s.comment,onChange:g}),j.comment&&Object(v.jsx)("p",{className:"error",children:j.comment})]})]}),Object(v.jsxs)(we.a,{children:[Object(v.jsxs)(u.a,{color:"primary",type:"submit",variant:"contained",className:"mr-3",children:[Object(v.jsx)("span",{className:"mr-3",children:"Send"}),h&&Object(v.jsx)(Te.a,{color:"light",style:{width:"1rem",height:"1rem"}})]}),Object(v.jsx)(u.a,{color:"secondary",onClick:P,variant:"contained",children:"Cancel"})]})]})]})]})})]}):Object(v.jsx)(xe,{})})})})}var Ae=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.match.params.id;return Object(v.jsxs)("div",{className:"article-by-id",children:[Object(v.jsx)(f,{}),Object(v.jsx)(Me,{id:e}),Object(v.jsx)(le,{})]})}}]),a}(c.Component),Ge=Ae,Ie=function(){var e=Object(d.e)();return Object(c.useEffect)((function(){setTimeout((function(){e.push("/blogs")}),1e3)}),[e]),Object(v.jsx)("div",{className:"homepage",children:Object(v.jsxs)("div",{id:"animate-bg",children:[Object(v.jsx)("div",{id:"stars"}),Object(v.jsx)("div",{id:"stars2"}),Object(v.jsx)("div",{id:"stars3"}),Object(v.jsx)("div",{id:"title",children:Object(v.jsx)("div",{children:Object(v.jsx)("a",{href:"/blogs",children:"WELCOME TO MY BLOG"})})})]})})},Je=a.p+"static/media/wave.d3b20ed5.svg",We=a(128),Pe=a.n(We),De=a(42),qe=a(288),He=a(289),ze=a(290),Fe=a(291),Qe=a(292),Xe=a(293),Ke=a(127),Ye=a.n(Ke),Ue=Object(m.a)((function(e){return{purple:{color:e.palette.getContrastText(p.a[300]),backgroundColor:p.a[300],width:e.spacing(5),height:e.spacing(5),fontSize:"1.8rem",fontWeight:"bold"},purpleToggle:{color:"#4dd0e1",fontSize:"2rem"}}})),Ve=function(e){var t=Ue(),a=Object(c.useState)(!1),n=Object(be.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(0),l=Object(be.a)(i,2),o=l[0],j=l[1],d=Object(c.useState)(""),m=Object(be.a)(d,2),b=m[0],h=m[1];Object(c.useEffect)((function(){function e(){var e=window.pageYOffset;e>200?(h("dark"),document.querySelector(".down-btn").style.display="none"):(h(""),document.querySelector(".down-btn").style.display="inline"),j(e<=0?0:e)}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[o]);return console.log(":::",b),Object(v.jsx)("div",{name:"home",children:Object(v.jsxs)(qe.a,{fixed:"top",color:b,light:!0,expand:"md",children:[Object(v.jsx)(O.a,{variant:"h4",className:"logo",children:Object(v.jsx)("a",{href:"/",children:Object(v.jsx)(x.a,{className:t.purple,children:"NX"})})}),Object(v.jsx)(He.a,{onClick:function(){return r(!s)},children:Object(v.jsx)("span",{className:"navbar-toggle-icon",children:Object(v.jsx)(Ye.a,{className:t.purpleToggle})})}),Object(v.jsx)(ze.a,{isOpen:s,navbar:!0,children:Object(v.jsxs)(Fe.a,{className:"me-auto",navbar:!0,children:[[{name:"Home",offset:-150,to:"home"},{name:"About",offset:-70,to:"about"},{name:"Works",offset:-40,to:"work"},{name:"Contact",offset:-70,to:"contact"}].map((function(e,t){return Object(v.jsx)(Qe.a,{children:Object(v.jsx)(De.Link,{className:"nav-link",to:e.to,spy:!0,smooth:!0,offset:e.offset,duration:1e3,children:e.name})},t)})),Object(v.jsx)(Qe.a,{children:Object(v.jsx)(Xe.a,{href:"/blogs",children:"Blog"})})]})})]})})},Ze=function(){return Object(v.jsxs)("div",{className:"home",children:[Object(v.jsx)(Ve,{}),Object(v.jsx)("div",{className:"down-btn-cont",children:Object(v.jsx)(De.Link,{className:"down-btn",to:"about",spy:!0,smooth:!0,offset:-70,duration:2e3,children:Object(v.jsx)(Pe.a,{className:"expand"})})}),Object(v.jsx)(N.a,{children:Object(v.jsx)("div",{className:"home-content justify-content-center",children:Object(v.jsxs)("div",{lg:6,md:12,className:"home-intro",children:[Object(v.jsx)("div",{className:"display-4 home-greet mb-3",children:Object(v.jsx)("span",{children:"\ud83d\udc4b"})}),Object(v.jsx)("div",{className:"home-name",children:"I'm Xavier Ncuti"}),Object(v.jsx)("div",{className:"h3 mb-4",children:"A software developer"}),Object(v.jsx)("div",{className:"home-btn-group mt-5 d-flex",children:Object(v.jsx)(De.Link,{to:"contact",spy:!0,smooth:!0,offset:-70,duration:1e3,children:Object(v.jsx)(u.a,{className:"home-btn-hire mr-4",variant:"contained",color:"black",disableElevation:!0,children:"Get in touch"})})})]})})}),Object(v.jsx)("img",{src:Je,alt:"",className:"img-wave"})]})},$e=a(294),et=a.p+"static/media/about_img.05443734.png",tt=Object(m.a)({media:{height:350,width:"100%"}}),at=function(){var e=tt();return Object(v.jsx)("div",{className:"about",name:"about",children:Object(v.jsx)(N.a,{children:Object(v.jsxs)(G.a,{className:"",children:[Object(v.jsx)(y.a,{lg:6,md:12,children:Object(v.jsx)(D.a,{className:e.media,image:et,title:""})}),Object(v.jsxs)(y.a,{lg:6,md:12,className:"about-content-text",children:[Object(v.jsx)("div",{className:"display-4 mb-3",children:"Who I am?"}),Object(v.jsx)("div",{className:"about-text",children:Object(v.jsxs)("p",{children:["I'm a software engineer based in Kigali, Rwanda. I'm currently available for freelancer work. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then"," ",Object(v.jsx)("a",{href:"mailto:ncuti60@gmail.com",children:"get in touch."})]})}),Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("div",{className:"display-4 mb-4",children:"My skills"}),Object(v.jsx)("div",{className:"skills",children:[{id:1,name:"Vue JS, Vuex & Nuxt JS",value:85},{id:2,name:"React JS & Redux",value:82},{id:3,name:"Node JS & Express",value:84},{id:4,name:"Mongo DB, PostgreSQL and SQLite",value:86}].map((function(e){return Object(v.jsxs)("div",{className:"skill-item",children:[Object(v.jsx)("p",{className:"skill-title",children:e.name}),Object(v.jsx)($e.a,{color:"info",value:e.value})]},e.id)}))})]}),Object(v.jsx)("div",{className:"service-btn",children:Object(v.jsx)(De.Link,{className:"s-button",to:"service",spy:!0,smooth:!0,offset:-50,duration:1e3,children:"Look my services"})})]})]})})})},ct=a(130),nt=a.n(ct),st=a(131),rt=a.n(st),it=a(129),lt=a.n(it),ot=[{id:1,image:"http://",text:"Web app for the Internet either static or dynamic web application.",title:"Web Development",icon:Object(v.jsx)(lt.a,{className:"ss-icon"})},{id:2,image:"http://",icon:Object(v.jsx)(nt.a,{className:"ss-icon"}),title:"Mobile Application",text:"Software applications that run on a mobile device."},{id:3,image:"http://",icon:Object(v.jsx)(rt.a,{className:"ss-icon"}),title:"Desktop Application",text:"Software applications that run natively on operating systems like Windows."}],jt=function(){var e=ot.map((function(e,t){return Object(v.jsxs)(y.a,{className:"s-card",sm:"12",md:"4",children:[Object(v.jsxs)("div",{className:"face front",children:[Object(v.jsx)("div",{className:"s-icon text-center",children:e.icon}),Object(v.jsx)("h2",{className:"text-center",children:e.title})]}),Object(v.jsx)("div",{className:"s-text face back",children:Object(v.jsx)("p",{children:e.text})})]},t)}));return Object(v.jsx)("div",{className:"service",name:"sevice",children:Object(v.jsxs)(N.a,{children:[Object(v.jsxs)("div",{className:"service-title",children:["What can ",Object(v.jsx)("span",{children:"I do for you?"})]}),Object(v.jsx)(G.a,{className:"no-hide mx-0",children:e})]})})},dt=function(){return Object(v.jsx)("div",{className:"ft",children:Object(v.jsx)(N.a,{children:Object(v.jsxs)(G.a,{className:"mx-0",style:{alignItems:"center"},children:[Object(v.jsxs)(y.a,{children:["\xa9 ",(new Date).getFullYear()," ncutixavier"]}),Object(v.jsx)(y.a,{children:Object(v.jsx)(ie,{})})]})})})},mt=function(){return Object(v.jsx)("div",{className:"",children:Object(v.jsx)(G.a,{className:"mx-0",children:[1,2,3,4].map((function(e){return Object(v.jsx)(y.a,{md:"3",sm:"12",className:"s-col mb-5",children:Object(v.jsxs)(J.SkeletonTheme,{color:"#202020",highlightColor:"#444",children:[Object(v.jsx)(W.a,{height:140}),Object(v.jsx)(O.a,{gutterBottom:!0,variant:"h5",className:"mt-3 px-3",children:Object(v.jsx)(W.a,{})}),Object(v.jsx)(O.a,{color:"textSecondary",className:"project-text",children:Object(v.jsx)(W.a,{count:2})}),Object(v.jsx)(W.a,{height:30})]})},e)}))})})},bt=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentWillMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"project service",name:"work",children:Object(v.jsxs)(N.a,{children:[Object(v.jsxs)("div",{className:"service-title",children:["Featured ",Object(v.jsx)("span",{children:"Projects"})]}),this.props.projects.loading?Object(v.jsx)(mt,{}):0!==this.props.projects.error.length?this.props.projects.error.message:this.props.projects.projects.projects?Object(v.jsx)(G.a,{className:"mx-0",children:this.props.projects.projects.projects.map((function(e,t){return Object(v.jsxs)(y.a,{className:"s-col mb-5",md:"4",sm:"12",children:[Object(v.jsx)(D.a,{className:"card-image",image:"https://morning-thicket-92126.herokuapp.com/images/"+e.image,title:"Contemplative Reptile"}),Object(v.jsx)("h3",{className:"text-center mt-3",children:e.title}),Object(v.jsx)("p",{children:e.description}),Object(v.jsx)("div",{className:"language",children:Object(v.jsx)("span",{children:e.languages})}),Object(v.jsx)("a",{rel:"noreferrer",href:e.link,className:"more-btn",target:"_blank",children:"More"})]},t)}))}):Object(v.jsx)(mt,{})]})})}}]),a}(c.Component),ht=Object(k.b)((function(e){return{projects:e.projectsList}}),{getProjects:function(){return function(){var e=Object(E.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("https://morning-thicket-92126.herokuapp.com/api/v1/projects");case 3:a=e.sent,t({type:B,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:_,payload:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})(bt),Ot=a(295),ut=a(67),xt=a.n(ut),pt=a(132),vt=a.n(pt),gt=a(133),ft=a.n(gt),Nt=a(134),yt=a.n(Nt),kt=a(64),wt=a.n(kt);Object(kt.init)("user_8Q8lp87WvxGxE6xiXQ68f");var St=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).change=function(e){c.setState(Object(de.a)({},e.target.name,e.target.value))},c.validate=function(){var e=!1,t={nameError:"",emailError:"",messageError:"",nameErrorStatus:!1,emailErrorStatus:!1,messageErrorStatus:!1};return-1===c.state.email.indexOf("@")&&(e=!0,t.emailErrorStatus=!0,t.emailError="Provide a valid email"),0===c.state.name.length&&(e=!0,t.nameErrorStatus=!0,t.nameError="Name is required!"),0===c.state.message.length&&(e=!0,t.messageErrorStatus=!0,t.messageError="Message is required!"),c.setState(Object(me.a)(Object(me.a)({},c.state),t)),e},c.state={name:"",email:"",message:"",nameError:"",emailError:"",messageError:"",nameErrorStatus:!1,emailErrorStatus:!1,messageErrorStatus:!1},c}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();if(!this.validate()){document.querySelector(".send-btn").innerHTML="sending...";try{wt.a.send("service_ikkj11e","template_u4z6v9l",{name:this.state.name,email:this.state.email,message:this.state.message}).then((function(e){xt()({title:"Message has been sent!",text:"Thank you for your message, I will get back to you shortly!",icon:"success",button:"Okay"}),document.querySelector(".send-btn").innerHTML="send",t.setState({name:""}),t.setState({email:""}),t.setState({message:""})}),(function(e){xt()({title:"Errror",text:"Error occured while sending email, please try again",icon:"error",button:"Okay"})}))}catch(a){xt()({title:"Errror",text:"Error occured while sending email, please try again",icon:"error",button:"Okay"})}}}},{key:"render",value:function(){var e=this,t=[{id:1,text:"Email",value:"ncuti60@gmail.com",icon:Object(v.jsx)(vt.a,{})},{id:2,text:"Address",value:"KG 27 Ave, Kigali, Rwanda",icon:Object(v.jsx)(ft.a,{})},{id:3,text:"Phone",value:"(250) 783 573 335",icon:Object(v.jsx)(yt.a,{})}];return Object(v.jsx)("div",{className:"contact",name:"contact",children:Object(v.jsxs)(N.a,{children:[Object(v.jsxs)("div",{className:"contact-title",children:["Get in ",Object(v.jsx)("span",{children:"touch"})]}),Object(v.jsx)(G.a,{children:t.map((function(e,t){return Object(v.jsx)(y.a,{md:4,sm:12,className:"my-4",children:Object(v.jsxs)("div",{className:"c-contact",children:[Object(v.jsx)("div",{className:"c-icon mr-4",children:e.icon}),Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("div",{className:"h2",children:e.text}),Object(v.jsx)("div",{className:"h4",children:e.value})]})]})},t)}))}),Object(v.jsx)(Q.a,{onSubmit:function(t){return e.handleSubmit(t)},children:Object(v.jsxs)("div",{className:"field-input",children:[Object(v.jsx)("div",{className:"h1 my-5",children:"Send me a quick message!"}),Object(v.jsxs)(Se.a,{className:"mb-4",children:[Object(v.jsx)(X.a,{type:"text",invalid:this.state.nameErrorStatus,name:"name",value:this.state.name,onChange:function(t){return e.change(t)},placeholder:"Name"}),Object(v.jsx)(Ot.a,{children:this.state.nameError})]}),Object(v.jsxs)(Se.a,{className:"mb-4",children:[Object(v.jsx)(X.a,{type:"email",invalid:this.state.emailErrorStatus,name:"email",value:this.state.email,onChange:function(t){return e.change(t)},placeholder:"Email"}),Object(v.jsx)(Ot.a,{children:this.state.emailError})]}),Object(v.jsxs)(Se.a,{className:"mb-4",children:[Object(v.jsx)(X.a,{invalid:this.state.messageErrorStatus,name:"message",type:"textarea",value:this.state.message,onChange:function(t){return e.change(t)},placeholder:"Message"}),Object(v.jsx)(Ot.a,{children:this.state.messageError})]}),Object(v.jsx)(K.a,{color:"secondary",className:"send-btn",block:!0,children:"Send"})]})})]})})}}]),a}(c.Component),Et=(a(242),function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(Ze,{}),Object(v.jsx)(at,{}),Object(v.jsx)(jt,{}),Object(v.jsx)(ht,{}),Object(v.jsx)(St,{}),Object(v.jsx)(dt,{})]})}),Ct=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(v.jsxs)(r.a,{children:[Object(v.jsx)(d.a,{path:"/home",exact:!0,component:Ie}),Object(v.jsx)(d.a,{path:"/",exact:!0,component:Et}),Object(v.jsx)(d.a,{path:"/blogs",exact:!0,component:je}),Object(v.jsx)(d.a,{path:"/blogs/:id",exact:!0,component:Ge})]})}}]),a}(c.Component),Tt=Ct,Rt=a(48),Lt=a(135),Bt=a(136),_t={posts:[],loading:!0,error:""};var Mt={projects:[],loading:!0,error:""};var At={post:[],loading:!0,error:""};var Gt=Object(Rt.combineReducers)({articlesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{posts:t.payload,loading:!1,error:""};case T:return{loading:!1,error:t.payload,posts:[]};default:return e}},projectsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return{projects:t.payload,loading:!1,error:""};case _:return{loading:!1,error:t.payload,projects:[]};default:return e}},article:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return{post:t.payload,loading:!1,error:""};case L:return{loading:!1,error:t.payload,post:[]};default:return e}}}),It=Gt,Jt=a(137),Wt=[Lt.a,Jt.a],Pt=Object(Rt.createStore)(It,{},Object(Bt.composeWithDevTools)(Rt.applyMiddleware.apply(void 0,Wt)));a(243),a(244);s.a.render(Object(v.jsx)(k.a,{store:Pt,children:Object(v.jsx)(r.a,{children:Object(v.jsx)(Tt,{})})}),document.getElementById("root"))},78:function(e,t,a){}},[[245,1,2]]]);
//# sourceMappingURL=main.8ad14097.chunk.js.map