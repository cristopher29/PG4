/**
 * Created by CristoH on 11/05/2016.
 */

Template.paginaArticulo.helpers({
   esMiArticulo: function(){
       if(this.userId == Meteor.userId()){
           return true;
       }else{
           return false;
       }
   }
});