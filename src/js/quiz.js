document.addEventListener("DOMContentLoaded", () => {
    function goBack() {
        if (
            document.referrer &&
            document.referrer.indexOf(window.location.hostname) !== -1
        ) {
            window.history.back();
        } else {
            window.location.href = "/";
        }
    }

    const back = document.querySelector(".question__go-back");
    back.addEventListener("click", goBack);

    function toggleQuestion(button, direction) {
        const currentQuestion = button.closest(".question");
        const targetQuestion =
            direction === "next"
            ? currentQuestion.nextElementSibling
            : currentQuestion.previousElementSibling;

        if (targetQuestion) {
            currentQuestion.classList.remove("show-height");
            targetQuestion.classList.add("show-height");
        }
    }

    function setLocalStorage(id, name) {
        const inputField = document.querySelector(id);
        const inputValue = inputField.value;

        if (inputValue) {
            localStorage.setItem(name, inputValue);
        }

        const storedValue = localStorage.getItem(name);
        if (storedValue) {
            console.log("Saved data:", storedValue);
        }
    }

    document.addEventListener("click", function (e) {
        const nextButton = e.target.closest(".question__next");
        const prevButton = e.target.closest(".question__prev");
        const inputButton1 = e.target.closest(".question-1__button");
        const inputButton9 = e.target.closest(".question-9__button");
        const form1 = document.querySelector(".question-1__form");
        const form9 = document.querySelector(".question-9__form");

        if (nextButton && inputButton1) {
            if (form1.checkValidity()) {
                e.preventDefault();
                setLocalStorage("#question-1__input", 'name');
                toggleQuestion(nextButton, "next");
            } else {
                e.preventDefault();
                form1.reportValidity();
            }
        } else if (nextButton && inputButton9) {
            if (form9.checkValidity()) {
                e.preventDefault();
                setLocalStorage("#question-9__input", 'email');
                window.location.href = 'personal.html';
            } else {
                e.preventDefault();
                form9.reportValidity();
            }
        } else if (nextButton && !inputButton1 && !inputButton9) {
            toggleQuestion(nextButton, "next");
        } else if (prevButton) {
            toggleQuestion(prevButton, "prev");
        }
    });
});
