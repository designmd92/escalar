onload  = start;

function start(){	
var i = 1;
function Move(){ 	
	i = (i%4)+1;
	document.getElementById('slidei'+i).checked = true;
}
setInterval(Move,3000);
}