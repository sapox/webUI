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