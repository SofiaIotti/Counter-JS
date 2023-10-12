window.onload = function(){  

    const modal = document.getElementById("timerModal");
    const box = document.getElementById("boxShadow");
    const containerDiv = document.getElementById("homePage"); 
    const countdownBtn = document.getElementById("countdownButton");
    const coriandoli = document.getElementById("coriandoli");
    let result = document.getElementById("result");
    let  counter = 0;  

    document.getElementById("homePage").addEventListener("click", (event) => {
        if(event.target.tagName === "BUTTON"){
           const buttonId = event.target.id;
            
           switch (buttonId){
            case "plusButton":
                ++counter;
                break;
                
            case "minusButton":
                --counter;
                break;
            
            case "resetButton":
                counter = 0;
                break;
            case "timerButton":
                modal.style.display = "flex";
                box.style.display = "block";
                containerDiv.style.display = "none";
                break;
            }
            result.innerHTML = counter;
        };
    });
    
    countdownBtn.addEventListener('click', function(){
        
        modal.style.display = "none";
        box.style.display = "none";
        containerDiv.style.display = "block";
         
        let time = document.getElementById("seconds").value;

        let interval = setInterval(function(){
                result.innerHTML = time;
                if (time <= 0) {
                    
                    result.innerHTML = "FINE!";
                    coriandoli.classList.add("coriandoli-show");
                    setTimeout(function(){
                        coriandoli.classList.remove("coriandoli-show");
                    }, 3000)
                    clearInterval(interval);
                    };
                time --;
        }, 1000);
    });
};