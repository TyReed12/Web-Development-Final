var clearCanvas4 = function () {
    // this section clears all instances of previous charts
    $('#TylerChart').remove(); // this is my <canvas> element
    $('#canvas4').append('<canvas id="TylerChart" width="800" height="450"></canvas>');
};
/////// END clearCanvas ///////////////////////////////////////////////////////////




var getTylerData = function (event) {

    clearCanvas4(); // this call clears any previous canvas objects

    // 1999 to 2015

    var c = $("select[name='deathSelectionT']").val();
    var y = $("select[name='yearSelectionT']").val();

    //alert(11111);
    var rows = new Array();
    $.ajax({

        url: "top5aadr.php",
        data: {year: y, cause: c},
        type: "POST",
        dataType:"json",
        success: function (result) { // result
          rows = (result);
          //alert(2222);
          graphIt(rows);
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

var graphIt = function (rows) {


    Chart.defaults.global.defaultFontSize = 18;

    var ctx = document.getElementById("TylerChart").getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
    labels: ["Age-Adjusted Death Rate for " + rows[0][1], "Age-Adjusted Death Rate for " + rows[1][1],
             "Age-Adjusted Death Rate for " + rows[2][1], "Age-Adjusted Death Rate for " + rows[3][1],
             "Age-Adjusted Death Rate for " + rows[4][1]],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f"
      ],
      data: [rows[0][0], rows[1][0], rows[2][0], rows[3][0],
    rows[4][0]]
    }]
  }
});

    ////////// END OF CHART /////////////
    slidePageDown4();

};
/////////////// END GRAPH ////////////////////////////////////////////////////////////////

var slidePageDown4 = function () {
    $('html, body').animate({
        scrollTop: $('#TylerChart').offset().top
    }, 1000);
};
///////////// END slidePageDown FUNCTION ///////////////////////////////////////////////////


$(document).ready(function () {


    // get data for option1
    $("#button4").click(getTylerData);


}); // end of ready
///////////////////////////////////////////////////////////////////////////////////////////////////////
