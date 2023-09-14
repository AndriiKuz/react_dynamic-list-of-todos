(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),l=c.n(a),n=c(2),i=c(8),d=c(1),o=(c(13),c(14),c(4)),r=c.n(o),j=c(0),u=function(e){var t=e.todos,c=e.selectedTodo,s=e.handleShowModal;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:r()("far",{"fa-eye-slash":(null===c||void 0===c?void 0:c.id)===e.id,"fa-eye":(null===c||void 0===c?void 0:c.id)!==e.id})})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var b=function(e){var t=e.handleFilter,c=Object(d.useState)(""),a=Object(n.a)(c,2),l=a[0],i=a[1],o=Object(d.useState)(s.All),r=Object(n.a)(o,2),u=r[0],b=r[1];Object(d.useEffect)((function(){t({option:u,query:l})}),[l,u]);return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:u,onChange:function(e){b(e.target.value)},children:[Object(j.jsx)("option",{value:s.All,children:"All"}),Object(j.jsx)("option",{value:s.Active,children:"Active"}),Object(j.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:l,onChange:function(e){i(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),l&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){i(""),b(s.All)}})})]})]})},h=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.selectedTodo,c=e.handlerCloseModal,s=Object(d.useState)(!0),a=Object(n.a)(s,2),l=a[0],i=a[1],o=Object(d.useState)(),u=Object(n.a)(o,2),b=u[0],O=u[1];return Object(d.useEffect)((function(){var e;t&&(e=t.userId,m("/users/".concat(e))).then((function(e){return O(e)})).finally((function(){return i(!1)}))}),[]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),l?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(j.jsx)("strong",{className:r()({"has-text-danger":!(null!==t&&void 0!==t&&t.completed),"has-text-success":null===t||void 0===t?void 0:t.completed}),children:null!==t&&void 0!==t&&t.completed?"Done":"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===b||void 0===b?void 0:b.email),children:null===b||void 0===b?void 0:b.name})]})]})]})]})};var x=function(){var e=Object(d.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],l=Object(d.useState)(!0),o=Object(n.a)(l,2),r=o[0],x=o[1],f=Object(d.useState)(!1),v=Object(n.a)(f,2),p=v[0],N=v[1],y=Object(d.useState)(null),g=Object(n.a)(y,2),C=g[0],S=g[1],k=Object(d.useState)({option:s.All,query:""}),w=Object(n.a)(k,2),A=w[0],T=w[1],E=function(e,t){var c=Object(i.a)(e);return c=c.filter((function(e){switch(t.option){case s.Active:return!e.completed;case s.Completed:return e.completed;case s.All:default:return e}})),t.query&&(c=c.filter((function(e){return e.title.toLowerCase().includes(t.query.toLowerCase())}))),c}(c,A);Object(d.useEffect)((function(){m("/todos").then(a).finally((function(){return x(!1)}))}),[]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{handleFilter:function(e){T(e)}})}),Object(j.jsx)("div",{className:"block",children:r?Object(j.jsx)(h,{}):Object(j.jsx)(u,{todos:E,selectedTodo:C,handleShowModal:function(e){S(e),N(!0)}})})]})})}),p&&Object(j.jsx)(O,{selectedTodo:C,handlerCloseModal:function(){S(null),N(!1)}})]})};l.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ffc36516.chunk.js.map