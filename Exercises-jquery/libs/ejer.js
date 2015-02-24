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

//Select all of the image elements on the page
//Log each image's alt attribute
//con esto selecciono todas las imagenes
	var img = $('img');
//con esto traigo el alt de todas
	for (var a=0;a<img.length;a++){
		console.log($('img').eq(a).attr('alt'));
	}
//Select the search input text box, then traverse up 
//to the form and add a class to the form.
	var input = $("input[type='text']");
	input.parent().addClass("claseAgregada");
//Select the list item inside #myList that has a class of "current"
//Remove that class from it
//Add a class of "current" to the next list item
	var list = $('#myList > li.current');
	list.removeClass("current").addClass("");
	list.next().addClass("current");
//Select the select element inside #specials
//Traverse your way to the submit button.
	var spe = $('#specials').children();
	spe.parent().parent().children().children().next().eq(1);
//Select the first list item in the #slideshow element
//Add the class "current" to it, and then add a class 
//of "disabled" to its sibling elements
	var firstLi = $('#slideshow').children().eq(0);
	firstLi.addClass("current");
	firstLi.siblings().addClass("disabled");
});