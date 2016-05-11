

Template.listaArticulos.helpers({
   articulos: function(){
       return Articulos.find({},{sort: {createdAt: -1}});
   }
});