<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=MacRoman">
<link rel="stylesheet" type="text/css" href="base.css" />
<title>Comparison Operators</title>
</head>
    <body>
    <?php
    $x = 23;
    echo ( $x < 24 ) . "<br />"; 	// Displays 1 (true)
    echo ( $x < “24” ) . "<br />"; 	// Displays 1 (true) because
    								// PHP converts the string to an integer
   									// Displays 1 (true)
    								// Displays 1 (true)
    echo ( $x == 23 ) . "<br />";
    echo ( $x === 23 ) . "<br />";
    echo ( $x === “23” ) . "<br />"; // Displays “” (false) because
    // $x and “23” are not the same data type
    echo ( $x >= 23 ) . "<br />";    // Displays 1 (true)
    echo ( $x >= 24 ) . "<br />";    // Displays “” (false)
	?>
    </body>
</html>