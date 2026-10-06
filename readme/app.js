// ============================================================
// CATÁLOGO DE PRODUCTOS - Lógica principal
// Todo el contenido de la página se crea con JavaScript (DOM).
// ============================================================

// Arreglo con todos los productos. Cada producto es un objeto con:
// id, nombre, descripcion, precio, imagen y un arreglo de "resenas".
// Cada reseña tiene: usuario, texto y fecha.
const PRODUCTOS = [
    {
        id: 1,
        nombre: "Auriculares Bluetooth",
        descripcion: "Auriculares inalámbricos con cancelación de ruido.",
        precio: 75.99,
        imagen: "https://picsum.photos/200/200?random=1",
        resenas: [
            { usuario: "Ana Ruiz", texto: "¡Excelente calidad de sonido!", fecha: "2025-09-01" }
        ]
    },
    {
        id: 2,
        nombre: "Reloj Inteligente",
        descripcion: "Reloj con monitor de actividad física y notificaciones.",
        precio: 120.0,
        imagen: "https://picsum.photos/200/200?random=2",
        resenas: [
            { usuario: "Carlos Pérez", texto: "Me encanta, super útil para el día a día.", fecha: "2025-09-02" },
            { usuario: "Sofía Gómez", texto: "Muy elegante y funcional.", fecha: "2025-09-03" }
        ]
    },
    {
        id: 3,
        nombre: "Webcam HD",
        descripcion: "Cámara web de alta definición para videollamadas.",
        precio: 45.5,
        imagen: "https://picsum.photos/200/200?random=3",
        resenas: []
    },
    {
        id: 4,
        nombre: "Mouse Gamer",
        descripcion: "Mouse ergonómico con iluminación LED RGB.",
        precio: 55.0,
        imagen: "https://picsum.photos/200/200?random=4",
        resenas: [
            { usuario: "Juan Cárdenas", texto: "Preciso y cómodo para jugar por horas.", fecha: "2025-09-04" }
        ]
    },
    {
        id: 5,
        nombre: "Teclado Mecánico",
        descripcion: "Teclado con switches de alta respuesta para gaming.",
        precio: 99.99,
        imagen: "https://picsum.photos/200/200?random=5",
        resenas: []
    },
    {
        id: 6,
        nombre: "Micrófono USB",
        descripcion: "Micrófono profesional para streaming y grabación.",
        precio: 85.0,
        imagen: "https://picsum.photos/200/200?random=6",
        resenas: [
            { usuario: "Luisa Botero", texto: "Excelente calidad de sonido, lo recomiendo.", fecha: "2025-09-05" },
            { usuario: "Pablo Dávila", texto: "Fácil de configurar y funciona de maravilla.", fecha: "2025-09-06" }
        ]
    },
    {
        id: 7,
        nombre: "Monitor 4K",
        descripcion: "Monitor de 27 pulgadas con resolución Ultra HD.",
        precio: 350.0,
        imagen: "https://picsum.photos/200/200?random=7",
        resenas: []
    },
    {
        id: 8,
        nombre: "Impresora Multifuncional",
        descripcion: "Imprime, escanea y copia con tecnología inalámbrica.",
        precio: 150.0,
        imagen: "https://picsum.photos/200/200?random=8",
        resenas: [
            { usuario: "Laura Pineda", texto: "Muy rápida y los cartuchos son económicos.", fecha: "2025-09-07" }
        ]
    },
    {
        id: 9,
        nombre: "Disco Duro Externo 1TB",
        descripcion: "Almacenamiento portátil de alta velocidad.",
        precio: 60.0,
        imagen: "https://picsum.photos/200/200?random=9",
        resenas: [
            { usuario: "Felipe Ospina", texto: "Perfecto para respaldar mis archivos.", fecha: "2025-09-08" },
            { usuario: "Marta Giraldo", texto: "Pequeño y con gran capacidad.", fecha: "2025-09-09" }
        ]
    },
    {
        id: 10,
        nombre: "Router Wi-Fi 6",
        descripcion: "Mejora la velocidad y cobertura de tu red.",
        precio: 110.0,
        imagen: "https://picsum.photos/200/200?random=10",
        resenas: []
    },
    {
        id: 11,
        nombre: "Altavoz Inteligente",
        descripcion: "Asistente de voz para controlar dispositivos del hogar.",
        precio: 70.0,
        imagen: "https://picsum.photos/200/200?random=11",
        resenas: [
            { usuario: "Ricardo Soto", texto: "Muy útil, la calidad de sonido es buena.", fecha: "2025-09-10" }
        ]
    },
    {
        id: 12,
        nombre: "Lámpara de Escritorio LED",
        descripcion: "Luz ajustable con diferentes intensidades.",
        precio: 30.5,
        imagen: "https://picsum.photos/200/200?random=12",
        resenas: [
            { usuario: "Andrea Morales", texto: "Ideal para estudiar, no cansa la vista.", fecha: "2025-09-11" }
        ]
    },
    {
        id: 13,
        nombre: "Cargador Portátil",
        descripcion: "Batería externa de 10000 mAh para dispositivos móviles.",
        precio: 25.0,
        imagen: "https://picsum.photos/200/200?random=13",
        resenas: []
    },
    {
        id: 14,
        nombre: "Cable HDMI 4K",
        descripcion: "Cable de alta velocidad para conectar monitores y TV.",
        precio: 15.0,
        imagen: "https://picsum.photos/200/200?random=14",
        resenas: [
            { usuario: "Diego Sánchez", texto: "Excelente, la imagen es muy nítida.", fecha: "2025-09-12" }
        ]
    },
    {
        id: 15,
        nombre: "Tarjeta Gráfica",
        descripcion: "Tarjeta para gaming de alto rendimiento.",
        precio: 450.0,
        imagen: "https://picsum.photos/200/200?random=15",
        resenas: []
    },
    {
        id: 16,
        nombre: "Hub USB-C",
        descripcion: "Adaptador multi-puertos para laptops modernas.",
        precio: 40.0,
        imagen: "https://picsum.photos/200/200?random=16",
        resenas: [
            { usuario: "Isabel Herrera", texto: "Funciona a la perfección con mi MacBook.", fecha: "2025-09-13" },
            { usuario: "Jorge Mesa", texto: "Todos los puertos funcionan bien, lo recomiendo.", fecha: "2025-09-14" }
        ]
    },
    {
        id: 17,
        nombre: "Funda para Laptop",
        descripcion: "Funda acolchada para proteger laptops de 15 pulgadas.",
        precio: 20.0,
        imagen: "https://picsum.photos/200/200?random=17",
        resenas: []
    },
    {
        id: 18,
        nombre: "Silla de Oficina Ergonómica",
        descripcion: "Silla con soporte lumbar para largas jornadas de trabajo.",
        precio: 180.0,
        imagen: "https://picsum.photos/200/200?random=18",
        resenas: [
            { usuario: "Elena Valdés", texto: "Muy cómoda, mi espalda lo agradece.", fecha: "2025-09-15" }
        ]
    },
    {
        id: 19,
        nombre: "Cámara de Seguridad",
        descripcion: "Cámara con visión nocturna y detección de movimiento.",
        precio: 78.0,
        imagen: "https://picsum.photos/200/200?random=19",
        resenas: []
    },
    {
        id: 20,
        nombre: "Licencia de Software Antivirus",
        descripcion: "Protege tu computador contra virus y malware.",
        precio: 49.99,
        imagen: "https://picsum.photos/200/200?random=20",
        resenas: [
            { usuario: "Gabriel Torres", texto: "Me siento más seguro navegando por internet.", fecha: "2025-09-16" }
        ]
    }
];

