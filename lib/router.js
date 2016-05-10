Router.configure({
    loadingTemplate: 'loading',
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'
});

Router.route('/', {
    name: 'listaArticulos',
    waitOn: function(){
        return Meteor.subscribe('articulos');
    }
});

Router.route('/insertar', {
    name: 'insertarArticulo'
});

Router.route('/articulo/:_id', {
    name: 'paginaArticulo',
    waitOn: function(){
        return Meteor.subscribe('articulo', this.params._id);
    },
    data: function(){
        return Articulos.findOne({_id: this.params._id});
    }
});

Router.route('/editar/:_id', {
    name: 'editarArticulo',
    waitOn: function(){
        return Meteor.subscribe('articulo', this.params._id);
    },
    data: function(){

        if(this.ready()){

            var articulo = Articulos.findOne({_id: this.params._id});
            if(articulo.userId == Meteor.userId()){
                return articulo;
            }else{
                this.render('notFound');
            }
        }
    }

});

Router.route('/login',{
    name: 'login'
});

Router.route('/registro', {
    name: 'registro'
});

Router.route('/buscar', {
    name: 'search'
});
