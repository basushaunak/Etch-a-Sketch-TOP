const gridContainer = document.querySelector("#grid-container");

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
    let cellSize = 640/columnCount;
    console.log("Cell Size: "+cellSize);
    let style = `style = "height: ` + cellSize + `, width: ` + cellSize + `, background-color: red, border: 1px black solid` ;
    let divHTML = `<div ` + style + `></div>`
    for(let i=0;i<columnCount;i++){
        for(let j=0;j<columnCount;j++){
            gridContainer.innerHTML += divHTML;
        }
    }
}

window.onload = ()=>{
    populateGrid(64);
}