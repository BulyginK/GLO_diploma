const sendForm = () => {
    const forms = document.querySelectorAll('.order-form>form');

    forms.forEach((elem) => {
        const nameForm = elem.name;
        sendForms(nameForm);
    })
}

const sendForms = (nameForm) => {
    const name = '[name="' + nameForm + '"]';
    const form = document.querySelector(name);

    const validate = () => {
        let success = true;
        const userName = form.querySelector('[name="fio"]');
        const userPhone = form.querySelector('[name="phone"]');

        console.log(userPhone.value);


        if (/^[а-яА-ЯЁёA-Za-z]+$/.test(userName.value) && /^\+[\d]{0,16}$/.test(userPhone.value)) {
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

        formData.forEach((val, key) => {
            formBody[key] = val;
        })

        if (validate()) {
            sendData(formBody)
                .then(data => {
                    formElements.forEach(input => {
                        input.value = '';
                    })
                })
                .catch(error => {
                    alert('Данные не отправлены');;
                })
        } else {
            alert('Данные не валидны');
            formElements.forEach(input => {
                input.value = '';
            })
        }
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожааалуйста))')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            submitForm();

            // setTimeout(() => statusBlock.remove(), 2500);
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default sendForm