let containerDiv = document.createElement("div")
    containerDiv.classList.add("container-fluid");
    containerDiv.setAttribute("id", "homePage");
    containerDiv.setAttribute("style", "width: 100vw; height: 100vh;");

let headerDiv = document.createElement("div");
let header = document.createElement("h1");
    headerDiv.classList.add("row");
    headerDiv.setAttribute("id", "headerRow");
    header.classList.add("col-md-12", "text-center");
    header.innerHTML= "IL MIO COUNTER JAVASCRIPT";
    
let buttonsDiv = document.createElement("div");

let counterDiv = document.createElement("div");
    counterDiv.classList.add("row");
    counterDiv.setAttribute("id", "counterRow");

let functionsDiv = document.createElement("div");
    functionsDiv.classList.add("row"); 
    functionsDiv.setAttribute("id", "buttonRow");

let minusDiv = document.createElement("div");
    minusDiv.classList.add("col-5");
    minusDiv.setAttribute("id", "minusDiv");
let minusButton = document.createElement("button");
    minusButton.classList.add("btn", "btn-success", "btn-block", "btn-lg");
    minusButton.setAttribute("id", "minusButton");
    minusButton.innerHTML = "-";

let resultDiv = document.createElement("div");
    resultDiv.classList.add("col-2");
    resultDiv.setAttribute("id", "resultDiv");
let result = document.createElement("span");
    result.classList.add("text-center");
    result.setAttribute("id", "result");
    result.innerHTML = "0";

let plusDiv = document.createElement("div");
    plusDiv.classList.add("col-5")
    plusDiv.setAttribute("id", "plusDiv");
let plusButton = document.createElement("button");
    plusButton.classList.add("btn", "btn-success", "btn-block", "btn-lg");
    plusButton.setAttribute("id", "plusButton");
    plusButton.innerHTML = "+";

let resetDiv = document.createElement("div");
    resetDiv.classList.add("col-6", "primaryColor");
    resetDiv.setAttribute("id", "resetDiv");
let resetButton = document.createElement("button");
    resetButton.classList.add("btn", "btn-success", "btn-block", "btn-lg");
    resetButton.setAttribute("id", "resetButton");
    resetButton.innerHTML ="Reset";


let timerDiv = document.createElement("div");
    timerDiv.classList.add("col-6", "primaryColor");
    timerDiv.setAttribute("id", "timerDiv");
let timerButton = document.createElement("button");
    timerButton.classList.add("btn", "btn-success", "btn-block", "btn-lg");
    timerButton.setAttribute("id", "timerButton");
    timerButton.innerHTML = "Timer";


headerDiv.appendChild(header);

containerDiv.appendChild(headerDiv);
containerDiv.appendChild(buttonsDiv);

buttonsDiv.appendChild(counterDiv);
buttonsDiv.appendChild(functionsDiv);

minusDiv.appendChild(minusButton);
plusDiv.appendChild(plusButton);
resultDiv.appendChild(result);

counterDiv.appendChild(minusDiv);
counterDiv.appendChild(resultDiv);
counterDiv.appendChild(plusDiv);

resetDiv.appendChild(resetButton);
timerDiv.appendChild(timerButton);

functionsDiv.appendChild(resetDiv);
functionsDiv.appendChild(timerDiv);

document.body.appendChild(containerDiv);


