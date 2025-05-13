import useFetch from "./services/useFetch.js";

document.addEventListener("DOMContentLoaded", () => {

    useFetch('/catalog/recommendations?is_main=false')
        .then(data => {
            if (!data) {
                throw new Error('Data is bad');
            }
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

    function getDataLocalStorage() {
        const name = localStorage.getItem("name");
        const mail = localStorage.getItem("Mail");
        const smoke = localStorage.getItem("Do you smoke?");
        const habits = localStorage.getItem("What is your eating habits?");
        const alcohol = localStorage.getItem(
            "How frequently do you consume\n" +
            "                alcoholic beverages?");
        const coldFluid = localStorage.getItem(
            "How frequently do you have cold/flu symptoms?");
        const stress = localStorage.getItem("Describe your stress level");
        const glucose = localStorage.getItem(
            "Have you ever been diagnosted with high blood glucose level?");
        const focus = localStorage.getItem('Tell us what you want to focus on');

        console.log('name: ', name, '\n',
                    'Mail: ', mail, '\n',
                    "Do you smoke?: ", smoke, '\n',
                    "What is your eating habits?: ", habits, '\n',
                    "How frequently do you consume alcoholic beverages?: ", alcohol, '\n',
                    "How frequently do you have cold/flu symptoms?: ", coldFluid, '\n',
                    "Describe your stress level: ", stress, '\n',
                    "Have you ever been diagnosted with high blood glucose level?: ",
                    glucose, '\n',
                    'Tell us what you want to focus on: ', focus
        );

    }

    getDataLocalStorage();
});