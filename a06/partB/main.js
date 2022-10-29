$(document).ready(function () {

    var tens = 00; 
    var seconds = 00;
    var mins = 00; 
    var hours = 00;

    var Interval ;
  

    $("#start").click(() => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);
   

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
        seconds++; 
        console.log(seconds);
        
        
        $("#seconds").html(seconds);

        // update minutes

        if (seconds > 60) {
            mins++;
            seconds =0;
            $("#minute").html(mins);
            $("#seconds").html(0);



        }
        if (mins > 60) {
            mins =0;
            hours++;
            $("#hour").html(hours);
            $("#minute").html(mins);



        }
      
      }
      


   
});