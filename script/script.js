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
    cell.setAttribute("style", "opacity: 1;min-height: " + cellSize + "px;min-width: " + cellSize + "px;");
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
    e.target.style.backgroundColor = getRandomRGB();
    let opacity = e.target.style.opacity;
    if (opacity > 0){
        opacity -= 0.1;
        e.target.style.opacity = opacity;
    }
})

resetButton.addEventListener("click",()=>{
    let columns = 0;
    while (columns < 8 || columns > 100){
        columns = Math.floor(Number(prompt("Please enter a grid size (8 to 100): ")));
    }
    gridContainer.innerHTML = "";
    populateGrid(columns);
})