


function validateFirstName(fnameObject) {

    var regExName = /^[a-zA-Z]+$/;
    const errorBlockID = "errorFirstName";

    if(!fnameObject.value.trim().match(regExName)) {
        fnameObject.style.border = "2px solid red";
        document.getElementById(errorBlockID).style.display = "block";
    } else {
        fnameObject.style.border = "";
        document.getElementById(errorBlockID).style.display = "none";
    }

};

function validateLastName(object) {

    var regExLastName = /^[a-zA-Z]+$/;
    const errorBlockID = "errorLastName";

    if(!object.value.trim().match(regExLastName)) {
        object.style.border = "2px solid red";
        document.getElementById(errorBlockID).style.display = "block";
    } else {
        object.style.border = "";
        document.getElementById(errorBlockID).style.display = "none";
    }

};


function validateEmail(object) {

    const regExEmail = /^\w+([\.-]?\w+)*@northeastern.edu$/;

    const errorBlockID = "errorEmail";

    if(!object.value.trim().match(regExEmail)) {
        object.style.border = "2px solid red";
        document.getElementById(errorBlockID).style.display = "block";
    } else {
        object.style.border = "";
        document.getElementById(errorBlockID).style.display = "none";
    }

};


function validatePhone(object) {

    const phoneRegex = '^[0-9]{3}-[0-9]{3}-[0-9]{4}$';
    const errorBlockID = "errorphonenumber";

    if(!object.value.trim().match(phoneRegex)) {
        object.style.border = "2px solid red";
        document.getElementById(errorBlockID).style.display = "block";
        object.value = "";
    } else {
        object.style.border = "";
        document.getElementById(errorBlockID).style.display = "none";
    }

};


function validateZipCode(object) {

    const zipRegex = '^\d{5}(?:[-\s]\d{4})?$';

    const errorBlockID = "errorzipcode";

    if(!object.value.trim().match(zipRegex)) {
        object.style.border = "2px solid red";
        document.getElementById(errorBlockID).style.display = "block";
        object.value = "";
    } else {
        object.style.border = "";
        document.getElementById(errorBlockID).style.display = "none";
    }


};

document.getElementById("submit").onclick = onSubmit;


function onSubmit() {


    const isValidate = checkIfAllRequiredFieldsAreSet();
    if (isValidate) {
        alert("Please fill all the required details marked as asterisk.");
    } else {
        // proceed with execution



        // ends with reset 
        onReset()

    }
   

}

function onReset() {

    resetTitle();
    document.getElementsByName("firstName")[0].value = "";
    document.getElementsByName("lastName")[0].value = "";
    document.getElementsByName("emailId")[0].value = "";
    document.getElementsByName("phoneNumber")[0].value = "";
    document.getElementsByName("zipcode")[0].value = "";
  
    document.getElementById("streetAddress1").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("zipcode").value = "";
    resetSource();
    document.getElementById("comments").value = "";

}

function checkIfAllRequiredFieldsAreSet() {

    try {
        var title = validateTitle();
        var firstname = document.getElementsByName("firstName")[0].value;
        var lastname = document.getElementsByName("lastName")[0].value;
        var emailAddress = document.getElementsByName("emailId")[0].value;
        var phone = document.getElementsByName("phoneNumber")[0].value;
        var zipcode = document.getElementsByName("zipcode")[0].value;
      
        var addinfo =  document.getElementById("streetAddress1").value;
        var city =  document.getElementById("city").value;
        var state =  document.getElementById("state").value;
        var zipcode =  document.getElementById("zipcode").value;
        var source = validateSource();
        var comments =  document.getElementById("comments").value;
    
        console.log(title, state, zipcode, source, comments, firstname, lastname, emailAddress, phone, addinfo, source);
        if(title =="" || firstname ==""|| lastname ==""|| emailAddress ==""|| phone ==""|| zipcode ==""||
        text ==""||addinfo =="" || city =="" || state =="" || source == "" ){
            return true;
        } else {
            return false;
        }
    }
 catch (e) {
    console.log(e);
    return true;
   
 }   
}


function validateForm() {

    
    var titleValid = validateTitle();
    


}

function validateTitle() {

    const inputTitleCollection = document.getElementsByName('title');
    var isAnyTitleChecked = "";

    for (var i =0; i<inputTitleCollection.length; i++) {
        var isChecked = inputTitleCollection[i].checked;
        if (isChecked) {
            isAnyTitleChecked = inputTitleCollection[i].value;
            break;
        }
    }


    return isAnyTitleChecked;
}

function resetTitle() {

    const inputSourceCollection = document.getElementsByName('title');

    for (var i =0; i<inputSourceCollection.length; i++) {
        inputSourceCollection[i].checked = false;
    }


}


function validateSource() {

    const inputSourceCollection = document.getElementsByName('source');
    var isAnyTitleChecked = "";

    for (var i =0; i<inputSourceCollection.length; i++) {
        var isChecked = inputSourceCollection[i].checked;
        if (isChecked) {
            isAnyTitleChecked = inputSourceCollection[i].value;
            break;
        }
    }


    return isAnyTitleChecked;
}

function resetSource() {

    const inputSourceCollection = document.getElementsByName('source');

    for (var i =0; i<inputSourceCollection.length; i++) {
        inputSourceCollection[i].checked = false;
    }

    document.getElementById('errorTitle').style.display = 'none';
    document.getElementById('errorFirstName').style.display = 'none';
    document.getElementById('errorLastName').style.display = 'none';
    document.getElementById('errorEmail').style.display = 'none';
    document.getElementById('errorphonenumber').style.display = 'none';
    document.getElementById('errorzipcode').style.display = 'none';
    document.getElementById('source').style.display = 'none';


}


