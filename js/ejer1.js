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
function ordenAr(num1,num2,num3){
	//el mayor
	if(num1>num2 && num1>num3){
		var max = num1;
		console.log("el mas grande es: "+max);
	}else if(num2>num1 && num2>num3){
		var max = num2;
		console.log("el mas grande es: "+max);
	}else if(num3>num1 && num3>num2){
		var max = num3;
		console.log("el mas grande es: "+max);
	}else if(num1==num2 && num2>num3){
		var min = num3;
		var max = num2;
		var mid = num1;
		console.log(+num1+" y "+num2+" son iguales");
	}else if (num2==num3 && num2>num1){
		var min = num1;
		var max = num2;
		var mid = num3;
		console.log(+num2+" y "+num3+" son iguales");
	}
	//el menor
		if(num1<num2 && num1<num3){
			var min = num1;
			console.log("el mas chico es: "+min);
		}else if(num2<num1 && num2<num3){
			var min = num2;
			console.log("el mas chico es: "+min);
		}else if(num3<num1 && num3<num2){
			var min = num3;
			console.log("el mas chico es: "+min);
		}else if(num1==num2 && num2<num3){
			min = num2;
			max = num3;
			mid = num1;
			console.log(num1+" y "+num2+" son iguales");
		}else if (num2==num3 && num2<num1){
		var min = num2;
		var max = num1;
		var mid = num3;
		console.log(+num2+" y "+num3+" son iguales");
		}
		//el del medio
			if(num1==max && num2==min){
				var mid = num3;
				console.log("el del medio es: "+mid);
			}else if(num2==max && num3==min){
				var mid = num1;
				console.log("el valor medio es "+mid);
			}else if(num3==max && num1==min){
				var mid = num2;
				console.log("el valor medio es "+mid);
			}else if(num1==num2 && num2==num3){
				console.log("los 3 ingresos son iguales");
				var mid = num1; var max = num2; var min = num3; 
			}else if(num1==num3 && num3<num2){
				var min = num1;
				var max = num2;
				var mid = num3;
			}
	console.log("en orden descendente: "+max+" - "+mid+" - "+min);
}
/*write script that asks for a digit and depending on the input shows the name of that digit using a switch
statement*/
function Nombrar(ingreso){
	switch (ingreso) 
	{
		case 1: console.log("uno");break;
		case 2: console.log("dos");break;
		case 3: console.log("tres");break;
		case 4: console.log("cuatro");break;
		case 5: console.log("cinco");break;
		case 6: console.log("seis");break;
		case 7: console.log("siete");break;
		case 8: console.log("ocho");break;
		case 9: console.log("nueve");break;
		case 10: console.log("diez");break;
		default: console.log("hasta acá llegamos...");break;
	}
}
/*write a script that finds the greatest of given 5 variables*/
function maGrande2(num1,num2,num3,num4,num5){
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
function MayorDe5(){
	var max = -9999;
	var i = 0;
	while(i<5){
		var num=prompt("ingrese un numero: ");
		if(num>max){
			max=num;
		}
		i++;
	}
console.log("el mayor fue: "+max);
}

/*write a script that converst a number in the range [0...999] to a text corresponding to its english
pronunciation. Examples:
	0 [] "Zero"
	273 [] "Two hundred seventy three"
	400 [] "Four hundred"
	501 [] "Five hundred and one"
	711 [] "Seven hundred and eleven"

*/

/* Write a script that prints all the numbers from 1 to N  */
function todosN(num){
	for(var i=1;i<=num;i++){
		console.log(i);
	}
}
/* Write a script that prints all the numbers from 1 to N, 
that are not divisible by 3 and 7 at the same time */
function todosN2(num){
	for(var i=1;i<=num;i++){
		if((i % 3 != 0) && (i % 7 != 0)){
			console.log(i);
		}
	}
}
/*
Write a script that finds the max and min number 
from a sequence of numbers
 */
function maxMin(){
	var num = 0;
	min = 999, max = -999;
	console.log("ingrese n para terminar");
	while(num != 'n'){
			var num=prompt("ingrese un numero: ");
			if(num>max){
				max=num;
			}else if(num<min){
				min = num;
			}
		}
	console.log("El max es: "+max+" , el minimo es: "+min);
}
/*
Write a script that finds the lexicographically 
smallest and largest property in document, window and navigator objects

 */
var win = window;
var d = document;
var nav = navigator;
for (n in win)
	{
		if(n[i]>n[i+1]){
			max = n[i];
		}
		i++;
	}
//ver q onda con Object.getOwnPropertyNames(window) aunque todos sabemos q funca en ie9>
//http://jsbin.com/