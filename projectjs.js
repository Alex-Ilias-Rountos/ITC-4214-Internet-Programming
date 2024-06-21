
function foo(){
   
 window.alert("Button Pressed");

}





//Contact Us page JS


$("#contact").on("submit", function(e){    //e references the event object

  e.preventDefault();                             //prevents the submission of the form. We are not performing validation so this should not be necessary here.
                                                  //Upon further study submitting without a url causes refreshes which should be slower than including this method.

  window.alert(`Information: ${$('#contact_Username').val()}, ${$('#contact_Email').val()}, ${$('#contact_PhoneNumber').val()}`);         //these " " do not work. unsure why.
  window.alert(`Your message is: ${$('#contact_Message').val()}`) 
  this.reset(); //the form resets anyway after submission. Since e.preventDefault(); never happens we have no reason to include this method either.
                //I was wrong, the form is not reset but the entire page is refreshed on a "bad" submit. e.preventDefault(); is back in, so this is now also necessary.
  });


/*
  function ContactPopup2(){                        //approach that did not work out
    $("#contactForm").submit(function(){
      alert("you are submitting" + $(this).serialize());
    });

  }
*/






//Dark Mode JS

$(document).ready(function() {
  $('#DMbutton').click(function() {
      $('body').toggleClass('dark-mode');
      $('header, main, footer, nav a').toggleClass('dark-mode');
      //alert("dark mode button pressed");    //test line
  });
});








//Homepage JS

//Table rows from the form

item_array = [];

$('#mainform').on('submit', function(e) {

  e.preventDefault();  //This is necessary here. Submitting the form without having provided a URL causes the page to refresh.
                       //This meant that my rows appeared for a split second and then immediately disappeared. Since we do not really need to submit data
                       //it is ok to include this method to prevent submission and refreshing of the page.



  item_array.push({ Item: $('#formfield1').val(), Number: $('#formfield2').val(), Priority: $('#formfield3').val()});     //Adding key-value pairs to an array

  alert("Adding to the array: " + JSON.stringify(item_array));

  item_array.forEach((element => {
    $('#body1').append(`<tr><td>${element.Item}</td><td>${element.Number}</td><td>${element.Priority}</td></tr>`);
  }));

  this.reset();        //As the page is no longer auto refreshing on submit the form is not clean each time so we need this.
                      //Note to self: don't reset the form before getting the values and then wonder why everything is suddenly empty.

  item_array = [];    //resetting the array to an empty state so previous lines don't get re-added.

})


//Sorting

//Deleting