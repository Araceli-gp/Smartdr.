//FORMULARIO
function a_form() {
    document.getElementById('uno').style.display = 'flex';
    document.getElementById('cero').style.display = 'none';
}

function s_form() {
    document.getElementById('dos').style.display = 'flex';
    document.getElementById('uno').style.display = 'none';
    document.getElementById('cero').style.display = 'none';
}

function e_form() {
    document.getElementById('dos').style.display = 'none';
    document.getElementById('uno').style.display = 'none';
    document.getElementById('cero').style.display = 'none';
    document.getElementById('tres').style.display = 'flex';

}


$("#comenzar").click(function (e) {
    e.preventDefault();
});

$("#btn_dos").click(function (e) {
    e.preventDefault();
});

$("#btn_tres").click(function (e) {
    e.preventDefault();
});

//FIN FE FORMULARIO