// ============================================================
// PRÁCTICA: rellena cada /* ??? */ sin mirar readme/app.js
// Cuando termines, compara con el original y anota tus errores.
// Para probar: copia este archivo a una carpeta con el mismo
// index.html y styles.css (o cambia el src en index.html).
// ============================================================

const PRODUCTOS = [
    {
        id: 1,
        nombre: "Auriculares Bluetooth",
        descripcion: "Auriculares inalámbricos.",
        precio: 75.99,
        imagen: "https://picsum.photos/200/200?random=1",
        resenas: [
            { usuario: "Ana Ruiz", texto: "¡Excelente!", fecha: "2025-09-01" }
        ]
    },
    {
        id: 2,
        nombre: "Webcam HD",
        descripcion: "Cámara web de alta definición.",
        precio: 45.5,
        imagen: "https://picsum.photos/200/200?random=3",
        resenas: []
    }
];

// NIVEL 1 -------------------------------------------------------
function crearElemento(etiqueta, clase, texto) {
    const elemento = document./* ??? */(etiqueta);
    if (/* ??? */) {
        elemento. = clase;
    }
    if (texto /* ??? */ undefined) {
        elemento./* ??? */ = texto;
    }
    return /* ??? */;
}

function formatearPrecio(precio) {
    return "$" + precio./* ??? */(2);
}

// NIVEL 2 -------------------------------------------------------
function crearResena(resena) {
    const item = crearElemento("li", "resena");

    const cabecera = crearElemento("div", "resena__cabecera");
    cabecera./* ??? */(crearElemento("span", "resena__usuario", resena.usuario));
    cabecera./* ??? */(crearElemento("span", "resena__fecha", /* ??? */));
    item.appendChild(cabecera);

    item.appendChild(crearElemento("p", "resena__texto", /* ??? */));
    return item;
}

function crearListaResenas(resenas) {
    const lista = crearElemento("ul", "resenas /* ??? */");

    if (!resenas || resenas./* ??? */ === 0) {
        lista.appendChild(crearElemento("li", "resenas__vacio", "No hay reseñas para este producto."));
        return /* ??? */;
    }

    resenas./* ??? */(function (resena) {
        lista.appendChild(/* ??? */(resena));
    });
    return lista;
}

// NIVEL 3 (eventos) ----------------------------------------------
function crearBotonCarrito() {
    const boton = crearElemento("button", "boton boton--carrito", "Agregar al Carrito");
    boton.type = "button";
    boton./* ??? */("click", function () {
        boton.textContent = "Agregado ✓";
        boton./* ??? */ = true;
    });
    return boton;
}

function crearBotonResenas(listaResenas) {
    const boton = crearElemento("button", "boton boton--resenas", "Mostrar Reseñas");
    boton.type = "button";
    boton.addEventListener("click", function () {
        const ocultas = listaResenas./* ??? */./* ??? */("resenas--ocultas");
        boton.textContent = ocultas ? /* ??? */ : /* ??? */;
    });
    return boton;
}

// NIVEL 4 (ensamblar) --------------------------------------------
function crearTarjeta(producto) {
    const tarjeta = crearElemento("article", "tarjeta");

    const imagen = crearElemento("img", "tarjeta__imagen");
    imagen./* ??? */ = producto.imagen;
    imagen./* ??? */ = producto.nombre;
    tarjeta.appendChild(imagen);

    const contenido = crearElemento("div", "tarjeta__contenido");
    contenido.appendChild(crearElemento("h2", "tarjeta__nombre", /* ??? */));
    contenido.appendChild(crearElemento("p", "tarjeta__descripcion", /* ??? */));
    contenido.appendChild(crearElemento("p", "tarjeta__precio", /* ??? */(producto.precio)));

    contenido.appendChild(/* ??? */());

    const listaResenas = /* ??? */(producto.resenas);
    contenido.appendChild(crearBotonResenas(/* ??? */));
    contenido.appendChild(listaResenas);

    tarjeta.appendChild(contenido);
    return tarjeta;
}

function renderCatalogo() {
    const app = document./* ??? */("app");

    app.appendChild(crearElemento("h1", "titulo-catalogo", "Catálogo de Productos"));

    const catalogo = crearElemento("section", "catalogo");
    PRODUCTOS./* ??? */(function (producto) {
        catalogo.appendChild(/* ??? */(producto));
    });
    app.appendChild(catalogo);
}

document./* ??? */("DOMContentLoaded", /* ??? */);
