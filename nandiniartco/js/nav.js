//Define the arrays for the links location

var links = new Array("index", "whatwedo", "order", "aboutus", "pricing");
var links_text = new Array("Home", "What we do", "Order Now", "About Us", "Pricing Sheet");
var links_url = new Array("index.html", "whatwedo.html", "order.html", "aboutus.html", "pricing.html");

//Resolve the location

var loc = String(this.location);

loc = loc.split("/");
loc = loc[loc.length - 1].split(".");
loc = loc[loc.length - 2];

//Menu generating function
function dyn_menu_gen() {
    for (var i = 0; i < links.length; i++) {
        if (loc == links[i]) {
            document.write('<li class=\"main-menu__item main-menu__current-item\"><a href = \"#\">' + links_text[i] + '</a></li>');
        } else {
            document.write('<li class=\"main-menu__item\"><a href=\"' + links_url[i] + '\">' + links_text[i] + '</a></li>');
        }
        //document.write('<table.cellspacing="0" cellpadding="0" bgcolor="#FFFFFF"><tr><td></td></tr></table>');
    }
}

//Now, generate the menu
document.write("<ul class=\"main-menu\" > ");
dyn_menu_gen();
document.write("</ul>");