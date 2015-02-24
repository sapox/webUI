/*$(function() {
	function buildACat(){
		var catName = "Mr Tibbles";
		function catFactory(){
			alert(catName);
		}
		catFactory();
	}
	$('#buildACat').click(function(){
		buildACat();
	});
});*/
$(function(){
	function buildACat(){
		var catName = "Fluffy";
		function catFactory(){
			alert(catName);
		}
		return catFactory;
	}
	$('#buildACat').click(function(){
		var myNewCat = buildACat();
		myNewCat();
	});
});
//lo mas adecuado
(function catFactory(){
	console.log("hola");
})();
//contexto de ejecucion q guarda una funcion interna cuando se ejecuta
// lo ideal para devolver como json -> return {set:set, get:get};

//Miercoles -> leer slides de la 62 a 72 | 75 y 76