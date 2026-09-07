export const money=n=>Number(n).toLocaleString('de-DE',{style:'currency',currency:'EUR'});export const slugify=s=>s.toLowerCase().replace(/\s+/g,'-');
