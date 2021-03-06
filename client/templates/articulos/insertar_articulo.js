


Template.insertarArticulo.events({

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

    "submit #insertar": function(evento){
        evento.preventDefault();

        if(!Meteor.user()){
            Router.go('login');
            return Bert.alert( 'Inicia Sesion', 'warning', 'growl-top-right' );
        }
        var titulo = $('#titulo').val();
        var tipo = $('#tipo').val();
        var categoria = $('#categoria').val();
        var ubicacion = $('#ubicacion').val();
        var descripcion = $('#descripcion').val();
        var imagen = $('#imagen_preview').attr('src');

        articulo = {titulo: titulo, tipo: tipo,categoria: categoria, ubicacion: ubicacion, descripcion: descripcion, imagen: imagen};

        Meteor.call('insertarArticulo', articulo, function(error, resultado){
            if(error){
                return Bert.alert( error.reason, 'danger', 'growl-top-right' );
            }

            Router.go('paginaArticulo', {_id: resultado._id})

        });
    }
});
