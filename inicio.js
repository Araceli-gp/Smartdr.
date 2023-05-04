console.log("pollito");
// Obtiene el botón y el modal por su ID
var btn = document.getElementById("ventana");
var modal = document.getElementById("mimodal");

// Obtiene el span que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el botón, muestra el modal
btn.onclick = function () {
    modal.style.display = "block";
}

// Cuando el usuario haga clic en el span (x), cierra el modal
span.onclick = function () {
    modal.style.display = "none";
}

// Cuando el usuario