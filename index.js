const letters = ['a','b','c','d', 'e', 'f', 'g'];

var intervalId;

var started = false;

$(document).on('keypress', function(){
    if (!started){
    $('h1').text('Press any key to start the game');
    started = true;


    intervalId = setInterval(nextMole, 2000);
};
    
    }
)


$(document).on("keypress", function(event){
     var letter = event.key;

    checkAnswer(letter);
})

function nextMole(){
    $('h1').text('Game has started!!!');
    const randomNumber = Math.floor(Math.random()*7)
    randomLetter = letters[randomNumber];
    $('#'+randomLetter).append('<img src = "mole.jpg" alt = "mole-img" />')

    setTimeout(function(){
        $('img').remove();
    }, 500)
}

function checkAnswer(value){
    if (value === randomLetter){
        $('h1').text('Nice Hit!!!');
    }else{
        $('h1').text('Wrong hit. Press any key to try again!!!');
        startOver();
    }
}

function startOver(){
    started = false;
    clearInterval(intervalId);
}

