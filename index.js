let noOfTipButtons = document.querySelectorAll('.tipBtn').length;

for (let i = 0; i < noOfTipButtons; i++) {

    document.querySelectorAll(".tipBtn")[i].addEventListener("click", function() {
        document.querySelector(".tipBtn").style.backgroundColor = "hsl(172, 67%, 45%)";
        document.querySelector(".tipBtn").style.color = "hsl(183, 100%, 15%)";
    });

}





    
