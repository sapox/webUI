//Write a hierarchy of classes to simulate vehicles
//All vehicles should have speed and propulsion units (things which make them move) 
//and a Accelerate method, which should update their speed by summing it with the 
//acceleration of their propulsion units
//Each propulsion unit can produce acceleration (change in speed). 
//There should be three types of propulsion units - wheels, propelling nozzles 
//and propellers

function person(){
	var name = undefined;
	function set(n) {name = n;};
	function get(){return name;};
	return {get:get;set;set}
}
function vehiculo(){
	this.marca = undefined;
	this.modelo = undefined;
}
function auto(oldObject, p){
	var that = object(oldObject);
	var patente = p;
	that.getPatente = function(){ return patente; }
	that.toString = function(){ 
		var a = "Marca: " + that.marca + 
		"\nModelo: "+ that.modelo +
		"\nPatente: "+ patente +
		return a; 
	}
	return that;
}

///////////////////*-*-*//////////////////////////
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function vehiculo(){
 this.marca = undefined;
 this.modelo = undefined;
}

function auto(oldObject, p) {
  var that = object(oldObject);
  var patente = p;
  that.getPatente = function() { return patente; }
  that.toString = function() { 
  var a = "Marca: " + that.marca + 
  "\nModelo: " + that.modelo +
  "\nPatente: " + patente;
  return a;
  }
  return that;
}

//redifinicion del gizmo
function gizmo(id) {
  this.id = id;
 this.toString = function () {
  return "gizmo " + this.id;
  }
  return this;
}

function hoozit(id) {
  var that = new gizmo(id);
  that.test = function (testid) {
  return testid === this.id;
  };
  return that;
}

//--------------------------------------------//
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
function vehiculo(){
 this.propulsion = undefined;
 this.speed = undefined;
 this.Accelerate = function(){
 	
 }
}

function prueba(){
	this.contenido = "hola";
	this.calculo = 2+3;
	this.saludar = function(nombre){
		console.log("hola "+nombre);
	}
}

var b = {
	contenido: "hola",
	calculo: function(num1,num2){return num1+num2},
	saludar: function(nombre){console.log("hola "+nombre);}
};
//-------------------/parasitic inheritance/-----------------
function gizmo(id) {
    return {
        id: id,
        toString: function () {
            return "gizmo " + this.id;
        }
    };
}

function hoozit(id) {
    var that = gizmo(id);
    that.test = function (testid) {
        return testid === this.id;
    };
    return that;
}

//---------------------/secrets/-----------------------
//basicamente, sabemos q hay un id, pero no tenemos acceso a el, 
//solo podemos asignarlo cuando creamos el objeto, despues no
function gizmo(id) {
    return {
        toString: function () {
            return "gizmo " + id;
        }
    };
}

function hoozit(id) {
    var that = gizmo(id);
    that.test = function (testid) {
        return testid === id;
    };
    return that;
}
//------------------/shared secrets/-----------------------------
function gizmo(id, secret) {
    secret = secret || {};
    secret.id = id;
    return {
        toString: function () {
            return "gizmo " + secret.id; }
    }
}

function hoozit(id) {
    var s = {},
        that = gizmo(id, s);
    that.test = function (testid) {
        return testid === s.id;
    };
    return that;
}

function lastWord(ingreso){
  var cambio = ingreso.toString().split('');
  for(var a =0;a<cambio.length();a++){
    switch(cambio[a]){
      case 0: console.log("zero");break;
      case 1: console.log("one");break;
      case 2: console.log("two");break;
      case 3: console.log("three");break;
      case 4: console.log("four");break;
      case 5: console.log("five");break;
      case 6: console.log("six");break;
      case 7: console.log("seven");break;
      case 8: console.log("eigth");break;
      case 9: console.log("nine");break;
      default:console.log("nose");break;
    }
  }
}