import{i as c,S as n}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u=({tags:a,webformatURL:o,largeImageURL:t,likes:s,views:e,comments:r,downloads:l})=>`
      <li>
      <a class="gallery-item" href="${t}">
      <img class="gallery-image" src="${o}" alt="${a}" title="${a}"/>
      <div class="gallery-text-block">
      <p class="gallery-text">Likes<br>${s}</p>
      <p class="gallery-text">Views<br>${e}</p>
      <p class="gallery-text">Comments<br>${r}</p>
      <p class="gallery-text">Downloads<br>${l}</p>
      </div>
      </a>
      </li>
    `,m=a=>{const o=new URLSearchParams({q:a,per_page:9,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"50720550-abdb0a32f459975af0b381b86"});return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},i={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")},f=a=>{a.preventDefault();const{target:o}=a,t=o.elements.user_query.value;i.loader.classList.add("active"),i.gallery.innerHTML="",m(t).finally(()=>{i.loader.classList.remove("active")}).then(s=>{if(!t.trim())return;if(s.total===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),i.gallery.innerHTML="";return}const e=s.hits.map(l=>u(l)).join("");i.gallery.innerHTML=e,new n(".js-gallery a").refresh()}).catch(s=>{console.log(s)})};i.searchForm.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
