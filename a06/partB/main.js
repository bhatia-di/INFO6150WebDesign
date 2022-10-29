$(document).ready(function () {

    var tens = 00; 
    var seconds = 00;
    var mins = 00; 
    var hours = 00;

    var Interval ;
  

    $("#start").click(() => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
   

    });

    $("#stop").click(() => {

        clearInterval(Interval);

    });

    $("#reset").click(() => {
        clearInterval(Interval);
        $("#seconds").html("00");
        $("#minute").html("00");
        $("#hour").html("00");

    });

    function startTimer () {
        tens++; 
        
        
        if (tens > 99) {
          console.log("seconds");
          seconds++;
          $("#seconds").html(seconds);
          tens = 0;
        }
        
        if (seconds > 9){
            $("#seconds").html(seconds);

        }

        // update minutes

        if (seconds > 60) {
            mins++;
            $("#minute").html(mins);


        }
        if (mins > 60) {
            hours++;
            $("#hour").html(hours);


        }
      
      }
      


   
});