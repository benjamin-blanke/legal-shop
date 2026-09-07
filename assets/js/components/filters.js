export const filterProducts=(items,category)=>category==='ALLE'?items:items.filter(p=>p.category===category);
