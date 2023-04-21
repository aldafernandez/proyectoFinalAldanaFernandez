const productos = [
    {id:100, nombre:"Boton de adiestramiento", descripcion:"", precio:"", imagen:"botones.webp"},
    {id:101, nombre:"Cama colchon pero mediano", descripcion:"", precio:"", imagen:"cama-perro.webp"},
    {id:102, nombre:"Hueso mordillo", descripcion:"", precio:"", imagen:"hueso-mordillo.webp"},
    {id:103, nombre:"Pelota para perro cachorro", descripcion:"", precio:"", imagen:"pelota-cachorro.webp"},
    {id:104, nombre:"Pelota de goma", descripcion:"", precio:"", imagen:"pelota-goma.webp"},
    {id:105, nombre:"Correa de paseo", descripcion:"", precio:"", imagen:"correa.webp"},
    {id:106, nombre:"Kit gatuno", descripcion:"", precio:"", imagen:"kit-gatuno.jpg"},
    {id:107, nombre:"Rascador arbol", descripcion:"", precio:"", imagen:"rascador-arbol.jpg"},
    {id:108, nombre:"Rascador dos pisos", descripcion:"", precio:"", imagen:"rascador-dos-pisos.webp"},
    {id:109, nombre:"Rascador niveles", descripcion:"", precio:"", imagen:"rascador-varios-pisos.jpg"},
    {id:110, nombre:"Cama flotante", descripcion:"", precio:"", imagen:"cama-flotante.jpg"},
    {id:111, nombre:"Cama oval", descripcion:"", precio:"", imagen:"cama-redonda.png"}
];

function productosLS(productos){
    localStorage.setItem("productos",JSON.stringify(productos));
}
function subirProductosLS(){
    return JSON.parse(localStorage.getItem("productos")) || [];
}
productosLS(productos);

function actualizarProductos(){
    const productos = subirProductosLS();
    let salida = "";

    productos.forEach(producto => {
        salida += `<div class="card col-md-4 mb-4 ms-4">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="${"images/" + producto.imagen}" class="img-fluid" alt="${producto.nombre}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">${producto.precio}</p>
                                <button class="btn btn-info" id="agregarProducto${producto.id}">Agregar al Carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
    });

    document.getElementById("tarjetas").innerHTML = salida;

    
}
actualizarProductos();


    

