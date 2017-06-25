$(document).ready(function(){
  $('#dev-heading').hover(function() {
    $('#dev-heading').css('text-decoration','underline');
    $('#modeling-heading').css('text-decoration', 'none');
    $('.modeling').fadeOut();
    $('.web-dev').fadeIn();
  });

  $('#modeling-heading').hover(function() {
    $('#modeling-heading').css('text-decoration','underline');
    $('#dev-heading').css('text-decoration', 'none');
    $('.web-dev').fadeOut();
    $('.modeling').fadeIn().css('display', 'inline-block');
  });
});
