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
