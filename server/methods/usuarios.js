usuarioValido = function(user){
    if (!user.email.length || !user.password.length) {
        return false;
    }else{
        return true;
    }
};


Meteor.methods({
   crearUsuario: function(user){

       if (usuarioValido(user)) {
           check(user.email, String);
           check(user.password, String);

           var campos = {
               email: user.email,
               password: user.password,
               profile: {
                   nombre: user.nombre,
                   apellido: user.apellido,
                   telefono: user.telefono
               }
           };
           Accounts.createUser(campos);

       }else{
           throw new Meteor.Error('invalid-user', 'Verifica los campos');
       }


   },
   loginUsuario: function(user){

       if (usuarioValido(user)) {
           check(user.email, String);
           check(user.password, String);
           Meteor.loginWithPassword(user.email, user.password);
       }else{
           throw new Meteor.Error('invalid-user', 'Verifica los campos');
       }
   },
   cerrarSesion: function(){
       check(Meteor.userId(), String);
       Meteor.logout();
   }
});