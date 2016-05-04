
Template.search.helpers({
    articulos: function() {
        Meteor.subscribe('articulos', Session.get('query'));
        return Articulos.find();
    }
});

Template.search.events({
    'submit #buscador': function (e) {

        e.preventDefault();
        Session.set('query', $('#query').val());

    },
    'keyup #query': function(){
        Session.set('query', $('#query').val());

    }
});