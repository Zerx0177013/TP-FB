<?php
	header( "Content-Type: application/json");

  	$retour[] = $_GET['pub'];
  	$retour[] = $_GET['username'];

   	echo json_encode($retour);

  
?>