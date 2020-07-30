<!DOCTYPE HTML>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="../css/base.css" />
    <title>Prime Numbers</title>
</head>
<body>
    <?php
        for ($i = 10; $i > 1; $i--) {
        	$count = 0;
        	for ($x = ($i - 1); $x > 1; $x--) {
        		if ($i % $x == 0) {
					$count = 1;
					break;
			}
        }
        if ($count == 0)
        print $i . " is a prime.<br>";
        }
    ?>
</body>
</html>