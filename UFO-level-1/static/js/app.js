console.log('app.js loaded')

// assign data to variable
var tableData = data;

// assign filter button to variable
var filterButton = d3.select("#filter-btn");

// assign filter button to variable
var resetButton = d3.select("#reset-btn");

// assign input field to variable
var filter = d3.selectAll(".filter");

// assign html table body to variable
var tbody = d3.select('tbody');

// verify data load
console.log(tableData);

// load default data to table
tableData.forEach((siting) => {
    var row = tbody.append('tr');
    Object.entries(siting).forEach(([key, value]) => {
      var cell = row.append('td');
      cell.text(value);
    });
  });

// make event handlers  
filterButton.on('click', runFilter);
resetButton.on('click', runReset);
filter.on('change', runFilter);

function runFilter() {

  d3.event.preventDefault();

  var dateInput = d3.select('#datetime');

  var dateInputVal = dateInput.property('value').replaceAll('-', '/');

  console.log(dateInputVal);
  console.log(tableData);

  // filter data and assign to variable
  var filteredData = tableData.filter(siting => siting.datetime === dateInputVal);

  console.log(filteredData);

  output = d3.select('tbody')

  // clear table
  output.html('');

  // if date filter is blank, reset the table.
  if (dateInputVal == '') {
    return tableData.forEach((siting) => {
      var row = tbody.append('tr');
      Object.entries(siting).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
      });
    });
  }

  // else, load filtered data to table
  else {
  return filteredData.forEach((siting) => {
      var row = output.append('tr');
      Object.entries(siting).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
      });
    });
  };
};

// create function to reset table with button.
function runReset() {

  // clear table
  output.html('');

  // load default data to table
  tableData.forEach((siting) => {
    var row = tbody.append('tr');
    Object.entries(siting).forEach(([key, value]) => {
      var cell = row.append('td');
      cell.text(value);
    });
  });
};