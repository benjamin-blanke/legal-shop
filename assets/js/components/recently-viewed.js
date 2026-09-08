import{storage}from'../core/storage.js';export function rememberProduct(slug){const old=storage.get('serioes-recent',[]).filter(x=>x!==slug);storage.set('serioes-recent',[slug,...old].slice(0,8))}
