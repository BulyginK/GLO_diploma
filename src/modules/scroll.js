const scroll = () => {
    const smoothScroll = document.querySelector('.smooth-scroll');

    smoothScroll.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#header').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    const options = {
        threshold: 1
    };

    const viewSmoothScroll = function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio == 1) {
                smoothScroll.classList.remove('smooth-scroll-active');
            } else {
                smoothScroll.classList.add('smooth-scroll-active');
            }
        })
    };

    const observer = new IntersectionObserver(viewSmoothScroll, options);

    observer.observe(document.querySelector('#header'));
}

export default scroll