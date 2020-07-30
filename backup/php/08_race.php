<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=MacRoman">
<link rel="stylesheet" type="text/css" href="../css/base.css" />
<title>Amazing Race</title>
</head>
    <body>
    <?php
    $startTime = microtime( true );
    
    for ( $num = 1; microtime( true ) < $startTime + 0.0001; $num *= 2) {
		echo "Current number: $num<br />";
		}
	print "Out of time!";
        ?>
    </body>
</html>