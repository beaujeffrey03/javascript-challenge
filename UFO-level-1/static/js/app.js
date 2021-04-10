console.log('app.js loaded')

// assign data to variable
var tableData = data;

// assign button to variable
var button = d3.select("#filter-btn");

// assign input field to variable
var filter = d3.select("#filters");

// assign html table body to variable
var tbody = d3.select('tbody');

// verify data load
console.log(tableData);

// load data to table
tableData.forEach((siting) => {
    var row = tbody.append('tr');
    Object.entries(siting).forEach(([key, value]) => {
      var cell = row.append('td');
      cell.text(value);
    });
  });

// make event handlers
button.on('click', runFilter);
filter.on('submit', runFilter);

function runFilter() {

    d3.event.preventDefault();

    var dateInput = d3.select('#datetime');

    var dateInputVal = dateInput.property('value');

    console.log(dateInputVal);
    console.log(tableData);

    // filter data and assign to variable
    var filteredData = tableData.filter(siting => siting.datetime === dateInputVal);

    console.log(filteredData);

    output = d3.select('tbody')

    // clear table
    output.html('');

    // load filtered data to table
    return filteredData.forEach((siting) => {
        var row = output.append('tr');
        Object.entries(siting).forEach(([key, value]) => {
          var cell = row.append('td');
          cell.text(value);
        });
      });

};