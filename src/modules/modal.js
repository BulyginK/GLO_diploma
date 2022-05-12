import { animate } from './helpers'

const modal = () => {
    const modal = document.querySelector('.header-modal');
    const modalOverlay = document.querySelector('.overlay');
    const button = document.querySelector('#btn-callback');
    // const popupContent = modal.querySelector('.popup-content');
    let top = 30;

    const modalAnimate = () => {
        animate({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                console.log((progress * (top + 50) - 30));
                modal.style.top = (progress * (top + 50) - 30) + '%';
            }
        })
    };



    button.addEventListener('click', () => {
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
        modalAnimate();
    })

    // modal.addEventListener('click', (e) => {
    //     if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
    //         modal.style.display = 'none';
    //         count = -750;
    //     }
    // })
}

export default modal;