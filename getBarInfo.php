<?php

require("conn_proc.php");

$year = filter_input(INPUT_POST, 'year');
$year2 = filter_input(INPUT_POST, 'year2');
$state1 = filter_input(INPUT_POST, 'state1');
$state2 = filter_input(INPUT_POST, 'state2');
$deathType = filter_input(INPUT_POST, 'deathType');

$sql = 'SELECT year, state, cause_name, deaths, aadr
        FROM DeathTable
        WHERE cause_name = :deathType AND (year BETWEEN :year AND :year2) AND (state = :state1 OR state = :state2)
        ORDER BY state, year';
$statement = $conn->prepare($sql);
$statement->bindValue(':year', $year);
$statement->bindValue(':year2', $year2);
$statement->bindValue(':state1', $state1);
$statement->bindValue(':state2', $state2);
$statement->bindValue(':deathType', $deathType);
$statement->execute();
$rows = $statement->fetchAll(); // get first row
$statement->closeCursor();

echo json_encode($rows);

exit();

?>
