
function capitalizePrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function capitalizeUbicacion(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

Meteor.publish('articulos',function(query){
    if (!query) {
        return Articulos.find();
    }
    var cursor = Articulos.find({$or: [
        { descripcion: {$regex : ".*"+query+".*"} },
        { descripcion: {$regex : ".*"+capitalizePrimeraLetra(query)+".*"} },
        { titulo: {$regex : ".*"+query+".*"} },
        { titulo: {$regex : ".*"+capitalizePrimeraLetra(query)+".*"} },
        { ubicacion: {$regex : ".*"+query+".*"} },
        { ubicacion: {$regex : ".*"+capitalizeUbicacion(query)+".*"} }
    ]});
    return cursor;
});

Meteor.publish('articulo',function(articuloId){
    return Articulos.find({_id: articuloId});
});