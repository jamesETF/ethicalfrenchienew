var $: any = require('./helpers/jquery');

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[980,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        autoPlay:false,
        mouseDrag: false,
        touchDrag: false,
        autoHeight: true
    });
});