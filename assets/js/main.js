
//Owl Carousel Code

$(document).ready(function(){
  	$(".owl-carousel").owlCarousel();
});

//Testimonial Slider Setup Codes

$('.owl-carousel').owlCarousel({
	autoplay:true,
	autoplayTimeout: 3000,
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
