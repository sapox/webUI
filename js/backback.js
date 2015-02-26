// ( _. ) -> cosas de underscore
(function($){

	var ListView = Backbone.View.extend({
		el: $('body'),
		
		initialize: function(){
			_.bindAll(this, 'render');

			this.render();
		},

		render: function(){
			$(this.el).append("<ul><li>hola pirulo</li></ul>");
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
}