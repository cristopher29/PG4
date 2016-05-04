Template.search.events({
    "submit #search": function (e) {
        e.preventDefault();
        Session.set("searchValue", $("#searchValue").val());
    }
});

Template.search.helpers({
    messages: function() {
        valorbusqueda = Session.get("searchValue");
        console.log(valorbusqueda);
        return Posts.find({examen: valorbusqueda});
    }
});