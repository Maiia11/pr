import{S as a,N as c,P as d,K as l,a as u}from"./assets/vendor-1bb0239d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="https://portfolio-js.b.goit.study/api/reviews",f=document.querySelector(".swiper-wrapper");async function m(){const{data:r}=await u.get(`${p}`,{headers:{Accept:"application/json"},method:"Get"});return r}function y(r){return r.map(({id:o,author:i,avatar_url:s,review:e})=>`
    <div class="swiper-slide">
    <li class="card" data-id ="${o}">
    <img class="card_img" src="${s}" alt="photo">
    <h3 class="card_title">${i}</h3>
    <p class="card_text">${e}</p> 
    </li>
    </div>
    `).join("")}async function g(){const r=await m();f.insertAdjacentHTML("beforeend",y(r))}g();new a(".swiper",{modules:[c,d,l],navigation:{nextEl:".end",prevEl:".start"},keyboard:{enabled:!0,onlyInViewport:!0}});
//# sourceMappingURL=commonHelpers.js.map
