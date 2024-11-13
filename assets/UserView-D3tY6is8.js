import{u as v,r as y,a as o,C as g,j as i,B as w,S as D,D as O}from"./index-lRq4B2S0.js";import{o as l,T as A,a as F,f as L,O as U}from"./OwnDictionaries-DsSCpdMn.js";import{t as K}from"./AlertComponent-CJx4nPVS.js";import{F as t,E as k}from"./ErrorMessage-Bl72mUpP.js";import{c as B}from"./Confirmation-BM5hsDGA.js";import{T as C}from"./Table-i0ZAr2nr.js";import{T as N,a as j}from"./Tabs-CFbBUaR8.js";import"./Dropdown-CqvND0UQ.js";import"./useWindow-CFgY2ZsE.js";import"./InputGroupContext-BdiVvw1G.js";import"./Modal-Dqvi3MK3.js";const I="_dictionaryForm__box_1wxeg_1",z="_tasksTableBox__header_1wxeg_5",G="_tasksTable__tdButton_1wxeg_8",H="_tasksTable_1wxeg_5",$="_tasksTable__tbody_1wxeg_11",M="_tasksTable__button_1wxeg_14",q="_dictionaryForm__tasksFilterBox_1wxeg_23",P="_tasksTableBox_1wxeg_5",c={dictionaryForm__box:I,tasksTableBox__header:z,tasksTable__tdButton:G,tasksTable:H,tasksTable__tbody:$,tasksTable__button:M,dictionaryForm__tasksFilterBox:q,tasksTableBox:P};function R(){const a=v(),[_,h]=y.useState(""),e=o(K.getTranscriptionTasksSet),n=o(l.getAddDictionaryLoading),r=o(l.getAddDictionaryError),m=o(l.getAddDictionarySuccess),b=({target:{value:s}})=>{h(s)},u=({target:{name:s}})=>{const x=e.filter(f=>f._id!==s);a(g(x))},p=async()=>{await B("Are you sure you want to add this dictionary?")&&a(F({ownDictionaryName:_,ownDictionaryTasks:e}))},S=s=>{e.findIndex(x=>x._id===s._id)===-1&&a(O(s))};return y.useEffect(()=>{m&&(a(g([])),h(""))},[a,m]),i.jsxs("div",{className:c.dictionaryForm,children:[i.jsx("h3",{children:"Let's gather words for new dictionary"}),i.jsxs("div",{className:c.dictionaryForm__box,children:[i.jsx("div",{className:c.dictionaryForm__tasksFilterBox,children:i.jsx(A,{passUpTask:S})}),i.jsxs("div",{className:c.tasksTableBox,children:[i.jsx("h5",{className:c.tasksTableBox__header,children:"New dictionary:"}),i.jsx(t,{autoComplete:"off",children:i.jsxs(t.Group,{className:"mb-3",children:[i.jsx(t.Label,{children:"Dictionary name:"}),i.jsx(t.Control,{type:"text",name:"dictionaryName",placeholder:"Enter dictionary name",value:_,onChange:b})]})}),i.jsxs(C,{striped:!0,bordered:!0,hover:!0,className:c.tasksTable,children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("td",{children:"Dictionary words:"}),i.jsx("td",{className:c.tasksTable__tdButton})]})}),i.jsx("tbody",{className:c.tasksTable__tbody,children:e&&e.map(({_id:s,eng:x,utrn:f})=>i.jsxs("tr",{children:[i.jsx("td",{children:x}),i.jsx("td",{children:i.jsx(w,{variant:"danger",size:"sm",name:s,onClick:u,children:"Delete"})})]},s))})]}),i.jsxs(w,{className:c.tasksTable__button,onClick:p,children:[!n&&i.jsx("span",{children:"Add new own dictionary"}),n&&i.jsx(D,{animation:"border",as:"span",size:"sm"})]}),r&&i.jsx(k,{message:r})]})]})]})}const V="_dictionarySearch_v8o11_1",W="_dictionarySearch__box_v8o11_5",J="_dictionarySearch__header_v8o11_8",Q="_dictionarySearchForm__button_v8o11_11",X="_dictionarySpecifications__box_v8o11_15",Y="_dictionarySpecifications_v8o11_15",Z="_dictionarySpecifications__tbody_v8o11_18",ii="_dictionarySpecificationsForm__button_v8o11_21",ti="_tasksTableBox_v8o11_28",d={dictionarySearch:V,dictionarySearch__box:W,dictionarySearch__header:J,dictionarySearchForm__button:Q,dictionarySpecifications__box:X,dictionarySpecifications:Y,dictionarySpecifications__tbody:Z,dictionarySpecificationsForm__button:ii,tasksTableBox:ti};function ai(){const a=v(),[_,h]=y.useState(""),[e,n]=y.useState(""),r=o(l.getOwnDictionary),m=o(l.getOwnDictionaryLoading),b=o(l.getOwnDictionaryError),u=o(l.getAddDictionaryLoading),p=o(l.getAddDictionaryError),S=o(l.getAddDictionarySuccess),s=({target:{value:T}})=>{h(T)},x=({target:{value:T}})=>{n(T)},f=()=>{a(L(_))},E=async()=>{await B("Are you sure you want to add this dictionary?")&&a(F({ownDictionaryName:e,ownDictionaryTasks:r.ownDictionaryTasks}))};return y.useEffect(()=>{S&&(h(""),n(""))},[a,S]),i.jsxs("div",{className:d.dictionarySearch,children:[i.jsxs("div",{className:d.dictionarySearch__box,children:[i.jsx("h5",{className:d.dictionarySearch__header,children:"DictionarySearch:"}),i.jsxs(t,{autoComplete:"off",className:d.dictionarySearchForm,children:[i.jsxs(t.Group,{className:"mb-3",children:[i.jsx(t.Label,{children:"Search dictionary by id:"}),i.jsx(t.Control,{type:"text",name:"dictionaryId",placeholder:"Enter dictionary id",value:_,onChange:s})]}),i.jsxs(w,{variant:"primary",onClick:f,className:d.dictionarySearchForm__button,children:[!m&&i.jsx("span",{children:"Search"}),m&&i.jsx(D,{animation:"border",as:"span",size:"sm"})]})]}),b&&i.jsx(k,{message:`No dictionary found with id=${_}`})]}),!b&&!m&&i.jsxs("div",{className:d.dictionarySpecifications__box,children:[r.ownDictionaryTasks&&i.jsxs("div",{children:[i.jsxs(C,{striped:!0,bordered:!0,hover:!0,className:d.dictionarySpecifications,children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("td",{children:"Specifications:"}),i.jsx("td",{})]})}),i.jsxs("tbody",{className:d.dictionarySpecifications__tbody,children:[i.jsxs("tr",{children:[i.jsx("td",{children:"Dictionary name:"}),i.jsx("td",{children:r.ownDictionaryName})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"Dictionary id:"}),i.jsx("td",{children:r._id})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"Dictionary owner:"}),i.jsx("td",{children:r.ownDictionaryOwner.name})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"Words quantity:"}),i.jsx("td",{children:r.ownDictionaryTasks.length})]})]})]}),i.jsxs(t,{autoComplete:"off",children:[i.jsxs(t.Group,{className:"mb-3",children:[i.jsx(t.Label,{children:"Add to own dictionaries with name:"}),i.jsx(t.Control,{type:"text",name:"dictionaryName",placeholder:"Enter dictionary name",value:e,onChange:x})]}),i.jsxs(w,{className:d.dictionarySpecificationsForm__button,onClick:E,children:[!u&&i.jsx("span",{children:"Add new own dictionary"}),u&&i.jsx(D,{animation:"border",as:"span",size:"sm"})]})]})]}),p&&i.jsx(k,{message:p})]})]})}function si(){y.useEffect(()=>{window.scrollBy(0,-1e3)},[]);const[a,_]=y.useState("User profile"),[h,e]=y.useState("Dictionaries list");return i.jsxs("div",{children:[i.jsx("h2",{children:"User page"}),i.jsxs(N,{id:"user-tabs",activeKey:a,onSelect:n=>_(n),className:"mb-3",children:[i.jsxs(j,{eventKey:"own-dictionaries",id:"own-dictionaries",title:"Own dictionaries",children:[i.jsx("h3",{children:"Own dictionaries:"}),i.jsxs(N,{id:"own-dictionaries",activeKey:h,onSelect:n=>e(n),className:"mb-3",children:[i.jsx(j,{eventKey:"Dictionaries list",title:"Dictionaries list",children:i.jsx(U,{advancedMode:!0})}),i.jsx(j,{eventKey:"dictionary-form",title:"Dictionary form",children:i.jsx(R,{})}),i.jsx(j,{eventKey:"Dictionary search",title:"Dictionary search",children:i.jsx(ai,{})})]})]}),i.jsxs(j,{eventKey:"User profile",title:"User profile",children:[i.jsx("h3",{children:"User profile:"}),i.jsx(D,{animation:"grow"}),i.jsx("p",{children:"under development"})]})]})]})}function mi(){return i.jsx(i.Fragment,{children:i.jsx(si,{})})}export{mi as default};
//# sourceMappingURL=UserView-D3tY6is8.js.map