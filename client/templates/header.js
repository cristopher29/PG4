
Template.header.events({
    'click #logout': function(e){
        e.preventDefault();
        Meteor.logout();
    },
    'submit #buscar': function(e){

        e.preventDefault();
        var query = $('#query').val();
        if(query){
            console.log(query);
            Router.go('search', {_query: query});
        }else{
            Router.go('search', {_query: "-"});
        }

    }
});
