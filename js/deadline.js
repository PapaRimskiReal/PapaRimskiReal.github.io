/*jshint esversion: 6 */
"use strict";

let Submit = document.querySelector('.deadlineSubmit');

    let deadlineName,
        deadlineDate,
        deadlineUserName;

    Submit.addEventListener('click', function () {
        
        deadlineUserName = document.getElementById('inputDeadlineName').value;
        deadlineName = document.getElementById('deadlineName');
        deadlineDate = document.querySelector('#deadlineDate').value;
        deadlineName.textContent = deadlineUserName;
        setClock('deadlineTimer', deadlineDate);
        
    });

    function getTimeRemaining(endtime) {

        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60) % 60),
            days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let deadlineTimer = document.getElementById(id),
            timerDays = deadlineTimer.querySelector('.days'),
            timerHours = deadlineTimer.querySelector('.hours'),
            timerMinutes = deadlineTimer.querySelector('.minutes'),
            timerSeconds = deadlineTimer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            timerDays.textContent = t.days;
            if (t.hours < 10){
                timerHours.textContent = '0' + t.hours;
            } else timerHours.textContent = t.hours;
            if (t.minutes < 10){
                timerMinutes.textContent = '0' + t.minutes;
            } else timerMinutes.textContent = t.minutes;
            if (t.seconds < 10){
                timerSeconds.textContent = '0' + t.seconds;
            } else timerSeconds.textContent = t.seconds;
            
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }