var clearCanvas2 = function () {
    // this section clears all instances of previous charts
    $('#myChart').remove(); // this is my <canvas> element
    $('#canvas2').append('<canvas id="myChart" width="800" height="450"></canvas>');
};
/////// END clearCanvas ///////////////////////////////////////////////////////////


var validate2 = function () {

    var y = parseInt($("select[name='yearSelectionZ']").val());
    var y2 = parseInt($("select[name='yearSelection2Z']").val());
    var s1 = $("select[name='stateSelection1Z']").val();
    var s2 = $("select[name='stateSelection2Z']").val();

    if (y > y2) {
        alert("You must enter a Start Year less than or equal to the Stop Year!");
    }
    else {
        if (s1 === s2) {
            alert("You must pick two different states!");
        } else {
            getData2();
        }
    }
};

var getData2 = function (event) {

    clearCanvas2(); // this call clears any previous canvas objects

    // 1999 to 2015

    var s1 = $("select[name='stateSelection1Z']").val();
    var s2 = $("select[name='stateSelection2Z']").val();
    var y = $("select[name='yearSelectionZ']").val();
    var y2 = $("select[name='yearSelection2Z']").val();
    var d = $("select[name='deathSelectionZ']").val();

    var rows = new Array();
    $.ajax({
        url: "getBarInfo.php",
        data: {year: y, year2: y2, state1: s1, deathType: d, state2: s2},
        dataType: "json",
        type: "POST",
        success: function (result) { // result

            rows = result;

            var startYear = rows[0]['year'];
            var stopYear = rows[rows.length - 1]['year'];
            var state1 = rows[0]['state'];
            var state2 = rows[rows.length / 2]['state'];
            var cause = rows[0]['cause_name'];
            var counts1 = [];
            var counts2 = [];
            var years = [];
            for (var i = 0; i < rows.length / 2; i++) {
                years[i] = rows[i]['year'];
                counts1[i] = rows[i]['aadr'];
            }
            for (var i = (rows.length / 2); i < rows.length; i++) {
                counts2[i - rows.length / 2] = rows[i]['aadr'];
            }
            barGraph(startYear, stopYear, state1, state2, cause, years, counts1, counts2);
        },
        error: function (xhr, status, errorThrown) {
            alert("error")
            //Here the status code can be retrieved like;
            xhr.status;

            //The message added to Response object in Controller can be retrieved as following.
            xhr.responseText;
        }
    });

    event.preventDefault();

}; // end of getData
///////////////////////////////////////////////////////////////////////////////////////////////////////

var barGraph = function (startYear, stopYear, state1, state2, cause, years, counts1, counts2) {


    Chart.defaults.global.defaultFontSize = 18;
    // GRAPH SECTION:
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [{
                label: (state1 + " " + cause + " Yearly Age-Adjusted Death Rates from (" + startYear + " to " + stopYear + ")"),
                data: counts1,
                backgroundColor: "#3e95cd"
            }, {
                label: (state2 + " " + cause + " Yearly Age-Adjusted Death Rates from (" + startYear + " to " + stopYear + ")"),
                data: counts2,
                backgroundColor: "#cd703e"
            }]
        }, options: {
            responsive: true,
            maintainAspectRatio: false,
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    ////////// END OF CHART /////////////
    slidePageDown2();

};
/////////////// END GRAPH ////////////////////////////////////////////////////////////////

var slidePageDown2 = function () {
    $('html, body').animate({
        scrollTop: $('#myChart').offset().top
    }, 1000);
};
///////////// END slidePageDown FUNCTION ///////////////////////////////////////////////////


$(document).ready(function () {


    // get data for option1
    $("#button2").click(validate2);


}); // end of ready
///////////////////////////////////////////////////////////////////////////////////////////////////////
