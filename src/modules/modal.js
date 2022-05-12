const modal = () => {



    // const modal = document.querySelector('.popup');
    // const buttons = document.querySelectorAll('.popup-btn');
    // const popupContent = modal.querySelector('.popup-content');
    // let count = -750;

    // const modalAnimate = () => {
    //     animate({
    //         duration: 500,
    //         timing(timeFraction) {
    //             return 1 - Math.sin(Math.acos(timeFraction));
    //         },
    //         draw(progress) {
    //             popupContent.style.transform = 'translateX(' + (count + (700 * progress)) + 'px)';
    //         }
    //     })
    // };


    // buttons.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         modal.style.display = 'block';
    //         if (window.screen.width > 767) { modalAnimate() };
    //     })
    // });

    // modal.addEventListener('click', (e) => {
    //     if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
    //         modal.style.display = 'none';
    //         count = -750;
    //     }
    // })
}

export default modal;