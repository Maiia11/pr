import{a as n,S as c,N as l,P as d,K as u,M as p,i as f}from"./assets/vendor-8779919d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://portfolio-js.b.goit.study/api/reviews";async function y(){const{data:r}=await n.get(`${m}`,{headers:{Accept:"application/json"},method:"Get"});return r}const w=document.querySelector(".swiper-wrapper");async function g(){try{const r=await y();w.insertAdjacentHTML("beforeend",h(r))}catch{f.show({title:"Hey",message:"What would you like to add?"})}}function h(r){return r.map(({id:s,author:o,avatar_url:i,review:e})=>`
    <div class="swiper-slide">
    <li class="card" data-id ="${s}">
    <img class="card_img" src="${i}" alt="photo"/>
    <h3 class="card_title">${o}</h3>
    <p class="card_text">${e}</p> 
    </li>
    </div>
    `).join("")}g();new c(".swiper",{modules:[l,d,u,p],navigation:{nextEl:".end",prevEl:".start"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},mousewheel:{sensitivity:1}});
//# sourceMappingURL=commonHelpers.js.map
