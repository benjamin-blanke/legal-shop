export function toast(message){const el=document.querySelector('[data-toast]');if(!el)return;el.textContent=message;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2300)}
