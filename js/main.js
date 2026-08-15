/*
  MAIN.JS
  Renderiza los departamentos y lugares del pueblo a partir de data.js,
  maneja el lightbox de fotos, el menú mobile y los links de WhatsApp.
*/

// Convierte "img/foo/bar.jpg" en "img/foo/bar.webp" (misma foto, formato mas liviano)
function aWebp(rutaJpg) {
  return rutaJpg.replace(/\.jpe?g$/i, ".webp");
}

// Convierte "img/foo/bar.jpg" en "img/foo/bar-thumb.webp" (version chica para grillas)
function aThumb(rutaJpg) {
  return rutaJpg.replace(/\.jpe?g$/i, "-thumb.webp");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nombre-sitio-footer").textContent = `${NOMBRE_SITIO} · Alojamientos en Las Grutas`;
  document.getElementById("anio-actual").textContent = new Date().getFullYear();

  setupWhatsappLinks();
  renderDepartamentos();
  renderPanoramicas();
  renderLugares();
  setupLightbox();
  setupVideoLightbox();
  setupMenuMobile();
  setupHeroVideo();
  setupModalInfo();
  setupYoutubeFacade();
  setupMapaFacade();
});

// ---------- Modal de información del alojamiento ----------
function setupModalInfo() {
  const btnAbrir = document.getElementById("btn-info-alojamiento");
  const modal = document.getElementById("modal-info");
  const btnCerrar = document.getElementById("modal-info-cerrar");
  if (!btnAbrir || !modal || !btnCerrar) return;

  function abrir() {
    modal.classList.add("activo");
    document.body.classList.add("no-scroll");
  }

  function cerrar() {
    modal.classList.remove("activo");
    document.body.classList.remove("no-scroll");
  }

  btnAbrir.addEventListener("click", abrir);
  btnCerrar.addEventListener("click", cerrar);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) cerrar();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("activo")) cerrar();
  });
}

// ---------- Video de portada (solo mobile) ----------
function setupHeroVideo() {
  const video = document.getElementById("hero-video");
  if (!video) return;

  const esMobile = window.matchMedia("(max-width: 800px)").matches;
  if (!esMobile) return;

  const source = document.createElement("source");
  source.src = "img/hero/video-hero.mp4";
  source.type = "video/mp4";
  video.appendChild(source);
  video.load();
  video.play().catch(() => {});
}

// ---------- Video de YouTube (carga el iframe solo al hacer clic, sin cookies de terceros hasta entonces) ----------
function setupYoutubeFacade() {
  const contenedor = document.getElementById("video-embed-youtube");
  const boton = document.getElementById("btn-cargar-youtube");
  if (!contenedor || !boton) return;

  boton.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/swiQZv-K1Oc?autoplay=1";
    iframe.title = "Las Grutas - Así es el Caribe de Río Negro";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    contenedor.replaceChildren(iframe);
  });
}

// ---------- Mapa de Google (carga el iframe solo al hacer clic, sin cookies de terceros hasta entonces) ----------
function setupMapaFacade() {
  const contenedor = document.getElementById("mapa-embed");
  const boton = document.getElementById("btn-cargar-mapa");
  if (!contenedor || !boton) return;

  boton.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.google.com/maps?q=-40.7993473,-65.0669793&z=17&hl=es&output=embed";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.title = "Mapa de Mar Claro - Arroyo Salado 239, Las Grutas";
    contenedor.replaceChildren(iframe);
  });
}

