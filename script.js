document.getElementById('trade-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const asset = document.getElementById('asset').value;
    const entryPrice = document.getElementById('entry-price').value;
    const exitPrice = document.getElementById('exit-price').value;
    const positionSize = document.getElementById('position-size').value;
    const strategy = document.getElementById('strategy').value;
    const notes = document.getElementById('notes').value;

    const tableBody = document.getElementById('trades-table').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    newRow.insertCell(0).textContent = date;
    newRow.insertCell(1).textContent = asset;
    newRow.insertCell(2).textContent = entryPrice;
    newRow.insertCell(3).textContent = exitPrice;
    newRow.insertCell(4).textContent = positionSize;
    newRow.insertCell(5).textContent = strategy;
    newRow.insertCell(6).textContent = notes;

    // Clear the form
    document.getElementById('trade-form').reset();
});
