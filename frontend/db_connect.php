<?php
    $servername = "localhost";
    $username = "phome_db";
    $password = "FQWNP9rNPHnF7a";
    
    // $servername = "localhost";
    // $username = "root";
    // $password = "root";
    $db="phome_db";
    $con = mysqli_connect($servername, $username, $password,$db);
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }
    date_default_timezone_set("Asia/Calcutta");
?>