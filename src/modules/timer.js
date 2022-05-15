const timer = (deadline) => {
    const timerDays = document.querySelectorAll('.count_1>span');
    const timerHours = document.querySelectorAll('.count_2>span');
    const timerMinutes = document.querySelectorAll('.count_3>span');
    const timerSeconds = document.querySelectorAll('.count_4>span');
    let interval

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);
        if (timeRemaining <= 0) {
            days = '0';
            hours = '0';
            minutes = '0';
            seconds = '0';
        }
        return { timeRemaining, days, hours, minutes, seconds }
    }

    const pasteTextContent = (obj, elem) => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                obj[key].textContent = elem < 10 ? '0' + elem : elem;
            }
        }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining();
        pasteTextContent(timerDays, getTime.days);
        pasteTextContent(timerHours, getTime.hours);
        pasteTextContent(timerMinutes, getTime.minutes);
        pasteTextContent(timerSeconds, getTime.seconds);

        if (getTime.timeRemaining <= 0) {
            clearInterval(interval);
        }
    }

    interval = setInterval(updateClock, 500);
}

export default timer