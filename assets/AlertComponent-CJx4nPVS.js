import{X as p,k as o,Y as k,Z as m,_ as l,$ as g,a0 as d,j as r}from"./index-lRq4B2S0.js";import{A as e}from"./ErrorMessage-Bl72mUpP.js";const f=s=>s.transcriptionTasks.error,u=s=>s.transcriptionTasks.loading,h=s=>s.transcriptionTasks.tasks,A=s=>s.transcriptionTasks.tasksSet,R=s=>s.transcriptionTasks.randomTask,S={getTranscriptionTasksError:f,getTranscriptionTasksLoading:u,getTranscriptionTasks:h,getTranscriptionTasksSet:A,getRandomTranscriptionTask:R},b=s=>async a=>{a(p());try{const{data:t}=await o.get(`/transcription-tasks?page=1&limit=10&query=${s}`);a(k(t.tasks))}catch(t){a(m(t.response?t.response.data.message:t.message))}},_=s=>async a=>{a(l());try{const{data:t}=await o.get(`/transcription-tasks/random?numberofsymbols=${s}`);a(g(t.task))}catch(t){a(d(t.response?t.response.data.message:t.message))}},x="_Alert_2n31b_1",y={Alert:x};function $({message:s="message",messageHeading:a="Error:",variant:t="danger",alertClose:n,timeout:i=3e3}){const c=setTimeout(()=>{n()},i),T=()=>{clearTimeout(c),n()};return r.jsxs(e,{className:y.Alert,variant:t,onClose:()=>T(),dismissible:!0,children:[r.jsx(e.Heading,{children:a}),r.jsx("p",{children:s})]})}export{$ as A,b as a,_ as f,S as t};
//# sourceMappingURL=AlertComponent-CJx4nPVS.js.map
