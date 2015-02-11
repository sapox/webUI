/*write an expression that checks if given integer is odd or even*/
function oddEven(num1){
	if((!isNaN(num1)) && (parseInt(num1) != NaN)){
		if(num1 % 2 === 0){
			alert("es par");
		}else{
			alert("es impar");
		}
	}else{
		alert("Debe ingresar un numero");
	}	
}
/*write a boolean expression that checks for given integer if it 
can be divided (without reminder) by 7 and 5 in the same time*/
function sieteyCinco(num1){
	if((num1 % 7 == 0) && (num1 % 5 == 0)){
		alert("el numero ingresado es divisible por 7 y 5");
	}else{
		alert("el numero ingresado no es divisible por 7 y 5");
	}
}
/*write an expression that calculates rectangle's area by given width and height*/
function rectangleArea(width, height){
	var area = width*height;
	console.log(area);
}
/*write an expression that checks for given integer if its third digit (right-to-left) is 7
E.g. 1732 = true.*/
function estaElSiete(num){
	var salida = [];
	var conver = num.toString();
	for (var i=0, len = conver.length; i<len; i+=1){
		salida.push(+conver.charAt(i));
	}
	if(salida[salida.length-3]==7){
		alert("re loco");
	}else{
		alert("no esta el siete");
	}
}
/*write an expression that checks if given positive integer number n(n<=100) is prime. 
E.g. 37 is prime*/
function esPrimo(num1){
	if(num1 != 2){
		if (num1 % 2 == 0){
			alert("no es primo");
		}else{
			alert("es primo");
		}
	}else{
		alert("no es primo");
	}
}