// ---------- WhatsApp ----------
function linkWhatsapp(mensaje) {
  const texto = encodeURIComponent(mensaje);
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${texto}`;
}

function setupWhatsappLinks() {
  document.querySelectorAll("[data-whatsapp-general]").forEach((el) => {
    el.href = linkWhatsapp(`Hola! Vi ${NOMBRE_SITIO} y quería consultar por disponibilidad.`);
  });
}

// ---------- Departamentos ----------
function renderDepartamentos() {
  const grid = document.getElementById("departamentos-grid");
  if (!grid) return;

  grid.innerHTML = DEPARTAMENTOS.map((depto) => {
    const comodidades = depto.comodidades
      .map((c) => `<li>${c}</li>`)
      .join("");

    const fotosWebp = depto.fotos.map(aWebp);
    const fotosData = fotosWebp.join("|");

    return `
      <article class="card-depto" data-id="${depto.id}">
        <div class="card-depto__foto">
          <picture>
            <source srcset="${aThumb(depto.fotos[0])}" type="image/webp" />
            <img
              src="${depto.fotos[0]}"
              alt="${depto.nombre}"
              loading="lazy"
              class="js-abrir-lightbox"
              data-fotos="${fotosData}"
              data-index="0"
            />
          </picture>
          <span class="card-depto__capacidad">👥 ${depto.capacidad} personas</span>
        </div>
        <div class="card-depto__info">
          <h3>${depto.nombre}</h3>
          <p class="card-depto__ubicacion">📍 ${depto.ubicacion}</p>
          <p class="card-depto__ambientes">${depto.ambientes}</p>
          <p class="card-depto__desc">${depto.descripcion}</p>
          <ul class="card-depto__comodidades">${comodidades}</ul>
          <a
            class="btn btn--whatsapp"
            target="_blank"
            rel="noopener"
            href="${linkWhatsapp(`Hola! Me interesa el ${depto.nombre} de ${NOMBRE_SITIO}. ¿Está disponible?`)}"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </article>
    `;
  }).join("");
}

// ---------- Panorámicas ----------
function renderPanoramicas() {
  const cont = document.getElementById("panoramicas-grid");
  if (!cont) return;

  const fotosData = PANORAMICAS.map((p) => aWebp(p.src)).join("|");

  cont.innerHTML = PANORAMICAS.map(
    (foto, index) => `
      <picture>
        <source srcset="${aThumb(foto.src)}" type="image/webp" />
        <img
          src="${foto.src}"
          alt="${foto.alt}"
          loading="lazy"
          class="panoramica-item js-abrir-lightbox"
          data-fotos="${fotosData}"
          data-index="${index}"
        />
      </picture>
    `
  ).join("");
}

// ---------- Enlaces del pueblo ----------
function renderLugares() {
  const el = document.getElementById("enlaces-pueblo-grid");
  if (!el) return;

  el.innerHTML = ENLACES_PUEBLO.map(
    (enlace) => `
      <div class="card-enlace">
        <span class="card-enlace__icono">${enlace.icono}</span>
        <h3>${enlace.titulo}</h3>
        <p>${enlace.descripcion}</p>
        <a class="card-enlace__btn" href="${enlace.url}" target="_blank" rel="noopener">
          Click aquí
        </a>
      </div>
    `
  ).join("");
}

// ---------- Lightbox ----------
function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const btnCerrar = document.getElementById("lightbox-cerrar");
  const btnPrev = document.getElementById("lightbox-prev");
  const btnNext = document.getElementById("lightbox-next");

  let fotosActuales = [];
  let indiceActual = 0;

  function abrir(fotos, index) {
    fotosActuales = fotos;
    indiceActual = index;
    lightboxImg.src = fotosActuales[indiceActual];
    lightbox.classList.add("activo");
    document.body.classList.add("no-scroll");
    // Se usa un hash distinto (no la misma URL) porque algunos navegadores
    // mobile no disparan el back-button de forma confiable si el estado
    // empujado tiene exactamente la misma URL que el anterior.
    history.pushState({ lightboxAbierto: true }, "", "#galeria");
  }

  function cerrarVisual() {
    lightbox.classList.remove("activo");
    document.body.classList.remove("no-scroll");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (location.hash === "#galeria") {
      history.replaceState(null, "", location.pathname + location.search);
    }
  }

  function cerrar() {
    if (!lightbox.classList.contains("activo")) return;
    if (history.state && history.state.lightboxAbierto) {
      history.back();
    } else {
      cerrarVisual();
    }
  }

  function mostrar(delta) {
    indiceActual = (indiceActual + delta + fotosActuales.length) % fotosActuales.length;
    lightboxImg.src = fotosActuales[indiceActual];
  }

  window.addEventListener("popstate", cerrarVisual);

  document.addEventListener("click", (e) => {
    const target = e.target.closest(".js-abrir-lightbox");
    if (!target) return;
    const fotos = target.dataset.fotos.split("|");
    const index = parseInt(target.dataset.index, 10) || 0;
    abrir(fotos, index);
  });

  btnCerrar.addEventListener("click", cerrar);
  btnPrev.addEventListener("click", () => mostrar(-1));
  btnNext.addEventListener("click", () => mostrar(1));
  lightboxImg.addEventListener("click", () => mostrar(1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) cerrar();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("activo")) return;
    if (e.key === "Escape") cerrar();
    if (e.key === "ArrowLeft") mostrar(-1);
    if (e.key === "ArrowRight") mostrar(1);
  });

  // Deslizar con el dedo (swipe) para pasar de foto en mobile
  let toqueInicioX = 0;
  const UMBRAL_SWIPE = 40;

  lightbox.addEventListener(
    "touchstart",
    (e) => {
      toqueInicioX = e.touches[0].clientX;
    },
    { passive: true }
  );

  lightbox.addEventListener(
    "touchend",
    (e) => {
      const toqueFinX = e.changedTouches[0].clientX;
      const diferencia = toqueFinX - toqueInicioX;
      if (Math.abs(diferencia) < UMBRAL_SWIPE) return;
      if (diferencia < 0) {
        mostrar(1);
      } else {
        mostrar(-1);
      }
    },
    { passive: true }
  );
}

// ---------- Videos de la playa La Rinconada ----------
function setupVideoLightbox() {
  const btnAbrir = document.getElementById("btn-abrir-videos-rinconada");
  const lightbox = document.getElementById("video-lightbox");
  const player = document.getElementById("video-lightbox-player");
  const btnCerrar = document.getElementById("video-lightbox-cerrar");
  const btnPrev = document.getElementById("video-lightbox-prev");
  const btnNext = document.getElementById("video-lightbox-next");
  if (!btnAbrir || !lightbox || !player) return;

  let indiceActual = 0;

  function mostrar(index) {
    indiceActual = (index + VIDEOS_RINCONADA.length) % VIDEOS_RINCONADA.length;
    player.src = VIDEOS_RINCONADA[indiceActual];
    player.play().catch(() => {});
  }

  function abrir() {
    lightbox.classList.add("activo");
    document.body.classList.add("no-scroll");
    mostrar(0);
    history.pushState({ videoLightboxAbierto: true }, "", "#videos");
  }

  function cerrarVisual() {
    lightbox.classList.remove("activo");
    document.body.classList.remove("no-scroll");
    player.pause();
    player.removeAttribute("src");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (location.hash === "#videos") {
      history.replaceState(null, "", location.pathname + location.search);
    }
  }

  function cerrar() {
    if (!lightbox.classList.contains("activo")) return;
    if (history.state && history.state.videoLightboxAbierto) {
      history.back();
    } else {
      cerrarVisual();
    }
  }

  window.addEventListener("popstate", () => {
    if (lightbox.classList.contains("activo")) cerrarVisual();
  });

  player.addEventListener("ended", () => {
    if (indiceActual < VIDEOS_RINCONADA.length - 1) {
      mostrar(indiceActual + 1);
    } else {
      cerrar();
    }
  });

  btnAbrir.addEventListener("click", abrir);
  btnCerrar.addEventListener("click", cerrar);
  btnPrev.addEventListener("click", () => mostrar(indiceActual - 1));
  btnNext.addEventListener("click", () => mostrar(indiceActual + 1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) cerrar();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("activo")) return;
    if (e.key === "Escape") cerrar();
    if (e.key === "ArrowLeft") mostrar(indiceActual - 1);
    if (e.key === "ArrowRight") mostrar(indiceActual + 1);
  });
}

// ---------- Menú mobile ----------
function setupMenuMobile() {
  const btn = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  btn.addEventListener("click", () => {
    nav.classList.toggle("activo");
    btn.classList.toggle("activo");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("activo");
      btn.classList.remove("activo");
    });
  });
}
