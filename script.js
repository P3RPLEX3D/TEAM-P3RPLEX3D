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

 function play() {
        var audio = document.getElementById('audio');
        if (audio.paused) {
            audio.play();
            $('#play').removeClass('glyphicon-play-circle')
            $('#play').addClass('glyphicon-pause')
        }else{
            audio.pause();
            audio.currentTime = 0
            $('#play').addClass('glyphicon-play-circle')
            $('#play').removeClass('glyphicon-pause')
        }
    }