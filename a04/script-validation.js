

function validateEmail(emailStr) {

    const emailRegex = /^\w+([\.-]?\w+)*@northeastern.edu$/;

    if (!emailRegex.test(emailStr)) {
       console.log("Invalid email");
    } else {
        console.log("valid email");
    }


};

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


function validatePhone(phoneNumberObject) {


    if (!phoneRegex.test(phoneNumberStr)) {
       console.log("Invalid phone number");
    } else {
        console.log("valid phone number");
    }


    const phoneRegex = '^[0-9]{3}-[0-9]{3}-[0-9]{4}$';
    const errorBlockID = "errorphonenumber";

    if(!phoneNumberObject.value.trim().match(regExName)) {
        object.style.border = "2px solid red";
        document.getElementById(errorBlockID).style.display = "block";
        object.value = "";
    } else {
        object.style.border = "";
        document.getElementById(errorBlockID).style.display = "none";
    }

};


function validateZipCode(zipcodeStr) {

    const zipRegex = '^\d{5}(?:[-\s]\d{4})?$';

    if (!zipRegex.test(zipcodeStr)) {
       console.log("Invalid regex");
    } else {
        console.log("valid regex");
    }


};

document.getElementById("submit").onclick = onSubmit;


function onSubmit() {


    checkIfAllRequiredFieldsAreSet();
    return true;
   

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
            alert("Please fill all the required details marked as asterisk.");
        }
    }
 catch (e) {
    console.log(e);
   
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


