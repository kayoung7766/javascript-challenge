// from data.js
let tableData = data;

// creating table

let tbody = d3.select("tbody");

data.forEach((i) => {
    let row = tbody.append("tr");
    Object.entries(i).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
    });
});

//creating filtering on Date Search

// Assign the data from `data.js` to a descriptive variable
let ufo = data;

// Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select(".filters");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // TABLE TO BLANK OUT
    tbody.html("");

    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#datetime");

    // Get the value property of the input element
    let inputValue = inputElement.property("value");

    console.log(inputValue);

    let filteredData = ufo.filter(ufo => ufo.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach((i) => {
        let row = tbody.append("tr");
        Object.entries(i).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
};