function elementsCreation(type, classType, id, style, content, position = null){
    const element = document.createElement(type);
        for(let i =0; i<classType.length; i++){
            element.classList.add(classType[i]);
        }
    element.setAttribute("id", id);
    element.setAttribute("style", style);
    element.innerHTML = content;
    if(position != null) position.appendChild(element);
    return element;
};

let containerDiv = elementsCreation("div", ["container-fluid"], "homePage", "width: 100vw; height: 100vh;", "");
document.body.appendChild(containerDiv);
let headerDiv = elementsCreation ("div",["row"], "headerRow", "", "", containerDiv);
let header = elementsCreation("h1", ["col-md-12", "text-center"], "", "", "IL MIO COUNTER JAVASCRIPT", headerDiv);
let buttonsDiv =  elementsCreation("div", [], "", "", "", containerDiv);
let counterDiv = elementsCreation("div", ["row"], "counterRow", "", "", buttonsDiv);
let functionsDiv = elementsCreation("div", ["row"], "buttonRow", "", "", buttonsDiv);
let minusDiv = elementsCreation("div", ["col-5"], "minusDiv", "", "", counterDiv);
let minusButton = elementsCreation("button", ["btn", "btn-success", "btn-block", "btn-lg"], "minusButton", "", "-", minusDiv);
let resultDiv = elementsCreation("div", ["col-2"], "resultDiv", "", "", counterDiv);
let result = elementsCreation("span", ["text-center"], "result", "", "0", resultDiv);
let plusDiv = elementsCreation("div", ["col-5"], "plusDiv", "", "", counterDiv);
let plusButton = elementsCreation("button", ["btn", "btn-success", "btn-block", "btn-lg"], "plusButton", "", "+", plusDiv);
let resetDiv = elementsCreation("div", ["col-6", "primaryColor"], "resetDiv", "", "", functionsDiv);
let resetButton = elementsCreation("button", ["btn", "btn-success", "btn-block", "btn-lg"], "resetButton", "", "Reset", resetDiv);
let timerDiv = elementsCreation("div", ["col-6", "primaryColor"], "timerDiv", "", "", functionsDiv);
let timerButton = elementsCreation("button", ["btn", "btn-success", "btn-block", "btn-lg"], "timerButton", "", "Timer", timerDiv);


