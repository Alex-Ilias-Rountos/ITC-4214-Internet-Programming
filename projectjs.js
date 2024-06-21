function foo(){
   
 window.alert("Button Pressed");

}




//make it so buttons dont call functions if not all cells are filled.



//Contact Us page JS

function ContactPopup(){
   
    window.alert("Message Sent!");
   
   }


function ContactPopup2(){
   $("#contactForm").submit(function(){
    alert("you are submitting" + $(this).serialize());
  });

}


//window.alert() for the Contact Us page popup?




//Dark Mode?
$(document).ready(function() {
  $('#DMbutton').click(function() {
      $('body').toggleClass('dark-mode');
      $('header, main, footer, nav a').toggleClass('dark-mode');
      //alert("dark mode button pressed");    //test line
  });
});