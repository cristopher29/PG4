Meteor.methods({
    crearArticulo: function(articulo) {

        check(Meteor.userId(), String);
        Articulos.insert(articulo);

    },
    editarArticulo: function(idArticulo,nuevosValores){

        check(Meteor.userId(), String);
        var articulo = Articulos.findOne({_id: idArticulo});

        if(articulo && articulo.idUsuario === Meteor.userId){
            Articulos.update({_id: idArticulo}, {$set: nuevosValores});
        }else{
            throw new Meteor.Error('articulo-incorrecto', 'Este articulo no te pertenece');
        }

    },
    eliminarArticulo: function(idArticulo){

        check(Meteor.userId(), String);
        var articulo = Articulos.findOne({_id: idArticulo});
        if(articulo && articulo.idUsuario === Meteor.userId){
            Articulos.remove({_id: idArticulo});
        }else{
            throw new Meteor.Error('articulo-incorrecto', 'Este articulo no te pertenece');
        }

    }
});