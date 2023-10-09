window.onload = function(){  

    plusBtn = document.getElementById("plusButton");
    minusBtn = document.getElementById("minusButton");
    resetBtn = document.getElementById("resetButton");
    timerBtn = document.getElementById("timerButton");
    countdownBtn = document.getElementById("countdownButton");
    let  counter = 0;
    let interval;

    plusBtn.addEventListener('click', function(){
        ++counter;
        document.getElementById("result").innerHTML = counter;
    });

    minusBtn.addEventListener('click', function(){
    --counter;
    document.getElementById("result").innerHTML = counter;
    });

    timerBtn.addEventListener('click', function(){
        document.getElementById("timerModal").style.display = "flex";
        document.getElementById("boxShadow").style.display = "block";
        document.getElementById("homePage").style.display = "none";
        });

    countdownBtn.addEventListener('click', function(){
        
        document.getElementById("timerModal").style.display = "none";
        document.getElementById("boxShadow").style.display = "none";
        document.getElementById("homePage").style.display = "block";
         
        let time = document.getElementById("seconds").value;

        interval = setInterval(function(){
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

    resetBtn.addEventListener('click', function(){
        clearInterval(interval);
        counter = 0;
        document.getElementById("result").innerHTML = counter;
    });

};