(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){e.exports={container:"Hello_container__3ySnt",messageblue:"Hello_messageblue__OrbTv",messagecontent:"Hello_messagecontent__cm_Bm",messagetimestampright:"Hello_messagetimestampright__tZGlX",messagetimestampleft:"Hello_messagetimestampleft__3kxbl"}},13:function(e,t,n){},27:function(e,t,n){e.exports=n(40)},32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(21),i=n.n(r),c=n(7),o=(n(32),n(11)),u=n.n(o);var m=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:u.a.container},l.a.createElement("div",{className:u.a.messageblue},l.a.createElement("h4",{className:u.a.messagecontent},e.name," ",e.surname),l.a.createElement("p",null,"How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? "),l.a.createElement("div",{className:u.a.messagetimestampleft},"17:15"))),l.a.createElement("img",{src:"https://cdn.ananasposter.ru/image/cache/catalog/poster/film/99/1333-1000x830.jpg"}))},s=n(8),E=n.n(s),g=function(e){return l.a.createElement("div",null,l.a.createElement("p",{id:e.id}," ",e.n," ",e.p))},d=function(e){var t=e.example.map((function(t){return l.a.createElement("ul",null,l.a.createElement("li",{className:E.a.todolist},l.a.createElement(g,{id:t.id,key:t.key,n:t.n}),l.a.createElement("button",{className:E.a.firstBtn,onClick:function(){e.removeExample(t.id)}},"x")))}));return l.a.createElement("div",{className:E.a.all},l.a.createElement("span",{className:E.a.todolist2},t),l.a.createElement("div",{className:E.a.btnAll},l.a.createElement("button",{onClick:function(){e.changeFilter("all")}},"All"),l.a.createElement("button",{onClick:function(){e.changeFilter("hight")}},"HIGHT"),l.a.createElement("button",{onClick:function(){e.changeFilter("middle")}},"Middle"),l.a.createElement("button",{onClick:function(){e.changeFilter("low")}},"Low")))},f=n(25),p=n(22),v=n(26),h=n(13),b=n.n(h);var _=function(e){var t=e.onEnter,n=e.error,a=Object(v.a)(e,["onEnter","error"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",Object.assign({className:b.a.inputNya,onKeyPress:function(e){(e.charCode=13)&&t&&t()}&&e.onKeyPressMethod},a,{type:"text"})),n?l.a.createElement("span",null,n):null)};var H=function(e){return l.a.createElement("button",Object.assign({className:b.a.buttonNya},e)," Click")};var k=function(e){alert("Hello "+e)},y=function(e){var t=Object(a.useState)([]),n=Object(c.a)(t,2),r=n[0],i=n[1],o=function(){if(""!=e.value){k(e.value);var t={id:Object(p.v1)(),name:e.value};i([].concat(Object(f.a)(r),[t])),e.setTitle("")}else alert("Please fill in the input")},u=r.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("p",null,e.name),l.a.createElement("button",{onClick:function(){!function(e){var t=r.filter((function(t){return t.id!=e}));i(t)}(e.id)}},"Remove"))}));return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(_,{onKeyPressMethod:function(e){13===e.charCode&&o()},type:"text",error:"error",onChange:function(t){e.setTitle(t.currentTarget.value)},value:e.value}),l.a.createElement(H,{onClick:o}),l.a.createElement("span",null,u)))};var w=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,e.message))};var j=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,e.message))};var O=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,e.message))},T=n(23),x=n(1),N=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([{id:1,key:55,n:"Work",p:"Hight"},{id:2,key:55,n:"Chill",p:"Middle"},{id:3,key:55,n:"Games",p:"Low"},{id:4,key:55,n:"React",p:"Hight"},{id:5,key:55,n:"HTML",p:"low"}]),o=Object(c.a)(i,2),u=o[0],s=o[1],E=Object(a.useState)("all"),g=Object(c.a)(E,2),f=g[0],p=g[1];var v=u;return"hight"===f&&(v=u.filter((function(e){return"Hight"===e.p}))),"middle"===f&&(v=u.filter((function(e){return"Middle"===e.p}))),"low"===f&&(v=u.filter((function(e){return"Low"===e.p}))),l.a.createElement(T.a,null,l.a.createElement("div",null,l.a.createElement(m,{name:"Artemy",surname:"Andruschak"}),l.a.createElement("div",null,l.a.createElement(d,{example:v,removeExample:function(e){var t=u.filter((function(t){return t.id!==e}));s(t)},changeFilter:function(e){p(e)}})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(y,{value:n,setTitle:r})),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement(x.a,{path:"/juniorPlus",render:function(){return l.a.createElement(j,{message:"JuniorPlus"})}}),l.a.createElement(x.a,{path:"/junior",render:function(){return l.a.createElement(w,{message:"Junior"})}}),l.a.createElement(x.a,{path:"/preJunior",render:function(){return l.a.createElement(O,{message:"PreJunior"})}})))};i.a.render(l.a.createElement(N,null),document.getElementById("root"))},8:function(e,t,n){e.exports={todolist:"ThingsToDo_todolist__OT9Bx",firstBtn:"ThingsToDo_firstBtn__nbGq5",btnAll:"ThingsToDo_btnAll__2v_hR"}}},[[27,1,2]]]);
//# sourceMappingURL=main.7e82c913.chunk.js.map