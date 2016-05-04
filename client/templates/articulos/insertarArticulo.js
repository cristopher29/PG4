




Template.insertarArticulo.events({
    "click #insertar": function(evento)
    {
        evento.preventDefault();

        var tipo = jQuery('sel1').val();
        var categoria = jQuery('sel2').val();
        var ubicacion = jQuery('sel3').val();
        var descripcion = jQuery('descripcion').val();

        articulo = {tipo: tipo,categoria: categoria, ubicacion: ubicacion, descripcion: descripcion};

        Meteor.call('crearArticulo', articulo );

    }
});
