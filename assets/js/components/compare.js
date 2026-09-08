import{storage}from'../core/storage.js';export function addCompare(slug){const current=storage.get('serioes-compare',[]);storage.set('serioes-compare',[...new Set([...current,slug])].slice(-4))}
