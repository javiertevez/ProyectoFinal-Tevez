


const carrito = [];



//Armador de cartas de productos a partir del array [productos]

const contenedor = document.getElementById('contenedor');

for (const producto of productos) {
  contenedor.innerHTML +=
    `    
    <div class="card" style="width: 18rem; margin: 20px; border-radius: 30px; padding: 30px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); display: flex; flex-direction: column;">
        <img src= ${producto.imagen} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="text-align: center;">${producto.nombre}</h5>
          <p class="card-text"style="text-align: center;">Precio:</p>
          <p class="card-price"style="text-align: center;">$${producto.precio}</p>
          <button href="#" id="${producto.id}" class="btn btn-primary"style="background-color: grey; border: none; margin-left: 25px;">Agregar al carrito</button>
        </div>
      </div>
    `

}

//metodo para cambiar el numero de productos en el icono de abajo a la derecha (en cero)
const carritoEsquina = document.getElementById("textoCarrito");
let cantidadProductosCarrito = 0;
carritoEsquina.innerText = parseInt(cantidadProductosCarrito);


// funcion para captar el click en el boton de una carta

contenedor.addEventListener('click', (event) => {
  if (event.target.classList.contains("btn-primary")) {
    validarProductoCarrito(event.target.id)


    //metodo para cambiar el numero de productos en el icono de abajo a la derecha
    const carritoEsquina = document.getElementById("textoCarrito");
    let cantidadProductosCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
    carritoEsquina.innerText = parseInt(cantidadProductosCarrito);



    // se habilita la funcion para visualizar el carrito en el icono de abajo a la derecha

    let textoCarrito = carrito.map(item => `<li>${item.cantidad}------${item.nombre}------$${item.precio}</li>`).join('\n');

    let textoCarritoTotal = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    clickEnIconoCarrito(textoCarrito, textoCarritoTotal);

  };

});



// funcion para ver si el producto ya esta en el carrito o no

const validarProductoCarrito = (productoId) => {
  const estaRepetido = carrito.some((producto) => producto.id == productoId);
  if (estaRepetido) {
    const productoRepetido = productos.find((producto) => producto.id == productoId);
    if (productoRepetido) {
      const papa = carrito.find((producto) => producto == productoRepetido);
      papa.cantidad++;
    }

    // si al clickear se trata de otro producto
  } else {

    // se agrega el producto al carrito:
    console.log(productoId);
    const producto = productos.find((producto) => producto.id == productoId);
    carrito.push(producto);

    // se guarda el carrito en el local storage
    guardarCarrito("productoAgregado", carrito);

    // se habilita la funcion para visualizar el carrito en el icono de abajo a la derecha

    let textoCarrito = carrito.map(item => `<li>${item.cantidad}------${item.nombre}------$${item.precio}</li>`).join('\n');
    let textoCarritoTotal = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    clickEnIconoCarrito(textoCarrito, textoCarritoTotal);







    //metodo para cambiar el numero de productos en el icono de abajo a la derecha
    const carritoEsquina = document.getElementById("textoCarrito");
    let cantidadProductosCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
    carritoEsquina.innerText = parseInt(cantidadProductosCarrito);
  }
}



//funcion para guardar el carrito en el localstorage
const guardarCarrito = (clave, valor) => {
  localStorage.setItem(clave, JSON.stringify(valor))
}




// funcion para vaciar el carrito


document.getElementById('boton-vaciar-carrito').addEventListener('click', (event) => {
  carrito.length = 0;
  textoCarrito = "";
  textoCarritoTotal = "";
  clickEnIconoCarrito(textoCarrito, textoCarritoTotal);


  //metodo para cambiar el numero de productos en el icono de abajo a la derecha (en cero)
  const carritoEsquina = document.getElementById("textoCarrito");
  let cantidadProductosCarrito = 0;
  carritoEsquina.innerText = parseInt(cantidadProductosCarrito);
  // se vacia el storage
  localStorage.clear();
}

)


// funcion para cuando clickeas en el icono del carrito abajo a la derecha

const clickEnIconoCarrito = (textoCarrito, textoCarritoTotal) => {
  botonCarrito.addEventListener('click', (event) => {



    Swal.fire({
      title: 'mi carrito',
      html: textoCarrito + "\n Total a pagar: $" + textoCarritoTotal,
      confirmButtonText: 'finalizar Compra',
      confirmButtonColor: '#f1b571',
      cancelButtonColor: '#f38508',
      showCancelButton: true,
      cancelButtonText: 'volver atrás',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Compra realizada con éxito!',
          icon: 'success'

        }

        )
        // lo que sucede al finalizar la compra:
        carrito.length = 0;
        localStorage.clear();
        const carritoEsquina = document.getElementById("textoCarrito");
        carritoEsquina.innerText = "";
      }
    })
  })
}


