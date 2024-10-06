import{i as l,S as h}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=document.querySelector(".js-search"),c=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";u.addEventListener("submit",f);function f(s){s.preventDefault(),c.innerHTML="",n.style.display="block";const o=s.target.elements.search.value;m(o).then(r=>{if(n.style.display="none",!r.hits.length){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}c.insertAdjacentHTML("beforeend",p(r.hits)),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),u.reset()}).catch(r=>{n.style.display="none",l.error({title:"Error",message:"Something went wrong. Please try again later."}),console.log("Error:",r)})}function m(s){const o="https://pixabay.com/api/",r="40891115-11d0b88dd3a60afc830d1d27f";s.includes(" ")&&s.replace(/\s+/g,"+");const a=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${a}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function p(s){return s.map(({webformatURL:o,largeImageURL:r,tags:a,likes:e,views:t,comments:i,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${a}"
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
              <p class="amount">${i}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${d}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
