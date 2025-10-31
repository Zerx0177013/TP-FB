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
    <form id="post">
        <input type="hidden" name="username" id="usr" value="<?php echo $name ?>">
        <input type="text" name="publication" id="pub" placeholder="insérer votre publication">
        <br><br>
        <button type="submit">Publier</button>
    </form>

    <div id="publications">

    </div>
    <script src="publication.js"></script>
</body>
</html>