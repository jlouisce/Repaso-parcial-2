# Guía de estudio: Catálogo de Productos

Objetivo: poder escribir esto **a mano y de memoria**. No se memoriza línea por línea,
se memorizan **5 patrones** y el **orden** en que se construye.

---

## 1. El mapa mental (lo único que debes grabar primero)

```
index.html   -> solo un <main id="app"></main> vacío + link a css + script defer
styles.css   -> variables, reset, grid, tarjeta, botones, .resenas--ocultas
app.js       -> datos (PRODUCTOS) + funciones "crearX" + renderCatalogo
```

Flujo de app.js (de abajo hacia arriba se ejecuta):

```
DOMContentLoaded -> renderCatalogo()
   h1 + section.catalogo
      por cada producto -> crearTarjeta(producto)
          img + div.contenido
              h2, p, p(precio)
              crearBotonCarrito()
              crearListaResenas() -> crearResena() por cada una
              crearBotonResenas(lista)
```

**Regla de oro:** cada función construye UNA pieza y la devuelve (`return`).
La pieza grande se arma pegando piezas pequeñas con `appendChild`.

---

## 2. Los 5 patrones que se repiten

| # | Patrón | Código |
|---|--------|--------|
| 1 | Crear elemento | `document.createElement("div")` |
| 2 | Ponerle clase/texto | `el.className = "x"` · `el.textContent = "..."` |
| 3 | Meter uno dentro de otro | `padre.appendChild(hijo)` |
| 4 | Reaccionar a un clic | `boton.addEventListener("click", function () { ... })` |
| 5 | Recorrer un arreglo | `arreglo.forEach(function (item) { ... })` |

Más 3 detalles sueltos que suelen olvidarse:

- `classList.toggle("clase")` -> pone/quita la clase y **devuelve true si quedó puesta**.
- `boton.disabled = true` -> deshabilita el botón.
- `precio.toFixed(2)` -> número a texto con 2 decimales.

---

## 3. Orden para escribirlo de memoria (checklist)

1. **HTML**: `<!DOCTYPE html>`, `html lang`, `head` (meta charset, viewport, title, link css, script defer), `body > main#app`.
2. **JS - datos**: `const PRODUCTOS = [ { id, nombre, descripcion, precio, imagen, resenas: [ {usuario, texto, fecha} ] } ]`. (Para practicar basta con 2-3 productos.)
3. **JS - `crearElemento(etiqueta, clase, texto)`**: createElement -> if clase -> if texto !== undefined -> return.
4. **JS - `formatearPrecio`**.
5. **JS - `crearResena`** (li > div cabecera[span usuario, span fecha] + p texto).
6. **JS - `crearListaResenas`** (ul oculto, caso vacío, forEach).
7. **JS - `crearBotonCarrito`** y **`crearBotonResenas`** (click).
8. **JS - `crearTarjeta`** (article > img + div contenido).
9. **JS - `renderCatalogo`** + `DOMContentLoaded`.
10. **CSS**: `:root` variables -> `*` reset -> `body` -> `.catalogo` (grid) -> `.tarjeta` -> botones -> `.resenas--ocultas { display:none }` -> `@media`.

Truco de nombres (BEM): `bloque__elemento--modificador`
-> `tarjeta`, `tarjeta__imagen`, `boton--carrito`, `resenas--ocultas`.

---

## 4. Las 3 líneas de CSS que más se olvidan

```css
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));  /* grid responsivo */
.resenas--ocultas { display: none; }                           /* ocultar con clase */
.boton--carrito:hover:not(:disabled) { ... }                   /* hover solo si está activo */
```

---

## 5. Método de práctica (el que mejor funciona)

**Recuperación activa**: leer una y otra vez NO enseña; intentar escribir sin mirar, sí.

1. **Día 1 - Entender**: lee una función, tapa el código y explícala en voz alta con tus palabras.
2. **Rellenar huecos**: usa `practica/app_huecos.js` (tiene `/* ??? */` donde debes completar).
3. **Hoja en blanco**: archivo vacío, escribe todo siguiendo el checklist de la sección 3. No mires.
4. **Compara y anota errores**: lo que fallaste es lo que debes repetir.
5. **Repetición espaciada**: repite el paso 3 al día siguiente, a los 3 días y a los 7.
6. **Variaciones** (mejor prueba de que lo entiendes):
   - Que el botón del carrito cuente cuántos productos hay agregados.
   - Mostrar la cantidad de reseñas en el botón ("Mostrar Reseñas (2)").
   - Ordenar productos por precio con `.sort()`.
   - Un input para filtrar por nombre con `.filter()`.

Para el parcial: practica escribiendo **en papel o en un editor sin autocompletado**,
porque es la condición real.

---

## 6. Autoevaluación rápida (responde sin mirar)

1. ¿Por qué el script lleva `defer`?
2. ¿Qué devuelve `classList.toggle`?
3. ¿Por qué `crearBotonResenas` recibe `listaResenas` como parámetro?
4. ¿Qué diferencia hay entre `textContent` y `innerHTML`?
5. ¿Por qué `texto !== undefined` y no solo `if (texto)`?
6. ¿Qué hace `box-sizing: border-box`?
7. ¿Qué pasa si se llama `renderCatalogo()` antes de que cargue el HTML?

<details><summary>Respuestas</summary>

1. Para que el JS se ejecute cuando el HTML ya está parseado y `#app` existe.
2. `true` si la clase quedó agregada, `false` si se quitó.
3. Para poder mostrar/ocultar esa lista concreta (closure: la función del clic "recuerda" la lista).
4. `textContent` inserta texto plano (seguro); `innerHTML` interpreta etiquetas HTML.
5. Porque `if (texto)` descartaría el texto vacío `""`; así solo se salta si no se pasó nada.
6. Que el ancho incluya padding y borde, para que las cajas no se desborden.
7. `getElementById("app")` devolvería `null` y fallaría.
</details>
