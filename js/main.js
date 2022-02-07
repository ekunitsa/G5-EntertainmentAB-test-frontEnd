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
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });

    // remove youtube onload base.js
    (function() {
        let youtube = document.querySelectorAll(".js-youtube");

        for (let i = 0; i < youtube.length; i++) {
            let source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";

            let image = new Image();
            image.src = source;
            image.addEventListener("load", function() {
                youtube[i].appendChild(image);
            }(i));

            youtube[i].addEventListener("click", function() {

                let iframe = document.createElement("iframe");

                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

                this.innerHTML = "";
                this.appendChild(iframe);
            });
        };

    })();

})
