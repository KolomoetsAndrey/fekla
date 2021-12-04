$(document).ready(function() {

    //Timer
    if ($('.timer').length) {
        function getTimeRemaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }
        
        function initializeClock(id, endtime) {
            var clock = document.getElementById(id);
            var daysSpan = clock.querySelector('.days');
            var hoursSpan = clock.querySelector('.hours');
            var minutesSpan = clock.querySelector('.minutes');
            var secondsSpan = clock.querySelector('.seconds');
        
            function updateClock() {
                var t = getTimeRemaining(endtime);
        
                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        
                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }
        
            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        }
        
        var deadline = '2021-12-31';
        initializeClock('countdown', deadline);
    }

    //Expert Slider
    if ($('.expert-slider').length) {
        $('.expert-slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: $('.expert-slider-prev'),
            nextArrow: $('.expert-slider-next'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }  
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
            ]
        });
    }

    //Services Slider
    if ($('.services-slider-block').length) {
        $('.services-text-slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            fade: true,
            asNavFor: '.services-image-slider',
            prevArrow: $('.services-slider-prev'),
            nextArrow: $('.services-slider-next')
        });
        $('.services-image-slider').slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            fade: true,
            asNavFor: '.services-text-slider'
        });
    }

    //Product Slider
    if ($('.products-slider').length) {
        $('.products-slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: $('.products-slider-prev'),
            nextArrow: $('.products-slider-next'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }  
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
            ]
        });
    }

    //News Slider
    if ($('.news-slider').length) {
        $('.news-slider').slick({
            centerMode: true,
            centerPadding: '200px',
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: $('.news-slider-prev'),
            nextArrow: $('.news-slider-next'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        centerMode: true,
                        centerPadding: '200px',
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }  
                },
                {
                    breakpoint: 600,
                    settings: {
                        centerMode: true,
                        centerPadding: '200px',
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '200px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
            ]
        });
    }
});