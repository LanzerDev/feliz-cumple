import{r as l,j as f,R as u,a as i,m as d,b as p}from"./vendor.cac9a2f8.js";const m=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};m();var h="/assets/carryOn.55383514.mp3",y="/assets/dance-chibi.52c77c6d.gif";function g(){const o=new Audio(h),[r,a]=l.exports.useState(!1),[s,e]=l.exports.useState(!1);l.exports.useEffect(()=>(s?o.play():o.pause(),()=>o.pause()),[s]);const t=()=>{a(c=>!c),e(c=>!c)},n={visible:{opacity:1},hidden:{opacity:0}};return f(u.Fragment,{children:[i("div",{className:"container",children:i(d.h1,{onClick:()=>t(),animate:{scale:1},whileTap:{scale:.6},children:"FELIZ CUMPLE WE TIAMO ALV"})}),i(d.div,{initial:"hidden",animate:r?"visible":"hidden",variants:n,className:"chibi-container",children:i("img",{src:y,className:"chibi"})})]})}p.render(i(u.StrictMode,{children:i(g,{})}),document.getElementById("root"));
