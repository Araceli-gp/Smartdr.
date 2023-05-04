$(document).ready(function () {

    const firebaseConfig = {
        apiKey: "AIzaSyBGbgQBShx-0acF8siE6cXF0j5bPj8GLe8",
        authDomain: "smart-dr-aa25c.firebaseapp.com",
        projectId: "smart-dr-aa25c",
        storageBucket: "smart-dr-aa25c.appspot.com",
        messagingSenderId: "1092471339024",
        appId: "1:1092471339024:web:93e66e7975979926583295"
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);

    console.log(app);

    const auth = firebase.auth();

    var provider = new firebase.auth.GoogleAuthProvider();

    // Initialize Cloud Firestore and get a reference to the service
    const db = firebase.firestore();

    /*----------------------------------------
  registrar usuario con correo y contraseña 
 ---------------------------------------*/

    $("#registrar").click(function () {
        //datos del registro
        var nombre = $("#reg-nombre").val();
        var apellido = $("#reg-apellido").val();
        var email = $("#reg-email").val();
        var password = $("#reg-contraseña").val();
        // console.log(nombre, apellido, email, password); //funciona 

        //codigo de firebase
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
                console.log("se registro");
                window.location.href = "index.html";
                addNombre(nombre)

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage);
            });

    })

    /*--------------------------------------
  iniciar sesion con correo y contraseña
  ----------------------------------------*/
    $("#ingresar").click(function () {
        //variables
        let email = $("#in-email").val();
        let pass = $("#in-contraseña").val();

        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
                console.log("ingresaste");
                window, location.href = "inicio.html";
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    })
});