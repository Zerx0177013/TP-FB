<?php
session_start();
$name = $_SESSION["Nom"];
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Bonjour <?php echo $name ?></h1>
    <label>Commenter</label>
    <textarea name="comment" id="comment" rows="4" placeholder="Écris ton commentaire ici..."></textarea>
    <button type="submit">Confirmer</button>
</body>

</html>