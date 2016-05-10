
Template.articulo.helpers({

    esMiArticulo: function(){
        if(this.userId == Meteor.userId()){
            return true;
        }else{
            return false;
        }
    }

});
