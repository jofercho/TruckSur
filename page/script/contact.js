$(document).ready(
  function ()
  {
    $("#recaptcha_response_field").attr('required','required');
    $('.alert').hide();

      $('#message-form').submit(
        function(e)
        {
          e.preventDefault();

          if($('no_captcha').hasClass('captchaSuccess'))
          {

            // alert("enviando "+$('#message-form').serialize());
            $.ajax({
                type: 'POST',
                url: '../contact.php',
                data: $('#message-form').serialize(),
                success: msjSuccess,
                error: msjError
              });
          }
          else {
              $('#message-error').show();
          }
        }
      );
  });

function msjSuccess()
{
  $('#inputName').val('');
  $('#inputEmail').val('');
  $('#inputMessage').val('');

  $('#message-success').show();
  alert("su mensaje ha sido recibido por la resistencia");
  $('no_captcha').removeClass('captchaSuccess');
}

function msjError() {
  $('#message-error').show();
  $('no_captcha').removeClass('captchaSuccess');
  alert("su mensaje no ha podido ser recibido por la resistencia");
}

function onCaptchaResponse(_response) {
  console.log(_response);
  $.ajax({
      type: 'POST',
      url: '../validateCaptcha.php',
      data: {recaptchaResponse:_response},
      success: captchaSuccess,
      error: onCaptchaExpire
    });

}

function captchaSuccess(argument) {
  $('no_captcha').addClass('captchaSuccess');
}

function onCaptchaExpire() {
  $('no_captcha').removeClass('captchaSuccess');
}
