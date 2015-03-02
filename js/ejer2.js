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

//prueba prototype
//localstorage
//// Store
//localStorage.setItem("lastname", "Smith");
// Retrieve
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");
var Persona = function() {
	this.habla = true;
	this.nacionalidad = 'Argentino';
	this.saludo = function(){
		if(this.habla){
			console.log('Hola, soy' +this.nombre);
		}
	};
};
var Empleado = function(nombre, cargo) {
	this.nombre = nombre;
	this.cargo = cargo;
	this.saludo = function(){
		if(this.habla){
			console.log('Hola soy '+this.nombre+', y me desempeño como '+this.cargo+', nací en '+this.nacionalidad);
		}
	};
};
Empleado.prototype = New Persona();
var omar = new empleado('Omar','Albañil');
omar.saludo();