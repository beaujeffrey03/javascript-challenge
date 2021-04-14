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

  // filter data and assign to variable
  // var filteredData = tableData.filter(siting => (siting.datetime === dateInputVal) || (siting.city === cityInputVal) || (siting.state === stateInputVal) || (siting.country === countryInputVal) || (siting.shape === shapeInputVal));

  // console.log(filteredData);

  output = d3.select('tbody')

  // clear table
  output.html('');

  // IN BETWEEEN HERE

  if (dateInputVal != '') {
    filteredData = tableData.filter(siting => siting.datetime === dateInputVal);
    // return filteredData.forEach((siting) => {
    //   var row = tbody.append('tr');
    //   Object.entries(siting).forEach(([key, value]) => {
    //     var cell = row.append('td');
    //     cell.text(value);
    //   });
    // });
  }

  if (cityInputVal != '') {
    filteredData = tableData.filter(siting => siting.city === cityInputVal);
    // return filteredData.forEach((siting) => {
    //   var row = tbody.append('tr');
    //   Object.entries(siting).forEach(([key, value]) => {
    //     var cell = row.append('td');
    //     cell.text(value);
    //   });
    // });
  }

  // IN BETWEEN HERE

  // if all filters are blank, show all data.
  if ((dateInputVal == '') && (cityInputVal == '') && (stateInputVal == '') && (countryInputVal == '') && (shapeInputVal == '')) {
    return tableData.forEach((siting) => {
      var row = tbody.append('tr');
      Object.entries(siting).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
      });
    });
  }

  else {
  // load filtered data to table
  return filteredData.forEach((siting) => {
      var row = output.append('tr');
      Object.entries(siting).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
      });
    });
  };
};

function runReset() {
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