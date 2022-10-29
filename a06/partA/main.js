$(document).ready(function () {

    $("#email").keyup( () => {
        validateUsername();
    });

    $("#email").keydown( () => {
        validateUsername();
    });

    $("#password").keydown( () => {
        validatePassword();
    });


    $( "#submit" ).click(() => {
        if ($("#errorEmail").is(":hidden") && $("#errorpassword").is(":hidden")) {
            console.log(" -- hidden both errors ---");
            window.open( "./partA-calculator.html");

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

    $("#operator1").keyup(() => {
        validateOperatorOne();
    });


    function validateOperatorOne() {


        let operatorValue = $("#operator1").val();
        console.log(operatorValue);

        let op = parseFloat(operatorValue);
        console.log(op);

        if (isNaN(op)) {
            console.log("--nan---");
            $("#erroroperator1").html("incorrect number");
            $("#erroroperator1").show();
        } else {
            console.log("--hide error---");
            $("#erroroperator1").hide();
        }
    }


    $("#operator2").keyup( () => {
        validateOperatorTwo();
    });


    function validateOperatorTwo() {

        let operatorValue = $("#operator2").val();
        let op = parseFloat(operatorValue);
        console.log(op);

        if (isNaN(op)) {
            $("#erroroperator2").html("incorrect number");
            $("#erroroperator2").show();
        } else {
            $("#erroroperator2").hide();
        }
    }

    $("#operand").keyup( () => {
        validateOperand();
    });


    function validateOperand() {

        let operatorValue = $("#operand").val();
        const operands = ["Add", "Subtract", "Multiply", "Divide"];

        console.log(operatorValue);
        if (!operands.includes(operatorValue)) {
            console.log("includes");

            $("#erroroperand").html("incorrect operand");
            $("#erroroperand").show();
        } else {
            console.log("hide operand");

            $("#erroroperand").hide();
        }

       
    }



    $( "#submitCalc" ).click(() => {

        if ($("#erroroperator1").is(":hidden") && $("#erroroperator2").is(":hidden") && $("#erroroperand").is(":hidden")) {
            console.log(" -- hidden both errors ---");
            let operatorValue = $("#operand").val();

            let operator1 = $("#operator1").val();
            let op1 = parseFloat(operator1);
    
            let operator2 = $("#operator2").val();
            let op2 = parseFloat(operator2);

            let result = (op1, op2, operatorValue) => {
                let tempresult;

            switch(operatorValue) {
                case 'Add': {
                    result = op1 + op2;
                    break;
                }
                case 'Subtract': {
                    result = op1 - op2;
                    break;
                }
                case 'Multiply': {
                    result = op1 * op2;
                    break;
                }
                case 'Divide': {
                    result = op1 / op2;
                    break;
                }
            }

                return tempresult;
            };

            
            $("#result").html(result);
            $("#result").show();



        } else {
            console.log(" -- show error ---");
            $("#submitError").show();

        }


        
      });

      function getResult(op1, op2, operatorValue) {

        let result;

            switch(operatorValue) {
                case 'Add': {
                    result = op1 + op2;
                    break;
                }
                case 'Subtract': {
                    result = op1 - op2;
                    break;
                }
                case 'Multiply': {
                    result = op1 * op2;
                    break;
                }
                case 'Divide': {
                    result = op1 / op2;
                    break;
                }
            }

            return result;

      }
});