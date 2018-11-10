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
           var strArray = data.split(",");
           document.getElementById("text5").innerHTML = " ";
            
           for(var i = 0; i < strArray.length; i++){
            document.getElementById("text5").innerHTML += strArray[i] + "<br/>";   
           }

           }
           };
           xhttp.open("GET", "log.txt", true);
           xhttp.send();   
}
