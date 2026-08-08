/*
  DATA.JS
  Acá vive toda la información editable del sitio: número de WhatsApp,
  departamentos y lugares del pueblo. Para agregar o modificar contenido
  no hace falta tocar el HTML ni el CSS, solo este archivo.
*/

// Número de WhatsApp en formato internacional SIN "+" ni espacios.
// Ejemplo Argentina: 54 9 291 XXXXXXX
const WHATSAPP_NUMERO = "5492920322506";

// Nombre del emprendimiento (aparece en el header, footer y título)
const NOMBRE_SITIO = "Mar Claro";

// -----------------------------
// DEPARTAMENTOS
// -----------------------------
// Para agregar uno nuevo: copiá un objeto entero, cambiá el "id" (único),
// completá los datos y agregá las fotos en img/departamentos/depto-N/
const DEPARTAMENTOS = [
  {
    id: 1,
    nombre: "Depto 1",
    capacidad: 5,
    ambientes: "2 dormitorios",
    ubicacion: "A 2 cuadras de la playa Piedras Coloradas",
    descripcion:
      "Departamento luminoso con balcón, totalmente equipado para 5 personas. Ideal para familias o grupos que buscan estar cerca del mar.",
    comodidades: ["Baño", "Cocina", "Comedor", "Asador", "Wifi", "DirecTV"],
    fotos: [
      "img/departamentos/depto-1/1.jpg",
      "img/departamentos/depto-1/2.jpg",
      "img/departamentos/depto-1/3.jpg",
      "img/departamentos/depto-1/4.jpg",
      "img/departamentos/depto-1/5.jpg",
      "img/departamentos/depto-1/6.jpg",
      "img/departamentos/depto-1/7.jpg",
      "img/departamentos/depto-1/8.jpg",
    ],
  },
  {
    id: 2,
    nombre: "Depto Vista al Mar II",
    capacidad: 6,
    ambientes: "2 dormitorios + living comedor",
    ubicacion: "A 3 cuadras del centro comercial",
    descripcion:
      "Amplio y cómodo para hasta 6 personas, a pasos de restaurantes y heladerías. Perfecto para grupos familiares.",
    comodidades: ["Baño", "Cocina", "Comedor", "Asador", "Wifi", "DirecTV"],
    fotos: [
      "img/departamentos/depto-2/1.jpg",
      "img/departamentos/depto-2/2.jpg",
      "img/departamentos/depto-2/3.jpg",
      "img/departamentos/depto-2/4.jpg",
      "img/departamentos/depto-2/5.jpg",
      "img/departamentos/depto-2/6.jpg",
      "img/departamentos/depto-2/7.jpg",
      "img/departamentos/depto-2/8.jpg",
    ],
  },
  {
    id: 3,
    nombre: "Departamento Bahía",
    capacidad: 2,
    ambientes: "Monoambiente",
    ubicacion: "Frente al mar, zona Balneario Las Grutas",
    descripcion:
      "Monoambiente acogedor con vista al mar, pensado para parejas. A metros de la bajada a la playa.",
    comodidades: ["Baño", "Cocina", "Comedor", "Asador", "Wifi", "DirecTV"],
    fotos: [
      "img/departamentos/depto-3/1.jpg",
      "img/departamentos/depto-3/2.jpg",
      "img/departamentos/depto-3/3.jpg",
      "img/departamentos/depto-3/4.jpg",
      "img/departamentos/depto-3/5.jpg",
      "img/departamentos/depto-3/6.jpg",
      "img/departamentos/depto-3/7.jpg",
      "img/departamentos/depto-3/8.jpg",
    ],
  },
  {
    id: 4,
    nombre: "Depto Los Acantilados",
    capacidad: 5,
    ambientes: "2 dormitorios + living comedor",
    ubicacion: "Zona de los acantilados, a 5 cuadras del centro",
    descripcion:
      "Ideal para grupos de amigos o familias, con espacio exterior y parrilla compartida.",
    comodidades: ["Baño", "Cocina", "Comedor", "Asador", "Wifi", "DirecTV"],
    fotos: [
      "img/departamentos/depto-4/1.jpg",
      "img/departamentos/depto-4/2.jpg",
      "img/departamentos/depto-4/3.jpg",
      "img/departamentos/depto-4/4.jpg",
      "img/departamentos/depto-4/5.jpg",
      "img/departamentos/depto-4/6.jpg",
      "img/departamentos/depto-4/7.jpg",
    ],
  },
  {
    id: 5,
    nombre: "Depto Costa Azul",
    capacidad: 4,
    ambientes: "1 dormitorio + living comedor con sofá cama",
    ubicacion: "A 4 cuadras de la playa, cerca de la lobería",
    descripcion:
      "Departamento renovado, tranquilo, ideal para descansar cerca de la naturaleza y la costa.",
    comodidades: ["Baño", "Cocina", "Comedor", "Asador", "Wifi", "DirecTV"],
    fotos: [
      "img/departamentos/depto-5/1.jpg",
      "img/departamentos/depto-5/2.jpg",
      "img/departamentos/depto-5/3.jpg",
      "img/departamentos/depto-5/4.jpg",
      "img/departamentos/depto-5/5.jpg",
      "img/departamentos/depto-5/6.jpg",
      "img/departamentos/depto-5/7.jpg",
      "img/departamentos/depto-5/8.jpg",
      "img/departamentos/depto-5/9.jpg",
      "img/departamentos/depto-5/10.jpg",
      "img/departamentos/depto-5/11.jpg",
      "img/departamentos/depto-5/12.jpg",
      "img/departamentos/depto-5/13.jpg",
    ],
  },
];

