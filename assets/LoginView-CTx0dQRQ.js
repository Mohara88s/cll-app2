import{r as n,u as _,a as d,b as p,j as s,B as g,S as j,N as b,c as w}from"./index-lRq4B2S0.js";import{F as e,E}from"./ErrorMessage-Bl72mUpP.js";const L="_form_10n9p_1",S="_label_10n9p_8",N="_button_10n9p_13",y="_form__link_10n9p_19",o={form:L,label:S,button:N,form__link:y};function C(){n.useEffect(()=>{window.scrollBy(0,-1e3)},[]);const u=_(),[t,h]=n.useState(""),[r,f]=n.useState(""),l=d(p.getAuthError),i=d(p.getLoading),c=({target:{name:a,value:m}})=>{switch(a){case"email":return h(m);case"password":return f(m);default:return}},x=async a=>{a.preventDefault(),await u(w({email:t,password:r}))};return s.jsxs("div",{children:[s.jsx("h2",{children:"Login page"}),s.jsxs(e,{onSubmit:x,className:o.form,autoComplete:"off",children:[s.jsxs(e.Group,{className:"mb-3",controlId:"email",children:[s.jsx(e.Label,{children:"Email"}),s.jsx(e.Control,{type:"email",name:"email",placeholder:"Enter email",value:t,onChange:c})]}),s.jsxs(e.Group,{className:"mb-3",controlId:"password",children:[s.jsx(e.Label,{children:"Password"}),s.jsx(e.Control,{type:"password",name:"password",placeholder:"Enter password",value:r,onChange:c})]}),s.jsxs(g,{className:o.button,type:"submit",children:[!i&&s.jsx("span",{children:"Login"}),i&&s.jsx(j,{animation:"border",as:"span",size:"sm"})]}),s.jsx(b,{to:"/password-reset",className:o.form__link,children:"I have forgotten the password"})]}),l&&s.jsx(E,{message:l})]})}function F(){return s.jsx(s.Fragment,{children:s.jsx(C,{})})}export{F as default};
//# sourceMappingURL=LoginView-CTx0dQRQ.js.map
