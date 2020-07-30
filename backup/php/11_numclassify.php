<!DOCTYPE HTML>
<html>
<head>
<link rel="stylesheet" type="text/css" href="../css/base.css" />
<link rel="stylesheet" type="text/css" href="../css/table.css" />
<title>Count and classify numbers</title>
</head>
    <body>
    <table cellspacing="0" border="0" style="width: 20em; border: 1px solid #666;">
    <tr>
        <th>Number</th>
        <th>Even or Odd</th>
        <th>Is a Prime?</th>
    </tr>
    <?php
    $i = 10;
    for ($i = 10; $i > 0; $i--) { ?>
        <tr<?php if ($i % 2 !=0) print ' class="alt"' ?>>
            <td><?php print $i;?></td>
            <?php
            if ($i % 2 != 0) { 
                        ?>
            <td>Odd</td>
            <?php }
            else { 
           ?>
           <td>Even</td>
        <?php
                }
                ?>
                <td><?php
                $count = 0;
                for ($x = ($i - 1); $x > 1; $x--) {
                        if ($i % $x == 0) {
                                $count = 1;
                                break;
                        }
                }
                if ($count == 0) {
                ?>Yes</td>
                </tr>
                <?php 
                }
                }
        ?>
    </table>
    </body>
</html>