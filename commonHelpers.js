import{a as n}from"./assets/vendor-34f890c2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a="https://portfolio-js.b.goit.study/api/reviews",l=document.querySelector(".reviews_cards");async function d(){const{data:r}=await n.get(`${a}`,{headers:{Accept:"application/json"},method:"Get"});return r}function u(r){return r.map(({id:o,author:i,avatar_url:s,review:e})=>`
    <li class="card" data-id ="${o}">
    <img class="card_img" src="${s}" alt="photo">
    <h3 class="card_title">${i}</h3>
    <p class="card_text">${e}</p> 
    </li>
    </ul>`).join("")}async function f(){const r=await d();l.insertAdjacentHTML("beforeend",u(r))}f();
//# sourceMappingURL=commonHelpers.js.map
