import{a as n,S as c,N as l,P as d,K as u,M as p,i as f}from"./assets/vendor-8779919d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="https://portfolio-js.b.goit.study/api/reviews";async function y(){const{data:s}=await n.get(`${m}`,{headers:{Accept:"application/json"},method:"Get"});return s}const g=document.querySelector(".reviews_cards"),h=document.querySelector(".placeholder_text");async function w(){try{const s=await y();g.insertAdjacentHTML("beforeend",v(s))}catch{h.classList.replace("visually-hidden","title_not_found"),f.show({message:"Reviews Not found",backgroundColor:"#ed3b44",messageColor:"#fafafa",position:"topRight",timeout:2e3})}}function v(s){return s.map(({author:r,avatar_url:i,review:o})=>`
    <div class="swiper-slide slide-reviews">
    <li class="card">
    <img class="card_img" src="${i}" alt="photo"/>
    <h3 class="card_title">${r}</h3>
    <p class="card_text">${o}</p>
    </li>
    </div>
    `).join("")}w();new c(".swiper",{modules:[l,d,u,p],navigation:{nextEl:".end",prevEl:".start"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},mousewheel:{sensitivity:1}});
//# sourceMappingURL=commonHelpers.js.map
