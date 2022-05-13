const slider = () => {
    const benefitsItems = document.querySelectorAll('.benefits__item');
    const benefitsArrows = document.querySelector('.benefits-arrows');
    let benefitsArr = [];

    for (let i = 0; i < benefitsItems.length; i++ ) {
        benefitsArr.push(benefitsItems[i])
    }

    const nextSlide = () => {
        for (let i = 0; i < benefitsItems.length; i++ ) {
            if(i < 3) {
                benefitsArr[i].style.display = 'block';
            } else {
                benefitsArr[i].style.display = 'none';
            }
        }
    }
    
    benefitsArrows.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.matches('#benefits__arrow--left')) {

        } else  if (e.target.matches('#benefits__arrow--right')) {
            let firstElem = benefitsArr[0];
            benefitsArr.shift();
            benefitsArr.push(firstElem);
            console.log(benefitsArr);
            nextSlide()
        }
    })

    nextSlide()
}

export default slider