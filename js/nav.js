// dropdown "Integrantes" del header, compartido por todas las paginas
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");
  if (dropdowns.length === 0) return;

  function cerrar(dropdown) {
    dropdown.classList.remove("abierto");
    dropdown.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
  }

  function cerrarTodos(excepto) {
    dropdowns.forEach((d) => {
      if (d !== excepto) cerrar(d);
    });
  }

  dropdowns.forEach((dropdown) => {
    const boton = dropdown.querySelector(".dropdown-toggle");
    if (!boton) return;

    boton.addEventListener("click", (evento) => {
      evento.stopPropagation();
      const abierto = dropdown.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", String(abierto));
      cerrarTodos(dropdown);
    });
  });

  // clic afuera del dropdown lo cierra
  document.addEventListener("click", (evento) => {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(evento.target)) cerrar(dropdown);
    });
  });

  // escape tambien lo cierra
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") cerrarTodos(null);
  });
});
