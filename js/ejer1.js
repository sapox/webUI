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
//editor online -> http://jsbin.com/
//
//Write a script that allocates array of 20 integers 
//and initializes each element by its index multiplied by 5. 
//Print the obtained array on the console.
//
function arreglo(){
		var arr = [];
		//inicializar arreglo con el resultado de multiplicar el indice * 5
		for (var a=0;a<20;a++){
			arr[a] = a * 5;
		}
	//recorrer
	for (var e=0;e<arr.length;e++){
		console.log(arr[e]);
	}
}
/*
Write a script that compares two char arrays 
lexicographically (letter by letter)
 */
function lexicographicComparison(str1,str2)
{
var len1=str1.length;
var len2=str2.length;
var sum1=0;
var sum2=0;
var i=0;
while(i<len1)
{
	if(str1.charCodeAt(i)<97)
		sum1+=str1.charCodeAt(i)+32;
	else
		sum1+=str1.charCodeAt(i);
		i++;
}
i=0;
while(i<len2)
{
	if(str2.charCodeAt(i)<97)
		sum2+=str2.charCodeAt(i)+32;
	else
		sum2+=str2.charCodeAt(i);
		i++;
}
document.write(sum1);
document.write('<br/>'+sum2+'<br/>');
	if(sum1>sum2)
		return 1;
	else if(sum1<sum2)
		return -1;
	else if(sum1 ==sum2)
		return 0;
}


/* 
Write a script that finds the maximal sequence 
of equal elements in an array.
		Example: {2, 1, 1, 2, 3, 3, 2, 2, 2, 1} {2, 2, 2}

*/

arr = [2,2,2,4,4,3,3,1,2,3];
for (var a = 0; a < arr.length;a++){
	if(arr[a]==arr[a+1] && arr[a+1]==arr[a+2])
		console.log("se repite el "+arr[a]);
}
//-----------------------------------------//
//Write a function that returns the last digit of given integer as an English word. Examples: 512  "two", 1024  "four", 12309  "nine"
//Write a function that reverses the digits of given decimal number. Example: 256  652
//Write a function that finds all the occurrences of word in a text
//The search can case sensitive or case insensitive
//Use function overloading
//Write a function to count the number of divs on the web page
//Write a function that counts how many times given number appears in given array. Write a test function to check if the function is working correctly.

//Write a function that checks if the element at given position in given array of integers is bigger than its two neighbors (when such exist).
//Write a function that returns the index of the first element in array that is bigger than its neighbors, or -1, if there’s no such element.
//Use the function from the previous exercise.
//-------------/==---==/-------------------//
function arregloC(){
	var rep = 0;
	var ingreso = prompt("Ingrese los numeros que estaran en el arreglo");
	var salida = ingreso.toString().split('');
	var control = prompt("Ingrese el numero que desea controlar");
	for(var a=0;a<salida.length;a++){
		if(control === salida[a]){
			rep++;
		}
	}
	console.log("el numero "+control+", aparece "+rep+" veces");
	return salida;
}

//--------------/STRINGS/--------------------------//
//Write a JavaScript function reverses string and returns it
//Example: "sample"  "elpmas".
//Write a JavaScript function to check if in a given expression the brackets are put correctly.
//Example of correct expression: ((a+b)/5-d).
//Example of incorrect expression: )(a+b)).
//Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
//		Example: The target substring is "in". The text is as follows:
//We are living in an yellow submarine. We don't have anything else. 
//Inside the submarine is very tight. So we are drinking all the day. 
//We will move out of it in 5 days.

//	The result is: 9.