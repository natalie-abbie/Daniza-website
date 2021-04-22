<?php
$name = $_REQUEST['name'];
$phone = $_REQUEST['phone'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];


if (empty($name) || empty($phone) || empty($email) || empty($message)) 
{
    echo "Please fill all the fields"
}

else
{
    mail("info@danizatours.co.ug", "BOOKINGS ENQUIRY", $message, "From: $name<$email>");

    echo "<script type='text/javascript'>alert('Your message sent successfully');

        window.history.log(-1);

    </script>";
} 

?>


<?php 
if (isset($_REQUEST['submit'])) {
  $errors = array();
  // Check for a proper name
  if (!empty($_REQUEST['name'])) {
  $name = $_REQUEST['name'];
  $pattern = "/^[a-zA-Z0-9\_]{2,20}/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$name)){ $name = $_REQUEST['name'];}
  else{ $errors[] = 'Your Name can only contain _, 1-9, A-Z or a-z 2-20 long.';}
  } else {$errors[] = 'You forgot to enter your  Name.';}
  
  
  //Check for a valid phone number
  if (!empty($_REQUEST['phone'])) {
  $phone = $_REQUEST['phone'];
  $pattern = "/^[0-9\_]{7,20}/";
  if (preg_match($pattern,$phone)){ $phone = $_REQUEST['phone'];}
  else{ $errors[] = 'Your Phone number can only be numbers.';}
  } else {$errors[] = 'You forgot to enter your Phone number.';}

  //Check for a valid email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo("$email is a valid email address");
      } else {
        echo("$email is not a valid email address");
      }

  //End of validation 

  if (isset($_REQUEST['submit'])) {
    if (empty($errors)) { 
    $from = "From: http://www.danizatours.co.ug"; 
    // Change this to your email address you want to form sent to
    $to = "info@danizatours.co.ug"; 
    $subject = "BOOKINGS" . $name . "";
    
    $message = "Message from " . $name . "
    Phone: " . $phone . " 
    email: " . $email .
    mail($to,$subject,$message,$from);
    }
  }
  ?>

  <?php



















//Print Errors

 if (isset($_REQUEST[‘submitted’])) {

                // Print any error messages. 

                if (!empty($errors)) { 

                  echo ‘<hr /><h3>The following errors occurred:</h3><ul>’; 

                  // Print each error. 

                  foreach ($errors as $msg) { echo ‘<li>’. $msg . ‘</li>’;}

                  echo ‘</ul><h3>Your mail could not be sent due to input errors. Please go back and solve those errors.</h3><hr />’;}

                else{echo ‘<hr /><h3 align=”center”>Your mail was sent. Thank you!</h3><hr />’;} 

 

 }

 

?>