const sendForm = () => {
    const forms = document.querySelectorAll('form');

    forms.forEach((elem) => {
        const nameForm = elem.name;
        sendForms({
            formName: nameForm,
            someElem: [
                {
                    id: 'calc-total'
                }
            ]
        })
    })
}

const sendForms = ({ formName, someElem = [] }) => {
    const form = document.querySelector('[name="' + formName + '"]');

    const btn = form.querySelector('button');
    const inputName = form.querySelectorAll('[name="fio"]');
    const inputPhone = form.querySelectorAll('[name="phone"]');

    const textOriginal = btn.textContent;
    const loadText = 'Отправка...';
    const errorText = 'Ошибка отправки!';

    const regularName = /^[а-яА-ЯЁёA-Za-z]+$/;
    const regularPhone = /^\+[\d]{0,16}$/;

    const validate = () => {
        let success = true;
        const userName = form.querySelector('[name="fio"]');
        const userPhone = form.querySelector('[name="phone"]');

        if (regularName.test(userName.value) && regularPhone.test(userPhone.value)) {
            return success
        } else {
            return success = false
        }
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        btn.textContent = loadText;

        formData.forEach((val, key) => {
            formBody[key] = val;
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            console.log(element);
            if(document.getElementById(elem.id)) {
                formBody[elem.id] = element.value;
            }
        })

        if (validate()) {
            sendData(formBody)
                .then(data => {
                    formElements.forEach(input => {
                        input.value = '';
                    })
                })
                .catch(error => {
                    btn.textContent = errorText;
                })
        } else {
            btn.textContent = errorText;
            formElements.forEach(input => {
                input.value = '';
            })
        }
    }

    const inputError = (inputElem, regular, alert) => {
        for (let i = 0; i < inputElem.length; i++) {
            const textError = document.createElement('span');

            inputElem[i].parentElement.append(textError);
            textError.classList.add('help-block');

            inputElem[i].addEventListener('input', (e) => {
                textError.innerHTML = '';
                e.target.classList.remove('error');
                if (!regular.test(e.target.value)) {
                    e.target.classList.add('error');
                    textError.innerHTML = alert;
                }
            });
        };
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожааалуйста))')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            submitForm();

            setTimeout(() => btn.textContent = textOriginal, 2500);
        })
    } catch (error) {
        console.log(error.message);
    }

    inputError(inputName, regularName, 'Вводите пожалуйста буквы');
    inputError(inputPhone, regularPhone, 'Вводите в формате "+79276802419"');
}

export default sendForm