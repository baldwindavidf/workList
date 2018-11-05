

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
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
var list = document.getElementById('myUL')
list.addEventListener('click', function(ev) {
 if (ev.target.tagName === 'LI') {
   ev.target.classList.toggle('checked');
  
 }
}, false);
}
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please enter a to do item");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
function themeChange() {
  if (document.getElementById("btnTh").innerHTML == "Dark Theme")
  {
  document.getElementById("th1").style.color = "white";
  document.getElementById("t2").style.color = "white";
  document.getElementById("t3").style.color = "white";
  document.getElementById("t4").style.color = "white";
  document.getElementById("t5").style.color = "white";
  document.getElementById("t6").style.color = "white";
  document.getElementById("bd1").style.backgroundColor = "#333333";
  document.getElementById("btnTh").innerHTML = "Light Theme";
  }
  else
  {
  document.getElementById("th1").style.color = "black";
  document.getElementById("t2").style.color = "black";
  document.getElementById("t3").style.color = "black";
  document.getElementById("t4").style.color = "black";
  document.getElementById("t5").style.color = "black";
  document.getElementById("t6").style.color = "black";
  document.getElementById("bd1").style.backgroundColor = "#eeeeee";
  document.getElementById("btnTh").innerHTML = "Dark Theme";
  }

}

function fontChange() {
  var x = document.getElementById("fSize");
  var item1 = document.getElementById("menu1");
  var item2 = document.getElementById("menu2");
  if (x.innerHTML == "100%") {
    item1.className = "col-3 col-s-3 menu size10";
    item2.className = "aside size10";
    x.innerHTML = "90%";
    x.className = "bar10 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
  }
  else if (x.innerHTML == "90%") {
    item1.className = "col-3 col-s-3 menu size9";
    item2.className = "aside size9";
    x.innerHTML = "80%";
    x.className = "bar9 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
  }
  else if (x.innerHTML == "80%") {
    item1.className = "col-3 col-s-3 menu size8";
    item2.className = "aside size8";
    x.innerHTML = "70%";
    x.className = "bar8 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    }
  else if (x.innerHTML == "70%") {
    item1.className = "col-3 col-s-3 menu size7";
    item2.className = "aside size7";
    x.innerHTML = "60%";
    x.className = "bar7 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
  }
  else if (x.innerHTML == "60%") {
    item1.className = "col-3 col-s-3 menu size6";
    item2.className = "aside size6";
    x.innerHTML = "50%";
    x.className = "bar6 skills";
    var item1 = x.className;
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    }
  else if (x.innerHTML == "50%") {
    item1.className = "col-3 col-s-3 menu size5";
    item2.className = "aside size5";
    x.innerHTML = "40%";
    x.className = "bar5 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
  }
  else if (x.innerHTML == "40%") {
    item1.className = "col-3 col-s-3 menu size4";
    item2.className = "aside size4";
    x.innerHTML = "30%";
    x.className = "bar4 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    }
  else if (x.innerHTML == "30%") {
    item1.className = "col-3 col-s-3 menu size3";
    item2.className = "aside size3";
    x.innerHTML = "20%";
    x.className = "bar3 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
  }
  else if (x.innerHTML == "20%") {
    item1.className = "col-3 col-s-3 menu size2";
    item2.className = "aside size2";
    x.innerHTML = "10%";
    x.className = "bar2 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
  }
 else if (x.innerHTML == "10%") {
    item1.className = "col-3 col-s-3 menu size1";
    item2.className = "aside size1";
    x.innerHTML = "0%";
    x.className = "bar1 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
  }
}
function fontChange2() {
  var x = document.getElementById("fSize");
  var item1 = document.getElementById("menu1");
  var item2 = document.getElementById("menu2");
  if (x.innerHTML == "90%") {
    item1.className = "col-3 col-s-3 menu size11";
    item2.className = "aside size11";
    x.innerHTML = "100%";
    x.className = "bar11 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    }
  else if (x.innerHTML == "80%") {
    item1.className = "col-3 col-s-3 menu size10";
    item2.className = "aside size10";
    x.innerHTML = "90%";
    x.className = "bar10 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
  }
 else if (x.innerHTML == "70%") {
    item1.className = "col-3 col-s-3 menu size9";
    item2.className = "aside size9";
    x.innerHTML = "80%";
    x.className = "bar9 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    }
  else if (x.innerHTML == "60%") {
    item1.className = "col-3 col-s-3 menu size8";
    item2.className = "aside size8";
    x.innerHTML = "70%";
    x.className = "bar8 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
  }
  else if (x.innerHTML == "50%") {
    item1.className = "col-3 col-s-3 menu size7";
    item2.className = "aside size7";
    x.innerHTML = "60%";
    x.className = "bar7 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    }
  else  if (x.innerHTML == "40%") {
    item1.className = "col-3 col-s-3 menu size6";
    item2.className = "aside size6";
    x.innerHTML = "50%";
    x.className = "bar6 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
  }
 else if (x.innerHTML == "30%") {
    item1.className = "col-3 col-s-3 menu size5";
    item2.className = "aside size5";
    x.innerHTML = "40%";
    x.className = "bar5 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
    }
 else if (x.innerHTML == "20%") {
    item1.className = "col-3 col-s-3 menu size4";
    item2.className = "aside size4";
    x.innerHTML = "30%";
    x.className = "bar4 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
  }
 else if (x.innerHTML == "10%") {
    item1.className = "col-3 col-s-3 menu size3";
    item2.className = "aside size3";
    x.innerHTML = "20%";
    x.className = "bar3 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
  }
else if (x.innerHTML == "0%") {
    item1.className = "col-3 col-s-3 menu size2";
    item2.className = "aside size2";
    x.innerHTML = "10%";
    x.className = "bar2 skills";
    localStorage.setItem("items1", JSON.stringify(item1.className));
    localStorage.setItem("items2", JSON.stringify(item2.className));
    localStorage.setItem("items3", JSON.stringify(x.innerHTML));
    localStorage.setItem("items4", JSON.stringify(x.className));
  }
}

function loadSettings() {
var data1;
var data2;
var data3;
var data4;
  data1 = JSON.parse(localStorage.getItem('items1'));
  data2 = JSON.parse(localStorage.getItem('items2'));
  data3 = JSON.parse(localStorage.getItem('items3'));
  data4 = JSON.parse(localStorage.getItem('items4'));
  console.log(data1);
  console.log(data2);
  console.log(data3);
  console.log(data4);
  if (data1 != null && data2 != null) {
  var x = document.getElementById("fSize");
  var item1 = document.getElementById("menu1");
  var item2 = document.getElementById("menu2");
  item1.className = data1;
  item2.className = data2;
  x.innerHTML = data3;
  x.className = data4;
  }

}


function settings() {
  if (document.getElementById("btnSet").innerHTML == "Settings")
  {
  document.getElementById("settings").className = "setting1";
  document.getElementById("btnSet").innerHTML = "Close"
  window.setTimeout(function() {
  document.getElementById("btnTh").style.display = "block";}, 400);
  window.setTimeout(function() {
  document.getElementById("btnTh2").style.display = "block";}, 400);
  
  }
  else
  {
  document.getElementById("settings").className = "setting2";
  document.getElementById("btnSet").innerHTML = "Settings"
  window.setTimeout(function() {
  document.getElementById("btnTh").style.display = "none";}, 1600);
  window.setTimeout(function() {
  document.getElementById("btnTh2").style.display = "none";}, 1600);
  }
}
