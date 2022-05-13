import { animate } from './helpers'

const modal = () => {
    const okna = document.querySelector('.okna');
    const modal = document.querySelector('.header-modal');
    const modalOverlay = document.querySelector('.overlay');

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

    okna.addEventListener('click', (e) => {
        if (e.target.closest('#btn-callback')) {
            e.preventDefault();
            modal.style.display = 'block';
            modalOverlay.style.display = 'block';
            modalAnimate();
        } else if (e.target.closest('.header-modal__close') || e.target.closest('.overlay')) {
            modal.style.display = 'none';
            modalOverlay.style.display = 'none';
        }
    })
}

export default modal;