// ------------------------------------------------------------
// Función ayudante (fábrica de etiquetas HTML).
// Crea un elemento del tipo "etiqueta" (ej: "div", "p", "li"),
// le asigna una clase CSS (si se pasa) y un texto (si se pasa).
// ------------------------------------------------------------
function crearElemento(etiqueta, clase, texto) {
    const elemento = document.createElement(etiqueta); // Crea el elemento vacío
    if (clase) {
        elemento.className = clase; // Le aplica la clase para el CSS
    }
    if (texto !== undefined) {
        elemento.textContent = texto; // Le inserta el texto visible
    }
    return elemento; // Devuelve el elemento listo para usar
}

// Recibe un número (ej: 75.99) y lo devuelve como texto con
// símbolo de dólar y 2 decimales fijos -> "$75.99".
function formatearPrecio(precio) {
    return "$" + precio.toF
    ixed(2);
}

// Construye UNA reseña completa como un <li>.
// cabecera: nombre del usuario + fecha. debajo: el texto.
function crearResena(resena) {
    const item = crearElemento("li", "resena");

    const cabecera = crearElemento("div", "resena__cabecera");
    cabecera.appendChild(crearElemento("span", "resena__usuario", resena.usuario));
    cabecera.appendChild(crearElemento("span", "resena__fecha", resena.fecha));
    item.appendChild(cabecera); // Mete la cabecera dentro del <li>

    item.appendChild(crearElemento("p", "resena__texto", resena.texto));
    return item;
}

