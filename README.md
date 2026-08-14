# Distribuciones AGD — Sitio Web Corporativo

Página web oficial de **Distribuciones AGD**, empresa colombiana de ferretería y pinturas.
Sitio estático, sin backend.

**En producción:** <https://distribucionesagd.kgstudio.top>

Desplegado en Vercel; cada push a `main` publica. Antes estaba en GitHub Pages,
que sigue respondiendo en `revkelo.github.io/Distribuciones-AGD/` — el `canonical`
del HTML apunta al dominio bueno para que Google no los cuente como dos sitios.

---

## Sobre el cliente

**Distribuciones AGD** es una empresa dedicada a la distribución de productos de ferretería, pinturas y materiales para construcción, remodelación y decoración.

- **NIT:** 1010248056-5
- **Contacto:** distribucionesagd1@gmail.com
- **WhatsApp:** +57 311 829 6138

---

## Secciones del sitio

| Sección | Descripción |
|---------|-------------|
| **Hero / Carousel** | Carrusel con los logos de las 12 marcas distribuidas |
| **¿Quiénes Somos?** | Presentación de la empresa con CTA a WhatsApp |
| **Servicios** | 4 servicios destacados con imágenes |
| **Contacto** | Botón flotante de WhatsApp con mensaje preescrito |

---

## Características técnicas

- **Responsive** — adaptado a móvil, tablet y escritorio
- **WhatsApp Business** — botón flotante con mensaje preescrito para consultar precios y catálogo
- **Carrusel de marcas** — los 12 proveedores que distribuye AGD (Pintuco, Sika, Corona, Soudal, Bler, Tonner, ICO, Topex, Pintuland, Kolor, Supermastick, Tito Pabón). Los nombres van también en texto en la portada: en una imagen no hay nada que buscar
- **Sin backend** — sitio 100% estático
- **SEO** — título, descripción, `canonical`, Open Graph (importa: el enlace se reparte por WhatsApp) y ficha `HardwareStore` en JSON-LD
- **Carga optimizada** — loader animado mientras carga el contenido

---

## Stack

- HTML5 · CSS3 · JavaScript
- [Bootstrap 4](https://getbootstrap.com/docs/4.0/)
- [jQuery 3](https://jquery.com/) + jQuery UI
- [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/)
- [Font Awesome 4.7](https://fontawesome.com/)
- WhatsApp Business API

---

## Uso

```bash
git clone https://github.com/revkelo/Distribuciones-AGD.git
# Abrir index.html en el navegador
```

Para publicar: `git push` a `main`. Vercel despliega solo.

---

Desarrollado por **Kevin Gonzalez**
