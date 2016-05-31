$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$( window ).scroll(function() {
  console.log(window.pageYOffset);
  if(window.pageYOffset >= 64){
    console.log('poop');
    $('.arrow').removeClass('animate-arrow');
  } else {
    $('.arrow').addClass('animate-arrow');
  }
  //this is for navigation
  if(window.pageYOffset >= 300){
    $('.dropdown-nav').css('display', 'block').addClass('active');
  } else {
    $('.dropdown-nav').removeClass('active');
  }
});
