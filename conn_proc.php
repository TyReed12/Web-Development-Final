<?php

$servername = "localhost";
$username = "icoolsho_treed";
$password = "$!980-47-6436";
$dbname = "icoolsho_treed";

$dsn = 'mysql:host=localhost;dbname=icoolsho_treed';
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);

try {

    $conn = new PDO($dsn, $username, $password, $options);

} catch(PDOException $e) {

    $error_message = $e->getMessage();
    echo "<p>Error connecting to database: $error_message </p>";
    exit;

}

?>