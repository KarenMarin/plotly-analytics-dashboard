const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("nav-toggle");
});

const config = { responsive: true };

const barChartTrace1 = {
    x: ["Jan", "Fev", "Mar", "Abr"],
    y: [3576, 3815, 4692, 6854],
    name: "Ganhos Mensais",
    type: "bar",
    marker: { color: "#ea335d" },
};

const barChartTrace2 = {
    x: ["Jan", "Fev", "Mar", "Abr"],
    y: [2500, 2700, 3200, 4100],
    name: "Gastos Mensais",
    type: "bar",
    marker: { color: "#ea335d", opacity: 0.6 },
};

const barChartData = [barChartTrace1, barChartTrace2];
const layout = {
    barmode: "stack",
    paper_bgcolor: '#172042',
    plot_bgcolor: '#172042',
    showlegend: false,
    margin: { l: 30, r: 30, b: 30, t: 30, pad: 1, },
    font: { color: "#6b6f8a", },
};

Plotly.newPlot("barChart", barChartData, layout, config);

d3.csv(
    "https://raw.githubusercontent.com/ploty/datasets/master/finance-charts-apple.csv",
    function (err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        var trace1 = {
            type: "scatter",
            mode: "lines",
            name: "Alta",
            x: ["Jan", "Fev", "Mar", "Abr", "Mai"],
            y: [12, 18, 22, 19, 24],
            line: { color: "#ea335d" },
        };

        var trace2 = {
            type: "scatter",
            mode: "lines",
            name: "Baixa",
            x: ["Jan", "Fev", "Mar", "Abr", "Mai"],
            y: [8, 12, 14, 13, 16],
            line: { color: "#03dcee" },
        };

        Plotly.newPlot("scientific-chart", [trace1, trace2], {
            title: "Gráfico Manual",
        });


        var data = [trace1, trace2];
        const layout = {
            paper_bgcolor: "#172042",
            plot_bgcolor: "#172042",
            showlegend: false,
            margin: { l: 30, r: 30, b: 30, t: 30, pad: 1, },
            font: { color: "#6b6f8a" },
            xaxis: {
                range: ["17-03-2020", "17-03-2021"],
                type: "date",
            },
            yaxis: {
                autorange: true,
                type: "linear",
            },
        };
        Plotly.newPlot("scientificChart", data, layout, config);
    }
);

const pieChartData = [
    {
        values: [22, 31, 18],
        labels: ["Março", "Abril", "Janeiro"],
        type: "pie",
    }
];

const pieChartLayout = {
    paper_bgcolor: "#172042",
    plot_bgcolor: "#172042",
    piecolorway: ["#ea335d", "#03dcee", "#178add"],
    showlegend: false,
    margin: { l: 30, r: 30, b: 30, t: 30, pad: 1, },
    height: 300,
    width: 300,
};

Plotly.newPlot("pieChart", pieChartData, pieChartLayout);

const donutChartData = [
    {
        values: [75, 92, 50],
        labels: ["Clientes", "Conversão", "Reservas"],
        hole: 0.4,
        type: "pie",
    },
];

Plotly.newPlot("donutChart", donutChartData, pieChartLayout);

var carpetChartData = {
    type: "carpet",
    a: [4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 6, 6, 6],
    b: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
    c: [2, 3, 4, 3, 4, 5, 5, 6, 7, 7.5, 8, 9],
    aaxis: {
        tickprefix: "a = ",
        ticksuffix: "m",
        smoothing: 1,
        minorgridcount: 9,
        minorgridcolor: "#ea335d",
        gridcolor: "#ea335d",
        color: "#03dcee",
    },
    baxis: {
        tickprefix: "b = ",
        ticksuffix: "Pa",
        smoothing: 1,
        minorgridcount: 9,
        minorgridcolor: "#ea335d",
        gridcolor: "#ea335d",
        color: "#03dcee",
    }
};


const carpetChartLayout = {
    paper_bgcolor: "#172042",
    plot_bgcolor: "#172042",
    showlegend: false,
    margin: {l: 10, r: 10, b: 10, t: 10, pad: 1,},
    font: {color: "#6b6f8a"},
    height: 300,
    width: 300,
};

Plotly.newPlot("carpetChart", carpetChartData, carpetChartLayout);