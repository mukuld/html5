<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=MacRoman">
<link rel="stylesheet" type="text/css" href="../css/base.css" />
<style type="text/css">
th {
	text-align: left;
	background-color: #999;
	}
th, td {
	padding: 0.4em;
	}
tr.alt td {
	background: #ddd;
	}
</style>
<title>Fibonacci Sequence</title>
</head>
    <body>
    <h2>Fibonacci Sequence</h2>
    <table cellspacing="0" border="0" style="width: 20em; border: 1px solid #666;">
    <tr>
    	<th>Sequence #</th>
    	<th>Value</th>
    </tr>
    <tr>
    	<td>F<sub>0</sub></td>
    	<td>0</td>
    </tr>
    <tr class="alt">
    	<td>F<sub>1</sub></td>
    	<td>1</td>
    </tr>
    <?php 
    $iterations = 10;
    $num1 = 0;
    $num2 = 1;
    
    for ($i = 2; $i <= $iterations; $i++) {
		$sum = $num1 + $num2;
		$num1 = $num2;
		$num2 = $sum;
    ?>
    <tr<?php if ($i % 2 !=0) print ' class="alt"' ?>>
    	<td>F<sub><?php print $i?></sub></td>
    	<td><?php print $num2?></td>
    </tr>
    <?php 
    }
    ?>
    </table>
    </body>
</html>