<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=MacRoman">
<link rel="stylesheet" type="text/css" href="../css/base.css" />
<style type="text/css">
	div.map { 
		float: left;
		text-align: center;
		border: 1px solid #666;
		background-color: #fcfcfc;
		margin: 5px;
		padding: 1em;
		}
	span.home, span.pigeon {
		font-weight: bold;
		}
	span.empty {
		color: #666;
		}
</style>
<title>Homing Pigeon Simulator</title>
</head>
    <body>
    <?php
    $mapSize = 10;
    	
    do {
		$homeX = rand ( 0, $mapSize - 1 );
		$homeY = rand ( 0, $mapSize - 1 );
		$pigeonX = rand ( 0, $mapSize - 1 );
		$pigeonY = rand ( 0, $mapSize - 1 );
	} while (( abs($homeX - pigeonX) < $mapSize/2 ) && (abs($homeY - $pigeonY) < $mapSize/2));
	
	do {
		if ($pigeonX < $homeX)
			$pigeonX++;
		elseif ($pigeonX > $homeX)
			$pigeonX--;
		
		if ($pigeonY < $homeY)
			$pigeonY++;
		elseif ($pigeonY > $homeY)
			$pigeonY--;
		
		print '<div class="map" style="width: ' . $mapSize . 'em;"<pre>';
		
		for ($y = 0; $y < $mapSize; $y++) {
			for ( $x = 0; $x < $mapSize; $x++ ) {
				if ($x == $homeX && $y == $homeY) {
					print '<span class="home">+</span>';
				} elseif ($x == $pigeonX && $y == $pigeonY) {
					print '<span class="pigeon">%</span>';
				} else {
					print '<span class="empty">.</span>';
				}
				
				print ($x != $mapSize - 1) ? " " : "";
				}
				print "\n";
			}
		print "</pre></div>\n";
	} while ($pigeonX != $homeX || $pigeonY != $homeY);
        ?>
    </body>
</html>