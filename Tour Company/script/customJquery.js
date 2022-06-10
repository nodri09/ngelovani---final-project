// top bar drop shadow animation
$(document).ready(function() {
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $("#top-menu").addClass('active');
        } else {
            $("#top-menu").removeClass("active");
        }
    })

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1200,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3
            },
            1440: {
                items: 5
            }
        }
    })
});



