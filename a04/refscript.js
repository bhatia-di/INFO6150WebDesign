var drinkName = "NA";
function validateIp(object, type, nameType){
    var regExName = /^[a-zA-Z]+$/;
    var regExEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
	var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
    var regExZip = /^([0-9]{5})$/;
    var name = 'errorMsg'+nameType;
                //errorMsgFName;
                switch(type) {
                    case 1:
                        if(!object.value.trim().match(regExName)) {
                            object.style.border = "2px solid red";
                            document.getElementById(name).style.display = "block";
                            object.value = "";
                        } else {
                            object.style.border = "";
                            document.getElementById(name).style.display = "none";
                        }
                    break;
                    case 2:
                        if(!object.value.match(regExEmail)) {
                            object.style.border = "2px solid red";
                            document.getElementById("errorMsgEmailId").style.display = "block";
                            object.value = "";
                        } else {
                            object.style.border = "";
                            document.getElementById("errorMsgEmailId").style.display = "none";
                        }
                    break;
                    case 3:
                        if(!object.value.match(regExPhone)) {
                            object.style.border = "2px solid red";
                            document.getElementById("errorMsgPhone").style.display = "block";
                            object.value = "";
                        } else {
                            object.style.border = "";
                            document.getElementById("errorMsgPhone").style.display = "none";
                        }
                    break;
                    case 4:
                        if(!object.value.match(regExZip)) {
                            object.style.border = "2px solid red";
                            document.getElementById("errorMsgZip").style.display = "block";
                            object.value = "";
                        } else {
                            object.style.border = "";
                            document.getElementById("errorMsgZip").style.display = "none";
                        }
                    break;
                    case 5:
                        if(object.value == null || object.value == "") {
                            object.style.border = "2px solid red";
                            document.getElementById(name).style.display = "block";
                            object.value = "";
                        } else {
                            object.style.border = "";
                            document.getElementById(name).style.display = "none";
                        }
                }


}

function confirmInput(){
    var radios = document.getElementsByName("title");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) {
        document.getElementById("errorRadio").style.display = "none";

    }else{
        document.getElementById("errorRadio").style.display = "block";
    }
    
}


// const selectElement = document.querySelector('.coffee');
// selectElement.addEventListener('change', (event) => {
//   document.getElementById("chkboxDiv").style.display = "block";
// });

function onCheck(checkboxElem) {
    var textField = document.getElementById("hiddenTextField");
    if (checkboxElem.checked) {
        textField.style.display = "block";
    
    } else {
        textField.style.display = "none";
    }
  }
  
  

function trialMethod(){
    console.log("on submit click")
    var table = document.getElementById("myTable");
    
      
    
      var title = document.querySelector('input[name = "title"]:checked').value;
      var fname = document.getElementsByName("firstName")[0].value;
      var lname = document.getElementsByName("lastName")[0].value;
      var emailID = document.getElementsByName("emailId")[0].value;
      var phone = document.getElementsByName("phoneNumber")[0].value;
      var zipcode = document.getElementsByName("zipcode")[0].value;
    
      var text = document.getElementsByName("text")[0].value;
      var source = document.querySelector('input[name = "source"]:checked').value;
      var drink = drinkName!="" || drinkName!= null || drinkName!= undefined ? drinkName : NA;
      var addinfo =  document.getElementById("addInfo").value;

      if(title =="" || fname ==""|| lname ==""|| emailID ==""|| phone ==""|| zipcode ==""||
      text ==""||source ==""||drink ==""||addinfo ==""){
          alert("Please fill all the details")
      }
      else{
        table.style.display = "block"
        var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);
      var cell10 = row.insertCell(9);
    cell1.innerHTML = title;
    cell2.innerHTML = fname;
    cell3.innerHTML = lname;
    cell4.innerHTML = emailID;
    cell5.innerHTML = phone;
    cell6.innerHTML = zipcode;
    cell7.innerHTML = source;
    cell8.innerHTML = text;
    cell9.innerHTML = drink;
    cell10.innerHTML = addinfo;

      }
      
}

var radioValue;
function radioBtnValue(){
    var radios = document.getElementsByName('title');

for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    // do whatever you want with the checked radio
    radioValue =  radios[i].value;

    // only one radio can be logically checked, don't check the rest
    break;
  }
  return radios[i].value;
}
}
var checkedValue ;
function checkboxValue(){

    var inputElements = document.getElementsByName('source');
    var Value = ""; 
    for(var i=0; i< inputElements.length; i++){
          if(inputElements[i].checked){
            Value = inputElements[i].value;
            console.log(inputElements[i].value);
    
               break;
          }
          return inputElements[i].value;
    
    }
    
    }


function dropDownList(){
var coffee = document.getElementById("coffee").value;
    if(coffee =="Espresso"){
            document.getElementById("chkboxDiv1").style.display = "block";
            document.getElementById("chkboxDiv2").style.display = "none";
            document.getElementById("chkboxDiv3").style.display = "none";
            document.getElementById("chkboxDiv4").style.display = "none";
            document.getElementById("chkboxDiv5").style.display = "none";
            drinkName = coffee;
    }
            
      else if(coffee == "Mocha"){
            document.getElementById("chkboxDiv1").style.display = "none";
            document.getElementById("chkboxDiv2").style.display = "block";
            document.getElementById("chkboxDiv3").style.display = "none";
            document.getElementById("chkboxDiv4").style.display = "none";
            document.getElementById("chkboxDiv5").style.display = "none";
            drinkName = coffee;
      }
            
      else if(coffee == "Latte"){
            document.getElementById("chkboxDiv1").style.display = "none";
            document.getElementById("chkboxDiv2").style.display = "none";
            document.getElementById("chkboxDiv3").style.display = "block";
            document.getElementById("chkboxDiv4").style.display = "none";
            document.getElementById("chkboxDiv5").style.display = "none";
            drinkName = coffee;
        }
      else if(coffee == "Black Tea"){
            document.getElementById("chkboxDiv1").style.display = "none";
            document.getElementById("chkboxDiv2").style.display = "none";
            document.getElementById("chkboxDiv3").style.display = "none";
            document.getElementById("chkboxDiv4").style.display = "block";
            document.getElementById("chkboxDiv5").style.display = "none";
            drinkName = coffee;
      }
           
    else if(coffee == "Green Tea"){
            document.getElementById("chkboxDiv1").style.display = "none";
            document.getElementById("chkboxDiv2").style.display = "none";
            document.getElementById("chkboxDiv3").style.display = "none";
            document.getElementById("chkboxDiv4").style.display = "none";
            document.getElementById("chkboxDiv5").style.display = "block";
            drinkName = coffee;
            
    }
       
}





