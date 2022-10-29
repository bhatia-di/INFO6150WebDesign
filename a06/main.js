$(document).ready(function () {

    $("#email").keyup(function () {
        validateUsername();
    });

    $("#email").keydown(function () {
        validateUsername();
    });

    $("#password").keydown(function () {
        validatePassword();
    });


    $( "#submit" ).click(function() {
        if ($("#errorEmail").is(":hidden") && $("#errorpassword").is(":hidden")) {
            console.log(" -- hidden both errors ---");

        }
        
      });


    function  validatePassword() {

        let passwordValue = $("#password").val();
        console.log(passwordValue);

        if (passwordValue.length == "") {
            console.log("length empty");
          $("#errorpassword").show();
          passwordValue = false;
          return false;
        } else if (passwordValue.length < 3 || passwordValue.length > 30) {
            console.log("length (3, 10)");
            $("#errorpassword").html("**length of password must be between 3 and 10");

            $("#errorpassword").show();
          return false;
        }
         else {
           console.log(" should hide");
           $("#errorpassword").hide();
        }

    } 


    function validateUsername() {
        let usernameValue = $("#email").val();
        console.log(usernameValue);

        if (usernameValue.length == "") {
            console.log("length empty");
          $("#errorEmail").show();
          usernameError = false;
          return false;
        } else if (usernameValue.length < 3 || usernameValue.length > 30) {
            console.log("length (3, 10)");

          $("#errorEmail").show();
//          $("#errorEmail").html("**length of username must be between 3 and 10");
          usernameError = false;
          return false;
        } else if(!usernameValue.endsWith("@northeastern.edu")) {
            console.log("doesnt end with neu.edu");

           $("#errorEmail").html("domain should be of northeastern.edu");
           $("#errorEmail").show();
        } else if(usernameValue.endsWith("@northeastern.edu")) {
            console.log(" ends with neu.edu");
            $("#errorEmail").hide();
        }
         else {
           console.log(" should hide");
           $("#errorEmail").hide();
        }
      }

});