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
    ubicacion: "A 50 mts de la bajada a la playa La Rinconada",
    descripcion:
      "Departamento luminoso, totalmente equipado para 5 personas. Ideal para familias o grupos que buscan estar cerca del mar.",
    comodidades: ["Baño", "Cocina", "Comedor", "Asador", "Wifi", "DirecTV", "Estacionamiento techado"],
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
    nombre: "Depto 2",
    capacidad: 3,
    ambientes: "1 dormitorio",
    ubicacion: "A 50 mts de la bajada a la playa La Rinconada",
    descripcion:
      "Departamento cómodo y luminoso para 3 personas, en una zona muy tranquila, sin ruido de bares ni boliches cercanos. Ideal para descansar.",
    comodidades: ["Baño", "Cocina", "Comedor", "Asador", "Wifi", "DirecTV", "Aire acondicionado", "Estacionamiento techado"],
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
    nombre: "Depto 3",
    capacidad: 4,
    ambientes: "1 dormitorio",
    ubicacion: "A 50 mts de la bajada a la playa La Rinconada",
    descripcion:
      "Departamento amplio para 4 personas, con dormitorio sommier queen, ideal para un placentero descanso.",
    comodidades: ["Baño", "Cocina", "Comedor", "Asador", "Wifi", "DirecTV", "Aire acondicionado", "Estacionamiento techado"],
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
    nombre: "Depto 4",
    capacidad: 4,
    ambientes: "2 dormitorios",
    ubicacion: "A 50 mts de la bajada a la playa La Rinconada",
    descripcion:
      "Departamento para 4 personas, ideal para grupos de amigos o familias, con espacio exterior y parrilla privada.",
    comodidades: ["Baño", "Cocina", "Comedor", "Asador", "Wifi", "DirecTV", "Aire acondicionado", "Estacionamiento techado"],
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
    nombre: "Depto 5",
    capacidad: 6,
    ambientes: "2 dormitorios",
    ubicacion: "A 50 mts de la bajada a la playa La Rinconada",
    descripcion:
      "Departamento renovado para 6 personas, tranquilo, ideal para descansar cerca de la naturaleza y la costa.",
    comodidades: ["Baño", "Cocina", "Comedor", "Asador", "Wifi", "DirecTV", "Aire acondicionado", "Estacionamiento techado"],
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
  { src: "img/panoramica/playa-1.jpg", alt: "Vista aérea de la costa y el pueblo de Las Grutas" },
  { src: "img/panoramica/playa-2.jpg", alt: "Aves en la playa de Las Grutas" },
  { src: "img/panoramica/playa-3.jpg", alt: "Atardecer nublado en los acantilados de Las Grutas" },
  { src: "img/panoramica/playa-4.jpg", alt: "Olas rompiendo cerca de la bajada a la playa en Las Grutas" },
  { src: "img/panoramica/playa-5.jpg", alt: "Escalera de acceso a la playa en Las Grutas" },
  { src: "img/panoramica/playa-6.jpg", alt: "Olas rompiendo contra las rocas en Las Grutas" },
  { src: "img/panoramica/playa-7.jpg", alt: "Rocas y mar en la costa de Las Grutas" },
  { src: "img/panoramica/playa-8.jpg", alt: "Costa rocosa de Las Grutas, Río Negro" },
  { src: "img/panoramica/playa-9.jpg", alt: "Playa de Las Grutas con turistas disfrutando del día" },
  { src: "img/panoramica/playa-10.jpg", alt: "Vista panorámica de la playa de Las Grutas" },
  { src: "img/panoramica/playa-11.jpg", alt: "Acantilados de Las Grutas junto al mar" },
  { src: "img/panoramica/playa-12.jpg", alt: "Aguas cálidas de la costa de Las Grutas" },
  { src: "img/panoramica/playa-13.jpg", alt: "Playa de arena en Las Grutas, Río Negro" },
  { src: "img/panoramica/playa-14.jpg", alt: "Olas y costa rocosa de Las Grutas" },
  { src: "img/panoramica/playa-15.jpg", alt: "Vista de la bahía de Las Grutas" },
  { src: "img/panoramica/playa-16.jpg", alt: "Costa de Las Grutas al atardecer" },
  { src: "img/panoramica/playa-17.jpg", alt: "Paisaje costero de Las Grutas, Patagonia" },
  { src: "img/panoramica/playa-18.jpg", alt: "Playa tranquila en Las Grutas" },
  { src: "img/panoramica/playa-19.jpg", alt: "Mar y rocas en la costa de Las Grutas" },
  { src: "img/panoramica/playa-20.jpg", alt: "Vista de la costanera de Las Grutas" },
  { src: "img/panoramica/playa-21.jpg", alt: "Puesta de sol sobre el mar en Las Grutas" },
];

// -----------------------------
// VIDEOS DE LA PLAYA LA RINCONADA
// -----------------------------
// Para agregar un video nuevo: subí el .mp4 a img/videos-rinconada/
// y sumá su ruta a este array.
const VIDEOS_RINCONADA = [
  "img/videos-rinconada/2.mp4",
  "img/videos-rinconada/3.mp4",
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
  {
    icono: "🏝️",
    titulo: "Playa recomendada: Punta Perdices",
    descripcion: "Una playa escondida de aguas turquesas y arena blanca, a 65 km de Las Grutas. El \"caribe patagónico\".",
    url: "https://www.interpatagonia.com/lasgrutas/punta-perdices.html",
  },
  {
    icono: "🌊",
    titulo: "Tabla de mareas",
    descripcion: "Horarios de marea alta y baja en Las Grutas, para planificar el día de playa.",
    url: "https://www.lasgrutasrionegro.com.ar/tabla-de-mareas/",
  },
];
