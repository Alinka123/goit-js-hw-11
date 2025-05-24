import{a as u,S as f,i as s}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d=u.create({baseURL:"https://pixabay.com/api/",params:{key:"50467285-01ba3d908a621ec7bfe384c55",image_type:"photo",orientation:"horizontal",safesearch:!0}});function m(o){return d.get("",{params:{q:o}}).then(t=>t.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),p=new f(".gallery a");function g({largeImageURL:o,webformatURL:t,tags:n,likes:i,views:e,comments:r,downloads:a}){return`
    <li class="gallery-item">
      <a href="${o}">
        <img src="${t}" alt="${n}" loading="lazy" />
      </a>
      <div class="image-info">
        <p> Likes ${i}</p>
        <p> Views ${e}</p>
        <p> Comments ${r}</p>
        <p> Downloads ${a}</p>
      </div>
    </li>
  `}function h(o){return o.map(g).join(`
`)}function y(o){const t=h(o);l.insertAdjacentHTML("beforeend",t),p.refresh()}function L(){l.innerHTML=""}function b(){c.classList.remove("hidden")}function S(){c.classList.add("hidden")}const v=document.querySelector(".form");v.addEventListener("submit",$);function $(o){o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){s.error({title:"Error",message:"Please enter a search term."});return}L(),b(),m(t).then(n=>{if(!n.hits.length){s.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(n.hits)}).catch(n=>{s.error({title:"Error",message:"Something went wrong. Try again later."}),console.error(n)}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map
