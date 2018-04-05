var clearCanvas3 = function () {
    // this section clears all instances of previous charts
    $('#nickChart').remove(); // this is my <canvas> element
    $('#canvas3').append('<canvas id="nickChart" width="800" height="450"></canvas>');
};
/////// END clearCanvas ///////////////////////////////////////////////////////////


var radioGraph = function(event){
  //alert(222);
  clearCanvas3(); // this call clears any previous canvas objects

  var s = $("select[name='stateSelectionN']").val();
  var y = $("select[name='yearSelectionN']").val();
  var rows = new Array();

   $.ajax({

         url: "topTen.php",
         data: {year: y, state: s},
         type: "POST",
         dataType:"json",
         success: function (result) { // result
         rows = (result);
         //alert(rows[0][1]);
         //array [x][0] = cause, [x][1] = deaths, [x][2] = aadr
         nickGraph(rows);
     }
  });

  event.preventDefault();
};

var nickGraph = function(rows) {

    ///alert(2222);

    Chart.defaults.global.defaultFontSize = 18;
    var ctx = document.getElementById("nickChart").getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
    labels: [rows[0][0], rows[1][0], rows[2][0], rows[3][0],
    rows[4][0], rows[5][0], rows[6][0], rows[7][0], rows[8][0], rows[9][0]],

    datasets: [{
      backgroundColor: [
        /*
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e",
        "#1A5276",
        "#FF5733",
        "#196F3D"
        */
        "rgba(255, 0, 0, 0.6)",
       "rgba(0, 1, 255, 0.4)",
       "rgba(200, 0, 200, 0.6)",
       "rgba(0, 255, 0, 0.6)",
       "rgba(46, 255, 255, 0.5)",
       "rgba(233, 185, 170, 0.5)",
       "rgba(146, 147, 97, 0.5)",
       "rgba(39, 1, 97, 0.4)",
       "rgba(255, 146, 0, 0.4)",
        "rgba(255, 255, 0, 0.5)"

        /*
        "rgb(46,204,113,0.5)",
        "rgb(52,152,219, 0.5)",
        "rgb(149,165,166, 0.5)",
        "rgb(155,89,182, 0.5)",
        "rgb(241,196,15, 0.5)",
        "rgb(231,76,60, 0.5)",
        "rgb(52,73,94, 0.5)",
        "rgb(26,82,118, 0.5)",
        "rgb(255,87,51, 0.5)",
        "rgb(25,111,61, 0.5)"
        */
      ],

      data: [rows[0][1], rows[1][1], rows[2][1], rows[3][1],
    rows[4][1], rows[5][1], rows[6][1], rows[7][1], rows[8][1], rows[9][1]]
    }]
  }
    });


    slidePageDown3();

};


var slidePageDown3 = function () {
    $('html, body').animate({
        scrollTop: $('#nickChart').offset().top
    }, 1000);
};
///////////// END slidePageDown FUNCTION ///////////////////////////////////////////////////


$(document).ready(function () {


    // get data for option1
    $("#button3").click(radioGraph);


}); // end of ready
///////////////////////////////////////////////////////////////////////////////////////////////////////
