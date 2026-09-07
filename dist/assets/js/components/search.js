export const match=(p,q)=>!q||[p.name,p.category,p.description].join(' ').toLowerCase().includes(q.toLowerCase());
