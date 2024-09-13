const Color = {
    0: "Red",
    1: "Orange",
    2: "Yellow",
    3: "Green",
    4: "Blue",
    5: "Indigo",
    6: "Violet",
    7: "White"
}


const gridDiv = document.querySelector('#grid')
const toolsDiv = document.querySelector('#tools')
const btnReset = document.querySelector('#btnReset')
const btnRandom = document.querySelector('#btnRandom')
const btnProgresive = document.querySelector('#btnProgresive')
const btnChange = document.querySelector('#btnChange')
btnReset.addEventListener('click', resetGrid)

btnChange.addEventListener('click', changeGrid)
btnRandom.addEventListener('click', () => {
    selectedColor = "Random";
});
btnProgresive.addEventListener('click', () =>{
    if(progresiveBool){
        progresiveBool = false;
    }else{
        progresiveBool = true;
    }
    
})
let selectedColor = "element-div"
let progresiveBool = false
btnProgresive


for (let i = 0; i < 7; i++){
    const colorTools = document.createElement('button')
    colorTools.className = "colorSelection"
    colorTools.id = Color[i]
    colorTools.addEventListener('click', setColor)
    toolsDiv.appendChild(colorTools)
}



function generateGrid(qty){
    for (let i = 0; i < qty; i++) {
        const divRow = document.createElement('div')
        divRow.className = "row-div"
        gridDiv.appendChild(divRow)
        for(let j = 0; j < qty; j++){
            const divElement = document.createElement('div')
            divElement.className = "element-div"
            divElement.onmouseenter = "changeColor()"
            divElement.addEventListener("mouseover", changeColor);
            divRow.appendChild(divElement)
        }
    }
}

function changeColor(){

    if(progresiveBool){
        if(parseFloat(window.getComputedStyle(this).getPropertyValue('opacity')) == 1 && this.className == "element-div"){
            this.style.opacity = 0.2
        }else{
            this.style.opacity =(parseFloat(window.getComputedStyle(this).getPropertyValue('opacity')) + 0.2)
            
        }
    }
    if(selectedColor=="Random"){
        selectedColor = Color[Math.floor(Math.random() * 7)]
        this.className = selectedColor
        selectedColor = "Random"
    }else{
        this.className = selectedColor
    }
}

generateGrid(30);

function setColor(){
    selectedColor = this.id
   
}
function resetGrid(){
    const gridElements = document.querySelectorAll('#grid>div>div');
    gridElements.forEach((element) => {
        element.className = "element-div"
        element.style.opacity = 1
    });
}

function changeGrid(){
    
    while (gridDiv.hasChildNodes()) {
        gridDiv.removeChild(gridDiv.firstChild);
    }
    generateGrid(prompt("Please enter a number 1-100"))
}