document.addEventListener("DOMContentLoaded", () => {
    fetch(
        "https://www.mku-journal.online/catalog/recommendations?is_main=false"
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            createSlides(data.data);
        })
        .then(editNameCard)
        .catch(error => {
            console.error("Ошибка:", error);
        });

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
        const cards = document.querySelector(".p-pack__cards");

        data.forEach(product => {
            const slide = document.createElement("div");
            slide.classList.add("p-pack__card");
            slide.classList.add("swiper-slide");

            const textColor = typeColors[product.type] || "#ffffff";

            slide.innerHTML = `
              <picture class="p-pack__picture">
                <source srcset="${product.img.img_webp}">
                <img src="${product.img.img_default}" alt="${product.name}">
              </picture>
                <div class="p-pack__type">${product.type}</div>
                <div class="p-pack__name">${product.name}</div>
                <div class="p-pack__price">$${product.price}</div>
            `;

            const type = slide.querySelector('.p-pack__type');

            type.style.color = textColor;

            cards.appendChild(slide);
        });
    }

    const menu = document.querySelector(".menu");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            menu.classList.add("menu__scroll");
        } else {
            menu.classList.remove("menu__scroll");
        }
    });

    function editNameCard() {
        const nameElement = document.querySelectorAll('.p-pack__name');
        nameElement.forEach(name => {
            if (name.textContent.length > 29) {
                name.textContent = name.textContent.slice(0, 25) + '...';
            }
        });
    }


    const userName = localStorage.getItem('name');

    if (userName) {
        const titleElement = document.querySelector('.personal__title');
        titleElement.textContent = titleElement.textContent.replace('User', userName);
    }

});