/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let carouselArray = document.querySelectorAll('.carousel.slide'),
        navBar = document.querySelector('.navbar'),
        navButtons = document.querySelectorAll('.linkas'),
        topArrow = document.getElementById('top_arrow'),
        bottomArrow = document.getElementById('bottom_arrow'),
        index = 0;

    function hideTabContent(a) {
        for (let i = a; i < carouselArray.length; i++) {
            carouselArray[i].classList.remove('show');
            carouselArray[i].classList.add('hide');
        }
    }

    hideTabContent(1);
    console.log(carouselArray.length);
    console.log(navButtons.lenght);
    console.log(navBar);

    function showTabContent(b) {
        if (carouselArray[b].classList.contains('hide')) {
            carouselArray[b].classList.remove('hide');
            carouselArray[b].classList.add('show');
            index = b;
        }
    }

    navBar.addEventListener('click', function (event) {

        let target = event.target;
        if (target && target.classList.contains('linkas')) {
            for (let i = 0; i < navButtons.length; i++) {
                if (target == navButtons[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });

    topArrow.addEventListener('click', function () {
        carouselArray[index].classList.remove('show');
        carouselArray[index].classList.add('hide');
        ++index;
        if (index > carouselArray.length-1){
            index = 0;
        }
        showTabContent(index);

    });

    bottomArrow.addEventListener('click', function () {
        carouselArray[index].classList.remove('show');
        carouselArray[index].classList.add('hide');
        --index;
        if (index < 0){
            index = carouselArray.length -1;
        }
        showTabContent(index);

    });

});