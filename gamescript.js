function spaceButton() {
    var header = document.getElementsByClassName("header")[0];
    var isMarginTopSet = false

    document.getElementById("buttonNav").addEventListener('click', function(){
        
        if(isMarginTopSet == true){
            header.style.marginTop = "40px"
        } else {
            header.style.marginTop = "200px"
        }

        isMarginTopSet = !isMarginTopSet;
    })
}

spaceButton()


function startGame(){
    var quiz = document.getElementsByClassName("questions")[0];
    var introduction = document.getElementsByClassName("gameStart")[0];

    introduction.style.display = "none";
    quiz.style.display = "grid";
    result.innerHTML = ""; // Reset the result message
    tryAgain.style.display = "none"; // Hide the tryAgain button
}

function clickSubmit(){
    var quiz = document.getElementsByClassName("questions")[0];
    var result = document.getElementById("result")
    var tryAgainButton = document.getElementById("tryAgain");
    
    var score = 0
    
    var answers = ["tree","rose","amazon","liffey","africa","america","sheep","honey","autumn","apple"]

    for(index = 0; index < 10 ; index++){
        var userAnswer = document.getElementById("question" + (index + 1)).value.toLowerCase();
        if (userAnswer == answers[index]) {
            score++;
        } 
    }
    
    quiz.style.display = "none"

    if(score == 10){
        result.innerHTML = "you scored 100%, Congratulations!!! a tree will be planted in the amazon forest in a few days!."
    }else {
        result.innerHTML = "you got " + score + " right, unfortunately a tree won't be planted in the amazon forest."
        tryAgainButton.style.display = "block"

        
    }

}

// Functions for the +MORE BUTTONS

function moreInfo() {
    document.getElementById("minfo").style.display = "block";
    document.getElementById("minfo").style.position = "absolute";
} 
    
    // Added display:block because the text is initially hidden and I want it to show when I click on the button.
    // Also added position:absolute because everytime the button was clicked on, the text <p> would appear and push the table content. Then, added position:relative in the table as well to fix the problem.
    
    function moreInfo2() {
        document.getElementById("minfo2").style.display = "block";
        document.getElementById("minfo2").style.position = "absolute";
    }
    
    function moreInfo3() {
        document.getElementById("minfo3").style.display = "block";
        document.getElementById("minfo3").style.position = "absolute";
}