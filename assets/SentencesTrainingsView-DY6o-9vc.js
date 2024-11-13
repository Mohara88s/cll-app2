import{r as n,j as s,B as x,u as F,a as _,S as J}from"./index-lRq4B2S0.js";import{j as b,C as P}from"./ChooseLanguages-C9JCi1RK.js";import{J as O,a as U,f as V}from"./sentences-tasks-operations-DAmLDnvl.js";import{T as z}from"./TaskCongratulation-CMaEvp05.js";import{T as D}from"./TrainingCongratulation-CgBPNEba.js";import{F as W,E as Y}from"./ErrorMessage-Bl72mUpP.js";import"./Table-i0ZAr2nr.js";import"./Modal-Dqvi3MK3.js";import"./useWindow-CFgY2ZsE.js";const $=t=>t.sentencesTasks.error,q=t=>t.sentencesTasks.loading,G=t=>t.sentencesTasks.tasks,v={getSentencesTasksError:$,getSentencesTasksLoading:q,getSentencesTasks:G},K="_originalSentence_gxtvh_1",Q="_fealdsList_gxtvh_7",X="_fealdsList__item_gxtvh_10",Z="_fealdHeader_gxtvh_20",ss="_listTags_gxtvh_26",es="_listTags__item_gxtvh_33",ts="_listTags__button_gxtvh_38",as="_skipButton_gxtvh_43",a={originalSentence:K,fealdsList:Q,fealdsList__item:X,fealdHeader:Z,listTags:ss,listTags__item:es,listTags__button:ts,skipButton:as};function ns({sentencesList:t,onResolvedTraining:c}){const[g,o]=n.useState(0),[f,d]=n.useState(0),[h,u]=n.useState(0),[T,m]=n.useState(!1),[r,p]=n.useState(0),[l,S]=n.useState([]),[w,y]=n.useState([]),[L,N]=n.useState([]),[A,C]=n.useState(!1);n.useEffect(()=>{t[r].translation&&S([...t[r].translation.split(" ").filter(e=>e.length)])},[r,t]),n.useEffect(()=>{y([...[...l].sort(()=>.5-Math.random())]),N([])},[l]);const E=e=>{const i=e.currentTarget.getAttribute("value"),k=Number.parseInt(e.currentTarget.getAttribute("data-id"));i===l[g]?H(e.currentTarget,k,i):R(e.currentTarget),u(j=>j+1),g>=l.length-1&&I()},R=e=>{d(i=>i+1),e.classList.remove("btn-primary"),e.classList.add("btn-danger"),setTimeout(()=>{e.classList.remove("btn-danger"),e.classList.add("btn-primary")},300)},H=(e,i,k)=>{e.classList.remove("btn-primary"),e.classList.add("btn-success"),setTimeout(()=>{L.push(k),e.disabled=!0,e.style.color="transparent",e.style.background="transparent",e.style.borderColor="transparent",e.classList.remove("btn-success"),e.classList.add("btn-primary"),o(j=>j+1)},300)},I=()=>{setTimeout(()=>{y([]),m(!0)},300)},B=()=>{r>=t.length-1?C(!0):p(e=>e+1),o(0),d(0),u(0),m(!1),N([])},M=()=>{C(!1),c()};return s.jsxs("div",{className:a.SentencesTrainings,children:[s.jsx("h3",{children:"Sentence in original language"}),!t[r].original&&s.jsx("h3",{className:a.warning,children:"no original available"}),s.jsx("p",{className:a.originalSentence,children:t[r].original}),s.jsx("h3",{children:"Sentence in translation language"}),s.jsxs("ul",{className:a.fealdsList,children:[s.jsxs("li",{className:a.fealdsList__item,children:[s.jsx("h4",{className:a.fealdHeader,children:"Unresolved sentence"}),!t[r].translation&&s.jsx("h3",{className:a.warning,children:"no translation available"}),s.jsx("ul",{className:a.listTags,children:w.map((e,i)=>s.jsx("li",{className:a.listTags__item,children:s.jsx(x,{variant:"primary","data-id":i,onClick:E,value:e,className:a.listTags__button,children:e})},i))}),T&&s.jsx(z,{attempts:h,losts:f,onClickButtonNext:B})]}),s.jsxs("li",{className:a.fealdsList__item,children:[s.jsx("h4",{className:a.fealdHeader,children:"Resolved sentence "}),s.jsx("ul",{className:a.listTags,children:L.map((e,i)=>s.jsx("li",{className:a.listTags__item,children:s.jsx(x,{variant:"primary",className:a.listTags__button,children:e})},i))})]})]}),s.jsx(x,{variant:"primary",onClick:B,className:a.skipButton,children:"Skip task"}),s.jsx(D,{modalShow:A,onHandleClose:M,congratulationText:"Congratulations! You have practiced this set of sentences."})]})}const is="_trainButton_10hln_1",rs="_warning_10hln_5",os={trainButton:is,warning:rs};function ls(){const t=F();n.useEffect(()=>{window.scrollBy(0,-1e3)},[]);const[c,g]=n.useState([]),[o,f]=n.useState(!1),d=_(b.getOriginalLanguage),h=_(b.getTranslationLanguage),u=_(v.getSentencesTasks),T=_(v.getSentencesTasksError),m=_(v.getSentencesTasksLoading),r=()=>{t(U(d.language_name,h.language_name,20))};n.useEffect(()=>{g(u)},[u]);const p=()=>{g([])},l=S=>{t(V(S._id,d.language_name,h.language_name,o))};return s.jsxs("div",{children:[s.jsx("h2",{children:"Sentences trainings"}),!c[0]&&s.jsxs(s.Fragment,{children:[s.jsx(P,{}),s.jsxs(x,{variant:"primary",onClick:r,className:os.trainButton,children:[!m&&s.jsx("span",{children:"Press the button to generate 20 random sentences and practice it"}),m&&s.jsx(J,{animation:"border",as:"span",size:"sm"})]}),s.jsx(W.Check,{type:"checkbox",checked:o,onChange:()=>f(!o),label:"Sentences in the task are random"}),s.jsx(O,{passUpTask:l})]}),c[0]&&s.jsx(ns,{sentencesList:c,onResolvedTraining:p}),T&&s.jsx(Y,{message:T})]})}function fs(){return s.jsx(s.Fragment,{children:s.jsx(ls,{})})}export{fs as default};
//# sourceMappingURL=SentencesTrainingsView-DY6o-9vc.js.map
