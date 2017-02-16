$(document).ready(function(){
  //Add smooth scrolling to all links in navbar and Footer
  $(".navbar a, footer a[href='#myPage'], .jumbotron a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {

        window.location.hash = hash;
      });
    } //End if
  });
  $("#about-expand, #tutor-expand").click(function() {
    $(this).toggleClass('glyphicon-minus-sign').toggleClass('glyphicon-plus-sign');
  })
})
