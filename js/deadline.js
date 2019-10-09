/*jshint esversion: 6 */
"use strict";

let Submit = document.querySelector('.deadlineSubmit');

    let deadlineName,
        deadlineDate,
        deadlineUserName;

    Submit.addEventListener('click', function () {
        console.log('ja jibal');
        deadlineUserName = document.querySelector('#inputDeadlineName').textContent;
        deadlineName = document.querySelector('#deadlineName');
        // deadlineDate = document.querySelector('#deadlineDate').textContent;
        deadlineDate = '2019-11-18';
        // deadlineName.textContent = deadlineUserName;
        setClock('deadlineTimer', deadlineDate);
        console.log(deadlineUserName);
        console.log(deadlineName);
        console.log(deadlineDate);
        
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
            timerHours.textContent = t.hours;
            timerMinutes.textContent = t.minutes;
            timerSeconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }