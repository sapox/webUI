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