let container = document.querySelector(".container");

const rows = 16;
const cols = 16;

for (let i = 0; i < rows; i++) {
    // Create a row div
    let row = document.createElement("div");
    row.classList.add("row");

    // Loop through for each row, and add the amount of cols required
    for (let i = 0; i < cols; i++) {
        // Loop through each col and add the div as a child of the row div
        let col = document.createElement("div");
        col.classList.add("col");
        row.appendChild(col);
    }
    container.appendChild(row);
}