// get the header section and apply a margin top every time the Nav button is clicked. That way they do not overlap each other.
function spaceButton() {
    var header = document.getElementsByClassName("header")[0];
    var isMarginTopSet = false

    document.getElementById("buttonNav").addEventListener('click', function(){ // addEventListener to watch whenever the button is clicked
        
        if(isMarginTopSet == true){ 
            header.style.marginTop = "40px" // if button was not clicked. set margin to 40px
        } else {
            header.style.marginTop = "200px" // if button was clicked. set margin to 200px
        }

        isMarginTopSet = !isMarginTopSet;
    })
}

spaceButton() // starts the function


function startGame(){ // function to change what is being displayed when the button to start the quiz is clicked.
    var quiz = document.getElementsByClassName("questions")[0];
    var introduction = document.getElementsByClassName("gameStart")[0];

    introduction.style.display = "none"; // display the introduction as display:none
    quiz.style.display = "grid"; // change the display of the quizz from none to grid.
    result.innerHTML = ""; // Reset the result message
    tryAgain.style.display = "none"; // Hide the tryAgain button
}

function clickSubmit(){ // function to process the questions and answers of the quizz
    var quiz = document.getElementsByClassName("questions")[0]; // getting the first element from the class questions.
    var result = document.getElementById("result")
    var tryAgainButton = document.getElementById("tryAgain");
    
    var score = 0 // set a score
    
    var answers = ["tree","rose","amazon","liffey","africa","america","sheep","honey","autumn","apple"] // answers for each question

    for(index = 0; index < 10 ; index++){ // loop to go through each question and match the answers
        var userAnswer = document.getElementById("question" + (index + 1)).value.toLowerCase(); //getting the value from the input, passing what the user has typed to low case
        if (userAnswer == answers[index]) { // checking if the answers are right or not.
            score++; // if the answer is right, add 1 point to the score.
        } 
    }
    
    quiz.style.display = "none"

    if(score == 10){
        result.innerHTML = "you scored 100%, Congratulations!!! a tree will be planted in the amazon forest in a few days!."
    }else {
        result.innerHTML = "you got " + score + " right, unfortunately a tree won't be planted in the amazon forest."
        tryAgainButton.style.display = "block" // if the user do not get all of the answers correct, a button to try again appears.

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


function verifyData() {
    /* Variables for each field that the user filled out*/
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var age = document.getElementById("age").value;
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;
    var tel = document.getElementById("tel").value;
    var gender = document.getElementById("gender").value;
    var experience = document.querySelector('input[name="experience"]:checked').value
    var email = document.getElementById("email").value;
    var textarea = document.getElementById("textarea").value;
    /* alert box displayed for the user confirm their information */
     var correct = confirm("Please, confirm your information." + "\n" + "Name: " + name + "\n" + "Surname: " + surname + "\n" + "Date of Birth: " + age + "\n"  + "Country: " + country + "\n" + "City: " + city + "\n" + "Phone Number: " + tel + "\n" + "Gender: " + gender + "\n" + "Experience: " + experience + "\n" + "E-mail: " + email + "\n" + "Tell us more about you: " + textarea);
    
     /* if - else created to either confirm if the information was submitted successfully or ask the user to correct their information */

      if (correct) {
        alert("Information submitted successfully!");
      } else {
        alert("Please, correct information where needed");
      }    
  }