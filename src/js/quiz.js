import JustValidate from "just-validate";

document.addEventListener("DOMContentLoaded", () => {
    // const valid1 = new JustValidate('#form1');
    // const valid9 = new JustValidate('#form9');
    //
    // valid1.addField('#name', [
    //     {
    //         rule: 'required',
    //         errorMessage: 'Please enter your first name',
    //     },
    //     {
    //         rule: 'minLength',
    //         value: 3,
    //         errorMessage: 'Name must be at least 3 characters long',
    //     }
    // ]);

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

    function setLocalStorage(value, name) {
        if (value) {
            localStorage.setItem(name, value);
        }
    }

    function validate(formId, dataQuestion, nextButton) {

        const form = document.querySelector(`#${formId}`);
        const input = form.querySelector("input");
        const inputValue = input.value;

        const valid = new JustValidate(form, {
            focusInvalidField: true,
            lockForm: true,
            validateBeforeSubmitting: true,

            errorFieldCssClass: ['invalid'],
        });
        const field = input.id;

        valid.addField(`#${field}`, [
            {
                rule: 'required',
                errorMessage: 'Please enter your first name',
            },
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'Name must be at least 3 characters long',
            },
        ]);


        valid.revalidateField(`#${field}`)
             .then((isValid) => {
                 if (isValid) {
                     console.log('valid');
                     setLocalStorage(inputValue, dataQuestion);
                     toggleQuestion(nextButton, "next");
                 }
             });

    }


    document.addEventListener("click", function (e) {
        const nextButton = e.target.closest(".question__next");
        const prevButton = e.target.closest(".question__prev");
        const dataQuestion = e.target.closest(".show-height")
                              .getAttribute("data-question");
        if (nextButton) {
            if (nextButton.closest('form')) {

                const form = nextButton.closest('form');

                validate(form.id, dataQuestion, nextButton);
                //
                // console.log(form.id);
                // const inputValue = nextButton.parentElement.querySelector(
                //     "input").value;
                // const valid = new JustValidate(form, {
                //     focusInvalidField: true,
                //     lockForm: true,
                //     validateBeforeSubmitting: true,
                // });
                // const nameField = form.querySelector('#name');
                // const emailField = form.querySelector('#email');
                // if (nameField) {
                //     valid.addField('#name', [
                //         {
                //             rule: 'required',
                //             errorMessage: 'Please enter your first name',
                //         },
                //         {
                //             rule: 'minLength',
                //             value: 3,
                //             errorMessage: 'Name must be at least 3 characters long',
                //         },
                //     ]);
                // }
                // if (emailField) {
                //     valid.addField('#email', [
                //         {
                //             rule: 'required',
                //             errorMessage: 'Please enter your first name',
                //         },
                //         {
                //             rule: 'minLength',
                //             value: 3,
                //             errorMessage: 'Name must be at least 3 characters long',
                //         },
                //     ]);
                //
                // }
                //
                // valid.validate()
                //      .then((isValid) => {
                //          if (isValid) {
                //              console.log('valid');
                //              setLocalStorage(inputValue, dataQuestion);
                //              toggleQuestion(nextButton, "next");
                //          }
                //      });

                // valid
                //     .addField('#name', [
                //         {
                //             rule: 'required',
                //             errorMessage: 'Please enter your first name',
                //         },
                //         {
                //             rule: 'minLength',
                //             value: 3,
                //             errorMessage: 'Name must be at least 3 characters long',
                //         },
                //
                //     ])
                //     .addField('#email', [
                //         {
                //             rule: 'required',
                //             errorMessage: 'Please enter your first name',
                //         },
                //         {
                //             rule: 'minLength',
                //             value: 3,
                //             errorMessage: 'Name must be at least 3 characters long',
                //         },
                //     ])
                // ;

                // if (form.checkValidity()) {
                //     e.preventDefault();
                //     const inputValue = nextButton.parentElement.querySelector(
                //         "input").value;
                //     if (form.closest('.question-9__form')) {
                //         setLocalStorage(inputValue, dataQuestion);
                //         window.location.href = 'personal.html';
                //
                //     } else {
                //         setLocalStorage(inputValue, dataQuestion);
                //         toggleQuestion(nextButton, "next");
                //     }
                // } else {
                //     e.preventDefault();
                //     form.reportValidity();
                // }
            } else {
                const answer = nextButton.getAttribute('data-answer');
                setLocalStorage(answer, dataQuestion);
                toggleQuestion(nextButton, "next");
            }
        } else if (prevButton) {
            toggleQuestion(prevButton, "prev");
        }
    });

});
