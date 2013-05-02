$(document).ready(function(){

    $('#name_input').on('blur', function () {
      var name = $(this).val();
      if ((name.trim() === ('')) || (name.trim().length < 2) || !(isNaN(name)))
        {
          $("#name_error").removeClass('hidden');
        } else {
          $('#name_error').addClass('hidden');
        }
    }); // end function

    $('#age_input').on('blur', function () {
      var age = $(this).val();
      if ((age.trim() === ('')) || (parseInt(age, 10) < 1 ) || (parseInt(age, 10) > 122) || (isNaN(age)))
        {
          $("#age_error").removeClass('hidden');
        } else {
          $('#age_error').addClass('hidden');
        }
    }); // end function

    $('#phone_input').on('blur', function () {
      var phone = $(this).val();
      if (!phone.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/))
        {
          $("#phone_error").removeClass('hidden');
        } else {
          $('#phone_error').addClass('hidden');
        }
    }); // end function

    $('#email_input').on('blur', function () {
      var email = $(this).val();
        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))
        {
          $("#email_error").removeClass('hidden');
        } else {
          $('#email_error').addClass('hidden');
        }
    }); // end function

    $('#update').on('click', function(event){
      event.preventDefault();
        $('#name_display').html('');
        $('#age_display').html('');
        $('#phone_display').html('');
        $('#email_display').html('');
        $('#name_display').append($('#name_input').val());
        $('#age_display').append($('#age_input').val());
        $('#phone_display').append($('#phone_input').val());
        $('#email_display').append($('#email_input').val());
    }); // end function
}); // End of Document.ready

