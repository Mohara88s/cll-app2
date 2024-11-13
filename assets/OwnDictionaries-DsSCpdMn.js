import{r as i,y as x,j as e,z as T,E as ae,k as v,F as te,G as se,H as re,I as ne,J as oe,K as ie,L as ce,M as de,O as le,P as _e,Q as ye,R as me,T as he,U as ue,u as $,a as D,B as f,S as F,V as we,W as xe}from"./index-lRq4B2S0.js";import{d as U,F as O,E as R}from"./ErrorMessage-Bl72mUpP.js";import{t as H,a as Te,A as ge}from"./AlertComponent-CJx4nPVS.js";import{T as z}from"./Table-i0ZAr2nr.js";import{D as B}from"./Dropdown-CqvND0UQ.js";import{a as De,c as q}from"./Confirmation-BM5hsDGA.js";import{M as E}from"./Modal-Dqvi3MK3.js";const A=i.forwardRef(({className:a,bsPrefix:t,as:s="div",...r},n)=>(t=x(t,"card-body"),e.jsx(s,{ref:n,className:T(a,t),...r})));A.displayName="CardBody";const G=i.forwardRef(({className:a,bsPrefix:t,as:s="div",...r},n)=>(t=x(t,"card-footer"),e.jsx(s,{ref:n,className:T(a,t),...r})));G.displayName="CardFooter";const W=i.forwardRef(({bsPrefix:a,className:t,as:s="div",...r},n)=>{const d=x(a,"card-header"),o=i.useMemo(()=>({cardHeaderBsPrefix:d}),[d]);return e.jsx(De.Provider,{value:o,children:e.jsx(s,{ref:n,...r,className:T(t,d)})})});W.displayName="CardHeader";const J=i.forwardRef(({bsPrefix:a,className:t,variant:s,as:r="img",...n},d)=>{const o=x(a,"card-img");return e.jsx(r,{ref:d,className:T(s?`${o}-${s}`:o,t),...n})});J.displayName="CardImg";const K=i.forwardRef(({className:a,bsPrefix:t,as:s="div",...r},n)=>(t=x(t,"card-img-overlay"),e.jsx(s,{ref:n,className:T(a,t),...r})));K.displayName="CardImgOverlay";const Q=i.forwardRef(({className:a,bsPrefix:t,as:s="a",...r},n)=>(t=x(t,"card-link"),e.jsx(s,{ref:n,className:T(a,t),...r})));Q.displayName="CardLink";const je=U("h6"),Y=i.forwardRef(({className:a,bsPrefix:t,as:s=je,...r},n)=>(t=x(t,"card-subtitle"),e.jsx(s,{ref:n,className:T(a,t),...r})));Y.displayName="CardSubtitle";const X=i.forwardRef(({className:a,bsPrefix:t,as:s="p",...r},n)=>(t=x(t,"card-text"),e.jsx(s,{ref:n,className:T(a,t),...r})));X.displayName="CardText";const pe=U("h5"),Z=i.forwardRef(({className:a,bsPrefix:t,as:s=pe,...r},n)=>(t=x(t,"card-title"),e.jsx(s,{ref:n,className:T(a,t),...r})));Z.displayName="CardTitle";const P=i.forwardRef(({bsPrefix:a,className:t,bg:s,text:r,border:n,body:d=!1,children:o,as:j="div",...y},m)=>{const h=x(a,"card");return e.jsx(j,{ref:m,...y,className:T(t,h,s&&`bg-${s}`,r&&`text-${r}`,n&&`border-${n}`),children:d?e.jsx(A,{children:o}):o})});P.displayName="Card";const L=Object.assign(P,{Img:J,Title:Z,Subtitle:Y,Body:A,Link:Q,Text:X,Header:W,Footer:G,ImgOverlay:K}),fe=a=>a.ownDictionaries.ownDictionaries,Ce=a=>a.ownDictionaries.error,be=a=>a.ownDictionaries.loading,Ne=a=>a.ownDictionaries.addDictionaryError,ke=a=>a.ownDictionaries.addDictionaryLoading,Se=a=>a.ownDictionaries.updateDictionaryError,ve=a=>a.ownDictionaries.updateDictionaryLoading,Oe=a=>a.ownDictionaries.currentDictionary,Be=a=>a.ownDictionaries.addDictionarySuccess,Ee=a=>a.ownDictionaries.ownDictionary,Le=a=>a.ownDictionaries.ownDictionaryError,Me=a=>a.ownDictionaries.ownDictionaryLoading,N={getOwnDictionaries:fe,getError:Ce,getLoading:be,getAddDictionaryError:Ne,getAddDictionaryLoading:ke,getUpdateDictionaryLoading:ve,getUpdateDictionaryError:Se,getCurrentDictionary:Oe,getAddDictionarySuccess:Be,getOwnDictionary:Ee,getOwnDictionaryError:Le,getOwnDictionaryLoading:Me},Ie=()=>async a=>{a(ae());try{const{data:t}=await v.get("/own-dictionaries");a(te(t.ownDictionaries))}catch(t){a(se(t.response?t.response.data.message:t.message))}},ua=a=>async t=>{t(re());try{const{data:s}=await v.patch("/own-dictionaries",a);t(ne(s.ownDictionary))}catch(s){t(oe(s.response?s.response.data.message:s.message))}},He=a=>async t=>{t(ie());try{const{data:s}=await v.delete(`/own-dictionaries/${a}`);t(ce(s.ownDictionary))}catch(s){t(de(s.response?s.response.data.message:s.message))}},wa=a=>async t=>{t(le());try{const{data:s}=await v.get(`/own-dictionaries/${a}`);t(_e(s.ownDictionary))}catch(s){t(ye(s.response?s.response.data.message:s.message))}},V=({dictionaryId:a,update:t})=>async s=>{s(me());try{const{data:r}=await v.patch(`/own-dictionaries/${a}`,t);s(he(r.ownDictionary))}catch(r){s(ue(r.response?r.response.data.message:r.message))}},$e="_TasksFilter_p6rr2_1",Fe="_Table_p6rr2_4",Re="_Table__tbody_p6rr2_4",Ae="_Table__td__english_p6rr2_7",Ve="_Table__td__secondary_p6rr2_10",Ue="_Table__td__Button_p6rr2_14",b={TasksFilter:$e,Table:Fe,Table__tbody:Re,Table__td__english:Ae,Table__td__secondary:Ve,Table__td__Button:Ue},M=["Translation","U-transcription"];function ze({passUpTask:a}){const t=$(),[s,r]=i.useState(M[0]),[n,d]=i.useState(""),[o,j]=i.useState([]),y=D(H.getTranscriptionTasks),m=D(H.getTranscriptionTasksError),h=D(H.getTranscriptionTasksLoading),C=({target:{value:c}})=>{d(c)},l=({target:{name:c}})=>{r(c)},p=({target:{name:c}})=>{const k=o.find(S=>S._id===c);a(k)};return i.useEffect(()=>{n&&t(Te(n))},[t,n]),i.useEffect(()=>{y&&j(y)},[t,y]),e.jsxs("div",{className:b.TasksFilter,children:[e.jsx(O,{autoComplete:"off",children:e.jsxs(O.Group,{className:"mb-3",controlId:"filter",children:[e.jsx(O.Label,{children:"Words search:"}),e.jsx(O.Control,{type:"text",name:"filter",placeholder:"Enter letters for word search",value:n,onChange:C})]})}),e.jsxs(z,{striped:!0,bordered:!0,hover:!0,className:b.Table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{className:b.Table__td__english,children:"English"}),e.jsx("td",{className:b.Table__td__secondary,children:e.jsxs(B,{children:[e.jsx(B.Toggle,{variant:"outline-dark",size:"sm",id:"dropdown-basic",children:s}),e.jsx(B.Menu,{children:e.jsx("ul",{children:M.map(c=>e.jsx("li",{children:e.jsx(B.Item,{name:c,onClick:l,children:c})},c))})})]})}),e.jsx("td",{className:b.Table__td__Button})]})}),!h&&n&&e.jsx("tbody",{className:b.Table__tbody,children:o.map(({_id:c,eng:k,utrn:S,qtrn:u,rus:g})=>e.jsxs("tr",{children:[e.jsx("td",{children:k}),s===M[0]&&e.jsx("td",{children:g.split("/")[0]}),s===M[1]&&e.jsx("td",{children:S}),e.jsx("td",{children:e.jsx(f,{name:c,onClick:p,children:"Add"})})]},c))})]}),m&&e.jsx(R,{message:m}),h&&e.jsx(F,{animation:"border",variant:"primary"})]})}function qe(){return e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 40.945 40.945",children:e.jsx("path",{fill:"currentColor",d:`M35.389,9h-6.166V1.5c0-0.827-0.671-1.5-1.5-1.5H15.454c-0.375,0-0.736,0.142-1.013,0.395L4.543,9.457
		c-0.31,0.285-0.487,0.688-0.487,1.106v19.882c0,0.826,0.671,1.5,1.5,1.5h6.166v7.5c0,0.826,0.671,1.5,1.5,1.5h22.166
		c0.829,0,1.5-0.674,1.5-1.5V10.5C36.889,9.673,36.217,9,35.389,9z M14.318,4.576v5.574H8.229L14.318,4.576z M7.057,28.945V13.15
		h8.761c0.829,0,1.5-0.672,1.5-1.5V3h8.905v6h-3.104c-0.375,0-0.735,0.143-1.013,0.396l-9.897,9.063
		c-0.31,0.283-0.487,0.687-0.487,1.105v9.381H7.057L7.057,28.945z M21.984,13.576v5.572h-6.086L21.984,13.576z M33.889,37.945
		H14.723V22.148h8.762c0.828,0,1.5-0.672,1.5-1.5V12h8.904V37.945z`})})}const Ge="_Modal_1flhn_1",We="_Modal__Header_1flhn_4",Je="_Modal__Body_1flhn_7",Ke="_Modal__Id_1flhn_15",Qe="_Table_1flhn_18",Ye="_Table__tbody_1flhn_18",Xe="_Table__td__Button_1flhn_21",Ze="_Table__td__secondary_1flhn_26",_={Modal:Ge,Modal__Header:We,Modal__Body:Je,Modal__Id:Ke,Table:Qe,Table__tbody:Ye,Table__td__Button:Xe,Table__td__secondary:Ze},Pe=({modalShow:a,selectedDictionaryId:t,advancedMode:s=!1,onHandleClose:r})=>{const[n,d]=i.useState(!1),[o,j]=i.useState({}),[y,m]=i.useState(!1),h=$(),C=D(N.getOwnDictionaries),l=D(N.getUpdateDictionaryError),p=D(N.getUpdateDictionaryLoading);i.useEffect(()=>{j(C.find(u=>u._id===t))},[C,t]);const c=()=>{d(!1),r()};i.useEffect(()=>{d(a)},[a]);const k=async({target:{name:u}})=>{if(await q("Are you sure you want to delete this word?")){const g=o.ownDictionaryTasks.filter(I=>I._id!==u);h(V({dictionaryId:o._id,update:{ownDictionaryTasks:g}}))}},S=u=>{if(o.ownDictionaryTasks.findIndex(g=>g._id===u._id)===-1){m(!1);const g=[...o.ownDictionaryTasks,u._id];h(V({dictionaryId:o._id,update:{ownDictionaryTasks:g}}))}else m(!0)};return e.jsx(e.Fragment,{children:o&&e.jsxs(E,{show:n,onHide:c,centered:!0,className:_.Modal,dialogClassName:"EditDictionaryModalDialog",children:[e.jsx(E.Header,{closeButton:!0,className:_.Modal__Header,children:e.jsx(E.Title,{children:o.ownDictionaryName})}),e.jsxs(E.Body,{className:_.Modal__Body,children:[e.jsxs("p",{className:_.Modal__Id,onClick:()=>{navigator.clipboard.writeText(o._id)},children:["Dictionary Id: ",o._id," ",e.jsx(qe,{})]}),e.jsxs(z,{striped:!0,bordered:!0,hover:!0,className:_.Table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{className:_.Table__td__english,children:"English"}),e.jsx("td",{className:_.Table__td__translation,children:"Translation"}),e.jsx("td",{className:_.Table__td__secondary,children:"U-transcription"}),s&&e.jsx("td",{className:_.Table__td__Button})]})}),o.ownDictionaryName&&e.jsx("tbody",{className:_.Table__tbody,children:o.ownDictionaryTasks.map(({_id:u,eng:g,utrn:I,qtrn:ia,rus:ee})=>e.jsxs("tr",{children:[e.jsx("td",{className:_.Table__td__english,children:g}),e.jsx("td",{className:_.Table__td__translation,children:ee.split("/")[0]}),e.jsx("td",{className:_.Table__td__secondary,children:I}),s&&e.jsx("td",{className:_.Table__td__Button,children:e.jsx(f,{variant:"danger",size:"sm",name:u,onClick:k,children:"Delete"})})]},u))})]}),p&&e.jsx(F,{animation:"border",variant:"primary"}),y&&e.jsx(ge,{alertClose:()=>m(!1),message:"The word is already present in the dictionary"}),l&&e.jsx(R,{message:l}),s&&e.jsx(ze,{passUpTask:S})]})]})})},ea="_Button__noDictionaries_1e6e1_1",aa="_Card__list_1e6e1_4",ta="_Card__item_1e6e1_9",sa="_Card__Title_1e6e1_17",ra="_Card__TitleText_1e6e1_20",na="_Card__buttonsList_1e6e1_25",oa="_Card__button_1e6e1_25",w={Button__noDictionaries:ea,Card__list:aa,Card__item:ta,Card__Title:sa,Card__TitleText:ra,Card__buttonsList:na,Card__button:oa};function xa({advancedMode:a=!1}){const[t,s]=i.useState(!1),[r,n]=i.useState(""),d=$(),o=D(N.getOwnDictionaries),j=D(N.getLoading),y=D(N.getError);i.useEffect(()=>{d(Ie())},[d]);const m=({target:{name:l}})=>{const p=o.find(c=>c._id===l);d(xe(p))},h=({target:{name:l}})=>{n(l),s(!0)},C=async({target:{name:l}})=>{await q("Are you sure you want to delete this dictionary?")&&d(He(l))};return e.jsxs("div",{children:[e.jsxs(e.Fragment,{children:[o.length===0&&!a&&e.jsx(we,{to:{pathname:"/user",state:{keyUserTabs:"own-dictionaries"}},children:e.jsx(f,{variant:"primary",className:w.Button__noDictionaries,children:"You don't have your dictionary yet. Go to the user page to create a dictionary."})}),e.jsx("ul",{className:w.Card__list,children:o.map(({_id:l,ownDictionaryName:p,ownDictionaryTasks:c})=>e.jsx("li",{className:w.Card__item,children:e.jsx(L,{border:"primary",children:e.jsxs(L.Body,{children:[e.jsx(L.Title,{className:w.Card__Title,children:e.jsx("p",{className:w.Card__TitleText,children:p})}),e.jsxs(L.Text,{children:["words: ",c.length]}),e.jsxs("ul",{className:w.Card__buttonsList,children:[!a&&e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx(f,{name:l,onClick:h,variant:"success",className:w.Card__button,children:"View"})}),e.jsx("li",{children:e.jsx(f,{name:l,onClick:m,variant:"primary",className:w.Card__button,children:"Go training"})})]}),a&&e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx(f,{name:l,onClick:h,variant:"warning",className:w.Card__button,children:"Edit"})}),e.jsx("li",{children:e.jsx(f,{name:l,onClick:C,variant:"danger",className:w.Card__button,children:"Delete"})})]})]})]})})},l))})]}),y&&e.jsx(R,{message:y}),j&&e.jsx(F,{animation:"border",variant:"primary"}),e.jsx(Pe,{modalShow:t,selectedDictionaryId:r,advancedMode:a,onHandleClose:()=>s(!1)})]})}export{xa as O,ze as T,ua as a,wa as f,N as o};
//# sourceMappingURL=OwnDictionaries-DsSCpdMn.js.map
