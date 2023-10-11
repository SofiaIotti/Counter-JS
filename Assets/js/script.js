window.onload = function(){  

    const countdownBtn = document.getElementById("countdownButton");
    let  counter = 0;
    

    document.getElementById("homePage").addEventListener("click", (event) => {
        if(event.target.tagName === "BUTTON"){

            const buttonId = event.target.id;
            
           switch (buttonId){
            case "plusButton":
                ++counter;
                document.getElementById("result").innerHTML = counter;
                break;
                
            case "minusButton":
                --counter;
                document.getElementById("result").innerHTML = counter;
                break;
            
            case "resetButton":
                counter = 0;
                document.getElementById("result").innerHTML = counter;
                break;
            case "timerButton":
                document.getElementById("timerModal").style.display = "flex";
                document.getElementById("boxShadow").style.display = "block";
                document.getElementById("homePage").style.display = "none";
                break;
            }
        };
    });
    countdownBtn.addEventListener('click', function(){
        
        document.getElementById("timerModal").style.display = "none";
        document.getElementById("boxShadow").style.display = "none";
        document.getElementById("homePage").style.display = "block";
         
        let time = document.getElementById("seconds").value;

        let interval = setInterval(function(){
                document.getElementById("result").innerHTML = time;
                time--;
                if (time <= 0) {
                    
                    document.getElementById("result").innerHTML = "FINE!";
                    document.getElementById("coriandoli").classList.add("coriandoli-show");
                    setTimeout(function(){
                        document.getElementById("coriandoli").classList.remove("coriandoli-show");
                    }, 3000)
                    clearInterval(interval);
                    };
        }, 1000);
    });
};