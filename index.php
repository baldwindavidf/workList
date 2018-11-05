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

<body onload="setUpPage();">
    <div class="header">
    </div>

    <ul class="headerList">
        <li class="fleft"><a href="index.php">Home</a></li>
        <li class="fleft"><a href="#settings">Settings</a></li>
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

      
      <div class="row">
      
      <div class="col-3 col-s-3 menu">
        <ul>
          <li>Tab 1</li>
          <li>Tab 2</li>
          <li>Tab 3</li>
          <li>Tab 4</li>
        </ul>
      </div>
      
      <div class="col-6 col-s-9">
        <div id="myDIV" class="header2">
          <h2 style="margin:5px">LIST 1</h2>
          <input type="text" id="myInput" placeholder="Enter items">
          <span onclick="newElement()" class="addBtn">Add</span>
        </div>
        
        <ul id="myUL">
      
        </ul>
      </div>
      
      <div class="col-3 col-s-12">
        <div class="aside">
          <h2>What?</h2>
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