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
//
//
//Add five new list items to the end of the unordered list #myList
	var ultimoLi = $('#myList').children().last();
	var li1 = "<li>List Item 8</li>"
	var li2 = "<li>List Item 9</li>"
	var li3 = "<li>List Item 10</li>"
	var li4 = "<li>List Item 11</li>"
	var li5 = "<li>List Item 12</li>"
	ultimoLi.after(li1,li2,li3,li4,li5);
//Remove the odd list items
	var listaImp = $('#myList');
	listaImp.children('li:odd').remove();
//Add another h2 and another paragraph to the last div.module
	var achep = "<h2>Specials2</h2>"
	var parrafo = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quasi vitae quisquam dolore accusamus suscipit beatae aspernatur labore minima reiciendis ipsam, aperiam ipsum numquam cupiditate voluptatibus quam? Earum, iure, voluptatum.</p>"
	var ultimoDiv = $('div.module').last();
	ultimoDiv.append(achep, parrafo);
//Add another option to the select element
//Give the option the value "Wednesday"
	var opcion = '<option value="Wednesday">Wednesday</option>';
	var selec = $('select');
	selec.append(opcion);
//Add a new div.module to the page after the last one
//Put a copy of one of the existing images inside of it
	var adentro='<div class="module"><h2>El nuevo</h2><img src="images/vegetable.jpg" alt="vegetables" /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates possimus atque, dolorem, ut maxime impedit. Consectetur natus eaque ut quo quas soluta et fugit. Odit natus ratione impedit, cupiditate vel.</p></div>';
	var nuevo = $('div').last().append();
	nuevo.append(adentro);
});