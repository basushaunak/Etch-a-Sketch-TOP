const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");

function getRandomInteger(x, y) {
    return Math.floor(Math.random() * (y - x + 1)) + x;
}

function getRandomRGB(){
    let redValue = getRandomInteger(0,255);
    let greenValue = getRandomInteger(0,255);
    let blueValue = getRandomInteger(0,255);
    return "rgb("+redValue+"," + greenValue + "," + blueValue+")";
}

function populateGrid(columnCount){
    let cellSize = gridContainer.clientHeight/columnCount;
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("style", "min-height: " + cellSize + "px;min-width: " + cellSize + "px;");
    let newCell = cell.cloneNode(false);
    for(let i=0;i<columnCount;i++){
        for(let j=0;j<columnCount;j++){
            gridContainer.appendChild(newCell);
            newCell = cell.cloneNode(false);
        }
    }    
}

window.onload = ()=>{
    populateGrid(64);
}

gridContainer.addEventListener("mouseover",(e)=>{
    // e.target.setAttribute("style","background-color: "+getRandomRGB());
    let style = window.getComputedStyle(e.target);
    console.log(e.target);
    console.log(style.getPropertyValue('opacity'));
})