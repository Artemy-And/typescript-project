(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){e.exports=n(22)},19:function(e,t,n){},2:function(e,t,n){e.exports={todolist:"ThingsToDo_todolist__OT9Bx",firstBtn:"ThingsToDo_firstBtn__nbGq5",btnAll:"ThingsToDo_btnAll__2v_hR"}},22:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(10),r=n.n(i),c=n(1),o=(n(19),n(4)),m=n.n(o);var u=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:m.a.container},l.a.createElement("div",{className:m.a.messageblue},l.a.createElement("h4",{className:m.a.messagecontent},e.name," ",e.surname),l.a.createElement("p",null,"How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? "),l.a.createElement("div",{className:m.a.messagetimestampleft},"17:15"))),l.a.createElement("img",{src:"https://cdn.ananasposter.ru/image/cache/catalog/poster/film/99/1333-1000x830.jpg"}))},s=n(2),g=n.n(s),d=function(e){return l.a.createElement("div",null,l.a.createElement("p",{id:e.id}," ",e.n," ",e.p))},E=function(e){var t=e.example.map((function(t){return l.a.createElement("ul",null,l.a.createElement("li",{className:g.a.todolist},l.a.createElement(d,{id:t.id,key:t.key,n:t.n}),l.a.createElement("button",{className:g.a.firstBtn,onClick:function(){e.removeExample(t.id)}},"x")))}));return l.a.createElement("div",{className:g.a.all},l.a.createElement("span",{className:g.a.todolist2},t),l.a.createElement("div",{className:g.a.btnAll},l.a.createElement("button",{onClick:function(){e.changeFilter("all")}},"All"),l.a.createElement("button",{onClick:function(){e.changeFilter("hight")}},"HIGHT"),l.a.createElement("button",{onClick:function(){e.changeFilter("middle")}},"Middle"),l.a.createElement("button",{onClick:function(){e.changeFilter("low")}},"Low")))},f=n(12),p=n(11),v=n(13),b=n(6),h=n.n(b);var _=function(e){var t=e.onEnter,n=e.error,a=Object(v.a)(e,["onEnter","error"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",Object.assign({className:h.a.inputNya,onKeyPress:function(e){(e.charCode=13)&&t&&t()}&&e.onKeyPressMethod},a,{type:"text"})),n?l.a.createElement("span",null,n):null)};var H=function(e){return l.a.createElement("button",Object.assign({className:h.a.buttonNya},e)," Click")};var k=function(e){alert("Hello "+e)},y=function(e){var t=Object(a.useState)([]),n=Object(c.a)(t,2),i=n[0],r=n[1],o=function(){if(""!=e.value){k(e.value);var t={id:Object(p.v1)(),name:e.value};r([].concat(Object(f.a)(i),[t])),e.setTitle("")}else alert("Please fill in the input")},m=i.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("p",null,e.name),l.a.createElement("button",{onClick:function(){!function(e){var t=i.filter((function(t){return t.id!=e}));r(t)}(e.id)}},"Remove"))}));return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(_,{onKeyPressMethod:function(e){13===e.charCode&&o()},type:"text",error:"error",onChange:function(t){e.setTitle(t.currentTarget.value)},value:e.value}),l.a.createElement(H,{onClick:o}),l.a.createElement("span",null,m)))},w=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)([{id:1,key:55,n:"Work",p:"Hight"},{id:2,key:55,n:"Chill",p:"Middle"},{id:3,key:55,n:"Games",p:"Low"},{id:4,key:55,n:"React",p:"Hight"},{id:5,key:55,n:"HTML",p:"low"}]),o=Object(c.a)(r,2),m=o[0],s=o[1],g=Object(a.useState)("all"),d=Object(c.a)(g,2),f=d[0],p=d[1];var v=m;return"hight"===f&&(v=m.filter((function(e){return"Hight"===e.p}))),"middle"===f&&(v=m.filter((function(e){return"Middle"===e.p}))),"low"===f&&(v=m.filter((function(e){return"Low"===e.p}))),l.a.createElement("div",null,l.a.createElement(u,{name:"Artemy",surname:"Andruschak"}),l.a.createElement("div",null,l.a.createElement(E,{example:v,removeExample:function(e){var t=m.filter((function(t){return t.id!==e}));s(t)},changeFilter:function(e){p(e)}})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(y,{value:n,setTitle:i})),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)))};r.a.render(l.a.createElement(w,null),document.getElementById("root"))},4:function(e,t,n){e.exports={container:"Hello_container__3ySnt",messageblue:"Hello_messageblue__OrbTv",messagecontent:"Hello_messagecontent__cm_Bm",messagetimestampright:"Hello_messagetimestampright__tZGlX",messagetimestampleft:"Hello_messagetimestampleft__3kxbl"}},6:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.a1ad3cb9.chunk.js.map