<?php
	header( "Content-Type: application/json");

  	$tay[] = $_GET['username'];
    

   	echo json_encode($tay);

  
?>