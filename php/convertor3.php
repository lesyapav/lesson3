<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Конвертор</title>
    </head>
    <body>
        <h1>Преобразование из дюймов в сантиметры</h1>
        <form action="convertor3.php" method="get">
            <p>Величина в дюймах:
            <input type="number" name="inches" size="10"></p>
            <p><input type="submit" value="Преобразовать"></p>
        </form>
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
if (isset($_GET['inches'])) {
    $ins = $_GET['inches'];
    $cents = round($ins * 2.54);
    echo '<р>', $ins, ' дюймов = ', $cents, ' сантиметров. </р>'; 
 }
?>
    </body>
</html>