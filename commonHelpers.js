import{i as d,S as h}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=document.querySelector(".js-search"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");c.style.display="none";n.addEventListener("submit",p);function p(r){r.preventDefault(),l.innerHTML="",c.style.display="block";const o=r.target.elements.search.value;f(o).then(s=>{c.style.display="none",s.hits.length||d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML=m(s.hits),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),n.reset()}).catch(s=>{c.style.display="none",console.log(s)})}function f(r){const o="https://pixabay.com/api/",s="46359588-09116391d0d94e56de7df57e6";r.includes(" ")&&r.replace(/\s+/g,"+");const i=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function m(r){return r.map(({webformatURL:o,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${i}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${a}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${u}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
