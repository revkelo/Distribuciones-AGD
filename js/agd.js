/* ============================================================
   Distribuciones AGD - movimiento
   ------------------------------------------------------------
   Una sola idea, aplicada a toda la página: los bloques entran
   desde abajo, con el mismo recorrido y la misma curva, y los
   que van en grupo lo hacen escalonados. Es lo que hace que se
   lea como una pieza y no como una colección de efectos.

   Nada aparece por sorpresa ni se mueve dos veces: cada bloque
   entra una vez y se queda quieto.
   ============================================================ */

(function () {
  'use strict';

  var raiz = document.documentElement;

  /* Si no hay JavaScript, el CSS de entrada no se aplica y todo se ve
     desde el primer momento. Esta clase es la que lo enciende. */
  raiz.classList.add('js');

  var quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Entradas ───────────────────────────────────────────────
     Cada grupo lleva su propio paso: las celdas de marcas son
     muchas y van rápido; las tarjetas grandes, con más aire. */

  var GRUPOS = [
    { sel: '.seccion__cabeza > *', paso: 70 },
    { sel: '.marcas .marca', paso: 30 },
    { sel: '.categorias .categoria', paso: 90 },
    { sel: '.frentes .frente', paso: 120 },
    { sel: '.nosotros > *', paso: 120 },
    { sel: '.principios .principio', paso: 90 },
    { sel: '.cierre .envoltura > *', paso: 80 },
    { sel: '.pie__rejilla > *', paso: 80 }
  ];

  var porRevelar = [];

  GRUPOS.forEach(function (grupo) {
    var vistos = new Map();
    document.querySelectorAll(grupo.sel).forEach(function (nodo) {
      // El escalonado se cuenta dentro de cada grupo, no en toda la
      // página: si no, la última sección arrancaría con medio segundo
      // de retraso y parecería que se quedó colgada.
      var padre = nodo.parentElement;
      var i = vistos.get(padre) || 0;
      vistos.set(padre, i + 1);

      nodo.classList.add('revela');
      nodo.style.setProperty('--retraso', (i * grupo.paso) + 'ms');
      porRevelar.push(nodo);
    });
  });

  /*
   * La comprobación se hace a mano contra el borde inferior de la ventana,
   * no con IntersectionObserver. Es una landing: si por lo que sea el
   * observador no entrega -y en algunos entornos sin pintado no lo hace-
   * el contenido se queda invisible y la página aparece en blanco. Con
   * treinta y ocho elementos, mirar sus posiciones al desplazar no se
   * nota, y a cambio no hay forma de que el texto no salga.
   */
  function revelar() {
    if (!porRevelar.length) return;

    var limite = window.innerHeight * 0.92;
    var quedan = [];

    porRevelar.forEach(function (n) {
      if (n.getBoundingClientRect().top < limite) n.classList.add('esta');
      else quedan.push(n);
    });

    porRevelar = quedan;
  }

  if (quieto) {
    porRevelar.forEach(function (n) { n.classList.add('esta'); });
    porRevelar = [];
  } else {
    /* Sin requestAnimationFrame de por medio: la lista se vacía a medida
       que los bloques entran, así que el trabajo por evento tiende a cero
       y no hay nada que amortiguar. Con rAF, además, el revelado depende
       de que se pinten cuadros, y eso no siempre pasa. */
    window.addEventListener('scroll', revelar, { passive: true });
    window.addEventListener('resize', revelar);
    window.addEventListener('load', revelar);
    revelar();

    // Última red: si algo impidiera que se ejecutara lo anterior, a los
    // dos segundos se muestra todo. Vale más perder la entrada que
    // dejar la página muda.
    setTimeout(function () {
      porRevelar.forEach(function (n) { n.classList.add('esta'); });
      porRevelar = [];
    }, 2000);
  }

  /* ── Cabecera ───────────────────────────────────────────────
     Al bajar se compacta y se despega con una sombra. Sirve para
     algo: separa la barra del contenido cuando pasa por encima. */

  var cabecera = document.querySelector('.cabecera');
  var bajado = false;

  function alDesplazar() {
    var ahora = window.scrollY > 40;
    if (ahora === bajado) return;
    bajado = ahora;
    cabecera.classList.toggle('bajado', ahora);
  }

  window.addEventListener('scroll', alDesplazar, { passive: true });
  alDesplazar();

  /* ── El año del pie ─────────────────────────────────────── */

  var anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();
})();
