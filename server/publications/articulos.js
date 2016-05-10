
Meteor.publish('articulos',function(query){
    if (!query) {
        return Articulos.find();
    }
    var cursor = Articulos.find(
        { descripcion: {$regex : ".*"+query+".*"} }
    );
    return cursor;
});

Meteor.publish('articulo',function(articuloId){
    return Articulos.find({_id: articuloId});
});