/*
  MAIN.JS
  Renderiza los departamentos y lugares del pueblo a partir de data.js,
  maneja el lightbox de fotos, el menú mobile y los links de WhatsApp.
*/

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nombre-sitio-footer").textContent = NOMBRE_SITIO;
  document.getElementById("anio-actual").textContent = new Date().getFullYear();

  setupWhatsappLinks();
  renderDepartamentos();
  renderPanoramicas();
  renderLugares();
  setupLightbox();
  setupMenuMobile();
  setupHeroVideo();
  setupModalInfo();
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

    const fotosData = depto.fotos.join("|");

    return `
      <article class="card-depto" data-id="${depto.id}">
        <div class="card-depto__foto">
          <img
            src="${depto.fotos[0]}"
            alt="${depto.nombre}"
            loading="lazy"
            class="js-abrir-lightbox"
            data-fotos="${fotosData}"
            data-index="0"
          />
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

  const fotosData = PANORAMICAS.map((p) => p.src).join("|");

  cont.innerHTML = PANORAMICAS.map(
    (foto, index) => `
      <img
        src="${foto.src}"
        alt="${foto.alt}"
        loading="lazy"
        class="panoramica-item js-abrir-lightbox"
        data-fotos="${fotosData}"
        data-index="${index}"
      />
    `
  ).join("");
}

// ---------- Lugares del pueblo ----------
function renderLugares() {
  const categorias = [
    { id: "comer", contenedor: "lugares-comer" },
    { id: "helados", contenedor: "lugares-helados" },
    { id: "confiterias", contenedor: "lugares-confiterias" },
    { id: "ninos", contenedor: "lugares-ninos" },
  ];

  categorias.forEach(({ id, contenedor }) => {
    const el = document.getElementById(contenedor);
    if (!el) return;

    const items = LUGARES.filter((l) => l.categoria === id);

    el.innerHTML = items
      .map(
        (lugar) => `
        <div class="card-lugar">
          <img src="${lugar.imagen}" alt="${lugar.nombre}" loading="lazy" />
          <div class="card-lugar__info">
            <h4>${lugar.nombre}</h4>
            <p>${lugar.descripcion}</p>
          </div>
        </div>
      `
      )
      .join("");
  });
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
  }

  function cerrar() {
    lightbox.classList.remove("activo");
    document.body.classList.remove("no-scroll");
  }

  function mostrar(delta) {
    indiceActual = (indiceActual + delta + fotosActuales.length) % fotosActuales.length;
    lightboxImg.src = fotosActuales[indiceActual];
  }

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

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) cerrar();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("activo")) return;
    if (e.key === "Escape") cerrar();
    if (e.key === "ArrowLeft") mostrar(-1);
    if (e.key === "ArrowRight") mostrar(1);
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
