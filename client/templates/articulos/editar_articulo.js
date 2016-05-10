


Template.editarArticulo.events({
    "click #editar": function(evento)
    {
        evento.preventDefault();

        var tipo = jQuery('#sel1').val();
        var categoria = jQuery('#sel2').val();
        var ubicacion = jQuery('#sel3').val();
        var descripcion = jQuery('#descripcion').val();

        var articulo = {tipo: tipo,categoria: categoria, ubicacion: ubicacion, descripcion: descripcion};
        
        Meteor.call('editarArticulo', this._id ,articulo, function(error,resultado){
            if(error){
                return Bert.alert( error.reason, 'danger', 'growl-top-right' );
            }
            Router.go('paginaArticulo',{_id: resultado._id})
        });

    }
});
