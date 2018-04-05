<?php

    require("conn_proc.php");
    $year = filter_input(INPUT_POST, 'year');
    $state = filter_input(INPUT_POST, 'state');

    try{

        $sql = "SELECT cause_name, deaths, aadr
                FROM DeathTable
                WHERE year = :year AND state = :state AND cause_name != 'All Causes'
                ORDER BY deaths DESC";
        $statement = $conn->prepare($sql);
        $statement->bindValue(':year', $year);
        $statement->bindValue(':state', $state);
        $statement->execute();
        $rows = $statement->fetchAll(); // get first row
        $statement->closeCursor();


        echo json_encode($rows);
    }
 catch(PDOException $e){
        echo "Connection failed: " . $e->getMessage();
    }

?>
