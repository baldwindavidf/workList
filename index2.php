<?php 
if(isset($_POST['SubmitButton'])){
  if(!empty($_POST['message'])) {
    $file = 'log2.txt';
    $data = $_POST['message'].",\n";
    file_put_contents($file, $data, FILE_APPEND | LOCK_EX);
    header("Location:index2.php");
        exit;
}
}
if(isset($_POST['SubmitButton2'])){
$f=fopen('log2.txt','w');
$data = $_POST['message2'];
fwrite($f,$data);
fclose($f);
header("Location:index2.php");
        exit;
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
    <script src="scripts/script2.js"></script>
</head>

<body id="bd1" onload="setUpPage(); loadSettings(); loadTheme(); loading(); loadCheck();">
    <div class="header">
    </div>

    <ul class="headerList">
        <li class="fleft"><a href="index.php">TO DO LIST</a></li>
        <li  class="fleft"><a id="btnSet" onclick="settings();" href="#">Settings</a></li>
       <li style="display:none;" class="fleft"><a href="#news">New List</a></li>
        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">My List</a>
          <div class="dropdown-content">
           <a href="index.php">List 1</a>
            <a href="index1.php">List 2</a>
            <a href="index2.php">List 3</a>
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
          <div class="tooltip1"><li >Select List<span class="tooltiptext1">Click on the My List tab and then select from one of the three list.</span></li></div><br/>
          <div class="tooltip2"><li >Add Items<span class="tooltiptext2">Type a to do item you want to add in the text field and then click the Add button.</span></li></div><br/>
          <div class="tooltip3"><li >Check Items<span class="tooltiptext3">Click on a item in the list to put a check mark and cross out the text for a completed item.</span></li></div><br/>
          <div class="tooltip4"><li >Remove Items<span class="tooltiptext4">Click on the X on the right side of an item. A set of options will then appear. Then select either Cancel or Confirm Delete to delete the item</span></li></div>
        </ul>
      </div>
      
      <div id="menu4" class="col-6 col-s-9">
        <div  class="header2">
          <h2 style="margin:5px">MY TO DO LIST 3</h2>
          
          <form id="myForm" action="index2.php" method="POST">
          <input id="text9" name="message" type="text" id="myInput" placeholder="Enter items">
          <input value="Add" type="submit" name="SubmitButton" class="addBtn"/>
          </form>
          <form onsubmit="loadChecked(); loadCheck(); reloaded();" id="myForm2" action="index2.php" method="POST">
           <input style="display:none;" type="text" id="update" name="message2"/>
           <br/>
           <input id="sbtm" style="display:none; width:50%; float:right; background-color: red;"  value="Confirm Delete" type="submit" name="SubmitButton2" class="addBtn"/>
           <input id="sbtm2" style="display:none; width:50%; float:left;"  value="Cancel" type="submit" name="SubmitButton" class="addBtn"/>
         </form>
        
        </div>
        
        <ul id="myUL">
        </ul>

      </div><br/>

      <div class="col-3 col-s-12">
        <div id="menu2" class="aside">
          <video width="95%" height="80%" controls>
            <source src="zoom_0.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </div>
      <audio id="myAudio">
       <source src="sound12.mp3" type="audio/mpeg">
       Your browser does not support the audio element.
      </audio>
      <div class="footer">
            <small>Copyright © 2018 <a class="emailLink" href="mailto:daveandjaneen@gmail.com">David Baldwin</a></small>
      </div>

</body>
</html>


