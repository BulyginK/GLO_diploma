import { animate } from './helpers'

const modal = () => {
    const button = document.querySelector('#btn-callback');
    const modal = document.querySelector('.header-modal');
    const modalOverlay = document.querySelector('.overlay');
    const closeBtn = modal.querySelector('.header-modal__close');

    const modalAnimate = () => {
        animate({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modal.style.top = (progress * 85 - 35) + '%';
            }
        })
    };

    const modalClose = () => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    }

    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
        modalAnimate();
    })

    modalOverlay.addEventListener('click', () => { modalClose() })
    closeBtn.addEventListener('click', () => { modalClose() })
}

export default modal;