//Define the arrays for the links location

var links = new Array ("home", "origin", "whatwedo", "order", "aboutus");
var links_text = new Array ("Home", "Origin", "What we do", "Place Order", "About Us");
var links_url = new Array ("index.html", "origin.html", "whatwedo.html", "order.html", "aboutus.html");

//Resolve the location

var loc = String(this.location);

loc = loc.split("/");
loc = loc[loc.length-1].split(".");
loc = loc[loc.length-2];

//Menu generating function
function dyn_menu_gen() {
	for(var i = 0; i < links.length; i++)
	{
		if(loc==links[i])
		{
			document.write('<table id=\"current\" onmouseover = \"this.idName=\'current\'; return true\" onmouseout = \"this.idName=\'current\'; return true\" onmousedown = \"this.idName=\'current\'; return true\" onclick = \"location.href=\"' + links_url[i] + '\"><tr><td> <a href = \"' + links_url[i] + '\" class=\"ul\">' + links_text[i] + '<b>>></b></a></td></tr></table>');
		}
		else
		{
			document.write('<table class=\"li\" onmouseover = \"this.idName=\'head_nav a:\"hover\"\'; return true\" onmouseout=\"this.className=\'li\'; return true\" onmousedown=\"this.className=\'li\'; return true\" onclick = \"location.href=\"' + links_url[i] + '"><tr><td><a href = \"' + links_url[i] + '"class = "li">' + links_text[i] + '</a></td></tr></table>');
		}
	document.write('<table.cellspacing="0" cellpadding="0" bgcolor="#FFFFFF"><tr><td></td></tr></table>');
	}
	}

//Now, generate the menu
dyn_menu_gen();