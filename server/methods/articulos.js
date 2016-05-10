Meteor.methods({
    //El usuario debe tener tipo, categoria, ubicacion y descripcion.
    insertarArticulo: function(postAttributes) {

        check(Meteor.userId(), String);

        var user = Meteor.user();
        var articulo = _.extend(postAttributes, {
            userId: user._id,
            author: user.profile.nombre,
            email: user.emails[0].address,
            createdAt: new Date()
        });

        var id = Articulos.insert(articulo);

        return {
            _id: id
        };
    },
    //Los nuevos valores deben tener tipo, categoria, ubicacion o descripcion.
    editarArticulo: function(idArticulo,nuevosValores){

        check(Meteor.userId(), String);
        var articulo = Articulos.findOne({_id: idArticulo});

        if(articulo && articulo.userId === Meteor.userId()){
            Articulos.update({_id: idArticulo}, {$set: nuevosValores});
            return {
                _id : idArticulo
            }
        }else{
            throw new Meteor.Error('articulo-incorrecto', 'Este articulo no te pertenece');
        }

    },
    eliminarArticulo: function(idArticulo){

        check(Meteor.userId(), String);
        var articulo = Articulos.findOne({_id: idArticulo});
        if(articulo && articulo.userId === Meteor.userId()){
            Articulos.remove({_id: idArticulo});
        }else{
            throw new Meteor.Error('articulo-incorrecto', 'Este articulo no te pertenece');
        }

    }
});