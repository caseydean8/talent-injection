$(document).ready(function(event){
    // event.preventDefault();
    $(".projects").click(function(){
        console.log("button clicked");
      $('.project').show();
      var appBtn = $("<button>");
      var gitBtn = $("<button>");
      appBtn.attr({ id: "app-button" });
      appBtn.text("app");
      gitBtn.attr({ id: "github"});
      gitBtn.text("github");
      $(".project").append("<br>");
      $(".project").append(appBtn);
      $(".project").append(gitBtn);
    });
});