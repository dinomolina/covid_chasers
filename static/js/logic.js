function addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000);
}

function formatDate(timestamp){
    var x=new Date(timestamp);
    
    var yyyy = x.getFullYear();
    var mm = ("0" + (x.getMonth() + 1)).slice(-2); 
    var dd = ("0" + x.getDate()).slice(-2); 

    return `${yyyy}-${mm}-${dd}`;
 }
console.log(formatDate(new Date()));

var newDate = addDays(new Date(), 5);

Plotly.d3.csv("https://raw.githubusercontent.com/dinomolina/DinoM_GW_HW/master/mapdata.csv", function (err, rows) {

    function filter_and_unpack(rows, key, date) {
        return rows.filter(row => row['date'] == date).map(row => row[key])
    }

    var frames = []
    var slider_steps = []

    var n = 18;
    var num = "2020-04-01";
    num = new Date(num) 
    date = formatDate(num)

    for (var i = 0; i <= n; i++) {
        var z = filter_and_unpack(rows, 'cases_percapita', date)
        var locations = filter_and_unpack(rows, 'postal_code', date)
        frames[i] = { data: [{ z: z, locations: locations, text: locations }], name: date }
        slider_steps.push({
            label: date.toString(),
            method: "animate",
            args: [[date], {
                mode: "immediate",
                transition: { duration: 300 },
                frame: { duration: 300 }
            }
            ]
        })
        num = addDays(num, 7);
        console.log(num)

        date = formatDate(num)
    }

    var data = [{
        type: 'choropleth',
        locationmode: 'USA-states',
        locations: frames[0].data[0].locations,
        z: frames[0].data[0].z,
        text: frames[0].data[0].locations,
        zauto: false,
        zmin: 0,
        zmax: 2800

    }];
    var layout = {
        title: 'Covid Cases Per 100,000',
        geo: {
            scope: 'usa',
            countrycolor: 'rgb(255, 255, 255)',
            showland: true,
            landcolor: 'rgb(85, 214, 170)',
            showlakes: true,
            lakecolor: 'rgb(255, 255, 255)',
            subunitcolor: 'rgb(255, 255, 255)',
            lonaxis: {},
            lataxis: {},
        },
        updatemenus: [{
            x: 0.1,
            y: 0,
            yanchor: "top",
            xanchor: "right",
            showactive: false,
            direction: "left",
            type: "buttons",
            pad: { "t": 87, "r": 10 },
            buttons: [{
                method: "animate",
                args: [null, {
                    fromcurrent: true,
                    transition: {
                        duration: 200,
                    },
                    frame: {
                        duration: 500
                    }
                }],
                label: "Play"
            }, {
                method: "animate",
                args: [
                    [null],
                    {
                        mode: "immediate",
                        transition: {
                            duration: 0
                        },
                        frame: {
                            duration: 0
                        }
                    }
                ],
                label: "Pause"
            }]
        }],
        sliders: [{
            active: 0,
            steps: slider_steps,
            x: 0.1,
            len: 0.9,
            xanchor: "left",
            y: 0,
            yanchor: "top",
            pad: { t: 50, b: 10 },
            currentvalue: {
                visible: true,
                prefix: "Date:",
                xanchor: "right",
                font: {
                    size: 20,
                    color: "#55d6aa"
                }
            },
            transition: {
                duration: 300,
                easing: "cubic-in-out"
            }
        }]
    };

    Plotly.newPlot('animated-map', data, layout).then(function () {
        Plotly.addFrames('animated-map', frames);
    });
})