require([
    'jquery',
    'slick'
], function ($) {
    $(document).ready(function () {
        $(".my-list").slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1
        });
    });
});