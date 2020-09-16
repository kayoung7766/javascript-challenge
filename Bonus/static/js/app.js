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

    //NEED TO GET TABLE TO BLANK OUT
    tbody.html("");

    // Select the date element and get the raw HTML node
    let inputElement1 = d3.select("#datetime");

    // Get the value property of the date element
    let inputValue1 = inputElement1.property("value");

    console.log(inputValue1);

    // Select the city element and get the raw HTML node
    let inputElement2 = d3.select("#city");

    // Get the value property of the city element
    let inputValue2 = inputElement2.property("value");

    console.log(inputValue2);

    // Select the state element and get the raw HTML node
    let inputElement3 = d3.select("#state");

    // Get the value property of the state element
    let inputValue3 = inputElement3.property("value");

    console.log(inputValue3);

     // Select the state element and get the raw HTML node
     let inputElement4 = d3.select("#country");

     // Get the value property of the state element
     let inputValue4 = inputElement4.property("value");
 
     console.log(inputValue4);



    let filteredData = ufo.filter(ufo => ufo.datetime === inputValue1 
        && ufo.city === inputValue2
        && ufo.state === inputValue3
        && ufo.country === inputValue4);

    console.log(filteredData);

    filteredData.forEach((i) => {
        let row = tbody.append("tr");
        Object.entries(i).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
};