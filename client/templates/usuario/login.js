Template.login.events({
	"mousedown button[type=submit]": function(evento)
	{
		evento.preventDefault();
		// En espera
		alert("Click en submit"
			+"\nCorreo electrónico: "+ $("#loginEmail input").val()
			+"\nContraseña: "+ $("#loginPassword input").val());
	}
});