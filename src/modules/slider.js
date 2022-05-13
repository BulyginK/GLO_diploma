const slider = () => {
    const benefits = document.querySelector('.benefits-wrap');
    const benefitsArrows = document.querySelector('.benefits-arrows');
    let benefitsItems = document.querySelectorAll('.benefits__item');
    let benefitsArr = [];

    const newArr = () => {
        benefitsArr = [];
        for (let i = 0; i < benefitsItems.length; i++) {
            benefitsItems[i].style.display = 'none';
            benefitsArr.push(benefitsItems[i]);
        }
    }

    const prevSlide = () => {
        let lastElem = benefitsItems[benefitsArr.length - 1];
        lastElem.remove();
        benefitsItems[0].before(lastElem);
        benefitsItems = document.querySelectorAll('.benefits__item');
        newArr();
    }

    const nextSlide = () => {
        let firstElem = benefitsArr[0];
        firstElem.remove();
        benefitsItems[benefitsArr.length - 1].after(firstElem);
        benefitsItems = document.querySelectorAll('.benefits__item');
        newArr();
    }

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

export default slider