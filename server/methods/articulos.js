Meteor.methods({
    insercion: function(postAttributes) {
        check(Meteor.userId(), String);
        check(postAttributes, {
            desconocido: String,
            desconocido: String,
            desconocido: String
        });


    }
});