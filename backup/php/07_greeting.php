<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=MacRoman">
<link rel="stylesheet" type="text/css" href="../css/base.css" />
<title>Greetings!!!</title>
</head>
    <body>
    <?php
		$hour = date ( "G" );
		$year = date ( "Y" );
		
		if ( $hour >= 5 && $hour < 12) {
		    print "<h1>Good Morning</h1>";
		}
		elseif ( $hour >= 12 && $hour < 18 ) {
		    print "<h1>Good Afternoon</h1>";
		}
		elseif ( $hour >= 18 && $hour < 22 ) {
			print "<h1>Good evening</h1>";
		}
		else {
			print "<h1>Good night!!!</h1>";
		}
		
		$leapYear = false;
		
		if ((( $year % 4 == 0 ) && ( $year %100 !=0 )) || ( $year % 400 == 0 ))
			$leapYear = true;
		
		print "<p>Did you know that $year is" . ( $leapYear ? "" : " not" ) . " a leap year?</p>";
		
         ?>
    </body>
</html>
