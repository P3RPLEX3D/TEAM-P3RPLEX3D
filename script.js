function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


function d20() {
	document.getElementById("header").innerHTML =
Math.floor(Math.random() * 20 + 1);
	elt.setAttribute("style", "font-size:16;");
}