var randomResult;
var win = 0;
var loss = 0;
var previous = 0;

var resetAndStart = function () {
    $(".crystals").empty();

    var images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95gKSXcg6QyRQrEGEiyN2eEKIxvXOIS0vFrsTJ4eAZvW4Ouie",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQgNrRkuTBBuv9AGN1iHes1FobwL7Jx84v4eT1kCyGLklbjhZXQ",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZ58WD_yi5omMVzD8N2MiGTnZU6dr_5EqDRoYpQqkYRkbWp2O",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGT_DrhPa4siZ_Vws_gYlGQXDo4ttdmLDIg98m7tgw3seqJS2MEA",




        // "../images/crystal1.jpg",
        // "../images/crystal2.jpg",
        // "../images/crystal3.jpg",
        // "../images/crystal4.jpg",
    ];


randomResult= Math.floor(Math.random() * 100) + 20;


$("#result").html('Objective: ' + randomResult);

for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal', "data-random": random
        });

        crystal.css({
            "background-image": "url(" + images[i] + ")", 
            "background-size" : "cover",
        });

        // crystal.html(random);
    
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





