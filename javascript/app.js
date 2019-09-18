$(document).ready(function(event){
    // event.preventDefault();
    $(".project-btn").click(function(){
        console.log("button clicked");
        $("#text-content").text("click image for deployed project").fadeIn(1000);
      $('.project').fadeIn(800);
    //   var appBtn = $("<button>");
    //   var gitBtn = $("<button>");
    //   appBtn.attr({ id: "app-button" });
    //   appBtn.text("app");
    //   gitBtn.attr({ id: "github"});
    //   gitBtn.text("github");
    //   $(".project").append("<br>");
    //   $(".project").append(appBtn);
    //   $(".project").append(gitBtn);
    });
});