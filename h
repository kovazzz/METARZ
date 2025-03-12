function checkAnswers() {
    let correct = 0;
    let cells = document.querySelectorAll(".grid-cell");
    cells.forEach(cell => {
        if (cell.value.toUpperCase() === cell.dataset.answer) {
            cell.style.backgroundColor = "lightgreen";
            correct++;
        } else {
            cell.style.backgroundColor = "lightcoral";
        }
    });
    document.getElementById("result").innerText = `You got ${correct} correct!`;
}
