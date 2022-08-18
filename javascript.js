const container = document.querySelector("#container");
let rows = document.getElementsByClassName("rows");
let columns = document.getElementsByClassName("columns");

function createGrid() {
    createRows(16);
    createColumns(16);
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


for (let i = 0; i < columns.length; i++){

    let col = columns[i];
    col.addEventListener("mouseover", function() {
        col.style.backgroundColor = "red";
    });
   
}
