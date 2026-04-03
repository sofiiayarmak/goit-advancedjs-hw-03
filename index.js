import{a as m,S as p,i}from"./assets/vendor-BzeJ7Hez.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="55294732-f0b081769c244f5ac0d2772ff",h="https://pixabay.com/api/";function y(n){const o={key:g,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(h,{params:o}).then(t=>t.data).catch(t=>{throw console.error("Error fetching images:",t),t})}let b=new p(".gallery a",{captionsData:"alt",captionDelay:250});const l=document.querySelector(".gallery"),u=document.querySelector(".loader");function L(n){const o=n.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:s,comments:f,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${t}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r}</p>
          <p><b>Views:</b> ${s}</p>
          <p><b>Comments:</b> ${f}</p>
          <p><b>Downloads:</b> ${d}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),b.refresh()}function w(){l.innerHTML=""}function S(){u.classList.remove("hidden")}function q(){u.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",n=>{n.preventDefault();const o=n.currentTarget.elements["search-text"].value.trim();if(o===""){i.warning({message:"Please enter a search query!"});return}w(),S(),y(o).then(t=>{if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(t.hits)}).catch(t=>{i.error({message:"Something went wrong. Try again later."})}).finally(()=>{q(),c.reset()})});
//# sourceMappingURL=index.js.map
