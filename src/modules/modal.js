import { animate } from './helpers'

const modal = () => {
    const modal = document.querySelector('.header-modal');
    const modalOverlay = document.querySelector('.overlay');
    const button = document.querySelector('#btn-callback');
    // const popupContent = modal.querySelector('.popup-content');

    const modalAnimate = () => {
        animate({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modal.style.top = (progress * 80 - 30) + '%';
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