 // Tile layers
 var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});
var streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});
var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});
// Map object
var myMap = L.map("map", {
  center: [39.8283, -98.5795],
  zoom: 4,
  layers: [dark]
});
  // Load in geojson data
  var geoData = "static/data/county_coords_with_covid_cases.json";
  var zoomThreshold = 4;
  // Grab data with d3
  d3.json(geoData, function(data) {
    counties = L.choropleth(data, {
      // Cases/Deaths
      valueProperty: "cases_per_capita",
      minzoom: zoomThreshold,
      // Set color scale
      scale: ["#ffe0b3", "#990000"],
      // Number of breaks in step range
      steps: 10,
      // q for quartile
      mode: "q",
      style: {
        // Border color
        color: "gray",
        weight: 1,
        fillOpacity: 0.8
      },
      onEachFeature: (function(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.NAME + " County, " + feature.properties.state + "</h3>" + "<h4>Cases per 100k: <br>" + feature.properties.cases_per_capita + "<br> Deaths per 100k: <br>"
        + feature.properties.deaths_per_capita + "</h4>");
        layer.on('mouseover', function (e) {
          this.openPopup();
        });
      })
    });
    counties.addTo(myMap);
        var baseMaps = {
          Light: light,
          Dark: dark,
          Streets: streets
        };
        // Set up the legend
        var legend = L.control({ position: "bottomright" });
        legend.onAdd = function() {
          var div = L.DomUtil.create("div", "info legend");
          var limits = counties.options.limits;
          var colors = counties.options.colors;
          var labels = [];
          // Add min & max
          var legendInfo = 
            "<div class=\"labels\">"
            "</div>";
          div.innerHTML = legendInfo;
          limits.forEach(function(limit, index) {
            labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
          });
          div.innerHTML += "<ul>" + labels.join("") + "</ul>";
          return div;
        };
        // Adding legend to the map
        legend.addTo(myMap);
        /* CREATING THE STATE LAYER HERE */
        var geoData1 = "static/data/state_coords_with_covid_cases.json";
        d3.json(geoData1, function(data) {
          states = L.choropleth(data, {
            // Cases/Deaths
            valueProperty: "cases_per_capita",
            // Set color scale
            scale: ["#ffe0b3", "#990000"],
            // Number of breaks in step range
            steps: 10,
            maxzoom: zoomThreshold,
            // q for quartile, e for equidistant, k for k-means
            mode: "q",
            style: {
              // Border color
              color: "gray",
              weight: 1,
              fillOpacity: 0.8
            },
            onEachFeature: (function(feature, layer) {
              layer.bindPopup("<h3>" + feature.properties.NAME + "</h3>" + "<h4>Cases per 100k: <br>" + feature.properties.cases_per_capita + "<br> Deaths per 100k: <br>"
              + feature.properties.deaths_per_capita + "</h4>");
              layer.on('mouseover', function (e) {
                this.openPopup();
              });
            })
          });
          var overlayMaps = {
            Counties: counties,
            States: states
          }
          L.control.layers(baseMaps).addTo(myMap);
          L.control.layers(overlayMaps).addTo(myMap);
            //Binding a pop-up to each layer
          });
    });
  