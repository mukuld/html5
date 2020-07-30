<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=MacRoman">
<link rel="stylesheet" type="text/css" href="/css/base.css" />
<title>Hello world with time</title>
</head>
    <body>
    <?php
	$currentTime = date( "g:i:s:a" );
	$currentDate = date( "j M Y" );
    echo "Hello World! The current date is $currentDate and current time is $currentTime" ;
	?>
    </body>
</html>
