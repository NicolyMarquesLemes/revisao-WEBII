
       document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formulario");
    const sucesso = document.getElementById("mensagem-sucesso");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let valido = true;
        const campos = document.querySelectorAll(".campo");

        campos.forEach(campo => {
            const input = campo.querySelector("input, textarea");
            const erro = campo.querySelector(".erro");

            if (input.value.trim() === "") {
                erro.textContent = "Este campo é obrigatório.";
                valido = false;
            } else {
                erro.textContent = "";
            }
        });

        if (valido) {
            sucesso.textContent = "Mensagem enviada com sucesso!";
            sucesso.style.display = "block";
            form.reset();
        }

        event.preventDefault();

    });

});