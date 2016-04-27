Template.login.events({
	"submit form": function(evento)
	{
		evento.preventDefault();
		// En espera
		alert("Click en submit"
			+"\nCorreo electrónico: "+ $("#loginEmail input").val()
			+"\nContraseña: "+ $("#loginPassword input").val());
	}
});