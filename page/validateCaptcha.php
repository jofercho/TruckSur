<?php
echo "index php";
  if ($_SERVER["REQUEST_METHOD"] == "POST") {

    echo "post ".$_POST['recaptchaResponse'];

    if(isset($_POST['recaptchaResponse']) && !empty($_POST['recaptchaResponse']))
    {
      $secret = '6LeGQAwTAAAAALBVdBhNjBI8RmEHXKxp8TRS1ydO';
          //get verify response data
      $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['recaptchaResponse']);
      $responseData = json_decode($verifyResponse);
      if($responseData->success)
      {
        exit('success');
      }
      else {
        echo "fallo el captcha";
        exit('error');
      }
    }
    else {
      exit('error');
      echo "no hay captcha ctm";
    }

  }
?>
