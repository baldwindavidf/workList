

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
function setUpPage() {

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 8; i < myNodelist.length - 8; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  
}

// Add a "checked" symbol when clicking on a list item
//var list = document.querySelector('ul');
var list = document.getElementById('myUL');
list.addEventListener('click', function(ev) {
 if (ev.target.tagName === 'LI') {
   ev.target.classList.toggle('checked');
  
 }
}, false);

}

function themeChange() {
  var item5 = document.getElementById("bd1");
  var item6 = document.getElementById("txt1");
  var item7 = document.getElementById("txt2");
  item5.style.backgroundColor = "#ccc";
  item6.style.color = "white";
  item7.style.color = "white";
  localStorage.setItem("items5", JSON.stringify(item5.style.backgroundColor));
  localStorage.setItem("items6", JSON.stringify(item6.style.color));
  localStorage.setItem("items7", JSON.stringify(item7.style.color));
}
function themeChange1() {
  var item5 = document.getElementById("bd1");
  var item6 = document.getElementById("txt1");
  var item7 = document.getElementById("txt2");
  item5.style.backgroundColor = "slategray";
  item6.style.color = "white";
  item7.style.color = "white";
  localStorage.setItem("items5", JSON.stringify(item5.style.backgroundColor));
  localStorage.setItem("items6", JSON.stringify(item6.style.color));
  localStorage.setItem("items7", JSON.stringify(item7.style.color));
}
function themeChange2() {
  var item5 = document.getElementById("bd1");
  var item6 = document.getElementById("txt1");
  var item7 = document.getElementById("txt2");
  item5.style.backgroundColor = "#444";
  item6.style.color = "white";
  item7.style.color = "white";
  localStorage.setItem("items5", JSON.stringify(item5.style.backgroundColor));
  localStorage.setItem("items6", JSON.stringify(item6.style.color));
  localStorage.setItem("items7", JSON.stringify(item7.style.color));
}

