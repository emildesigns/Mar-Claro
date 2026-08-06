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
const NOMBRE_SITIO = "Alojamientos Las Grutas";

// -----------------------------
// DEPARTAMENTOS
// -----------------------------
// Para agregar uno nuevo: copiá un objeto entero, cambiá el "id" (único),
// completá los datos y agregá las fotos en img/departamentos/depto-N/
const DEPARTAMENTOS = [
  {
    id: 1,
    nombre: "Depto Vista al Mar I",
    capacidad: 4,
    ambientes: "1 dormitorio + living comedor",
    ubicacion: "A 2 cuadras de la playa Piedras Coloradas",
    descripcion:
      "Departamento luminoso con balcón, totalmente equipado para 4 personas. Ideal para parejas o familias chicas que buscan estar cerca del mar.",
    comodidades: ["Wifi", "Cochera", "Ropa de cama incluida", "Balcón"],
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
    comodidades: ["Wifi", "Cochera", "Aire acondicionado", "Cocina completa"],
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
    comodidades: ["Wifi", "Vista al mar", "Ropa de cama incluida"],
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
    comodidades: ["Wifi", "Parrilla", "Cochera", "Patio"],
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
    comodidades: ["Wifi", "Cochera", "Cocina completa", "Ropa de cama incluida"],
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
  { src: "img/panoramica/panoramica-1.svg", alt: "Vista panorámica de la costa de Las Grutas" },
  { src: "img/panoramica/panoramica-2.svg", alt: "Playa de Las Grutas al atardecer" },
  { src: "img/panoramica/panoramica-3.svg", alt: "Acantilados de Las Grutas" },
];

// -----------------------------
// LUGARES DEL PUEBLO
// -----------------------------
// categoria puede ser: "comer", "helados", "confiterias", "ninos"
// Para agregar un lugar nuevo, sumá un objeto a este array.
const LUGARES = [
  {
    categoria: "comer",
    nombre: "Parrilla El Pescador",
    descripcion: "Pescados y mariscos frescos frente al mar.",
    imagen: "img/pueblo/comer.svg",
  },
  {
    categoria: "comer",
    nombre: "La Rastra",
    descripcion: "Cocina regional patagónica, ambiente familiar.",
    imagen: "img/pueblo/comer.svg",
  },
  {
    categoria: "helados",
    nombre: "Heladería Costa Azul",
    descripcion: "Helados artesanales, gran variedad de sabores.",
    imagen: "img/pueblo/helados.svg",
  },
  {
    categoria: "helados",
    nombre: "Heladería del Puerto",
    descripcion: "Clásico del pueblo, abierto todo el año.",
    imagen: "img/pueblo/helados.svg",
  },
  {
    categoria: "confiterias",
    nombre: "Confitería Las Dunas",
    descripcion: "Café de especialidad, tortas y meriendas.",
    imagen: "img/pueblo/confiterias.svg",
  },
  {
    categoria: "confiterias",
    nombre: "Café del Mar",
    descripcion: "Buen lugar para desayunar con vista a la costa.",
    imagen: "img/pueblo/confiterias.svg",
  },
  {
    categoria: "ninos",
    nombre: "Parque de Juegos Costanera",
    descripcion: "Juegos al aire libre sobre la costanera.",
    imagen: "img/pueblo/ninos.svg",
  },
  {
    categoria: "ninos",
    nombre: "Peloteros Las Grutas",
    descripcion: "Espacio cubierto para los más chicos, ideal días de viento.",
    imagen: "img/pueblo/ninos.svg",
  },
];
