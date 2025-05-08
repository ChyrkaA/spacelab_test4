import"./modulepreload-polyfill-B5Qt9EMX.js";document.addEventListener("DOMContentLoaded",()=>{fetch("https://www.mku-journal.online/catalog/recommendations?is_main=false").then(e=>e.json()).then(e=>{console.log(e),i(e.data)}).then(l).catch(e=>{console.error("Ошибка:",e)});const o={"Vitamins & Dietary Supplements":"#9c91e0",Minerals:"#94d6be","Prenatal Vitamins":"#da91e0","Pain Relief":"#91caf2",Antioxidants:"#f2b385","Weight Loss":"#a5b3ff",Probiotics:"#e8939d"};function i(e){const n=document.querySelector(".p-pack__cards");e.forEach(t=>{const s=document.createElement("div");s.classList.add("p-pack__card"),s.classList.add("swiper-slide");const r=o[t.type]||"#ffffff";s.innerHTML=`
              <picture class="p-pack__picture">
                <source srcset="${t.img.img_webp}">
                <img src="${t.img.img_default}" alt="${t.name}">
              </picture>
                <div class="p-pack__type">${t.type}</div>
                <div class="p-pack__name">${t.name}</div>
                <div class="p-pack__price">$${t.price}</div>
            `;const d=s.querySelector(".p-pack__type");d.style.color=r,n.appendChild(s)})}const c=document.querySelector(".menu");window.addEventListener("scroll",()=>{window.scrollY>200?c.classList.add("menu__scroll"):c.classList.remove("menu__scroll")});function l(){document.querySelectorAll(".p-pack__name").forEach(n=>{n.textContent.length>29&&(n.textContent=n.textContent.slice(0,25)+"...")})}const a=localStorage.getItem("name");if(a){const e=document.querySelector(".personal__title");e.textContent=e.textContent.replace("User",a)}});
