$(document).ready(function(event){
    // event.preventDefault();
    $(".project-btn").click(function(){
        $("#text-content").text("tap image for deployed project").fadeIn(1000);
      $('.project').fadeIn(800);
      $('#contact').fadeIn(1000);
    });
});