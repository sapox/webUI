// ( _. ) -> cosas de underscore
/*
(function($){

	var ListView = Backbone.View.extend({
		el: $('body'),
		
		initialize: function(){
			_.bindAll(this, 'render');

			this.render();
		},

		render: function(){
			$(this.el).append("<ul><li>hola a los mundos</li></ul>");
		}
	});

	var ListView = new ListView();
})(jQuery);
function arreglo(){
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
}*/
var Item = Backbone.Model.extend({
	idAttribute: "studentId",
	urlRoot: "/Items"
// not in lecture scope
});/*
var item = new Item();
item.on("change:name",function(){
	alert("Name is:" + this.get("name"));
});

*/
var Items = Backbone.Collection.extend({
	model: Item,
	url: "/Items"
});
var items = new Items();
items.add([{name: "Pencil"},{name: "Rubber"}]);
var Album = Backbone.Model.extend();
var album = new Album();

var AlbumView = Backbone.View.extend({
	initialize: function(){
		this.model.on("change", this.render)
	},
	render:function(){}
});
var view = new AlbumView({model: album});
var ItemView = Backbone.View.extend({
	events:{
		"click button.btn":"onClick"
	},
	onClick: function(){
		alert("You just clicked");
	}
})
var view = new ItemView({el:$("#item")});