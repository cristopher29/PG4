Template.search.events({
    "submit #search": function (e) {
        e.preventDefault();
        Session.set("searchValue", $("#searchValue").val());
    }
});

Template.search.helpers({
    busqueda: function() {
        valorbusqueda = Session.get("searchValue");
        console.log(valorbusqueda);
        return Posts.find({articulo: valorbusqueda});
    }
});