export function initLoader(){const loader=document.querySelector('[data-loader]');if(!loader)return;requestAnimationFrame(()=>setTimeout(()=>loader.classList.add('done'),650))}
