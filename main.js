


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

// funcion para captar el click en el boton de una carta

contenedor.addEventListener('click', (event) => {
  if (event.target.classList.contains("btn-primary")) {
    validarProductoCarrito(event.target.id)
  };

});

//funcion para modificar la cantidad de cada producto
let cantidadASumar = 0;
const modificarCantidadCarrito = (cantidadASumar) => {
  cantidadASumar++;
  }

// funcion para ver si el producto ya esta en el carrito o no

const validarProductoCarrito = (productoId) => {
  const estaRepetido = carrito.some((producto) => producto.id == productoId);
  if (estaRepetido) {
    const producto = carrito.find((producto) => producto.id == productoId);
    
    
    // producto.cantidad++;
    cantidadASumar = producto.cantidad;
    // modificarCantidadCarrito(cantidadASumar);
    // falta pintar el producto en el carrito


    // si al clickear se trata de otro producto
  } else {
    // se agrega el producto al carrito:
    console.log(productoId);
    const producto = productos.find((producto) => producto.id == productoId);
    carrito.push(producto);
  
    // se guarda el carrito en el local storage
    guardarCarrito("productoAgregado", carrito);

    // se habilita la funcion para visualizar el carrito en el icono de abajo a la derecha
   
    const textoCarrito = carrito.map(item => `<li>${item.cantidad}------${item.nombre}------$${item.precio}</li>`).join('\n');

    clickEnIconoCarrito(textoCarrito);







    //metodo para cambiar el numero de productos en el icono de abajo a la derecha
    const carritoEsquina = document.getElementById("textoCarrito");
    let cantidadProductosCarrito = carrito.length;
    carritoEsquina.innerText = parseInt(cantidadProductosCarrito) +  parseInt(cantidadASumar);
  }
}



//funcion para guardar el carrito en el localstorage
const guardarCarrito = (clave, valor) => {
  localStorage.setItem(clave, JSON.stringify(valor))
}


// funcion para cuando clickeas en el icono del carrito abajo a la derecha

const clickEnIconoCarrito = (textoCarrito) => {
  botonCarrito.addEventListener('click', (event) => {



    Swal.fire({
      title: 'Mi carrito',
      html: textoCarrito,
      confirmButtonText: 'Finalizar Compra',
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      showCancelButton: true,
      cancelButtonText: 'Volver atrás'
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




