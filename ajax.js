var clearCanvas = function() {
  // this section clears all instances of previous charts
  $('#line-chart').remove(); // this is my <canvas> element
  $('#canvas').append('<canvas id="line-chart" width="800" height="450"></canvas>');
};
/////// END clearCanvas ///////////////////////////////////////////////////////////


var validate = function() {

  var y = parseInt($("select[name='yearSelection']").val());
  var y2 = parseInt($("select[name='yearSelection2']").val());

  if(y >= y2) {
    alert("You must enter a Start Year less than the Stop Year!");
  }
  else {
    getData();
  }
};

var getData = function(event) {


  clearCanvas(); // this call clears any previous canvas objects

  // 1999 to 2015

  var s = $("select[name='stateSelection']").val();
  var y = $("select[name='yearSelection']").val();
  var y2 = $("select[name='yearSelection2']").val();
  var d = $("select[name='deathSelection']").val();


  var rows = new Array();
  $.ajax({
      url: "getInfo.php",
      data: {year: y, year2: y2, state: s, deathType: d },
      dataType:"json",
      type:"POST",
      success: function (result) { // result

      //alert(2);
      rows = result;

      /*
      //alert(JSON.stringify(rows));
      var year = rows[0]['year']; // year
      //alert(year);
      var state = rows[0]['state']; // state
      //alert(state);
      var cause = rows[0]['cause_name']; // cause
      //alert(cause);
      */

      var startYear = rows[0]['year'];
      var stopYear = rows[rows.length-1]['year'];
      var state = rows[0]['state']; // state
      var cause = rows[0]['cause_name']; // cause
      var counts = [];
      var years = []; // year
      for(var i = 0; i < rows.length; i++) {
        years[i] = rows[i]['year'];
        counts[i] = rows[i]['aadr'];
      }

      graph(startYear, stopYear, state, cause, counts, years);

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


var graph = function(startYear, stopYear, state, cause, counts, years) {


    Chart.defaults.global.defaultFontSize = 18;
    // GRAPH SECTION:
    var ctx = document.getElementById('line-chart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: years,
        datasets: [{
          label: (state + " " + cause + " Yearly Age-Adjusted Death Rates from (" + startYear + " to " + stopYear + ")"),
          data: counts,
          borderColor: "rgba(60, 149, 205, 0.63)",
          pointBackgroundColor: "#3e95cd",
          borderWidth: 4,
          fill: false
        }]
        }, options:{
            spanGaps: true,
            //display: true,
            //showLines: true, // disable for all datasets
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true,
                  //stepSize: 1000
                }
              }],
              xAxes: [{
                ticks: {
                  autoSkip: false
                }
              }]
            }
          }
        });

        ////////// END OF CHART /////////////
        slidePageDown();
};
/////////////// END GRAPH ////////////////////////////////////////////////////////////////


var slidePageDown = function() {
  $('html, body').animate({
   scrollTop: $('#line-chart').offset().top
 }, 1000);
};
///////////// END slidePageDown FUNCTION ///////////////////////////////////////////////////


$(document).ready(function(){
  // hide options
  $("#option1").toggle();
  $("#option2").toggle();
  $("#option3").toggle();
  $("#option4").toggle();
  $("#closing").show();

  // select an option and display its options
  $("#select1").click(function(){
    $("#option1").toggle();
    $("#option2").hide();
    $("#option3").hide();
    $("#option4").hide();
    //$("#closing").hide();
    clearCanvas();
    clearCanvas2();
    clearCanvas3();
    clearCanvas4();
  });

  $("#select2").click(function(){
    $("#option1").hide();
    $("#option2").toggle();
    $("#option3").hide();
    $("#option4").hide();
    clearCanvas();
    clearCanvas2();
    clearCanvas3();
    clearCanvas4();
  //  $("#closing").hide();
  });

  $("#select3").click(function(){
    $("#option1").hide();
    $("#option2").hide();
    $("#option3").toggle();
    $("#option4").hide();
    clearCanvas();
    clearCanvas2();
    clearCanvas3();
    clearCanvas4();
  //  $("#closing").hide();
  });

  $("#select4").click(function(){
    $("#option1").hide();
    $("#option2").hide();
    $("#option3").hide();
    $("#option4").toggle();
    clearCanvas();
    clearCanvas2();
    clearCanvas3();
    clearCanvas4();
  //  $("#closing").hide();
  });

  // get data for option1
  $("#button1").click(validate);



}); // end of ready
///////////////////////////////////////////////////////////////////////////////////////////////////////
