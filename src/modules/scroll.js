const scroll = () => {
    let smoothScroll = document.querySelector('.smooth-scroll');

    smoothScroll.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#header').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    const options = {
        threshold: 0
    };

    const callback = function () {
        let elem = document.querySelector('.smooth-scroll');
        if (elem.style.display === 'none') {
            elem.style.display = 'block'
        } else {
            elem.style.display = 'none'
        }

    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(document.querySelector('#navigation'))
}

export default scroll