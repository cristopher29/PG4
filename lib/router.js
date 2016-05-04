/**
* Created by CristoH on 27/04/2016. :( esperando rutas
*/
// 

////////////////////
//Configure/////////
////////////////////

Router.configure({
    loadingTemplate: 'loading',
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'
});

Router.route('/', function () {
    this.render('listaArticulos');
});

Router.route('/articulo/:_id', function () {
    this.render('articulo');
});

Router.route('/insertar', function () {
    this.render('insertarArticulo');
});

Router.route('/login', function () {
    this.render('login');
});

Router.route('/registro', function () {
    this.render('registro');
});

Router.route('/buscar', function () {
    this.render('search');
});
