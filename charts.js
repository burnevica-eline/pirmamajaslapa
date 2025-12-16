function fetchPopulationData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            var rows = data.split('\n');
            var years = [];
            var urban = [];
            var rural = [];

            for (var i = 1; i < rows.length; i++) {
                var cols = rows[i].split(',');
                if (cols.length >= 3) {
                    years.push(cols[0]);
                    urban.push(cols[1]);
                    rural.push(cols[2]);
                    
                }
            }

            makeBarChart(years, urban, rural);
        }
    };
    xhttp.open("GET", "IRD070_20251216-160040.csv", true);
    xhttp.send();
}

function fetchSalaryData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            var rows = data.split('\n');
            var dates = [];
            var wages = [];

            for (var i = 2; i < rows.length; i++) {
                var cols = rows[i].split(',');
                if (cols.length >= 2) {
                    dates.push(cols[0]);
                    wages.push(parseFloat(cols[1]));
                }
            }

            makeSalaryChart(dates,wages);
        }
    };
    xhttp.open("GET", "DSM010_20251216-174919.csv", true);
    xhttp.send();
}

function makeBarChart(years, urban, rural) {
    var ctx1 = document.getElementById('chart1').getContext('2d');
    var chart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [{
                label: 'Iedzīvotāji pilsētās',
                data: urban,
                backgroundColor: '#72ccaaff',
                 },

                 {
                label: 'Iedzīvotāji lauku teritorijā',
                data: rural,
                backgroundColor: '#7388ceff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Iedzīvotāju skaits pilsētās un lauku teritorijās' }
            }
        }
    });
}

function makeSalaryChart(dates, wages) {
    var ctx2 = document.getElementById('chart2').getContext('2d');
    var chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Minimālās algas izmaiņas Latvijā (€)',
                data: wages,
                borderColor: '#fde825ff',
                backgroundColor: 'rgba(174, 206, 30, 0.51)',
                tension: 0.1,
                
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Minimālās algas izmaiņas' }
            },
            scales: {
                x: { title: { display: true, text: 'Gads' } },
                y: { title: { display: true, text: 'Alga (€)' } }
            }
        }
    });
}

window.onload = function() {
    fetchPopulationData();
    fetchSalaryData();
};