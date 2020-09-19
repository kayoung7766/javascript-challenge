// from data.js
let tableData = data;

// creating table

let tbody = d3.select("tbody");

function mainTable(data) {

    tbody.html("");  // Clear your table if there is something in it
    data.forEach((i) => {
        let row = tbody.append("tr");
        Object.entries(i).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
}


let filters = {}; // empty variable for filters

function FiltersUpdate() {

    // create a variable that when it changes it hold the filter value and id
    let ElementSelected = d3.select(this).select("input");
    let ElementValue = ElementSelected.property("value");
    let IdFiltered = ElementSelected.attr("id")


    // Do a conditional statement to identify what filter is running and the value

    if (ElementValue) {
        filters[IdFiltered] = ElementValue;
    }

    else {
        delete filters[IdFiltered];
    }
    
    CreateFilterTable();

}

function CreateFilterTable() {
    let dataFiltered = tableData; // assigning a new variable to the metadata because it will be the filtered table

    // Loop using Object entries to keep track of the values of the filtered tabled

    Object.entries(filters).forEach(([key, value])=> {
        dataFiltered = dataFiltered.filter(row => row[key] == value);
    });

    // Rebuild table using the filtered data
    mainTable(dataFiltered);
 
}

// Listening event every time we change a filter

d3.selectAll(".filter").on("change", FiltersUpdate);



// reset button

mainTable(tableData);

let resetButton = d3.select("#reset-btn")

resetButton.on("click", function() {
    tbody.html("");
    mainTable(tableData);
    console.log("The table has been reset")
})
