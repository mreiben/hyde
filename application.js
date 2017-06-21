$(document).ready(function(){
  $('#dev-heading').hover(function() {
    $('#dev-heading').css('font-weight','heavy');
    $('#modeling-heading').css('font-weight', 'normal');
    $('.modeling').fadeOut();
    $('.web-dev').fadeIn();
  });

  $('#modeling-heading').hover(function() {
    $('#modeling-heading').css('font-weight','heavy');
    $('#dev-heading').css('font-weight', 'normal');
    $('.web-dev').fadeOut();
    $('.modeling').fadeIn();
  });
});
