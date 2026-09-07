export const on=(s,e,f,r=document)=>r.querySelector(s)?.addEventListener(e,f);export const all=(s,r=document)=>[...r.querySelectorAll(s)];
