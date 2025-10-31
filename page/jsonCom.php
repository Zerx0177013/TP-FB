<?php
	header( "Content-Type: application/json");

  	$tay[] = $_GET['username'];
    $tay[] = $_GET['com'];
    

   	echo json_encode($tay);

  
?>