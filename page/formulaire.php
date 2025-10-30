<?php
session_start();
include("../include/data.php");

if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["password"])) {
    $nom = ($_POST["name"]);
    $email = ($_POST["email"]);
    $password = ($_POST["password"]);

    $found = false;

    for ($i = 0; $i < count($data); $i++) { 
        if (
            $nom === $data[$i]["Nom"] && 
            $email === $data[$i]["Email"] && 
            $password === $data[$i]["pwd"]
        ) {
            $_SESSION["Nom"] = $nom;
            $_SESSION["Email"] = $email;
            $_SESSION["pwd"] = $password;

            $found = true;
            break;
        }
    }

    if ($found) {
        echo "SUCCESS";
    } else {
        echo "INVALID";
    }
} else {
    echo "MISSING";
}
