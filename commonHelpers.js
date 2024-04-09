import{a as q,S as E,i as m}from"./assets/vendor-2cfd16ce.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const v="https://pixabay.com/api/",x="43151566-329d1ba35c4912218880d8d24",g=async(n="",o=1,s=15)=>{try{return(await q.get(`${v}?key=${x}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${s}`)).data}catch(t){console.error(t)}},f=(n,o=[])=>{const s=o.map(({tags:t,likes:e,views:r,comments:i,downloads:S,webformatURL:$,largeImageURL:M})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${M}" >
            <img class="gallery-image" src="${$}" alt="${t}" />
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
                <span>${i}</span>
              </li>
              <li>
                <span>Downloads</span>
                <span>${S}</span>
              </li>
            </ul>
          </a>
        </li>
        `).join("");n.insertAdjacentHTML("beforeend",s)},I=document.querySelector('input[class="search-input"]'),P=document.querySelector('form[class="search"]'),u=document.querySelector('section[class="gallery-section"]'),y='<div id="loader" class="loader"></div>',w='<button id="load-more" class="load-more" type="button">Load More</button>',d=document.querySelector('ul[class="gallery"]');let c,l=[],h="",a=1,A=15,b;const O={captionsData:"alt",captionDelay:250},L=new E("ul.gallery a",O),p={position:"topRight",messageColor:"#ffffff",timeout:5e3,radius:15,backgroundColor:"#FF2E2E"},T=async n=>{console.log(n.target.textContent);try{if(a<=b){u.insertAdjacentHTML("beforebegin",y);const o=await g(h,a),s=document.querySelector("#loader");s&&s.remove(),l=[...l,...o.hits],f(d,l),L.refresh(),console.log({page:a}),a+=1,console.log({page:a})}}catch(o){console.error(o)}},C=async n=>{n.preventDefault(),l=[],d.textContent="";const o=n.target,s=I.value.trim();if(h=s,s===""){m.error({...p,message:"The request must not be empty!"});return}try{u.insertAdjacentHTML("beforebegin",y);const t=await g(s,a),e=document.querySelector("#loader");e&&e.remove(),t!==null&&t.hits.length>0?(l=[...l,...t.hits],f(d,l),L.refresh(),b=Math.ceil(t.total/A),c||(u.insertAdjacentHTML("beforeend",w),c=document.getElementById("load-more"),c.addEventListener("click",T)),a+=1):m.error({...p,message:"Sorry, there are no images matching your search query. Please, try again again!"})}catch(t){console.error("Error fetching images:",t)}o.reset()};P.addEventListener("submit",C);
//# sourceMappingURL=commonHelpers.js.map
