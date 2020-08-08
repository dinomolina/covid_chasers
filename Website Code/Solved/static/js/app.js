// Plot the default route once the page loads
var defaultURL = "/cases_percapita";
d3.json(defaultURL).then(function(data) {

  var state = data.map(d => d.state);
  var cases = data.map(d => d.cases_per_capita);

  var trace = [{
    'x': state,
    'y': cases,
    'type': 'bar',
    marker: {
      color: 'rgb(0, 0, 0)'}
  }];
  
  var layout = {
  title: 'Cases & Deaths per 100,000',
  autosize: false,
  width: 1000,
  height: 700
};

  Plotly.newPlot("bar", trace, layout);
});


// Update data whenever the dropdown selection changes
function updateData(route) {
  console.log(route);
  d3.json(`/${route}`).then(function(data) {

    var x = [];
    var y = [];

    switch(route){
      case 'cases_percapita':
        x = data.map(d => d.state);
        y = data.map(d => d.cases_per_capita);
        break;
      case 'deaths_percapita':
        x = data.map(d => d.state);
        y = data.map(d => d.deaths_per_capita);
        break;
    };
  
    Plotly.restyle("bar", "x", [x]);
    Plotly.restyle("bar", "y", [y]);
  });
}

var defaultURL2 = "/Alabama";
d3.json(defaultURL2).then(function(data) {

  var date = data.map(d => new Date(d.date));
  var cases = data.map(d => d.cases);

  var trace = [{
    'x': date,
    'y': cases,
    'type': 'Scatter',
    marker: {
      color: 'rgb(0, 0, 0)'}
  }];
  
  var layout = {
  title: 'Cases Per Day',
  autosize: false,
  width: 1000,
  height: 700
}

  Plotly.plot("line", trace, layout);
});

// Update data whenever the dropdown selection changes
function updateData2(route2) {
  console.log(route2);
  d3.json(`/${route2}`).then(function(data) {

    var x = [];
    var y = [];

    switch(route2){
      case 'Alabama':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Alaska':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Arizona':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Arkansas':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'California':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Colorado':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Connecticut':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Delaware':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'District':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Florida':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Georgia':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Guam':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Hawaii':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Idaho':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Illinois':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Indiana':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Iowa':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Kansas':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Kentucky':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Louisiana':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Maine':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Maryland':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Massachusetts':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Michigan':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Minnesota':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Mississippi':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Missouri':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Nebraska':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Nevada':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'New_Hampshire':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'New_Jersey':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'New_Mexico':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'New_York':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'North_Carolina':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'North_Dakota':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Northern_Mariana_Islands':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Ohio':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Oklahoma':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Oregon':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Pennsylvania':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Puerto_Rico':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Rhode_Island':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'South_Carolina':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'South_Dakota':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Tennessee':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Texas':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Utah':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Vermont':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Virgin_Islands':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Virginia':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Washington':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'West_Virginia':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Wisconsin':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
      case 'Wyoming':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.cases);
        break;
    };
  
    Plotly.restyle("line", "x", [x]);
    Plotly.restyle("line", "y", [y]);
  });
}

var defaultURL3 = "/Alabama";
d3.json(defaultURL3).then(function(data) {

  var date = data.map(d => new Date(d.date));
  var deaths = data.map(d => d.deaths);

  var trace = [{
    'x': date,
    'y': deaths,
    'type': 'Scatter',
    marker: {
      color: 'rgb(0, 0, 0)'}
  }];
  
  var layout = {
  title: 'Deaths per Day',
  autosize: false,
  width: 1000,
  height: 700
};

  Plotly.plot("line2", trace, layout);
});

// Update data whenever the dropdown selection changes
function updateData3(route3) {
  console.log(route3);
  d3.json(`/${route3}`).then(function(data) {

    var x = [];
    var y = [];

    switch(route3){
      case 'Alabama':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Alaska':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Arizona':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Arkansas':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'California':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Colorado':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Connecticut':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Delaware':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'District':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Florida':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Georgia':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Guam':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Hawaii':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Idaho':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Illinois':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Indiana':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Iowa':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Kansas':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Kentucky':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Louisiana':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Maine':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Maryland':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Massachusetts':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Michigan':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Minnesota':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Mississippi':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Missouri':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Nebraska':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Nevada':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'New_Hampshire':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'New_Jersey':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'New_Mexico':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'New_York':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'North_Carolina':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'North_Dakota':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Northern_Mariana_Islands':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Ohio':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Oklahoma':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Oregon':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Pennsylvania':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Puerto_Rico':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Rhode_Island':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'South_Carolina':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'South_Dakota':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Tennessee':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Texas':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Utah':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Vermont':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Virgin_Islands':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Virginia':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Washington':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'West_Virginia':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Wisconsin':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
      case 'Wyoming':
        x = data.map(d => new Date(d.date));
        y = data.map(d => d.deaths);
        break;
    };
  
    Plotly.restyle("line2", "x", [x]);
    Plotly.restyle("line2", "y", [y]);
  });
}