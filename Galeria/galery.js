var num=0;
var misImagenes= new Array(5)


for (var i = 0; i <5; i++) {
	let number=parseInt(Math.random() * (10 - 1) + 1);

	misImagenes[i]="foto"+number+".jpg";
	console.log(misImagenes[i]);
}
const TIEMPO_INTERVALO_MILESIMAS_SEG = 2000;
var intervalo;

function adelante(){
	num++;
	if(num>6){
		num=0;
		var foto=document.getElementById("foto");
		foto.src=misImagenes[num];
		console.log(misImagenes[num]);
	}
	var foto=document.getElementById("foto");
	foto.src=misImagenes[num];
}

function aleatorio(){
	num=parseInt(Math.random() * (5 - 0) + 0);
	console.log(num);
	var foto=document.getElementById("foto");
	foto.src=misImagenes[num];
}


function atras(){
	num--;
	if(num<0){
		num=5;
		var foto=document.getElementById("foto");
		foto.src=misImagenes[num];
		console.log(misImagenes[num]);
	}
	var foto=document.getElementById("foto");
	foto.src=misImagenes[num];
}
function iniciar(){
	for (var i = 0; i <5; i++) {
	let number=parseInt(Math.random() * (10 - 1) + 1);

	misImagenes[i]="foto"+number+".jpg";
	console.log(misImagenes[i]);
}
	intervalo = setInterval(aleatorio, TIEMPO_INTERVALO_MILESIMAS_SEG);

}