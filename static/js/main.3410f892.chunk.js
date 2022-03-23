(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),l=(n(17),n(18),n(19),n(6)),i=n.n(l),u=n(3),s=n(8),m=n(11),d=n(1),f=c.a.memo((function(e){var t=e.onAddNewTodo,n=Object(a.useState)(""),r=Object(d.a)(n,2),o=r[0],l=r[1];return c.a.createElement("form",null,c.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:o,onChange:function(e){return l(e.target.value)},onKeyPress:function(e){if("Enter"===e.key){if(""!==o){var n={id:+new Date,title:o,completed:!1};t(n),l("")}e.preventDefault()}}}))})),p=n(4),h=n.n(p),E=c.a.memo((function(e){var t=e.todo,n=e.onChangeCompleted,r=e.onChangeTitle,o=e.onDestroy,l=Object(a.useState)(!1),i=Object(d.a)(l,2),u=i[0],s=i[1],m=Object(a.useState)(t.title),f=Object(d.a)(m,2),p=f[0],E=f[1],b=function(){if(p.trim()!==t.title.trim()){if(""===p.trim())return E(t.title),void s(!1);r(t.id,p),s(!1)}else s(!1)};return c.a.createElement("li",{className:h()({completed:t.completed,editing:u})},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",checked:t.completed,onChange:function(e){return n(t.id,e.target.checked)}}),c.a.createElement("label",{onDoubleClick:function(e){s(!0),e.preventDefault()}},t.title),c.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return o(t.id)}})),c.a.createElement("input",{type:"text",className:"edit",value:p,onChange:function(e){return E(e.target.value)},onKeyUp:function(e){e.preventDefault(),"Enter"===e.key&&(b(),e.preventDefault()),"Escape"===e.key&&(E(t.title),s(!1))},onBlur:b,ref:function(e){null!==e&&e.focus()}}))})),b=function(e){var t=e.todos,n=e.onChangeCompleted,a=e.onChangeTitle,r=e.onDestroy;return c.a.createElement("ul",{className:"todo-list"},t.map((function(e){return c.a.createElement(E,{key:e.id,todo:e,onChangeCompleted:n,onChangeTitle:a,onDestroy:r})})))},g=n(2),v=n.n(g),O=c.a.memo((function(e){var t=e.onswitchFilter,n=e.FILTERS,a=e.filter;return c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("a",{href:"#/",className:h()({selected:a===n.all}),onClick:function(){return t(n.all)}},"All")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/active",className:h()({selected:a===n.active}),onClick:function(){return t(n.active)}},"Active")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/completed",className:h()({selected:a===n.completed}),onClick:function(){return t(n.completed)}},"Completed")))}));O.propTypes={onswitchFilter:v.a.func.isRequired,FILTERS:v.a.shape({all:v.a.string.isRequired,active:v.a.string.isRequired,completed:v.a.string.isRequired}).isRequired,filter:v.a.string.isRequired};var j=function(){var e={all:"all",active:"active",completed:"completed"},t=localStorage.todosList?JSON.parse(localStorage.todosList):[],n=Object(a.useState)(!1),r=Object(d.a)(n,2),o=r[0],l=r[1],p=Object(a.useState)(e.all),h=Object(d.a)(p,2),E=h[0],g=h[1],v=Object(a.useState)(t),j=Object(d.a)(v,2),C=j[0],k=j[1];Object(a.useEffect)((function(){localStorage.todosList=JSON.stringify(C)}));var y=function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=C.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e})),k(a);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=C.filter((function(e){return!e.completed})),k(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=Object(a.useCallback)((function(t){switch(E){case e.active:return t.filter((function(e){return!e.completed}));case e.completed:return t.filter((function(e){return e.completed}));default:return t}}),[E,e.active,e.completed]),S=C.filter((function(e){return!e.completed})).length,D=Object(a.useMemo)((function(){return w(C)}),[C,w]);return Object(a.useEffect)((function(){l(0===S)}),[C,S]),c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement(f,{onAddNewTodo:function(e){k((function(t){return[].concat(Object(m.a)(t),[e])}))}})),c.a.createElement("section",{className:"main"},c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:o,onChange:function(e){l(e.target.checked);var t=C.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{completed:e.target.checked})}));k(t)}}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),c.a.createElement(b,{todos:D,onChangeCompleted:y,onChangeTitle:function(e,t){var n=C.map((function(n){return n.id===e?Object(u.a)(Object(u.a)({},n),{},{title:t}):n}));k(n)},onDestroy:function(e){var t=C.filter((function(t){return t.id!==e}));k(t)}})),C.length>0&&c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},S),c.a.createElement(O,{onswitchFilter:function(e){E!==e&&g(e)},FILTERS:e,filter:E}),C.length-S>0&&c.a.createElement("button",{type:"button",className:"clear-completed",onClick:N},"Clear completed")))};o.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.3410f892.chunk.js.map