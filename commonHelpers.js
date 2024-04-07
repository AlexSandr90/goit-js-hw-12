import{S as f,i as l}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="43151566-329d1ba35c4912218880d8d24",h=(o="")=>fetch(`${g}?key=${y}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}),b=(o,r)=>{const n=r.map(({tags:s,likes:e,views:t,comments:a,downloads:m,webformatURL:p,largeImageURL:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${d}" >
            <img class="gallery-image" src="${p}" alt="${s}" />
            <ul class="stats-block">
              <li>
                <span>Likes</span>
                <span>${e}</span>
              </li>
              <li>
                <span>Views</span>
                <span>${t}</span>
              </li>
              <li>
                <span>Comments</span>
                <span>${a}</span>
              </li>
              <li>
                <span>Downloads</span>
                <span>${m}</span>
              </li>
            </ul>
          </a>
        </li>
        `).join("");o.insertAdjacentHTML("beforeend",n)},S=document.querySelector('input[class="search-input"]'),L=document.querySelector('form[class="search"]'),$=document.querySelector('section[class="gallery-section"]'),q='<div id="loader" class="loader"></div>',c=document.querySelector('ul[class="gallery"]');let i=[];const E={captionsData:"alt",captionDelay:250},v=new f("ul.gallery a",E),u={position:"topRight",messageColor:"#ffffff",timeout:5e3,radius:15,backgroundColor:"#FF2E2E"},w=async o=>{o.preventDefault(),i=[],c.textContent="";const r=o.target,n=S.value.trim();if(n===""){l.error({...u,message:"The request must not be empty!"});return}try{$.insertAdjacentHTML("beforebegin",q);const s=await h(n),e=document.querySelector("#loader");e&&e.remove(),s!==null&&s.hits.length>0?(i=[...s.hits],b(c,i),v.refresh()):l.error({...u,message:"Sorry, there are no images matching your search query. Please, try again again!"})}catch(s){console.error("Error fetching images:",s)}r.reset()};L.addEventListener("submit",w);
//# sourceMappingURL=commonHelpers.js.map
