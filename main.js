


let carrito = [];
let productos = [];

// Cargar productos desde el archivo JSON
fetch('productos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    productos = data;
    renderizarProductos();
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// Limpiar cartas del contenedor
const LimpiarCartas = () => {
  contenedor.innerHTML = '';
}

// Armador de cartas de productos a partir del array [productos]
const contenedor = document.getElementById('contenedor');

function renderizarProductos() {
  LimpiarCartas();

  for (const producto of productos) {
    const cantidadDelMismo = carrito.find((prod) => prod.id == producto.id)?.cantidad || 0;

    contenedor.innerHTML += `
      <div class="card" style="width: 18rem; margin: 20px; border-radius: 30px; padding: 30px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); display: flex; flex-direction: column;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title" style="text-align: center;">${producto.nombre}</h5>
          <p class="card-text" style="text-align: center;">Precio:</p>
          <p class="card-price" style="text-align: center;">$${producto.precio}</p>
          <div style="display: flex; flex-direction: row; margin: auto; align-content: center; width: 180px; justify-items: center;">
          <button href="#" id="${producto.id}" class="btn btn-primary" style="background-color: rgb(212, 101, 10); border: none; margin-left: 25px; border-radius: 70px; width: 50px; height: 50px; font-size: 30px; text-align: center; display: flex; align-items: center; justify-content: center;">+</button>
          <button href="#" id="${producto.id}" class="btn btn-primary2" style="background-color: rgb(212, 101, 10); border: none; margin-left: 25px; border-radius: 70px; width: 50px; height: 50px; font-size: 30px; text-align: center; display: flex; align-items: center; justify-content: center; color: white;">-</button>

          </div>
          <p class="card-price" style="text-align: center; font-size: 40px;">${cantidadDelMismo}</p>
        </div>
      </div>
    `;
  }
}

// Manejo del click en el contenedor
contenedor.addEventListener('click', (event) => {
  const productoId = event.target.id;

  if (event.target.classList.contains("btn-primary")) {
    validarProductoCarrito(productoId);
  } else if (event.target.classList.contains("btn-primary2")) {
    restarProductoCarrito(productoId);
  }
});

// Validar y agregar productos al carrito
const validarProductoCarrito = (productoId) => {
  const productoEnCarrito = carrito.find((producto) => producto.id == productoId);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    const producto = productos.find((producto) => producto.id == productoId);
    if (producto) {
      carrito.push({ ...producto, cantidad: 1 });
    }
  }

  // Guardar en el local storage
  guardarCarrito("productoAgregado", carrito);

  // Actualizar visualización del carrito
  actualizarCarritoIcono();
  renderizarProductos();
}

// Restar productos en el carrito
const restarProductoCarrito = (productoId) => {
  const productoEnCarrito = carrito.find((producto) => producto.id == productoId);

  if (productoEnCarrito) {
    if (productoEnCarrito.cantidad > 1) {
      productoEnCarrito.cantidad--;
    } else {
      carrito = carrito.filter((producto) => producto.id != productoId);
    }

    // Guardar en el local storage
    guardarCarrito("productoAgregado", carrito);

    // Actualizar visualización del carrito
    actualizarCarritoIcono();
    renderizarProductos();
  }
}

// Actualizar el número de productos en el icono de carrito
const actualizarCarritoIcono = () => {
  const carritoEsquina = document.getElementById("textoCarrito");
  const cantidadProductosCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
  carritoEsquina.innerText = cantidadProductosCarrito;
};

// Función para guardar el carrito en localStorage
const guardarCarrito = (clave, valor) => {
  localStorage.setItem(clave, JSON.stringify(valor));
}

// Función para vaciar el carrito
document.getElementById('boton-vaciar-carrito').addEventListener('click', () => {
  carrito = [];
  guardarCarrito("productoAgregado", carrito);
  actualizarCarritoIcono();
  renderizarProductos();
  localStorage.clear();
});

// Manejo del clic en el icono del carrito
const botonCarrito = document.getElementById("botonCarrito");
const clickEnIconoCarrito = () => {
  const textoCarrito = carrito.map(item => `<li>${item.cantidad}------${item.nombre}------$${item.precio}</li>`).join('\n');
  const textoCarritoTotal = carrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0);

  Swal.fire({
    title: 'Mi carrito',
    html: textoCarrito + `<br>Total a pagar: $${textoCarritoTotal}`,
    confirmButtonText: 'Finalizar Compra',
    confirmButtonColor: '#f1b571',
    cancelButtonColor: '#f38508',
    showCancelButton: true,
    cancelButtonText: 'Volver atrás',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Compra realizada con éxito!',
        icon: 'success'
      });
      carrito = [];
      guardarCarrito("productoAgregado", carrito);
      actualizarCarritoIcono();
      localStorage.clear();
      renderizarProductos();
    }
  });
};

botonCarrito.addEventListener('click', clickEnIconoCarrito);