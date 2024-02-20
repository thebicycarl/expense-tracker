const expTable = document.getElementById("expenseTable");
const expName = document.getElementById("nameInput");
const expDate = document.getElementById("dateInput");
const expAmount = document.getElementById("amountInput");
const addBtn = document.getElementById("addButton");

addBtn.addEventListener("click", addExpense);
expTable.addEventListener("click", deleteExpense);

function addExpense(event) {
    event.preventDefault()
    // Check to ensure each field has an input
    if (expName.value === '' || expDate.value === '' || expAmount.value === '') {
        alert('Please fill in all fields');
        return
    } else {

        // Reverse the date input so that it displays correctly
        const dateArray = expDate.value.split("");
        const dateReversed = [dateArray[8], dateArray[9], dateArray[7], dateArray[5], dateArray[6], dateArray[4], dateArray[0], dateArray[1], dateArray[2], dateArray[3]];
        const cleanDate = dateReversed.join("");

        // Create object to hold input data
        const inputObject = {
            name: expName.value,
            date: cleanDate,
            amount: expAmount.value
        };

        // Add data from object to new cells, within a new row
        const tableRow = document.createElement('tr');
        for (const property in inputObject) {
            tableRow.appendChild(document.createElement('td')).appendChild(document.createTextNode(`${inputObject[property]}`));
        }

        // Add a delete button to the end of the row
        const deleteBtn = tableRow.appendChild(document.createElement('td')).appendChild(document.createElement('button'));
        deleteBtn.innerHTML = "&#10005";
        deleteBtn.setAttribute('class', 'deleteBtn');

        // Add the new row and cells to the tablea
        expTable.append(tableRow);
    }

    // Clear the input fields ready for next input
    expName.value = "";
    expDate.value = "";
    expAmount.value = "";
}

// Delete an expense row when delete button clicked
function deleteExpense(e) {
    if (e.target.className === "deleteBtn") {
        e.target.parentElement.parentElement.remove();
    }
}


