document.addEventListener("DOMContentLoaded", function () {

  // HAMBÚRGUER
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  const links = nav.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
    });
  });

  // FORMULÁRIO
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
      form.reset();
    }
  });

  // CARROSSEL
  let index = 0;
  const slides = document.getElementById("slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  window.nextSlide = function () {
    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(${-index * 100}%)`;
  };

  window.prevSlide = function () {
    index = (index - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-index * 100}%)`;
  };

  setInterval(nextSlide, 5000);
});