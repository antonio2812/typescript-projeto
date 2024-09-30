function abrir(): void {
    const abrindo = document.getElementById("abrindo") as HTMLElement | null;
    const fechando = document.getElementById("fechando") as HTMLElement | null;

    if (abrindo) {
        abrindo.style.display = "none";
    }
    if (fechando) {
        fechando.style.display = "block";
    }
}

function fechar(): void {
    const fechando = document.getElementById("fechando") as HTMLElement | null;
    const abrindo = document.getElementById("abrindo") as HTMLElement | null;

    if (fechando) {
        fechando.style.display = "none";
    }
    if (abrindo) {
        abrindo.style.display = "block";
    }
}