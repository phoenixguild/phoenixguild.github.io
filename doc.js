function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
          
            for (var i = 0; i < reveals.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = reveals[i].getBoundingClientRect().top;
              var elementVisible = 150;
          
              if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
              } else {
                reveals[i].classList.remove("active");
              }
            }
          }
          
          
          window.addEventListener("scroll", reveal);
          jQuery(document).ready(function() {
  
  jQuery(window).load(function() {
      $(".loader").fadeOut(25000);
  });
  
  });
  
  stage.addEventListener(MouseEvent.CLICK, resumeAnimation);