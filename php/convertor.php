<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Конвертор</title>
    </head>
    <body>
        <h1>Преобразование из дюймов в сантиметры</h1>
<?php 
    $ins = 20; 
    $cents = $ins * 2.54;
    $cents = round ($cents) ;
?>
        <p><?php echo $ins ?>дюймов = <?php echo $cents ?>сантиметров.</p>
<?php 
    $ine = 27; 
    $cente = $ins * 3.45;
    $cente = round ($cente) ;
?>
<p><?php echo $ine ?>дюймов = <?php echo $cente ?>сантиметров.</p>

    </body>
</html>