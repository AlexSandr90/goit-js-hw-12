import{a as q,S as E,i as m}from"./assets/vendor-2cfd16ce.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const v="https://pixabay.com/api/",x="43151566-329d1ba35c4912218880d8d24",f=async(n="",t=1)=>{try{return(await q.get(`${v}?key=${x}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}`)).data}catch(o){console.error(o)}},g=(n,t=[])=>{const o=t.map(({tags:s,likes:e,views:r,comments:l,downloads:S,webformatURL:M,largeImageURL:$})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${$}" >
            <img class="gallery-image" src="${M}" alt="${s}" />
            <ul class="stats-block">
              <li>
                <span>Likes</span>
                <span>${e}</span>
              </li>
              <li>
                <span>Views</span>
                <span>${r}</span>
              </li>
              <li>
                <span>Comments</span>
                <span>${l}</span>
              </li>
              <li>
                <span>Downloads</span>
                <span>${S}</span>
              </li>
            </ul>
          </a>
        </li>
        `).join("");n.insertAdjacentHTML("beforeend",o)},I=document.querySelector('input[class="search-input"]'),w=document.querySelector('form[class="search"]'),u=document.querySelector('section[class="gallery-section"]'),y='<div id="loader" class="loader"></div>',A='<button id="load-more" class="load-more" type="button">Load More</button>',d=document.querySelector('ul[class="gallery"]');let c,i=[],h="",a=1,b;const O={captionsData:"alt",captionDelay:250},L=new E("ul.gallery a",O),p={position:"topRight",messageColor:"#ffffff",timeout:5e3,radius:15,backgroundColor:"#FF2E2E"},P=async n=>{console.log(n.target.textContent);try{if(a<=b){u.insertAdjacentHTML("beforebegin",y);const t=await f(h,a),o=document.querySelector("#loader");o&&o.remove(),i=[...i,...t.hits],g(d,i),L.refresh(),console.log({page:a}),a+=1,console.log({page:a})}}catch(t){console.error(t)}},T=async n=>{n.preventDefault(),i=[],d.textContent="";const t=n.target,o=I.value.trim();if(h=o,o===""){m.error({...p,message:"The request must not be empty!"});return}try{u.insertAdjacentHTML("beforebegin",y);const s=await f(o,a),e=document.querySelector("#loader");e&&e.remove(),s!==null&&s.hits.length>0?(i=[...i,...s.hits],g(d,i),L.refresh(),b=Math.ceil(s.total/20),c||(u.insertAdjacentHTML("beforeend",A),c=document.getElementById("load-more"),c.addEventListener("click",P)),a+=1):m.error({...p,message:"Sorry, there are no images matching your search query. Please, try again again!"})}catch(s){console.error("Error fetching images:",s)}t.reset()};w.addEventListener("submit",T);
//# sourceMappingURL=commonHelpers.js.map
