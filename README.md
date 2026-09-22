# Distribuciones AGD - sitio web corporativo

Sitio de **Distribuciones AGD SAS**, distribuidor de pinturas y artículos de
ferretería en Bogotá. Una sola página, estática, sin backend.

**En producción:** <https://distribucionesagd.kgstudio.top>

Desplegado en Vercel; cada push a `main` publica.

### Las tres copias

El mismo HTML responde en tres sitios, y solo uno es el bueno:

| URL | Qué es |
| --- | --- |
| `distribucionesagd.kgstudio.top` | El dominio real. Es el `canonical`. |
| `distribuciones-agd.vercel.app` | La URL que Vercel asigna sola. |
| `revkelo.github.io/Distribuciones-AGD/` | GitHub Pages, el host anterior. |

Las tres sirven el mismo `<link rel="canonical">` apuntando a la primera, así
que Google no las cuenta como sitios distintos. Cualquier enlace que se reparta
-el `homepage` del repo, WhatsApp, una firma de correo- va al dominio real: un
enlace a la copia no le suma autoridad al que tiene que posicionar.

---

## Sobre el cliente

Distribución de pinturas, rodillos, brochas, cintas y artículos de ferretería
para obra, remodelación y decoración.

- **NIT:** 1010248056-5
- **Correo:** distribucionesagd1@gmail.com
- **WhatsApp:** +57 311 829 6138
- **Teléfono:** +57 320 338 4861

Si cambia un dato de identidad, cambia también en `llms.txt` y en el JSON-LD de
`index.html`. Se contradicen en silencio.

---

## Secciones del sitio

| Ancla | Qué hay |
| --- | --- |
| `#inicio` | Portada con los nombres de las marcas en texto y carta de colores |
| `#marcas` | Rejilla con las doce marcas que se distribuyen |
| `#productos` | Las cuatro familias del catálogo |
| `#frentes` | Acabados y decoración; laboratorios y áreas limpias |
| `#nosotros` | Presentación de la empresa |
| `#cotizar` | Cierre con los canales de contacto |

Los enlaces del menú son anclas, no páginas: la cortina de carga solo se paga al
entrar o al recargar.

---

## Stack

HTML, CSS y JavaScript a mano. Sin frameworks ni dependencias: una hoja
(`css/agd.css`) y un script (`js/agd.js`). Tipografías de Google Fonts.

La versión anterior era una plantilla de Bootstrap 4 con jQuery y Owl Carousel.
De esa quedaba el carrusel de marcas, que enseñaba una y escondía once; ahora es
una rejilla, porque "¿ustedes manejan Pintuco?" es la pregunta que trae al
cliente.

---

## SEO

Lleva lo que pide `kgstudio-hub/PRACTICAS.md`: `title`, `description`,
`canonical`, Open Graph con medidas, `@graph` en JSON-LD con ficha
`HardwareStore` citando `https://kgstudio.top/#kevin`, `robots.txt` con los
rastreadores de IA nombrados, `sitemap.xml` con `lastmod` real, `llms.txt` y
favicon propio.

Lo que el código no puede resolver: la ficha de Google Business. Sin ella el
negocio no sale en el mapa ni en el panel de la derecha, por muy bien marcada
que esté la página.

---

## Uso

```bash
git clone https://github.com/revkelo/Distribuciones-AGD.git
# Abrir index.html en el navegador
```

Para publicar: `git push` a `main`. Vercel despliega solo.

---

Desarrollado por **Kevin Gonzalez** (kagonzalezdev).
