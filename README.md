# Alojamientos Las Grutas

Sitio web para publicar departamentos en alquiler en Las Grutas (Río Negro, Argentina), con fotos, información del pueblo y contacto directo por WhatsApp.

Hecho en HTML, CSS y JavaScript puro (sin frameworks ni build), para poder publicarlo directo en **GitHub Pages**.

## Estructura del proyecto

```
index.html          → estructura de toda la página
css/style.css        → estilos
js/data.js            → TODO el contenido editable (departamentos, lugares, WhatsApp)
js/main.js            → lógica: renderizado, galería de fotos, menú mobile
img/hero/             → foto principal de portada
img/panoramica/       → fotos panorámicas de la costa
img/pueblo/            → fotos de las categorías del pueblo
img/departamentos/    → fotos de cada departamento (una carpeta por depto)
```

Las imágenes que están ahora son **placeholders en SVG** (rectángulos de color con una etiqueta) para que el sitio se vea completo desde el arranque. Hay que reemplazarlas por fotos reales.

## Cómo editar el contenido

Casi todo se edita en **`js/data.js`**, no hace falta tocar el HTML:

### 1. Número de WhatsApp

```js
const WHATSAPP_NUMERO = "5492911234567";
```

Reemplazá por el número real, en formato internacional sin "+" ni espacios (ej: `5492911234567` para un número argentino con característica 291).

### 2. Agregar o editar un departamento

Copiá un objeto del array `DEPARTAMENTOS`, cambiale el `id` (tiene que ser único) y completá los datos:

```js
{
  id: 6,
  nombre: "Depto Nuevo",
  capacidad: 4,
  ambientes: "1 dormitorio + living comedor",
  ubicacion: "A 1 cuadra de la playa",
  descripcion: "Descripción corta y atractiva del lugar.",
  comodidades: ["Wifi", "Cochera"],
  fotos: [
    "img/departamentos/depto-6/1.jpg",
    "img/departamentos/depto-6/2.jpg",
    "img/departamentos/depto-6/3.jpg",
  ],
},
```

Luego creá la carpeta `img/departamentos/depto-6/` y subí ahí las fotos con esos nombres (podés usar `.jpg`, `.png` o `.webp`, solo actualizá la extensión en `fotos`).

### 3. Agregar fotos panorámicas de la costa

Se editan en el array `PANORAMICAS` de `data.js`. Subí las fotos a `img/panoramica/`.

### 4. Agregar lugares del pueblo (restaurantes, heladerías, confiterías, juegos)

Se editan en el array `LUGARES`. La `categoria` tiene que ser una de: `"comer"`, `"helados"`, `"confiterias"`, `"ninos"`.

```js
{
  categoria: "helados",
  nombre: "Nueva Heladería",
  descripcion: "Descripción corta.",
  imagen: "img/pueblo/nueva-heladeria.jpg",
},
```

## Reemplazar las fotos placeholder por fotos reales

1. Sacá o conseguí las fotos reales (recomendado: comprimidas, formato `.jpg` o `.webp`, no más de ~500kb cada una para que la página cargue rápido).
2. Subilas a la carpeta correspondiente respetando el nombre de archivo que está en `data.js`, o cambiá el nombre en `data.js` para que apunte a tu archivo.
3. Podés tener más o menos fotos por departamento, solo agregá o sacá líneas del array `fotos`.

## Cómo verlo en tu computadora antes de publicar

No hace falta instalar nada especial, pero abrir el `index.html` haciendo doble clic puede dar problemas con el mapa. Lo más simple:

- Si tenés Python instalado: `python -m http.server 8000` en esta carpeta, y abrís `http://localhost:8000`.
- O usá la extensión "Live Server" de VS Code.

## Publicar en GitHub Pages

1. Subí este proyecto a un repositorio de GitHub (podés usar el que ya tenés).
2. En GitHub: **Settings → Pages → Source**, elegí la rama `main` y la carpeta `/ (root)`.
3. Guardá. En unos minutos el sitio va a estar publicado en `https://<tu-usuario>.github.io/<nombre-repo>/`.

## Ideas para seguir agregando

- Sección de precios / temporadas.
- Formulario de reserva con fechas.
- Traducción al inglés para turistas extranjeros.
- Integración con Instagram (feed de fotos).
- Reseñas o comentarios de huéspedes.
