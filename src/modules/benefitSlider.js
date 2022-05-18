const benefitSlider = () => {
    const benefits = document.querySelector('.benefits-wrap');
    const benefitsArrows = document.querySelector('.benefits-arrows');
    let benefitsItems = document.querySelectorAll('.benefits__item');
    let benefitsArr = [];

    //создание массива из имеющихся элементов
    const newArr = () => {
        benefitsArr = [];
        for (let i = 0; i < benefitsItems.length; i++) {
            benefitsItems[i].style.display = 'none';
            benefitsArr.push(benefitsItems[i]);
        }
    }

    //смена слайда при нажатии на кнопку назад с пересозданием массива элементов
    const prevSlide = () => {
        let lastElem = benefitsItems[benefitsArr.length - 1];
        lastElem.remove();
        benefitsItems[0].before(lastElem);
        benefitsItems = document.querySelectorAll('.benefits__item');
        newArr();
    }

    //смена слайда при нажатии на кнопку вперед с пересозданием массива элементов
    const nextSlide = () => {
        let firstElem = benefitsArr[0];
        firstElem.remove();
        benefitsItems[benefitsArr.length - 1].after(firstElem);
        benefitsItems = document.querySelectorAll('.benefits__item');
        newArr();
    }

    //изменение количенства видимых слайдов при разных размерах экранов
    const showSlide = () => {
        if (window.screen.width >= 576) {
            for (let i = 0; i < benefitsItems.length; i++) {
                if (i < 3) {
                    benefitsArr[i].style.display = 'block';
                }
            }
        } else {
            for (let i = 0; i < benefitsItems.length; i++) {
                if (i == 0) {
                    benefits.style.justifyContent = 'center';
                    benefitsArr[i].style.display = 'block';
                }
            }
        }
    }

    //слушатель нажатия на стрелки
    benefitsArrows.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.matches('#benefits__arrow--left')) {
            prevSlide();
            showSlide();
        } else if (e.target.matches('#benefits__arrow--right')) {
            nextSlide();
            showSlide();
        }
    })

    newArr();
    showSlide();
}

export default benefitSlider