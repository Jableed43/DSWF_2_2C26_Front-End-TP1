document.addEventListener("DOMContentLoaded", () => {
  const filtros = document.getElementById("filtros-habilidades");
  if (!filtros) return;

  const botones = Array.from(filtros.querySelectorAll("li"));
  const tarjetas = Array.from(document.querySelectorAll(".skill-block[data-categoria]"));

  function aplicarFiltro(filtro) {
    tarjetas.forEach((tarjeta) => {
      const coincide = filtro === "*" || tarjeta.dataset.categoria === filtro;
      tarjeta.classList.toggle("oculto", !coincide);
    });
  }

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      botones.forEach((b) => b.classList.remove("activo"));
      boton.classList.add("activo");
      aplicarFiltro(boton.dataset.filtro);
    });
  });

  const activoInicial = botones.find((b) => b.classList.contains("activo")) || botones[0];
  if (activoInicial) {
    activoInicial.classList.add("activo");
    aplicarFiltro(activoInicial.dataset.filtro);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const esfera = document.getElementById("skills-arena");
  if (!esfera) return;

  const items = Array.from(esfera.querySelectorAll(".skill-item"));
  const total = items.length;
  const radio = 352;
  const anguloDorado = Math.PI * (3 - Math.sqrt(5));

  items.forEach((item, i) => {
    const y = 1 - (i / (total - 1)) * 2;
    const radioEnY = Math.sqrt(1 - y * y);
    const theta = anguloDorado * i;

    const x = Math.cos(theta) * radioEnY;
    const z = Math.sin(theta) * radioEnY;

    const posX = x * radio;
    const posY = y * radio;
    const posZ = z * radio;

    const rotY = Math.atan2(x, z) * (180 / Math.PI);
    const rotX = -Math.asin(y) * (180 / Math.PI);

    item.style.transform =
      `translate3d(${posX}px, ${posY}px, ${posZ}px) rotateY(${rotY}deg) rotateX(${rotX}deg)`;
  });
});
