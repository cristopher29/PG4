/**
 * Created by CristoH on 10/05/2016.
 */


Template.listaArticulos.helpers({
   articulos: function(){
       return Articulos.find();
   }
});