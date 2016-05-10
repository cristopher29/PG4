usuarioValido = function(user){
    if (!user.email.length || !user.password.length) {
        return false;
    }else{
        return true;
    }
};

Meteor.methods({
   //El usuario debe tener email, password, nombre, apellido, telefono.
   crearUsuario: function(user){

       if (usuarioValido(user)) {
           check(user.email, String);
           check(user.password, String);

           var nuevoUsuario = {
               email: user.email,
               password: user.password,
               profile: {
                   nombre: user.nombre,
                   apellido: user.apellido,
                   telefono: user.telefono
               }
           };
           Accounts.createUser(nuevoUsuario);

       }else{
           throw new Meteor.Error('invalid-user', 'Verifica los campos');
       }


   }
});