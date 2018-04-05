<?php

    require("conn_proc.php");
    $year = filter_input(INPUT_POST, 'year');
    $cause = filter_input(INPUT_POST, 'cause');

    try{


        $sql = "SELECT aadr, state
                FROM DeathTable
                WHERE year = :year AND cause_name = :cause
                ORDER BY aadr DESC
                LIMIT 5";
        $statement = $conn->prepare($sql);
        $statement->bindValue(':year', $year);
        $statement->bindValue(':cause', $cause);
        $statement->execute();
        $rows = $statement->fetchAll(); // get first row
        $statement->closeCursor();


        echo json_encode($rows);
    }
 catch(PDOException $e){
        echo "Connection failed: " . $e->getMessage();
    }

?>
