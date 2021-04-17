console.log('app.js loaded');

// assign data to variable
var tableData = data;

// assign filter button to variable
var filterButton = d3.select("#filter-btn");

// assign input field to variable
var filter = d3.selectAll(".filter");

// assign html table body to variable
var tbody = d3.select('tbody');

// load default data to table
tableData.forEach((sighting) => {
    var row = tbody.append('tr');
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append('td');
      cell.text(value);
    });
  });

// make event handlers  
filterButton.on('click', runFilter);
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

  filteredData = tableData

  // create filters
  // if all filters are blank, show all data.
  if ((dateInputVal == '') && (cityInputVal == '') && (stateInputVal == '') && (countryInputVal == '') && (shapeInputVal == '')) {
    var filteredData = tableData
  }

  if (dateInputVal != '') {
    filteredData = tableData.filter(sighting => sighting.datetime === dateInputVal);
  }

  if (cityInputVal != '') {
    filteredData = filteredData.filter(sighting => sighting.city === cityInputVal);
  }

  if (stateInputVal != '') {
    filteredData = filteredData.filter(sighting => sighting.state === stateInputVal);
  }

  if (countryInputVal != '') {
    filteredData = filteredData.filter(sighting => sighting.country === countryInputVal);
  }

  if (shapeInputVal != '') {
    filteredData = filteredData.filter(sighting => sighting.shape === shapeInputVal);
  }

  // return final filtered data
  return filteredData.forEach((sighting) => {
    var row = tbody.append('tr');
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append('td');
      cell.text(value);
    });
  })
};