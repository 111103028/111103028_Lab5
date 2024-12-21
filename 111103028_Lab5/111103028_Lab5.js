let rowIndex = 1; 

document.getElementById('submit-grades').addEventListener('click', function () {
    const mathGrade = parseFloat(document.getElementById('math-grade').value);
    const englishGrade = parseFloat(document.getElementById('english-grade').value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert('Please enter valid numbers for both grades.');
        return;
    }

    const rowAverage = ((mathGrade + englishGrade) / 2).toFixed(2);

    const tableBody = document.querySelector('#grades-table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${rowIndex}</td><td>${mathGrade}</td><td>${englishGrade}</td><td>${rowAverage}</td>`;
    tableBody.appendChild(newRow);

    rowIndex++; 

    updateAverages();
});

function updateAverages() {
    const rows = document.querySelectorAll('#grades-table tbody tr');
    let mathSum = 0;
    let englishSum = 0;
    let overallSum = 0;

    rows.forEach(row => {
        const mathGrade = parseFloat(row.cells[1].textContent); 
        const englishGrade = parseFloat(row.cells[2].textContent); 
        const rowAverage = parseFloat(row.cells[3].textContent); 

        mathSum += mathGrade;
        englishSum += englishGrade;
        overallSum += rowAverage;
    });

    const rowCount = rows.length;
    const mathAverage = (mathSum / rowCount).toFixed(2);
    const englishAverage = (englishSum / rowCount).toFixed(2);
    const overallAverage = (overallSum / rowCount).toFixed(2);

    document.getElementById('math-average').textContent = mathAverage;
    document.getElementById('english-average').textContent = englishAverage;
    document.getElementById('overall-average').textContent = overallAverage;
}
