"use strict";
function abrir() {
    const abrindo = document.getElementById("abrindo");
    const fechando = document.getElementById("fechando");
    if (abrindo) {
        abrindo.style.display = "none";
    }
    if (fechando) {
        fechando.style.display = "block";
    }
}
function fechar() {
    const fechando = document.getElementById("fechando");
    const abrindo = document.getElementById("abrindo");
    if (fechando) {
        fechando.style.display = "none";
    }
    if (abrindo) {
        abrindo.style.display = "block";
    }
}
