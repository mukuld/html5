<!DOCTYPE HTML>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="../css/base.css" />
    <title>Test page</title>
</head>
<body>
    <?php
        $i = 10;
        while ($i > 1) {
            if ($i % 2 != 0) {
                $x = int($i / 2) + 1;
            }
            else {
                $x = int($i / 2);
            }
            while ($x > 1) {
                if ($i % $x == 0) {
                    print $i . " is not prime <br>";
                    $x--;
                    break 1;
                }
                else {
                    print $i . " is a prime.<br>";
                    $x--;
                }
           }
            $i--;
        }
    ?>
</body>
</html>