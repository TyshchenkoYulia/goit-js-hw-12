import{a as f,S as p,i as u}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="/goit-js-hw-12/assets/error-icon-945075c7.svg";async function d(a){const o="42556248-7d7b04b226b16d9af953a75af",r="https://pixabay.com/api/?key=",l=a,e=r+o+"&q="+l+"&image_type=photo&orientation=horizontal&safesearch=true";let t=15,s=1;const n=new URLSearchParams({_limit:t,_page:s});return(await f.get(`${e}+${n}`)).data}const i={gallery:document.querySelector(".gallery"),formSubmit:document.querySelector(".form"),input:document.querySelector(".input-value"),section:document.querySelector("section"),loader:document.querySelector("div")};function g(a){const o=a.map(({webformatURL:r,largeImageURL:l,tags:e,likes:t,views:s,comments:n,downloads:c})=>`<li class="gallery-item">
                    <a class="gallery-link" href="${l}">
                        <img class="gallery-image"
                            src="${r}" 
                            alt="${e}" />
                    </a>
                    <ul class="list">
                        <li class="list-info">Likes<p class="info">${t}</p></li>
                        <li class="list-info">Views<p class="info">${s}</p></li>
                        <li class="list-info">Comments<p class="info">${n}</p></li>
                        <li class="list-info">Downloads<p class="info">${c}</p></li>
                    </ul>
                </li>`).join("");i.gallery.innerHTML=o,i.loader.classList.remove("loader")}const y=new p(".gallery a",{captionsData:"alt",captionDelay:250});i.formSubmit.addEventListener("submit",h);async function h(a){a.preventDefault(),i.gallery.innerHTML="";const o=i.input.value.trim();if(o===""){u.show({titleColor:"#fff",titleSize:"16px",message:"Please, enter your search query!!!",messageColor:"#fff",messageSize:"16px",position:"topRight",backgroundColor:"#59A10D",close:!1});return}i.loader.classList.add("loader");try{await d(o),data.total===0&&u.show({titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16px",iconUrl:m,position:"topRight",backgroundColor:"#ef4040",close:!0,maxWidth:"432px"}),g(data.hits),y.refresh()}catch(r){console.log(r)}i.formSubmit.reset()}
//# sourceMappingURL=commonHelpers.js.map
