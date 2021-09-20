(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{13:function(t,e,n){t.exports={item:"TodoItem_item__35SuI",checkbox:"TodoItem_checkbox__82Q0r",textInput:"TodoItem_textInput__1u96E"}},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(19),a=n.n(i),s=n(6),r=n(18),l=n(8),u=n(7),d=n(40),j=n(3),b=n(13),h=n.n(b),p=n(2),x=function(t){var e=Object(c.useState)(!1),n=Object(u.a)(e,2),o=n[0],i=n[1],a=t.todo,s=a.completed,r=a.id,l=a.title,d={},j={};return o?d.display="none":j.display="none",Object(p.jsxs)("li",{className:h.a.item,children:[Object(p.jsxs)("div",{onDoubleClick:function(){i(!0)},style:d,children:[Object(p.jsx)("input",{type:"checkbox",className:h.a.checkbox,checked:s,onChange:function(){return t.handleChangeProps(r)}}),Object(p.jsx)("button",{type:"button",onClick:function(){return t.deleteTodoProps(r)},children:"Delete"}),Object(p.jsx)("span",{style:s?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:l})]}),Object(p.jsx)("input",{type:"text",style:j,className:h.a.textInput,value:l,onChange:function(e){t.setUpdate(e.target.value,r)},onKeyDown:function(t){"Enter"===t.key&&i(!1)}})]})},O=function(t){return Object(p.jsx)("ul",{children:t.todos.map((function(e){return Object(p.jsx)(x,{todo:e,handleChangeProps:t.handleChangeProps,deleteTodoProps:t.deleteTodoProps,setUpdate:t.setUpdate},e.id)}))})},m=function(){return Object(p.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(p.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},f=n(12),g=function(t){var e=Object(c.useState)({title:""}),n=Object(u.a)(e,2),o=n[0],i=n[1];return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.title.trim()&&(t.addTodoProps(o.title),i({title:""}))},className:"form-container",children:[Object(p.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o.title,name:"title",onChange:function(t){i(Object(l.a)(Object(l.a)({},o),{},Object(f.a)({},t.target.name,t.target.value)))}}),Object(p.jsx)("button",{type:"submit",className:"input-submit",children:"Submit"})]})},y=function(){var t=Object(j.f)().slug,e=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(e){return e.slug===t})),n=e.title,c=e.description;return Object(p.jsxs)("div",{className:"main__content",children:[Object(p.jsx)("h1",{children:n}),Object(p.jsx)("p",{children:c})]})},v=function(){var t=Object(j.g)(),e=t.url,n=t.path;return Object(p.jsxs)("div",{className:"about__content",children:[Object(p.jsxs)("ul",{className:"about__list",children:[Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"".concat(e,"/about-app"),children:"About App"})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"".concat(e,"/about-author"),children:"About Author"})})]}),Object(p.jsx)(j.a,{path:"".concat(n,"/:slug"),children:Object(p.jsx)(y,{})})]})},N=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h3",{children:"No match for this page"})})},S=n(22),k=n(23),w=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],o=e[1];return Object(p.jsxs)("nav",{className:"navBar",children:[Object(p.jsx)("button",{type:"button",onClick:function(){o((function(t){return!t}))},children:n?Object(p.jsx)(S.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(p.jsx)(k.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(p.jsx)("ul",{className:"menuNav ".concat(n?" showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(t){return Object(p.jsx)("li",{children:Object(p.jsx)(s.c,{to:t.path,activeClassName:"active-link",onClick:function(){o(!1)},exact:!0,children:t.text})},t.id)}))})]})},_=function(){var t=Object(c.useState)(function(){var t=localStorage.getItem("todos");return JSON.parse(t)||[]}()),e=Object(u.a)(t,2),n=e[0],o=e[1];return Object(c.useEffect)((function(){var t=JSON.stringify(n);localStorage.setItem("todos",t)}),[n]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(w,{}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{exact:!0,path:"/",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"inner",children:[Object(p.jsx)(m,{}),Object(p.jsx)(g,{addTodoProps:function(t){var e={id:Object(d.a)(),title:t,completed:!1};o([].concat(Object(r.a)(n),[e]))}}),Object(p.jsx)(O,{todos:n,handleChangeProps:function(t){o((function(e){return e.map((function(e){return e.id===t?Object(l.a)(Object(l.a)({},e),{},{completed:!e.completed}):e}))}))},deleteTodoProps:function(t){o(Object(r.a)(n.filter((function(e){return e.id!==t}))))},setUpdate:function(t,e){o(n.map((function(n){return n.id===e&&(n.title=t),n})))}})]})})}),Object(p.jsx)(j.a,{path:"/about",children:Object(p.jsx)(v,{})}),Object(p.jsx)(j.a,{path:"*",children:Object(p.jsx)(N,{})})]})]})};n(37);a.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(s.a,{children:Object(p.jsx)(_,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.ac004074.chunk.js.map