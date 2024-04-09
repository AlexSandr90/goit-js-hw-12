import{a as E,S as x,i as f}from"./assets/vendor-2cfd16ce.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const C="https://pixabay.com/api/",I="43151566-329d1ba35c4912218880d8d24",g=async(a="",o=1,s=15)=>{try{return(await E.get(`${C}?key=${I}&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${s}`)).data}catch(t){console.error(t)}},y=(a,o=[])=>{const s=o.map(({tags:t,likes:e,views:r,comments:l,downloads:$,webformatURL:q,largeImageURL:v})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${v}" >
            <img class="gallery-image" src="${q}" alt="${t}" />
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
                <span>${$}</span>
              </li>
            </ul>
          </a>
        </li>
        `).join("");a.insertAdjacentHTML("beforeend",s)},M=document.querySelector('input[class="search-input"]'),P=document.querySelector('form[class="search"]'),h=document.querySelector('section[class="gallery-section"]'),b='<div id="loader" class="loader"></div>',d=document.querySelector('ul[class="gallery"]'),u=document.getElementById("load-more");let i=[],L="",n=1,p=40,c;const w={captionsData:"alt",captionDelay:250},S=new x("ul.gallery a",w),O={position:"topRight",messageColor:"#ffffff",timeout:5e3,radius:15,backgroundColor:"#FF2E2E"},m=a=>{f.error({...O,message:a})},A=async a=>{console.log(a.target.textContent);try{if(n<=c){n===c&&(f.info({position:"topRight",messageColor:"#ffffff",timeout:5e3,radius:15,backgroundColor:"lightblue",message:"We're sorry, but you've reached the end of search results."}),u.classList.replace("load-more","none")),h.insertAdjacentHTML("beforebegin",b);const o=await g(L,n,p),s=document.querySelector("#loader");s&&s.remove(),i=[...i,...o.hits],y(d,i),S.refresh(),n===c?n=1:n+=1,console.log({page:n})}}catch(o){console.error(o)}},D=async a=>{a.preventDefault(),i=[],n=1,d.textContent="",u.classList.replace("load-more","none");const o=a.target,s=M.value.trim();if(L=s,s===""){m("The request must not be empty!");return}try{h.insertAdjacentHTML("beforebegin",b);const t=await g(s,n,p),e=document.querySelector("#loader");e&&e.remove(),t!==null&&t.hits.length>0?(i=[...i,...t.hits],y(d,i),S.refresh(),c=Math.ceil(t.total/p),n+=1,n>1&&u.classList.replace("none","load-more")):m("Sorry, there are no images matching your search query. Please, try again again!")}catch(t){console.error("Error fetching images:",t)}o.reset()};P.addEventListener("submit",D);u.addEventListener("click",A);
//# sourceMappingURL=commonHelpers.js.map
