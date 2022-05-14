const servicesSlider = () => {
    const services = document.querySelector('#services');
    let servicesItems = document.querySelectorAll('.service-block');
    let servicesArr = []

    const newArr = () => {
        servicesArr = [];
        for (let i = 0; i < servicesItems.length; i++) {
            servicesItems[i].parentElement.style.display = 'none';
            servicesArr.push(servicesItems[i].parentElement);
        }
    }

    const prevSlide = () => {
        let lastElem = servicesItems[servicesArr.length - 1].parentElement;
        lastElem.remove();
        servicesItems[0].parentElement.before(lastElem);
        servicesItems = document.querySelectorAll('.service-block');
        newArr();
    }

    const nextSlide = () => {
        let firstElem = servicesItems[0].parentElement;
        firstElem.remove();
        servicesItems[servicesArr.length - 1].parentElement.after(firstElem);
        servicesItems = document.querySelectorAll('.service-block');
        newArr();
    }

    const showSlide = () => {
        if (window.screen.width >= 576) {
            for (let i = 0; i < servicesItems.length; i++) {
                if (i < 2) {
                    servicesArr[i].style.display = 'block';
                }
            }
        } else {
            for (let i = 0; i < servicesItems.length; i++) {
                if (i == 0) {
                    servicesArr[i].style.display = 'block';
                }
            }
        }
    }

    services.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.matches('#services__arrow--left')) {
            prevSlide();
            showSlide();
        } else if (e.target.matches('#services__arrow--right')) {
            nextSlide();
            showSlide();
        }
    })

    newArr()
    showSlide()
}

export default servicesSlider