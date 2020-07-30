<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=MacRoman">
<link rel="stylesheet" type="text/css" href="base.css" />
<title>Identify variable types</title>
</head>
    <body>
    <?php
	$test_var;
	echo "Your variable is of type: " . gettype ( $test_var ) . "<br />";
	$test_var = 24;
	echo "Your variable is of type: " . gettype ( $test_var ) . "<br />";
	$test_var = 12.44;
	echo "Your variable is of type: " . gettype ( $test_var ) . "<br />";
	$test_var = "Hello, there";
	echo "Your variable is of type: " . gettype ( $test_var ) . "<br />";
	?>
    </body>
</html>