function fontChange() {
  var x = document.getElementById("fSize");
  var item1 = document.getElementById("menu1");
  var item2 = document.getElementById("menu2");
  var item9 = document.getElementById("menu4");
  if (x.innerHTML == "100%") {
    item1.className = "col-3 col-s-3 menu size10";
    item2.className = "aside size10";
    item9.className = "col-6 col-s-9 size10";
    x.innerHTML = "90%";
    x.className = "bar10 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
  }
  else if (x.innerHTML == "90%") {
    item1.className = "col-3 col-s-3 menu size9";
    item2.className = "aside size9";
    item9.className = "col-6 col-s-9 size9";
    x.innerHTML = "80%";
    x.className = "bar9 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
  }
  else if (x.innerHTML == "80%") {
    item1.className = "col-3 col-s-3 menu size8";
    item2.className = "aside size8";
    item9.className = "col-6 col-s-9 size8";
    x.innerHTML = "70%";
    x.className = "bar8 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
    }
  else if (x.innerHTML == "70%") {
    item1.className = "col-3 col-s-3 menu size7";
    item2.className = "aside size7";
    item9.className = "col-6 col-s-9 size7";
    x.innerHTML = "60%";
    x.className = "bar7 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
  }
  else if (x.innerHTML == "60%") {
    item1.className = "col-3 col-s-3 menu size6";
    item2.className = "aside size6";
    item9.className = "col-6 col-s-9 size6";
    x.innerHTML = "50%";
    x.className = "bar6 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
    }
  else if (x.innerHTML == "50%") {
    item1.className = "col-3 col-s-3 menu size5";
    item2.className = "aside size5";
    item9.className = "col-6 col-s-9 size5";
    x.innerHTML = "40%";
    x.className = "bar5 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
  }
  else if (x.innerHTML == "40%") {
    item1.className = "col-3 col-s-3 menu size4";
    item2.className = "aside size4";
    item9.className = "col-6 col-s-9 size4";
    x.innerHTML = "30%";
    x.className = "bar4 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
    }
  else if (x.innerHTML == "30%") {
    item1.className = "col-3 col-s-3 menu size3";
    item2.className = "aside size3";
    item9.className = "col-6 col-s-9 size3";
    x.innerHTML = "20%";
    x.className = "bar3 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
  }
  else if (x.innerHTML == "20%") {
    item1.className = "col-3 col-s-3 menu size2";
    item2.className = "aside size2";
    item9.className = "col-6 col-s-9 size2";
    x.innerHTML = "10%";
    x.className = "bar2 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
  }
 else if (x.innerHTML == "10%") {
    item1.className = "col-3 col-s-3 menu size1";
    item2.className = "aside size1";
    item9.className = "col-6 col-s-9 size1";
    x.innerHTML = "0%";
    x.className = "bar1 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
  }
}
function fontChange2() {
  var x = document.getElementById("fSize");
  var item1 = document.getElementById("menu1");
  var item2 = document.getElementById("menu2");
  var item9 = document.getElementById("menu4");
  if (x.innerHTML == "90%") {
    item1.className = "col-3 col-s-3 menu size11";
    item2.className = "aside size11";
    item9.className = "col-6 col-s-9 size11";
    x.innerHTML = "100%";
    x.className = "bar11 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
    }
  else if (x.innerHTML == "80%") {
    item1.className = "col-3 col-s-3 menu size10";
    item2.className = "aside size10";
    item9.className = "col-6 col-s-9 size10";
    x.innerHTML = "90%";
    x.className = "bar10 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
  }
 else if (x.innerHTML == "70%") {
    item1.className = "col-3 col-s-3 menu size9";
    item2.className = "aside size9";
    item9.className = "col-6 col-s-9 size9";
    x.innerHTML = "80%";
    x.className = "bar9 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
    }
  else if (x.innerHTML == "60%") {
    item1.className = "col-3 col-s-3 menu size8";
    item2.className = "aside size8";
    item9.className = "col-6 col-s-9 size8";
    x.innerHTML = "70%";
    x.className = "bar8 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
  }
  else if (x.innerHTML == "50%") {
    item1.className = "col-3 col-s-3 menu size7";
    item2.className = "aside size7";
    item9.className = "col-6 col-s-9 size7";
    x.innerHTML = "60%";
    x.className = "bar7 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
    }
  else  if (x.innerHTML == "40%") {
    item1.className = "col-3 col-s-3 menu size6";
    item2.className = "aside size6";
    item9.className = "col-6 col-s-9 size6";
    x.innerHTML = "50%";
    x.className = "bar6 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
  }
 else if (x.innerHTML == "30%") {
    item1.className = "col-3 col-s-3 menu size5";
    item2.className = "aside size5";
    item9.className = "col-6 col-s-9 size5";
    x.innerHTML = "40%";
    x.className = "bar5 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
    }
 else if (x.innerHTML == "20%") {
    item1.className = "col-3 col-s-3 menu size4";
    item2.className = "aside size4";
    item9.className = "col-6 col-s-9 size4";
    x.innerHTML = "30%";
    x.className = "bar4 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
  }
 else if (x.innerHTML == "10%") {
    item1.className = "col-3 col-s-3 menu size3";
    item2.className = "aside size3";
    item9.className = "col-6 col-s-9 size3";
    x.innerHTML = "20%";
    x.className = "bar3 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
  }
else if (x.innerHTML == "0%") {
    item1.className = "col-3 col-s-3 menu size2";
    item2.className = "aside size2";
    item9.className = "col-6 col-s-9 size2";
    x.innerHTML = "10%";
    x.className = "bar2 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    localStorage.setItem("items9", JSON.stringify(item9.className));
  }
}

function loadSettings() {
var data1;
var data2;
var data3;
var data4;
var data9;
  data1 = JSON.parse(localStorage.getItem('items1'));
  data2 = JSON.parse(localStorage.getItem('items2'));
  data3 = JSON.parse(localStorage.getItem('items3'));
  data4 = JSON.parse(localStorage.getItem('items4'));
  data9 = JSON.parse(localStorage.getItem('items9'));
  if (data1 != null && data2 != null) {
  var x = document.getElementById("fSize");
  var item1 = document.getElementById("menu1");
  var item2 = document.getElementById("menu2");
  var item4 = document.getElementById("menu4");
  item1.className = data1;
  item2.className = data2;
  x.innerHTML = data3;
  x.className = data4;
  item4.className = data9;
  }
}
function loadTheme() {
  var data5;
  data5 = JSON.parse(localStorage.getItem('items5'));
  if (data5 != null) {
    var item5 = document.getElementById("bd1");
    item5.style.backgroundColor = data5;
}
var data6;
data6 = JSON.parse(localStorage.getItem('items6'));
if (data6 != null) {
  var item6 = document.getElementById("txt1");
  item6.style.color = data6;
}
var data7;
data7 = JSON.parse(localStorage.getItem('items7'));
if (data7 != null) {
  var item7 = document.getElementById("txt2");
  item7.style.color = data7;
}
}

