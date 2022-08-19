const container = document.querySelector("#container");
let rows = document.getElementsByClassName("rows");
let columns = document.getElementsByClassName("columns");
const button = document.getElementById("resize");
let gridDimension = 16;

button.addEventListener("click", function() {
    let newDim = prompt("How many squares would you like the new grid to have? (under 100)");
    removeGrid(gridDimension);
    if (newDim < 100){
        gridDimension = newDim;
        createGrid();
    } else {
        alert(newDim + " is too large, please try again and pick a number smaller than 100.");
    }
});

function createGrid() {
    createRows(gridDimension);
    createColumns(gridDimension);
    hover();
}

function createRows(rowNum) {

    for (let i = 0; i < rowNum; i++) {
        
        let row = document.createElement("div");
        row.className = "rows";
        container.appendChild(row);
    }
}

function createColumns(colNum) {

    for (let i = 0; i < colNum; i++) {

        for (let j = 0; j < colNum; j++) {

            let col = document.createElement("div");
            col.className = "columns";
            rows[j].appendChild(col);
        }
    }
}

createGrid();

function hover() {
    for (let i = 0; i < columns.length; i++){

        let col = columns[i];
        col.addEventListener("mouseover", function() {
        col.style.backgroundColor = "red";
    });  
}}

function removeGrid(colNum) {

    for (let i = 0; i < colNum; i++) {

        for (let j = 0; j < colNum; j++) {

            while (rows[j].hasChildNodes()) {
                rows[j].removeChild(rows[j].firstChild);
            }
        }
    }

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}