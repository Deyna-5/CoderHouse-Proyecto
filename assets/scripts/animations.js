function animateHeader(){
  document.getElementsByClassName('animate-button').disabled = true;

  $('.headanimate').addClass('rebote');

  setTimeout(function(){
    $(".headanimate").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  }, 2500)

  setTimeout(function(){
    $('.headanimate').removeClass('rebote');
    document.getElementsByClassName('animate-button').disabled = false;
  }, 3500)
}