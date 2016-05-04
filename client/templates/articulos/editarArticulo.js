



Template.editarArticulo.helpers({
    articulo: function(){
        var id = Router.current().params._id;
        return Articulos.find({_id: id});
    }
});


Template.editarArticulo.events({
    "click #editar": function(evento)
    {
        evento.preventDefault();

        var tipo = jQuery('#sel1').val();
        var categoria = jQuery('#sel2').val();
        var ubicacion = jQuery('#sel3').val();
        var descripcion = jQuery('#descripcion').val();

        articulo = {tipo: tipo,categoria: categoria, ubicacion: ubicacion, descripcion: descripcion};
        id = Router.current().params._id;
        
        Meteor.call('editarArticulo', id ,articulo );

    }
});
