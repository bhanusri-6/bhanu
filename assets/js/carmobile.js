$('.owl-carousel1').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:5,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,

});
$('.owl-carousel2').owlCarousel({
    lazyLoad:true,
    loop:true,
    margin:5,
    nav:true,
    responsive:{
                  0:{
                      items:2,
                      nav:true
                  },
                  425:{
                      items:3,
                      nav:true
                  },
                  991:{
                      items:5,
                      nav:true
                  },

              }
});
$('.owl-carousel3').owlCarousel({
    items:3,
    lazyLoad:true,
    loop:true,
    margin:5,
    nav:true,
});
    $(document).ready(function(){
    var owl = $('.owl-carousel4');
    owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
                  0:{
                      items:2,
                      nav:true
                  },
                  425:{
                      items:4,
                      nav:true
                  },
                  991:{
                      items:3,
                      nav:true
                  },
              }
});

});
$('.owl-carousel5').owlCarousel({
    items:3,
    lazyLoad:true,
    loop:true,
    margin:5,
    nav:true,
});
$('.owl-carousel7').owlCarousel({
    lazyLoad:true,
    loop:true,
    margin:5,
    nav:true,
    responsive:{
                  0:{
                      items:2,
                      nav:true
                  },
                  425:{
                      items:4,
                      nav:true
                  },
                  991:{
                      items:5,
                      nav:true
                  },
              }
});

var one = $('.owl-carousel2');
one.owlCarousel();
$('.rightt').click(function() {
    one.trigger('next.owl.carousel');
   
})
// Go to the previous item
$('.leftt').click(function() {
    one.trigger('prev.owl.carousel', [300]);

}) 
var two = $('.owl-carousel3');
two.owlCarousel();
$('.right').click(function() {
    two.trigger('next.owl.carousel');
   
})
// Go to the previous item
$('.left').click(function() {
    two.trigger('prev.owl.carousel', [300]);

}) 
var three = $('.owl-carousel5');
three.owlCarousel();
$('.west').click(function() {
    three.trigger('next.owl.carousel');
   
})
// Go to the previous item
$('.east').click(function() {
    three.trigger('prev.owl.carousel', [300]);

}) 
var four = $('.owl-carousel7');
four.owlCarousel();
$('.south').click(function() {
    four.trigger('next.owl.carousel');
   
})
// Go to the previous item
$('.north').click(function() {
    four.trigger('prev.owl.carousel', [300]);

}) 