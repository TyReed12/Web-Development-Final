<?php

$states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

 $states2 = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
  'United States', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

$years = ['1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014' , '2015'];

$deathTypes = ["All Causes", "Alzheimer's disease", "Cancer", "Chronic liver disease and cirrhosis", "CLRD", "Diabetes", "Diseases of Heart", "Essential hypertension and hypertensive renal disease", "Homicide", "Influenza and pneumonia", "Kidney Disease", "Parkinson's disease", "Pneumonitis due to solids and liquids", "Septicemia", "Stroke", "Suicide", "Unintentional Injuries"];



?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.min.js"></script>
  <script src="ajax.js"></script>
  <script src="testBar.js"></script>
  <script src="nickJS.js"></script>
  <script src="tyler.js"></script>
  <link rel="stylesheet" type="text/css" href="styles.css">
  <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet">
  <title>Leading Causes of Death</title>
</head>
<body>

<header >

  <p id="heading">Leading Causes of Death Data Visualized</p>

</header>

<main id="main">



  <div id="options">
    <button id="select1" type="button">View Death Rates Over Specified Years By Cause</button>
    <br>
    <button id="select2" type="button">Compare The Death Rates Between Two States By Cause</button>
    <br>
    <button id="select3" type="button">Leading Top Ten Causes Of Death By State</button>
    <br>
    <button id="select4" type="button">Top 5 Death Rates By Cause</button>
  </div>

  <form id="form" method="post">

    <div id="option1">

      <div class="list1">
      <p >State Selection</p>
      <select id="state" name="stateSelection">
        <?php for($i = 0; $i < count($states2); $i++) :?>
            <option value="<?php echo $states2[$i]; ?>">
                <?php echo $states2[$i]; ?>
            </option>
        <?php endfor; ?>
      </select>
      </div>

      <div class="list2">
      <p >Year Start Selection</p>
      <select id="year" name="yearSelection">
        <?php for($i = 0; $i < count($years); $i++) :?>
            <option value="<?php echo $years[$i]; ?>">
                <?php echo $years[$i]; ?>
            </option>
        <?php endfor; ?>
      </select>
      </div>

      <div class="list3">
      <p >Year Stop Selection</p>
      <select id="year2" name="yearSelection2">
        <?php for($i = 0; $i < count($years); $i++) :?>
            <option value="<?php echo $years[$i]; ?>">
                <?php echo $years[$i]; ?>
            </option>
        <?php endfor; ?>
      </select>
      </div>

      <div class="list4">
      <p >Cause of Death</p>
      <select id="deathTypes" name="deathSelection">
        <?php for($i = 0; $i < count($deathTypes); $i++) :?>
            <option value="<?php echo $deathTypes[$i]; ?>">
                <?php echo $deathTypes[$i]; ?>
            </option>
        <?php endfor; ?>
      </select>
    </div>

      <br>

      <input id="button1" type="button" value="Get Info" >

      <br>

      <div id="canvas">
        <canvas id="line-chart"></canvas>
      </div>
        <p id="aadr">To learn more about Age-Adjusted Death Rates and more click <a href="https://www.cdc.gov/cancer/npcr/uscs/hints.htm" target="_blank">here</a></p>
    </div>

    <!-- Zach's option -->
    <div id="option2">

      <div class="list1">
          <p>First State Selection</p>
          <select id="state1" name="stateSelection1Z">
              <?php for ($i = 0; $i < count($states); $i++) : ?>
                  <option value="<?php echo $states[$i]; ?>">
                      <?php echo $states[$i]; ?>
                  </option>
              <?php endfor; ?>
          </select>
      </div>

      <div class="list2">
          <p>Second State Selection</p>
          <select id="state2" name="stateSelection2Z">
              <?php for ($i = 0; $i < count($states); $i++) : ?>
                  <option value="<?php echo $states[$i]; ?>">
                      <?php echo $states[$i]; ?>
                  </option>
              <?php endfor; ?>
          </select>
      </div>

      <div class="list3">
          <p>Year Start Selection</p>
          <select id="year" name="yearSelectionZ">
              <?php for ($i = 0; $i < count($years); $i++) : ?>
                  <option value="<?php echo $years[$i]; ?>">
                      <?php echo $years[$i]; ?>
                  </option>
              <?php endfor; ?>
          </select>
      </div>

      <div class="list4">
          <p>Year Stop Selection</p>
          <select id="year2" name="yearSelection2Z">
              <?php for ($i = 0; $i < count($years); $i++) : ?>
                  <option value="<?php echo $years[$i]; ?>">
                      <?php echo $years[$i]; ?>
                  </option>
              <?php endfor; ?>
          </select>
      </div>

      <div class="list5">
          <p>Death Type Selection</p>
          <select id="deathTypes" name="deathSelectionZ">
              <?php for ($i = 0; $i < count($deathTypes); $i++) : ?>
                  <option value="<?php echo $deathTypes[$i]; ?>">
                      <?php echo $deathTypes[$i]; ?>
                  </option>
              <?php endfor; ?>
          </select>
      </div>

      <br>

      <input id="button2" type="button" value="Get Info">

      <br>

      <div id="canvas2">
          <canvas id="myChart"></canvas>
      </div>

    </div>

    <!-- Nick the Boss -->
    <div id="option3">

      <div class="list1">
          <p>State Selection</p>
          <select id="state1" name="stateSelectionN">
              <?php for ($i = 0; $i < count($states2); $i++) : ?>
                  <option value="<?php echo $states2[$i]; ?>">
                      <?php echo $states2[$i]; ?>
                  </option>
              <?php endfor; ?>
          </select>
      </div>

      <div class="list2">
          <p>Year Selection</p>
          <select id="state1" name="yearSelectionN">
              <?php for ($i = 0; $i < count($years); $i++) : ?>
                  <option value="<?php echo $years[$i]; ?>">
                      <?php echo $years[$i]; ?>
                  </option>
              <?php endfor; ?>
          </select>
      </div>

      <input id="button3" type="button" value="Get Info" >

      <div id="canvas3">
          <canvas id="nickChart" width="800" height="700"></canvas>
      </div>

    </div>

    <!-- Tyler chart -->
    <div id="option4">

      <div class="list2">
          <p>Year Selection</p>
          <select  name="yearSelectionT">
              <?php for ($i = 0; $i < count($years); $i++) : ?>
                  <option value="<?php echo $years[$i]; ?>">
                      <?php echo $years[$i]; ?>
                  </option>
              <?php endfor; ?>
          </select>
      </div>

      <div class="list5">
          <p>Death Type Selection</p>
          <select  name="deathSelectionT">
              <?php for ($i = 0; $i < count($deathTypes); $i++) : ?>
                  <option value="<?php echo $deathTypes[$i]; ?>">
                      <?php echo $deathTypes[$i]; ?>
                  </option>
              <?php endfor; ?>
          </select>
      </div>


      <input id="button4" type="button" value="Get Info" >

      <div id="canvas4">
          <canvas id="TylerChart" width="800" height="700"></canvas>
      </div>

    </div>



  </form>

<div id="closing">
<p id="closingP">Data for this website was only possible with the help of Socrata and the CDC</p>
<img src="socrata.png">
<img src="cdc.png">
</div>

</main>


</body>
</html>
