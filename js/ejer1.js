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
	if(num1 != 2 && num1<=100){
		if (num1 % 2 == 0){
			alert("no es primo");
		}else{
			alert("es primo");
		}
	}else{
		alert("el numero ingresado es mayor a 100 o es 2");
	}
}
/*write an if statement that examines two integer variables and exchanges their values if the first
one is greater than the second one*/
function exchangeG(num1,num2){
	if(num1>num2){
		var max = num1;
		num1 = num2;
		num2 = max;
		console.log("num1 = "+num1+" num2 = "+num2);
	}else if(num1<num2){
		var max = num2;
		num2 = num1;
		num1 = max;
		console.log("num1 = "+num1+" num2 = "+num2);
	}else{
		console.log("son iguales");
	}
}
/*write a script that shows the sign (+ or -) of the product of three real numbers without calculating it.
Use a sequence of if statemets.*/
function positivoNegativo(num1,num2,num3){
	if(num1>0 && num2>0 && num3>0){
		console.log("el resultado sera +");
	}else if(num1<0 && num2>0 && num3>0){
		console.log("el resultado sera -");
	}else if(num1<0 && num2<0 && num3>0){
		console.log("el resultado sera +");
	}else if(num1>0 && num2<0 && num3<0){
		console.log("el resultado sera +");
	}else if(num1<0 && num2<0 && num3<0){
		console.log("el resultado sera -");
	}else if(num1>0 && num2<0 && num3>0){
		console.log("el resultado sera -");
	}else if(num1>0 && num2>0 && num3<0){
		console.log("el resultado sera -");
	}else if(num1<0 && num2>0 && num3<0){
		console.log("el resultado sera -");
	}
}
/*write a script that finds the biggest of three integers using nested if statements*/
function maGrande(num1,num2,num3){
	if(num1>num2 && num1>num3){
		var max = num1;
		console.log("el mas grande es: "+max);
	}else if(num2>num1 && num2>num3){
		var max = num2;
		console.log("el mas grande es: "+max);
	}else if(num3>num1 && num3>num2){
		var max = num3;
		console.log("el mas grande es: "+max);
	}else if(num1==num2 && num2==num3){
		console.log("son iguales");
	}else{
		console.log("quepashhoo");
	}
}
/* sort 3 real values in descending order using nested if statements */