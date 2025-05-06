import Swiper from "swiper/bundle";

document.addEventListener("DOMContentLoaded", function () {
    fetch(
        "https://www.mku-journal.online/catalog/recommendations?is_main=false"
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            createSlides(data.data);
        })
        .then(createSlider)
        .catch(error => {
            console.error("Ошибка:", error);
        });

    function createSlider() {
        const swiper = new Swiper(".swiper-container", {
            slidesPerView: 2,
            loop: true,
            spaceBetween: 33,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 33,
                },
            },
        });
    }

    if (window.innerWidth < 1024) {
        const swiper2 = new Swiper(".customer__bottom", {
            slidesPerView: 2,
            loop: false,
            spaceBetween: 33,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 33,
                },
            },
        });
    }

    const typeColors = {
        "Vitamins & Dietary Supplements": "#9c91e0",
        Minerals: "#94d6be",
        "Prenatal Vitamins": "#da91e0",
        "Pain Relief": "#91caf2",
        Antioxidants: "#f2b385",
        "Weight Loss": "#a5b3ff",
        Probiotics: "#e8939d",
    };

    function createSlides(data) {
        const swiperWrapper = document.querySelector(".swiper-wrapper");

        data.forEach(product => {
            const slide = document.createElement("div");
            slide.classList.add("swiper-slide");

            const bgColor = typeColors[product.type] || "#ffffff";

            slide.style.backgroundColor = bgColor;

            slide.innerHTML = `
              <picture class="tellus__picture">
                <source srcset="${product.img.img_webp}">
                <img class="swiper-slide-img" src="${product.img.img_default}" alt="${product.name}">
              </picture>
              <div class="tellus__slide-info">
                <div class="tellus__slide-info__type">${product.type}</div>
                <div class="tellus__slide-info__name">${product.name}</div>
                <div class="tellus__slide-info__descr">${product.legal_disclaimer}</div>
              </div>
            `;

            swiperWrapper.appendChild(slide);
        });
    }

    const vitaminSvgAnim3Origin = `<svg width="279" height="141" viewBox="0 0 279 141" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M250 -2.03082e-06C250 61.8559 200.527 112 139.5 112C78.4725 112 29 61.8559 29 7.62939e-06" stroke="#E99478" stroke-width="58" />
        </svg>`;

    const vitaminSvgAnim1Origin = `<svg width="158" height="158" viewBox="0 0 158 158" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M129 0C129 71.2447 71.2447 129 0 129" stroke="#FFCA78" stroke-width="58" />
        </svg>`;

    const vitaminSvgAnim3 =
        `<svg width="74" height="70" viewBox="0 0 74 70" fill="none" xmlns="http://www.w3.org/2000/svg">\n` +
        '  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 41.2057C26.4019 41.2057 44.8961 22.9409 44.8961 0H74C74 38.4763 42.8443 70 4 70C-34.8443 70 -66 38.4763 -66 5.42517e-06L-36.8961 4.16653e-06C-36.8961 22.9409 -18.4019 41.2057 4 41.2057Z" fill="#F6906E" />\n' +
        `</svg>`;

    const vitaminSvgAnim1 = `<svg width="74" height="76" viewBox="0 0 74 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M76 27.8987C49.4344 27.8987 27.8987 49.4344 27.8987 76H0C0 34.0264 34.0264 0 76 0V27.8987Z" fill="#FFCA78" />
        </svg>`;

    const healthySvgBckg = `<svg width="320" height="198" viewBox="0 0 320 198" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_1064_257" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="320" height="198">
            <rect width="320" height="198" fill="#8172DD" />
          </mask>
          <g mask="url(#mask0_1064_257)">
            <rect width="320" height="198" fill="#8172DD" />
            <g opacity="0.05">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M183.382 73.7949H318.678V164.575C318.678 200.887 288.328 230.435 251.03 230.435C213.732 230.435 183.382 200.887 183.382 164.575V73.7949Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M410.232 73.7949V164.276C410.232 249.435 338.866 318.626 251.031 318.626C163.195 318.626 91.8291 249.435 91.8291 164.276V73.7949H0.333984V164.276C0.333984 298.401 112.69 407.333 251.031 407.333C389.371 407.333 501.727 298.401 501.727 164.276V73.7949H410.232Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M251.031 -169.667C163.212 -169.667 91.8584 -100.862 91.8584 -16.1799V73.795H183.337V-16.1799C183.337 -52.1699 213.708 -81.4558 251.031 -81.4558C288.354 -81.4558 318.725 -52.1699 318.725 -16.1799V73.795H410.203V-16.1799C410.203 -100.862 338.85 -169.667 251.031 -169.667Z" fill="white" />
            </g>
          </g>
        </svg>`;

    const healthySvgBckgOrigin = `<svg width="900" height="960" viewBox="0 0 900 960" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_1064_1033" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="960">
            <rect width="900" height="960" fill="#8172DD" />
          </mask>
          <g mask="url(#mask0_1064_1033)">
            <rect x="-1" width="960" height="960" fill="#8172DD" />
            <g opacity="0.05">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M549.145 326.384H955.034V598.725C955.034 707.661 863.983 796.305 752.089 796.305C640.195 796.305 549.145 707.661 549.145 598.725V326.384Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1229.69 326.384V597.828C1229.69 853.304 1015.6 1060.88 752.09 1060.88C488.584 1060.88 274.485 853.304 274.485 597.828V326.384H0V597.828C0 1000.2 337.068 1327 752.09 1327C1167.11 1327 1504.18 1000.2 1504.18 597.828V326.384H1229.69Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M752.089 -404C488.632 -404 274.572 -197.587 274.572 56.4597V326.384H549.007V56.4597C549.007 -51.5102 640.12 -139.368 752.089 -139.368C864.059 -139.368 955.172 -51.5102 955.172 56.4597V326.384H1229.61V56.4597C1229.61 -197.587 1015.55 -404 752.089 -404Z" fill="white" />
            </g>
          </g>
        </svg>`;

    const healthySvgRoundOrigin = `<svg width="139" height="139" viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="69.5" cy="69.5" r="69.5" fill="#FFCA78" />
        </svg>`;
    const healthySvgRound = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="#FFCA78" />
        </svg>`;

    const readySvgAnim2 = `<svg width="73" height="76" viewBox="0 0 73 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M-3 48.1013C23.5656 48.1013 45.1013 26.5656 45.1013 -2.43898e-06L73 0C73 41.9736 38.9736 76 -3 76L-3 48.1013Z" fill="#FFCA78" />
        </svg>`;

    const readySvgAnim2Origin = `<svg width="73" height="76" viewBox="0 0 73 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M-3 48.1013C23.5656 48.1013 45.1013 26.5656 45.1013 -2.43898e-06L73 0C73 41.9736 38.9736 76 -3 76L-3 48.1013Z" fill="#FFCA78" />
        </svg>`;

    const readySvgAnim1Origin = `<svg width="141" height="279" viewBox="0 0 141 279" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M141 250C79.1441 250 29 200.527 29 139.5C29 78.4725 79.1441 29 141 29" stroke="#E99478" stroke-width="58" />
        </svg>`;
    const readySvgAnim1 = `<svg width="85" height="70" viewBox="0 0 85 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M70 41.2057C92.4019 41.2057 110.896 22.9409 110.896 0H140C140 38.4763 108.844 70 70 70C31.1557 70 1.91419e-06 38.4763 0 5.42517e-06L29.1039 4.16653e-06C29.1039 22.9409 47.5981 41.2057 70 41.2057Z" fill="#F6906E" />
        </svg>`;

    const healthySvgBckg375 = `<svg width="375" height="198" viewBox="0 0 375 198" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_1064_2426" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="375" height="198">
            <rect width="375" height="198" fill="#8172DD" />
          </mask>
          <g mask="url(#mask0_1064_2426)">
            <rect width="375" height="198" fill="#8172DD" />
            <g opacity="0.05">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M211.382 73.7949H346.678V164.575C346.678 200.887 316.328 230.435 279.03 230.435C241.732 230.435 211.382 200.887 211.382 164.575V73.7949Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M438.232 73.7949V164.276C438.232 249.435 366.866 318.626 279.031 318.626C191.195 318.626 119.829 249.435 119.829 164.276V73.7949H28.334V164.276C28.334 298.401 140.69 407.333 279.031 407.333C417.371 407.333 529.727 298.401 529.727 164.276V73.7949H438.232Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M279.031 -169.667C191.212 -169.667 119.858 -100.862 119.858 -16.1799V73.795H211.337V-16.1799C211.337 -52.1699 241.708 -81.4558 279.031 -81.4558C316.354 -81.4558 346.725 -52.1699 346.725 -16.1799V73.795H438.203V-16.1799C438.203 -100.862 366.85 -169.667 279.031 -169.667Z" fill="white" />
            </g>
          </g>
        </svg>`;

    function changeSvgVitamins(className, svg) {
        if (window.innerWidth < 1024) {
            const containerSvg = document.querySelector(className);
            containerSvg.innerHTML = `${svg}`;
        }
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth < 1024) {
            changeSvgVitamins(".vitamins__animation3", vitaminSvgAnim3);
            changeSvgVitamins(".vitamins__animation1", vitaminSvgAnim1);
        } else {
            changeSvgVitamins(".vitamins__animation3", vitaminSvgAnim3Origin);
            changeSvgVitamins(".vitamins__animation1", vitaminSvgAnim1Origin);
        }
    });

    changeSvgVitamins(".vitamins__animation3", vitaminSvgAnim3);
    changeSvgVitamins(".vitamins__animation1", vitaminSvgAnim1);

    const healthySvgElementBckg = document.querySelector(".healthy__left svg");
    const healthySvgElementRound = document.querySelector(
        ".healthy__animation1 svg"
    );
    const readySvgElementAnim2 = document.querySelector(
        ".ready__animation2 svg"
    );
    const readySvgElementAnim1 = document.querySelector(
        ".ready__animation1 svg"
    );

    function changeSvgHealthy(parentBlock, svg, svgOrigin) {
        if (window.innerWidth < 1024) {
            parentBlock.outerHTML = svg;
        } else {
            parentBlock.outerHTML = svgOrigin;
        }
    }

    changeSvgHealthy(
        healthySvgElementBckg,
        window.innerWidth < 375 ? healthySvgBckg : healthySvgBckg375,
        healthySvgBckgOrigin
    );
    changeSvgHealthy(
        healthySvgElementRound,
        healthySvgRound,
        healthySvgRoundOrigin
    );
    changeSvgHealthy(readySvgElementAnim2, readySvgAnim2, readySvgAnim2Origin);
    changeSvgHealthy(readySvgElementAnim1, readySvgAnim1, readySvgAnim1Origin);

    const menu = document.querySelector(".menu");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            menu.classList.add("menu__scroll");
        } else {
            menu.classList.remove("menu__scroll");
        }
    });
});

// const orders = [
//     { id: 1, client: "Anna", total: 120 },
//     { id: 2, client: "Boris", total: 90 },
//     { id: 3, client: "Anna", total: 30 },
//     { id: 4, client: "Clara", total: 45 },
//     { id: 5, client: "Boris", total: 60 },
// ];
//
// let user = orders.reduce((acc, order) => {
//     let { client, total } = order;
//     if (!acc[client]) {
//         acc[client] = {
//             count: 0,
//             total: 0,
//         };
//     }
//     acc[client].count++;
//     acc[client].total += total;
//     return acc;
// }, {});
//
// console.log(user);

// const users = [
//     { id: 1, name: "Alice", role: "admin" },
//     { id: 2, name: "Bob", role: "user" },
//     { id: 3, name: "Charlie", role: "user" },
//     { id: 4, name: "David", role: "moderator" },
//     { id: 5, name: "Eve", role: "admin" },
// ];
//
// const roleCount = users.reduce((acc, user) => {
//     acc[user.role] = (acc[user.role] || 0) + 1;
//     return acc;
// }, {});
//
// console.log(roleCount);
//
// const products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 },
//     { name: "Tablet", price: 750 },
// ];
//
// const upperPrice = products.map(product => {
//     return product.price + product.price * 0.2;
// });
//
// products.forEach((product, i) => {
//     console.log(`Продукт ${product.name}, Цена с НДС: ${upperPrice[i]}`);
// });

// const transactions = [
//     { type: "income", amount: 1000, currency: "USD", date: "2024-03-12" },
//     { type: "expense", amount: 200, currency: "USD", date: "2024-05-01" },
//     { type: "income", amount: 700, currency: "EUR", date: "2025-01-10" },
//     { type: "expense", amount: 100, currency: "EUR", date: "2025-02-14" },
//     { type: "income", amount: 1200, currency: "USD", date: "2025-03-01" },
//     { type: "expense", amount: 400, currency: "USD", date: "2025-03-03" },
// ];
//
// const result = transactions.reduce((acc, transaction) => {
//     const year = new Date(transaction.date).getFullYear();
//
//     if (!acc[year]) {
//         acc[year] = {};
//     }
//
//     if (!acc[year][transaction.currency]) {
//         acc[year][transaction.currency] = { income: 0, expense: 0 };
//     }
//
//     acc[year][transaction.currency][transaction.type] += transaction.amount;
//
//     return acc;
// }, {});
//
// console.log(result);
//
// const sentences = [
//     "JavaScript is awesome",
//     "Vue is reactive",
//     "Reduce is powerful method",
//     "Code every day",
// ];
//
// let wordCounter = sentences.reduce((acc, sentence) => {
//     const words = sentence.split(" ");
//     const wordLowerCase = words.map(word => word.toLowerCase());
//
//     wordLowerCase.forEach(word => {
//         if (!acc[word]) {
//             acc[word] = 0;
//         }
//         acc[word] = acc[word] + 1;
//     });
//     return acc;
// }, {});
//
// console.log(wordCounter);
