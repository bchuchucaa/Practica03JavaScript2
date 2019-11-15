var num=0;
var misImagenes= new Array(5);


for (var i = 0; i <5; i++) {
	let number=parseInt(Math.random() * (10 - 1) + 1);

	misImagenes[i]="imgs/foto"+number+".jpg";
	console.log(misImagenes[i]);
}
const TIEMPO_INTERVALO_MILESIMAS_SEG = 2000;
var intervalo;

function adelante(){
	
	if(num>=5){
		document.getElementById("siguiente").disabled = true;
		console.log('boton bloqueado');


	}else{
		document.getElementById("siguiente").disabled = false;
		var foto=document.getElementById("foto");
	foto.src=misImagenes[num];
	console.log(misImagenes[num]);
	console.log(num);
	document.getElementById("anterior").disabled = false;
	num++;
	}
	
	
}


function atras(){
	
	if(num<=0){
		document.getElementById("anterior").disabled = true;
		console.log('boton anterior bloqueado');
	}else{
		num--;
	document.getElementById("anterior").disabled = false;
	var foto=document.getElementById("foto");
	foto.src=misImagenes[num];
	console.log(misImagenes[num]);
	console.log(num);
	document.getElementById("siguiente").disabled = false;
	
	}
}

function iniciar(){
	document.getElementById("siguiente").disabled = false;
	document.getElementById("anterior").disabled = false;
	for (var i = 0; i <5; i++) {
	let number=parseInt(Math.random() * (10 - 1) + 1);

	misImagenes[i]="imgs/foto"+number+".jpg";
	console.log(misImagenes[i]);
}


}