//Lazysizes
document.addEventListener("DOMContentLoaded",(function(){!function(){function handleLazyLoad(){document.querySelectorAll("img, iframe").forEach((function(e){(function isInViewport(e){const n=e.getBoundingClientRect();return n.bottom>0&&n.top<window.innerHeight})(e)||function isInsideSlideshow(e){return!!e.closest("#pa_slideshow")}(e)||e.classList.add("lazyload")})),lazySizes.init()}new MutationObserver((function processLazyLoadChanges(e){e.forEach((function(e){e.addedNodes.length>0&&e.addedNodes.forEach((function(e){e.nodeType===Node.ELEMENT_NODE&&handleLazyLoad()}))}))})).observe(document.body,{childList:!0,subtree:!0}),handleLazyLoad()}()}));
//Reply Counter
document.addEventListener("DOMContentLoaded",(function(){!function processPostElements(){const e=document.querySelectorAll(".post"),t=function getPageNumber(){const e=new URLSearchParams(window.location.search);return parseInt(e.get("st")||0)+1}();e.forEach(((e,n)=>{!function createReplyCounter(e,t,n){const o=document.createElement("b");o.className="reply_counter",o.textContent="#"+t;const r=e.querySelector(".mini_buttons.rt.Sub");r&&("after"===n?r.appendChild(o):r.insertBefore(o,r.firstChild))}(e,t+n,"after")}))}()}));
//Favicons
document.addEventListener("DOMContentLoaded",(function(){function updateFaviconsForLinks(e){e.forEach((e=>{if(!(e.closest(".spoiler .code_top a")||e.closest(".fancyborder a")||e.closest(".quote_top a")||e.querySelector("img"))){let o=document.createElement("img");e.href.includes("youtu.be")?o.src="https://www.google.com/s2/favicons?domain=youtube.com":o.src="https://www.google.com/s2/favicons?domain="+e.href,o.alt="fav",e.matches(".quote a")?(o.width=14,o.height=14):(o.width=16,o.height=16),e.prepend(o)}}))}const e=new MutationObserver((e=>{e.forEach((e=>{updateFaviconsForLinks(e.target.querySelectorAll(".color a, span.tmsg a"))}))})),o=document.querySelector("body");e.observe(o,{childList:!0,subtree:!0});updateFaviconsForLinks(document.querySelectorAll(".color a, span.tmsg a"))}));
//Quote
document.addEventListener("DOMContentLoaded",(()=>{const e=170;function expandQuotes(t){const updateHeight=()=>{const o=t.querySelector(".quotebtn button");if(!o&&t.scrollHeight>e){t.style.maxHeight=e+"px";const o=document.createElement("div");o.className="quotebtn";const n=document.createElement("button");n.innerHTML="Show More...",o.appendChild(n),t.appendChild(o),n.addEventListener("click",(()=>{t.style.transition="max-height 0.382s ease-in-out",t.style.maxHeight=t.scrollHeight+"px",o.style.display="none",setTimeout((()=>{t.style.maxHeight="none"}),382)}))}else o&&t.scrollHeight<=e&&o.parentNode.remove()};updateHeight();const o=new ResizeObserver(updateHeight);o.observe(t);const n=t.querySelector(".spoiler .code_top a");n&&n.addEventListener("click",(()=>{t.style.maxHeight="none",o.disconnect()}))}function modifyQuoteTop(e){const t=e.textContent,o=e.querySelector("a");if(t.includes("@")){const n=t.replace(/QUOTE\s*\(([^@]+)@[^)]+\)\s*/,"$1 said:");e.innerHTML=n,e.style.color="var(--mdcol)",o&&(e.appendChild(o),o.style.color="var(--mdcol)")}else{const t=e.querySelector(".quote_top b");t&&(t.style.opacity=1)}}(function initializeExpandQuotes(){document.querySelectorAll(".quote").forEach(expandQuotes),new MutationObserver((e=>{for(const t of e)t.addedNodes.length>0&&t.addedNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&(e.classList.contains("quote")?expandQuotes(e):e.querySelectorAll(".quote").forEach(expandQuotes))}))})).observe(document.body,{childList:!0,subtree:!0})})(),document.querySelectorAll(".quote_top").forEach(modifyQuoteTop),function observeMutations(){new MutationObserver((e=>{for(const t of e)"childList"===t.type&&t.addedNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&e.querySelectorAll(".quote_top").forEach(modifyQuoteTop)}))})).observe(document.body,{childList:!0,subtree:!0})}()}));
//Goto
document.addEventListener("DOMContentLoaded",(function(){let e;function scrollToSmooth(e){window.scrollTo({top:e,behavior:"smooth",duration:600})}function showGotoElement(e){e.classList.add("active"),e.style.zIndex="9999"}function hideGotoElement(e){e.classList.remove("active")}!function initSmoothScrolling(){document.querySelector(".p_up").addEventListener("click",(()=>{scrollToSmooth(0)})),document.querySelector(".p_down").addEventListener("click",(()=>{scrollToSmooth(document.body.scrollHeight)}));const o=document.querySelector(".goto");window.addEventListener("scroll",(()=>{clearTimeout(e),showGotoElement(o),e=setTimeout((()=>{hideGotoElement(o)}),3e3)})),o.addEventListener("mouseenter",(()=>{clearTimeout(e),showGotoElement(o)})),o.addEventListener("mouseleave",(()=>{e=setTimeout((()=>{hideGotoElement(o)}),3e3)}))}()}));
