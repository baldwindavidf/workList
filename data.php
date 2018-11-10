<?php    
if(isset($_POST['SubmitButton'])){ //check if form was submitted
  if(!empty($_POST['message'])) {
    $file = 'log.txt';
    $data = $_POST['message'].",\n";
    $messageSuccess = "Success! You entered: ".$data;
    // using the FILE_APPEND flag to append the content to the end of the file
    // and the LOCK_EX flag to prevent anyone else writing to the file at the same time
    file_put_contents($file, $data, FILE_APPEND | LOCK_EX);
}
}    
?>