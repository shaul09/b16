function showTranslation(cell) {
    const siblingCell = cell.nextElementSibling || cell.previousElementSibling;
    if (siblingCell.style.display === "none") {
        siblingCell.style.display = "table-cell";
    } else {
        siblingCell.style.display = "none";
    }
}

function toggleLanguage(language) {
    const cells = document.querySelectorAll(`.${language}`);
    cells.forEach(cell => {
        cell.style.display = cell.style.display === "none" ? "table-cell" : "none";
    });
}
