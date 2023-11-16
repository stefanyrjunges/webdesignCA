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