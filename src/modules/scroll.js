const scroll = () => {
    const smoothScroll = document.querySelector('.smooth-scroll');

    // слушатель нажатия на стрелку "подняться вверх"
    smoothScroll.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#header').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // опции конструктора IntersectionObserver 
    const options = {
        threshold: 1
    };

    // появление и исчезание стрелки "подняться вверх" при условии видимости #header
    const viewSmoothScroll = function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio == 1) {
                smoothScroll.classList.remove('smooth-scroll-active');
            } else {
                smoothScroll.classList.add('smooth-scroll-active');
            }
        })
    };

    // создание и запуск конструктора IntersectionObserver
    const observer = new IntersectionObserver(viewSmoothScroll, options);

    observer.observe(document.querySelector('#header'));
}

export default scroll