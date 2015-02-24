//Select all of the div elements that have a class of "module".
$(document).ready(function(){
	var module = $('.module');
	console.log(module);
//Come up with three selectors that you could use 
//to get the third item in the #myList unordered list
	var lista = $('#myList');
	var salida = lista.children();
	console.log(salida[2]);
	//$('#myList').('li:nth-last-child(2)');

//Select the label for the search input using an attribute selector
//
	var search = $("label[for~='q']");
//Count hidden elements on the page 
//	(hint: .length)
	var hiddenP = $('#blog :hidden').length; //si son los de texto

	var hidden = $(':hidden').length; //todos los elementos
//Count the image elements that have an alt attribute
	var images = $('img[alt]').length;
//Select all of the odd table rows in the table body
	$( "tr:odd" ).css( "background-color", "#ccccff" ); // y le aplico un color	
//con esto selecciono todas las imagenes
	$('img');
//con esto traigo el alt de una sola imagen
	$('img').attr('alt');
});