$(document).ready(function(){
    $('.sliding-partners').owlCarousel({
        margin:10,
        loop:true,
        autoWidth:true,
        items: 1,
        dots: false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    $('.sliding-clients').owlCarousel({
        margin:10,
        loop:true,
        autoWidth:true,
        items: 1,
        dots: false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
});