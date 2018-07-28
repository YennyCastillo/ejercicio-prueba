const btnLogout = document.getElementById("btnLogout");
const signin = document.getElementById("signin");
const register = document.getElementById("register");
const email = document.getElementById("email");
const password = document.getElementById("password");
const logout = document.getElementById("logout");


window.onload = () => { 
// window.onload nos permite verificar si nuestrso usuarios se encuentran logueados y copia,mos el codigo de 
  // configurar un observador de estado de autenticacion y obten datos del usuario(Firebase)
firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            login.classList.remove('hiden');
            logout.classList.add('hiden');
            console.log('Inicio Logueado');
        } else {
            console.log('No esta logueado');
            login.classList.add('hiden');
            logout.classList.remove('hiden');
        }
    });
}


register.addEventListener('click', () => {
    //esta funcion se copia de firebase de crear usuarios
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
       //agregamos el then o la promesa
    .then(function () {
            console.log('Se creo el usuario')
        })
        .catch(function (error) {
            console.log(error.code, error.message);
        });
});

signin.addEventListener('click', () => {
    //esta funcion se copia de fire de acceso de usuarios existentes (loguearse)
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(function () {
            console.log('Inicia Sesion')
        })
        .catch(function (error) {
            console.log(error.code, error.message);
        });
})

btnLogout.addEventListener('click', () => {
    firebase.auth().signOut.then(function () {
        console.log('Cerro Sesion');
        login.classList.remove('hiden');
        logout.classList.add('hiden');
    })
        .catch(function (error) {
            console.log('Error al cerrar Sesión');
        });

})

