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

document.addEventListener("DOMContentLoaded", () => {
  const carouseles = document.querySelectorAll(".carousel");

  carouseles.forEach((carousel) => {
    const pista = carousel.querySelector(".carousel-pista");
    if (!pista) return;

    const slides = Array.from(pista.querySelectorAll(".carousel-slide"));
    const btnPrev = carousel.querySelector(".carousel-flecha--prev");
    const btnNext = carousel.querySelector(".carousel-flecha--next");
    const contenedorPuntos = carousel.querySelector(".carousel-puntos");
    const etiqueta = carousel.dataset.etiquetaSlide || "elemento";

    let indiceActual = 0;

    slides.forEach((_, i) => {
      const punto = document.createElement("button");
      punto.type = "button";
      punto.className = "carousel-punto";
      punto.setAttribute("aria-label", `Ir a ${etiqueta} ${i + 1}`);
      punto.addEventListener("click", () => irASlide(i));
      contenedorPuntos.appendChild(punto);
    });

    const puntos = Array.from(contenedorPuntos.querySelectorAll(".carousel-punto"));

    function detenerReproduccion(slide) {
      const iframe = slide.querySelector("iframe");
      if (iframe) {
        iframe.src = iframe.src;
      }
    }

    function actualizarVista() {
      pista.style.transform = `translateX(-${indiceActual * 100}%)`;
      puntos.forEach((punto, i) => {
        punto.classList.toggle("activo", i === indiceActual);
      });
    }

    function irASlide(indice) {
      if (indice === indiceActual) return;
      detenerReproduccion(slides[indiceActual]);
      indiceActual = (indice + slides.length) % slides.length;
      actualizarVista();
    }

    btnPrev.addEventListener("click", () => irASlide(indiceActual - 1));
    btnNext.addEventListener("click", () => irASlide(indiceActual + 1));

    actualizarVista();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const juegos = document.querySelectorAll(".juego-card");

  juegos.forEach((juego) => {
    juego.addEventListener("click", () => {
      juego.classList.toggle("girada");
    });

    juego.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        juego.classList.toggle("girada");
      }
    });
  });
});
