$(function () {
    function parallax(container, items) {
        container.on('mousemove', function(e) {
            if (window.innerWidth > 767) {
                let w = $(window).width();
                let h = $(window).height();
                let offsetX = 0.5 - e.pageX / w;
                let offsetY = 0.5 - e.pageY / h;

                items.each(function (i, el) {
                    let dataOffsetX = parseInt($(el).data('offsetx'));
                    let dataOffsetY = parseInt($(el).data('offsety'));
                    let translate = "translate3d(" + offsetX * dataOffsetX + "px," + offsetY * dataOffsetY + "px, 0px)";

                    $(el).css({
                        '-webkit-transform': translate,
                        'transform': translate,
                        'moz-transform': translate
                    });
                });
            }
        });
    }

    parallax($('.js-header'), $(".js-headerParallax"));
    parallax($('.js-about'), $(".js-aboutParallax"));

    $(window).scroll(function () {
        if (window.innerWidth > 767) {
            $('.js-videoScrollParallax').css({
                'top': -($(this).scrollTop() / 6) + "px"
            });
        }
    });

    $('.js-reviews').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });
})

