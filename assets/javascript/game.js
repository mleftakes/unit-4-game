var randomResult;
var win = 0;
var loss = 0;
var previous = 0;

var resetAndStart = function () {
    $(".crystals").empty();




randomResult= Math.floor(Math.random() * 100) + 20;


$("#result").html('Random Result: ' + randomResult);

for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal', "data-random": random
        });

        crystal.html(random);
    
        $(".crystals").append(crystal);

    }
    $("#previous").html("Total Score: " + previous);


}


resetAndStart();

$(document).on("click", ".crystal", function() {
   
    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    if(previous > randomResult) {
        loss++;

        $("#loss").html("Losses: "+ loss);

        previous = 0;
      
        

        resetAndStart();
    }
    else if(previous === randomResult) {
        win++;
        
        $("#win").html("Wins: " + win);



        previous = 0;

        resetAndStart();

    }
});





