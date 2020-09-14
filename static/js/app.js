// from data.js
let tableData = data;

// creating table

var tbody = d3.select("tbody");

data.forEach((i) => {
  var row = tbody.append("tr");
  Object.entries(i).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
});
});

//creating filtering on Date Search

