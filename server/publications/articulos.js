Meteor.publish('articulos', function() {
    return Articulos.find();
});