# BlueTech · TP1 Front End

Proyecto web en equipo hecho con HTML, CSS y JavaScript para la materia **Desarrollo de Sistemas Web Front End** (comisión 2C26, 2026).

Somos cuatro. El sitio tiene una portada, un perfil individual por integrante, navegación entre todas las páginas y una bitácora donde contamos cómo lo fuimos armando.

**Sitio publicado:** https://front-end-tp-1-gray.vercel.app/

## Integrantes

| Integrante | Perfil | GitHub |
|---|---|---|
| Javier Nehuén López | [perfil-2.html](perfil-2.html) | [Jableed43](https://github.com/Jableed43) |
| Rocío Ailen Arenas | [perfil-3.html](perfil-3.html) | [rocioailenar](https://github.com/rocioailenar) |
| Facundo Sánchez | [perfil-4.html](perfil-4.html) | _pendiente_ |
| Damián Gorosito | [perfil-5.html](perfil-5.html) | [damiangorosito](https://github.com/damiangorosito) |

> María Cristina Gutiérrez formó parte del equipo hasta el 22 de septiembre de 2026. Ver la nota en **Cambios en el equipo**, más abajo.

## Tecnologías

- HTML5 y CSS3 (Grid, Flexbox, variables CSS, media queries)
- JavaScript sin librerías
- Google Fonts (Poppins)
- Devicon (íconos de tecnologías, por CDN)
- Git y GitHub para el trabajo en equipo, con una rama por integrante

## Estructura

```
├── index.html            portada: presenta al equipo y lista los perfiles
├── bitacora.html         bitácora del proceso
├── perfil-2.html         Javier
├── perfil-3.html         Rocío
├── perfil-4.html         Facundo
├── perfil-5.html         Damián
├── perfil-template.html  plantilla base de los perfiles
├── css/
│   ├── style.css         variables y estilos base
│   ├── header-footer.css header y footer compartidos por todas las páginas
│   ├── perfil.css        estilos de los perfiles (carruseles, etiquetas, tarjetas)
│   └── home.css          estilos exclusivos de la portada (hero, tarjetas, cta)
├── js/
│   ├── home.js           función de la portada
│   ├── perfil.js         filtros, carruseles y tarjetas de los perfiles
│   └── damian.js         script del perfil de Damián
├── img/                  avatares de cada integrante (una carpeta por persona) e íconos
└── context/              notas de diseño del proyecto
```

Los perfiles salen de `perfil-template.html`: mismo header, footer y estilos, y cada integrante completa sus datos.

## Guía de estilos

**Tipografía:** Poppins (Google Fonts), pesos 400, 500, 600 y 700.

**Paleta**

Perfiles:

| Uso | Color |
|---|---|
| Principal | `#2563EB` |
| Secundario | `#1E40AF` |
| Fondo | `#F8FAFC` |
| Superficie (tarjetas) | `#FFFFFF` |
| Texto | `#1E293B` |
| Texto secundario | `#64748B` |

Portada, header y footer:

| Uso | Color |
|---|---|
| Azul principal | `#0066CC` |
| Azul oscuro | `#004499` |
| Azul claro | `#E6F0FA` |
| Negro | `#111111` |
| Gris oscuro | `#333333` |
| Gris claro | `#F4F4F6` |
| Borde | `#DDDDDD` |

**Iconografía:** emojis para datos y etiquetas, Devicon para tecnologías y un ícono de GitHub en SVG (`img/icons/github.svg`).

## Funciones de JavaScript

| Dónde | Archivo | Qué hace |
|---|---|---|
| Portada | `js/home.js` | El botón **Sorprendeme** elige un integrante al azar y abre su perfil. |
| Perfil de Javier | `js/perfil.js` | Filtro de habilidades por categoría, carruseles de películas y discos, y tarjetas que se dan vuelta al hacer clic. |
| Perfil de Rocío | `js/perfil.js` | Filtro de habilidades (Desarrollo / Ciberseguridad) y carruseles de películas y canciones. |
| Perfiles con carrusel (Rocío, Facundo, Damián) | `js/perfil.js` | Carruseles de películas y discos con flechas y puntos. Al cambiar de slide se frena el video o el disco que estaba sonando. |
| Perfil de Damián | `js/damian.js` | _Pendiente: su función propia._ |

## Cómo verlo en local

Alcanza con abrir `index.html` en el navegador. Si preferís un servidor local:

```bash
python -m http.server 8000
```

y entrar a `http://localhost:8000`.

## Cambios en el equipo

**María Cristina Gutiérrez** dejó el equipo el martes 22 de septiembre de 2026. Su mensaje al grupo:

> Hola, les aviso que finalmente me aprobaron la equivalencia, por lo que no voy a continuar cursando esta materia ni con el TP1 actual.

Por eso su perfil (`perfil-1.html`) ya no forma parte del sitio publicado. Su trabajo sigue disponible en el historial del repositorio.

## Uso de IA y Criterio de Autoría

En cumplimiento con el requisito transversal establecido en la consigna del TP1:

* **Herramientas y Modelos Utilizados:** Se consultaron modelos de lenguaje (como ChatGPT, Claude y Gemini) como asistentes técnicos de desarrollo, resolución de dudas conceptuales y apoyo en la redacción de documentación.
* **Ámbitos de Asistencia y Depuración (Debugging):**
  * **Estructura y CSS:** Consultas sobre maquetación semántica en HTML5 y optimización de layouts responsivos con CSS Grid y Flexbox.
  * **JavaScript Vanilla:** Asistencia en la revisión de sintaxis, depuración de errores en la consola del navegador y soporte en la lógica de interacciones dinámicas (como la rotación de tarjetas y el manejo de los carruseles).
  * **Documentación:** Apoyo en la organización y formateo en Markdown del archivo `README.md`.
* **Planes y Experiencia Previa del Equipo:** Las herramientas se utilizaron mediante **planes gratuitos**. El equipo contaba con conocimientos previos de maquetación y programación, por lo que la IA se empleó como un complemento para acelerar la resolución de bloqueos puntuales.
* **Generación de Imágenes e Ilustraciones:** **No se utilizaron herramientas de IA para la creación de imágenes, logotipos ni avatares.** Todos los recursos visuales del sitio corresponden a fotografías/avatares propios de los integrantes y los íconos técnicos provienen directamente de fuentes vectoriales y la CDN de Devicon.
* **Revisión y Control Humano:** Cada sugerencia de código generada por IA fue probada, modificada y adaptada activamente por los integrantes del equipo antes de integrarse al repositorio grupal. Se aseguró la comprensión completa del código fuente para mantener la autoría y la responsabilidad técnica del proyecto.

## Pendientes

- Capturas de pantalla de la portada y de cada perfil.
- GitHub de Facundo.
- Función dinámica propia en los perfiles de Rocío, Facundo y Damián (hoy comparten el filtro y el carrusel generales).
