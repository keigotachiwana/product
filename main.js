$(function(){
  $('#js-buttonHamburger').click(function () {
    $('#nav').toggleClass('open');
    $("#global-nav").slideToggle();
      if ($('#js-buttonHamburger').attr('aria-expanded') == 'false') {
        $('#js-buttonHamburger').attr('aria-expanded', true);
      } else {
        $('#js-buttonHamburger').attr('aria-expanded', false);
      }
    }); 
});
