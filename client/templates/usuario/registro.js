




Template.registro.events({
    "click #registro": function(evento)
    {
        evento.preventDefault();

        var nombre = jQuery('#nombre').val();
        var apellido = jQuery('#apellido').val();
        var telefono = jQuery('#telefono').val();
        var email = jQuery('#email').val();
        var password = jQuery('#password').val();

        usuario = {nombre: nombre, apellido: apellido, telefono: telefono, email: email, password: password};

        Meteor.call('crearUsuario', usuario );

    }
});
