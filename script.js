// Functions for the +MORE AND -LESS BUTTONS

var buttonBack = "more"; 

// created a variable to be able to control the behaviour of the functions. placed it outside of the functions so it can be applied to every function.

function moreInfo()
{
   
    if (buttonBack == "more") {
        document.getElementById("mbutton").innerHTML = "- LESS";
        document.getElementById("minfo").style.display = "block";
        document.getElementById("minfo").style.position = "absolute";
        buttonBack = "less";
    } else if (buttonBack == "less") {
        document.getElementById("mbutton").innerHTML = "+ MORE";
        document.getElementById("minfo").style.display = "none";
        buttonBack = "more";       
}
}


// Added if and else statements to do a type of Read More, Read Less button by manipulating the variable "buttonBack".
// Added "display:block" because the text is initially hidden and I want it to show when I click on the MORE button. Then added "none" again so the text will be hidden once the user clicks on the LESS button.
// Also added "position:absolute" because everytime the button was clicked on, the text <p> would appear and push the table content. Then, added "position:relative" in the table as well to fix the problem.


    function moreInfo2()
    {
       
        if (buttonBack == "more") {
            document.getElementById("mbutton2").innerHTML = "- LESS";
            document.getElementById("minfo2").style.display = "block";
            document.getElementById("minfo2").style.position = "absolute";
            buttonBack = "less";
        } else if (buttonBack == "less") {
            document.getElementById("mbutton2").innerHTML = "+ MORE";
            document.getElementById("minfo2").style.display = "none";
            buttonBack = "more";       
    }
    }
   
function moreInfo3 ()

{

    if (buttonBack == "more") {
        document.getElementById("mbutton3").innerHTML = "- LESS";
        document.getElementById("minfo3").style.display = "block";
        document.getElementById("minfo3").style.position = "absolute";
        buttonBack = "less";
    } else if (buttonBack == "less") {
        document.getElementById("mbutton3").innerHTML = "+ MORE";
        document.getElementById("minfo3").style.display = "none";
        buttonBack = "more";       
}
}
