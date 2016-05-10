Template.login.events({
	"submit #login": function(evento) {

		evento.preventDefault();

		var email  = $("#email").val();
		var password = $("#pwd").val();


		Meteor.loginWithPassword(email, password, function(error){
			if(error){
				return Bert.alert( error.reason, 'danger', 'growl-top-right' );
			}
			Router.go('listaArticulos')
		});

	}
});