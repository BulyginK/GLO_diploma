import { animate } from './helpers'

const headerModal = () => {
    const body = document.querySelector('body');
    const modal = document.querySelector('.header-modal');
    const modalOverlay = document.querySelector('.overlay');

    //анимация появления модального окна через функцию-помощник
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

    //слушатель нажатия на кнопки заказ звонка и закрытия модального окна через крестик и через клик мимо окна
    body.addEventListener('click', (e) => {
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

export default headerModal;