// Construye la lista completa de reseñas (<ul>).
// Arranca oculta gracias a la clase "resenas--ocultas".
function crearListaResenas(resenas) {
    const lista = crearElemento("ul", "resenas resenas--ocultas");

    // Si el producto no tiene reseñas, mostramos un mensaje y salimos.
    if (!resenas || resenas.length === 0) {
        lista.appendChild(crearElemento("li", "resenas__vacio", "No hay reseñas para este producto."));
        return lista;
    }

    // Recorremos cada reseña y la agregamos a la lista.
    resenas.forEach(function (resena) {
        lista.appendChild(crearResena(resena));
    });
    return lista;
}

// Crea el botón "Agregar al Carrito".
// Al hacer clic cambia su texto y se deshabilita (no se puede pulsar de nuevo).
function crearBotonCarrito() {
    const boton = crearElemento("button", "boton boton--carrito", "Agregar al Carrito");
    boton.type = "button";
    boton.addEventListener("click", function () {
        boton.textContent = "Agregado ✓";
        boton.disabled = true;
    });
    return boton;
}

// Crea el botón "Mostrar Reseñas".
// Al hacer clic alterna la clase "resenas--ocultas" de la lista
// y cambia su texto según si quedó visible u oculta.
function crearBotonResenas(listaResenas) {
    const boton = crearElemento("button", "boton boton--resenas", "Mostrar Reseñas");
    boton.type = "button";
    boton.addEventListener("click", function () {
        // toggle devuelve true si la clase quedó puesta (lista oculta)
        const ocultas = listaResenas.classList.toggle("resenas--ocultas");
        boton.textContent = ocultas ? "Mostrar Reseñas" : "Ocultar Reseñas";
    });
    return boton;
}

// Ensambla la tarjeta completa de un producto:
// imagen + contenido (nombre, descripción, precio, botones y reseñas).
function crearTarjeta(producto) {
    const tarjeta = crearElemento("article", "tarjeta");

    // Imagen del producto
    const imagen = crearElemento("img", "tarjeta__imagen");
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre; // Texto alternativo (accesibilidad)
    tarjeta.appendChild(imagen);

    // Contenedor del texto y botones
    const contenido = crearElemento("div", "tarjeta__contenido");
    contenido.appendChild(crearElemento("h2", "tarjeta__nombre", producto.nombre));
    contenido.appendChild(crearElemento("p", "tarjeta__descripcion", producto.descripcion));
    contenido.appendChild(crearElemento("p", "tarjeta__precio", formatearPrecio(producto.precio)));

    contenido.appendChild(crearBotonCarrito());

    // Creamos la lista de reseñas y su botón para mostrarla/ocultarla
    const listaResenas = crearListaResenas(producto.resenas);
    contenido.appendChild(crearBotonResenas(listaResenas));
    contenido.appendChild(listaResenas);

    tarjeta.appendChild(contenido);
    return tarjeta;
}

// Función principal: dibuja todo el catálogo dentro del <main id="app">.
function renderCatalogo() {
    const app = document.getElementById("app");

    // Título de la página
    app.appendChild(crearElemento("h1", "titulo-catalogo", "Catálogo de Productos"));

    // Sección que contiene todas las tarjetas
    const catalogo = crearElemento("section", "catalogo");
    PRODUCTOS.forEach(function (producto) {
        catalogo.appendChild(crearTarjeta(producto)); // Una tarjeta por producto
    });
    app.appendChild(catalogo);
}

// Espera a que el HTML esté cargado y luego ejecuta renderCatalogo.
document.addEventListener("DOMContentLoaded", renderCatalogo);
