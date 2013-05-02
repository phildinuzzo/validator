$(document).ready(function(){

  $('#name_input').on('blur', function () {
    var name = $('#name_input').val();
    if ((name.trim() === ('')) || (name.length < 3) || !(isNaN(name)))
      {
        $("#name_error").removeClass('hidden');
      } else {
        $('#name_error').addClass('hidden');
        $('#name_display').append(name);
      }
  }); // end function

  $('#age_input').on('blur', function () {
    var age = $('#age_input').val();
    if ((age.trim() === ('')) || (parseInt(age) < 1 ) || (parseInt(age) > 110) || (isNaN(age)))
      {
        $("#age_error").removeClass('hidden');
      } else {
        $('#age_error').addClass('hidden');
        $('#age_display').append(name);
      }
  }); // end function

  $('#phone_input').on('blur', function () {
    var phone = $('#phone_input').val();
    if ((phone.trim() === ('')))
      {
        $("#phone_error").removeClass('hidden');
      } else {
        $('#phone_error').addClass('hidden');
        $('#phone_display').append(name);
      }
  }); // end function





// var 1 = 5;
// if(i > 7) {
//   console.log("hello");
// } else if(i < 3) {
//   console.log("bye");
// } else {
//   consol.log("Ok");
// }






}); // End of Document.ready