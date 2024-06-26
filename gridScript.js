
let colorSelected; 

//Adds a row
function addR() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");

    //if grid is empty need to create row
    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function(){
            this.style.backgroundColor = colorSelected;
        };

        row.appendChild(col);
        grid.appendChild(row);
    //otherwise append a new row with the current
    //amount of columns
    } else {
        let numCols = rows[0].childElementCount;
        let row = document.createElement("tr");
        for (let i = 0; i < numCols; i++){
            let col = document.createElement("td");
            col.onclick = function(){
              this.style.backgroundColor = colorSelected;
            };
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}
//Adds a column
function addC() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    
    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);

    } else {
        for (let i = 0; i < rows.length; i++){
            let col = document.createElement("td");
            col.onclick = function(){
              this.style.backgroundColor = colorSelected;
            };
            rows[i].appendChild(col);
        }
    } 
}

//Removes a row
function removeR() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    if(rows.length === 0){
        alert("There is nothing to delete");
        return;
    }

    let lastRow = grid.lastElementChild;
    grid.removeChild(lastRow);
    
}
//Remove a column
function removeC() {
    let rows = document.getElementsByTagName("tr");
    let grid = document.getElementById("grid");

    if(rows.length === 0){
        alert("There is nothing to delete");
        return;
    }

    if(rows[0].childElementCount === 1) {
        grid.innerHTML = "";
        return;
    } 

    for (let i = 0; i < rows.length; i++){
        let col = rows[i].lastElementChild; 
        rows[i].removeChild(col);
    }

}
//sets global variable for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
}

function fill(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = colorSelected;
    }
}

function clearAll(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = "";
    }
}

function fillU(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++){
        if (cells[i].style.backgroundColor === "") {
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}
=======
let selectedColor;

function addRow() {
    let grid = document.getElementById("grid");
    let newRow = grid.insertRow();
    let cells = grid.rows[0]?.cells.length || 1;

    for (let i = 0; i < cells; i++) {
        let newCell = newRow.insertCell();
        newCell.onclick = function() {
            this.style.backgroundColor = selectedColor;
        };
    }
}

function addColumn() {
    let grid = document.getElementById("grid");
    let rows = grid.rows;

    for (let row of rows) {
        let newCell = row.insertCell();
        newCell.onclick = function() {
            this.style.backgroundColor = selectedColor;
        };
    }

    if (rows.length === 0) {
        addRow();
    }
}

function removeRow() {
    let grid = document.getElementById("grid");
    if (grid.rows.length > 0) {
        grid.deleteRow(-1);
    } else {
        alert("No rows to delete");
    }
}

function removeColumn() {
    let grid = document.getElementById("grid");
    let rows = grid.rows;

    if (rows.length > 0 && rows[0].cells.length > 0) {
        for (let row of rows) {
            row.deleteCell(-1);
        }
    } else {
        alert("No columns to delete");
    }
}

function setColor() {
    selectedColor = document.getElementById("colorSelector").value;
}

function fillAll() {
    let cells = document.getElementsByTagName("td");

    for (let cell of cells) {
        cell.style.backgroundColor = selectedColor;
    }
}

function clearGrid() {
    let cells = document.getElementsByTagName("td");

    for (let cell of cells) {
        cell.style.backgroundColor = "";
    }
}

function fillUncolored() {
    let cells = document.getElementsByTagName("td");

    for (let cell of cells) {
        if (cell.style.backgroundColor === "") {
            cell.style.backgroundColor = selectedColor;
        }
    }
}

