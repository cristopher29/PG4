


Template.editarArticulo.events({
    'change #imagen': function(e){

        var input = e.target;

        if (input.files && input.files[0]) {

            var reader = new FileReader();

            reader.onload = function (image) {
                $('#imagen_preview').attr('src', image.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }

    },
    "submit #editar": function(evento)
    {
        evento.preventDefault();

        var titulo = $('#titulo').val();
        var tipo = $('#tipo').val();
        var categoria = $('#categoria').val();
        var ubicacion = $('#ubicacion').val();
        var descripcion = $('#descripcion').val();
        var imagen = $('#imagen_preview').attr('src');

        articulo = {titulo: titulo, tipo: tipo,categoria: categoria, ubicacion: ubicacion, descripcion: descripcion, imagen: imagen};

        Meteor.call('editarArticulo', this._id ,articulo, function(error,resultado){
            if(error){
                return Bert.alert( error.reason, 'danger', 'growl-top-right' );
            }
            Router.go('paginaArticulo',{_id: resultado._id})
        });

    }
});
