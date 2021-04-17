console.log('app.js loaded');

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

  var cityInput = d3.select('#city');
  var cityInputVal = cityInput.property('value').toLowerCase();

  var stateInput = d3.select('#state');
  var stateInputVal = stateInput.property('value').toLowerCase();

  var countryInput = d3.select('#country');
  var countryInputVal = countryInput.property('value').toLowerCase();

  var shapeInput = d3.select('#shape');
  var shapeInputVal = shapeInput.property('value').toLowerCase();

  console.log(dateInputVal);
  console.log(cityInputVal);
  console.log(stateInputVal);
  console.log(countryInputVal);
  console.log(shapeInputVal);

  output = d3.select('tbody');

  // clear table
  output.html('');

  // create filters
  // if all filters are blank, show all data.
  if ((dateInputVal == '') && (cityInputVal == '') && (stateInputVal == '') && (countryInputVal == '') && (shapeInputVal == '')) {
    var filteredData = tableData
  }

  if (dateInputVal != '') {
    filteredData = tableData.filter(siting => siting.datetime === dateInputVal);
  }

  if (cityInputVal != '') {
    filteredData = filteredData.filter(siting => siting.city === cityInputVal);
  }

  if (stateInputVal != '') {
    filteredData = filteredData.filter(siting => siting.state === stateInputVal);
  }

  if (countryInputVal != '') {
    filteredData = filteredData.filter(siting => siting.country === countryInputVal);
  }

  if (shapeInputVal != '') {
    filteredData = filteredData.filter(siting => siting.shape === shapeInputVal);
  }

  // return final filtered data
  return filteredData.forEach((siting) => {
    var row = tbody.append('tr');
    Object.entries(siting).forEach(([key, value]) => {
      var cell = row.append('td');
      cell.text(value);
    });
  })
};

function runReset() {

  d3.event.preventDefault();

  // clear table
  output.html('');

  // load default data to table
  return tableData.forEach((siting) => {
    var row = tbody.append('tr');
    Object.entries(siting).forEach(([key, value]) => {
      var cell = row.append('td');
      cell.text(value);
    });
  });
};