// -----------------------------
// FOTOS PANORÁMICAS DE LA COSTA
// -----------------------------
const PANORAMICAS = [
  { src: "img/panoramica/playa-1.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-2.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-3.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-4.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-5.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-6.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-7.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-8.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-9.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-10.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-11.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-12.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-13.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-14.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-15.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-16.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-17.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-18.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-19.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-20.jpg", alt: "Playa de Las Grutas" },
  { src: "img/panoramica/playa-21.jpg", alt: "Playa de Las Grutas" },
];

// -----------------------------
// ENLACES DEL PUEBLO
// -----------------------------
// Guías externas (TripAdvisor, turismo oficial, etc). Para agregar una,
// sumá un objeto con icono, título, descripción y la url de destino.
const ENLACES_PUEBLO = [
  {
    icono: "🍽️",
    titulo: "Restaurantes",
    descripcion: "Todos los restaurantes de Las Grutas, con reseñas y calificaciones de turistas.",
    url: "https://www.tripadvisor.com.ar/Restaurants-g312847-Las_Grutas_Province_of_Rio_Negro_Patagonia.html",
  },
  {
    icono: "☕",
    titulo: "Cafés y confiterías",
    descripcion: "Los mejores lugares para tomar un café o merendar en Las Grutas.",
    url: "https://www.tripadvisor.com.ar/Restaurants-g312847-c8-Las_Grutas_Province_of_Rio_Negro_Patagonia.html",
  },
  {
    icono: "🎡",
    titulo: "Qué hacer",
    descripcion: "Actividades y atracciones para disfrutar en el pueblo y sus alrededores.",
    url: "https://www.tripadvisor.com.ar/Attractions-g312847-Activities-Las_Grutas_Province_of_Rio_Negro_Patagonia.html",
  },
  {
    icono: "🍦",
    titulo: "Heladería recomendada",
    descripcion: "Fiore Helados, una de las heladerías mejor calificadas de Las Grutas.",
    url: "https://www.tripadvisor.com.ar/Restaurant_Review-g312847-d16204932-Reviews-Fiore_Helados-Las_Grutas_Province_of_Rio_Negro_Patagonia.html",
  },
  {
    icono: "🏖️",
    titulo: "Turismo oficial",
    descripcion: "Toda la información oficial de turismo de Las Grutas.",
    url: "https://lasgrutasturismo.gob.ar/",
  },
];
