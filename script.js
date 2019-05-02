function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


function d20() {
	document.getElementById("d20").innerHTML =
Math.floor(Math.random() * 20 + 1);
	
}

function d12() {
	document.getElementById("d20").innerHTML =
Math.floor(Math.random() * 12 + 1);
	
}
function d8() {
	document.getElementById("d20").innerHTML =
Math.floor(Math.random() * 8 + 1);
	
}
function d6() {
	document.getElementById("d20").innerHTML =
Math.floor(Math.random() * 6 + 1);
	
}
function d4() {
	document.getElementById("d20").innerHTML =
Math.floor(Math.random() * 4 + 1);
	
}