import{a as n,S as c,N as d,P as l,K as u,M as p,i as f}from"./assets/vendor-8779919d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="https://portfolio-js.b.goit.study/api/reviews";async function g(){const{data:r}=await n.get(`${m}`,{headers:{Accept:"application/json"},method:"Get"});return r}const w=document.querySelector(".swiper-wrapper");async function y(){try{const r=await g();w.insertAdjacentHTML("beforeend",h(data))}catch{f.show({message:"Reviews Not Found",backgroundColor:"#ed3b44",messageColor:"#fafafa",position:"topRight",timeout:2e3})}}function h(r){return r.map(({id:s,author:i,avatar_url:o,review:e})=>`
    <div class="swiper-slide">
    <li class="card" data-id ="${s}">
    <img class="card_img" src="${o}" alt="photo"/>
    <h3 class="card_title">${i}</h3>
    <p class="card_text">${e}</p> 
    </li>
    </div>
    `).join("")}y();new c(".reviews_swiper",{modules:[d,l,u,p],navigation:{nextEl:".end",prevEl:".start"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},mousewheel:{sensitivity:1}});
//# sourceMappingURL=commonHelpers.js.map
