<?php 
if(isset($_POST['SubmitButton'])){ //check if form was submitted
  if(!empty($_POST['message'])) {
    $file = 'log.txt';
    $data = $_POST['message'].",\n";
    // using the FILE_APPEND flag to append the content to the end of the file
    // and the LOCK_EX flag to prevent anyone else writing to the file at the same time
    file_put_contents($file, $data, FILE_APPEND | LOCK_EX);
}
}
if(isset($_POST['SubmitButton2'])){
$f=fopen('log.txt','w');
$data = $_POST['message2'];
fwrite($f,$data);
fclose($f);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Work List</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Work to do list">
    <meta name="keywords" content="to do, work, tracker, list">
    <meta name="author" content="David Baldwin">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="stylesheets/stylesheet.css" />
    <script src="scripts/script.js"></script>
</head>

<body id="bd1" onload="setUpPage(); loadSettings(); loadTheme(); loading();">
    <div class="header">
    </div>

    <ul class="headerList">
        <li class="fleft"><a href="index.php">Home</a></li>
        <li  class="fleft"><a id="btnSet" onclick="settings();" href="#">Settings</a></li>
        <li class="fleft"><a href="#news">New List</a></li>
        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">My List</a>
          <div class="dropdown-content">
            <a href="#">List 1</a>
            <a href="#">List 2</a>
            <a href="#">List 3</a>
          </div>
        </li>
      </ul>

      <div style="display:none;" id="settings" class="settings col-12 col-s-12" >
      <div id="contain" style="display:none;" class="container" >
  <div style="display:none;" id="fSize" class="bar6 skills" >50%</div>
</div><br/>
                <span style="display:none;" id="txt1">Change Font Size</span>
                <button style="display:none;" id="btnTh" class="chTm"  onclick="fontChange();"><small>A</small>A -</button>
                <button style="display:none;" id="btnTh2" class="chTm" onclick="fontChange2();"><small>A</small>A +</button><br/><br/>
                <span style="display:none;" id="txt2">Change Theme</span>
                <button style="display:none;" id="btnTh3" class="chTm"  onclick="themeChange();">Light Theme</button><br/>
                <button style="display:none;" id="btnTh4" class="chTm"  onclick="themeChange1();">Standard Theme</button><br/>
                <button style="display:none;" id="btnTh5" class="chTm" onclick="themeChange2();">Dark Theme</button><br/>
      </div>
      
      <div class="row">
      
      <div id="menu1" class="col-3 col-s-3 menu">
        <ul>
          <li class="uList1">Tab 1</li>
          <li class="uList1">Tab 2</li>
          <li class="uList1">Tab 3</li>
          <li class="uList1">Tab 4</li>
        </ul>
      </div>
      
      <div id="menu4" class="col-6 col-s-9">
        <div  class="header2">
          <h2 style="margin:5px">LIST 1</h2>
          
          <form id="myForm" action="#" method="POST">
          <input name="message" type="text" id="myInput" placeholder="Enter items">
          <input value="Add" type="submit" name="SubmitButton" class="addBtn"/>
          </form>
          <p>Updated List</p>
          <form id="myForm2" action="#" method="POST">
           <input type="text" id="update" name="message2"/>
           <input style="float:right;" value="Update Results" type="submit" name="SubmitButton2" class="addBtn"/>
         </form>

        </div>
        
        <ul id="myUL">
        </ul>

      </div><br/>

     

      <div class="col-3 col-s-12">
        <div  id="menu2" class="aside">
          <h2 id="t2" class="normal">What?</h2>
          <p>Statement 1.</p>
          <h2>Where?</h2>
          <p>Statement 2.</p>
          <h2>How?</h2>
          <p>Statement 3.</p>
        </div>
      </div>
      </div>
           
      <div class="footer">
            <small>Copyright © 2018 <a class="emailLink" href="mailto:daveandjaneen@gmail.com">David Baldwin</a></small>
      </div>

</body>
</html>


