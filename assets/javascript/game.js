var randomResult;
var win;
var loss;

randomResult= Math.floor(Math.random() * 100) + 20;

console.log(randomResult);

$("#result").html('Random Result: ');

for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 12);
    console.log(random);
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal', "data-random": random
        });

    $(".crystals").append(crystal);

}




//Pseudo Code

//On opening-randomly generated number to match will be between 19-120

//crystals are randomly generated bewtween 1-12-

//user interaction-
    //when a crystal is clicked, that random number gets added to the user score which will be a counter


    //if the user adds up the total number exactly then the user wins but if the user over guesses the total then that is a loss for the user
    //After the user either wins or loses the values of the crystals reset as well as the total and user score.