function settings() {
  if (document.getElementById("btnSet").innerHTML == "Settings")
  {
  document.getElementById("btnSet").innerHTML = "Close";
  document.getElementById("settings").className = "setting1 settings col-12 col-s-12";  
  window.setTimeout(function() {
  document.getElementById("settings").style.display = "block";
  }, 0);
  window.setTimeout(function() {
  document.getElementById("contain").style.display = "block";
  }, 700);
  window.setTimeout(function() {
    document.getElementById("fSize").style.display = "block";
    }, 700);
  window.setTimeout(function() {
  document.getElementById("txt1").style.display = "inline";
  }, 700);
  window.setTimeout(function() {
  document.getElementById("txt2").style.display = "inline";
  }, 700);
  window.setTimeout(function() {
  document.getElementById("btnTh").style.display = "inline";
  }, 700);
  window.setTimeout(function() {
  document.getElementById("btnTh2").style.display = "inline";
  }, 700);
  window.setTimeout(function() {
  document.getElementById("btnTh3").style.display = "inline";
  }, 700);
  window.setTimeout(function() {
  document.getElementById("btnTh4").style.display = "inline";
  }, 700);
  window.setTimeout(function() {
  document.getElementById("btnTh5").style.display = "inline";
  }, 700);

  }
  else
  {
  document.getElementById("btnSet").innerHTML = "Settings";
  document.getElementById("settings").className = "setting2 settings col-12 col-s-12";
  window.setTimeout(function() {
  document.getElementById("settings").style.display = "none";
  }, 1000);
  window.setTimeout(function() {
  document.getElementById("contain").style.display = "none";
  }, 200);
  window.setTimeout(function() {
    document.getElementById("fSize").style.display = "none";
    }, 200);
  window.setTimeout(function() {
  document.getElementById("txt1").style.display = "none";
  }, 200);
  window.setTimeout(function() {
  document.getElementById("txt2").style.display = "none";
  }, 200);
  window.setTimeout(function() {
  document.getElementById("btnTh").style.display = "none";
  }, 200);
  window.setTimeout(function() {
  document.getElementById("btnTh2").style.display = "none";
  }, 200);
  window.setTimeout(function() {
  document.getElementById("btnTh3").style.display = "none";
  }, 200);
  window.setTimeout(function() {
  document.getElementById("btnTh4").style.display = "none";
  }, 200);
  window.setTimeout(function() {
  document.getElementById("btnTh5").style.display = "none";
  }, 200);

  }
}
function loading() {
  document.getElementById("myForm").addEventListener("submit", getPhpData());
  }
  function getPhpData() {
    
             var xhttp = new XMLHttpRequest();
             try{
                 // Opera 8.0+, Firefox, Chrome, Safari
                 xhttp = new XMLHttpRequest();
             }catch (e){
                 // Internet Explorer Browsers
                 try{
                    xhttp = new ActiveXObject("Msxml2.XMLHTTP");
                 }catch (e) {
          
                    try{
                       xhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    }catch (e){
                       alert("Browser not supported");
                       return false;
                    }
                 }
             }
             xhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
            
             var data = this.responseText;    
             newElement(data);
           
             }
             };
             xhttp.open("GET", "log.txt", true);
             xhttp.send();   

  }
  // Create a new list item when clicking on the "Add" button
function newElement(x) {
  //var inputValue = document.getElementById("text5").value;

  if (inputValue === '') {
    alert("Please enter a to do item");
  } else {
    var inputValue = x;
    var xArray = inputValue.split(",");
    for(var i = 0; i < xArray.length - 1; i++) {
    var li = document.createElement("li");
    var t = document.createTextNode(xArray[i]);
    li.appendChild(t);
    
    document.getElementById("myUL").appendChild(li);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    var s;
    for (i = 0; i < close.length - 1; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
  }
  var p = document.getElementsByTagName('li');
  for(var i=0; i<p.length; i++)
  {
      p[i].pnum=i;
      p[i].onclick=function()
      {
         s = this.pnum - 8;
         console.log(s + " list 1");
         xArray.splice(s, 1 );
         document.getElementById("update").value = xArray;
         document.getElementById("chk").innerHTML = xArray;
        
      }
  }
  document.getElementById("myInput").value = "";
  }

}
