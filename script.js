// DOM References
let container = document.querySelector(".container");
let grid = document.querySelector("#grid");
let tools = document.querySelectorAll("div.toolbar > button");
let newGrid = document.querySelector(".gridSize");

// Config vars
let gridSize = 16
let selectedColor = "black";

let isMouseDown = false;
document.addEventListener("mousedown", () => {
    isMouseDown = true;
})
document.addEventListener("mouseup", () => {
    isMouseDown = false;
})

// Btn click handlers
tools.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (btn.id == "erase") {
            selectedColor = "white";
        } else if (btn.id == "fill") {
            // Set all boxes to the current selectedColor
            let boxes = document.querySelectorAll(".box");
            boxes.forEach((bx) => {
                bx.classList.add("selected");
                bx.style.backgroundColor = selectedColor;
            });
        } else {
            console.log(btn.id)
            selectedColor = btn.id;
        }
    })
});

newGrid.addEventListener("click", () => {
    const resolution = +prompt("How many columns would you like? (max 100)", "16");
    if (resolution < 1 || resolution > 100 || !Number.isInteger(resolution)) {
        alert("Wrong input, please use a number between 1 and 100");
        return;
    };
    gridSize = resolution;
    createGrid(resolution);
})

function createGrid(columns) {
    grid.replaceChildren();

    const gridSize = 750;
    const rows = columns;
    const boxSize = gridSize / columns;

    for (let i = 0; i < columns * rows; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundColor = "white";
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;

        box.addEventListener("mouseover", () => {
            if (isMouseDown) {
                if (selectedColor == "random") {
                    var randomColor = Math.floor(Math.random()*16777215).toString(16);
                    box.style.backgroundColor = "#" + randomColor;
                } else {
                    box.style.backgroundColor = selectedColor;
                }
            }
        })

        box.addEventListener("mousedown", (event) => {
            if (selectedColor == "random") {
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                event.target.style.backgroundColor = "#" + randomColor;
            } else {
                event.target.style.backgroundColor = selectedColor;
            }

            event.target.classList.add("selected")
        })

        grid.appendChild(box);
    }
}

createGrid(gridSize);