const carrito = JSON.parse(localStorage.getItem('carrito')) ?? []; 

const productos =[];

//llamar al json para cargar las cards
const productosEnJson = () => {
    fetch ('./productos.json')
    .then((response) => response.json ())
    .then (data => {
        productos.push(...data)
        generarCards()

    })
}
productosEnJson();

//Boton carrito
function botonCarrito() {
    document.getElementById("tabla-carrito").innerHTML = ""
    carrito.forEach((producto) => {
        document.getElementById("tabla-carrito").innerHTML += `<tr>
        <th scope="row">${producto.id}</th>
        <td>${producto.producto}</td>
        <td><img src="${producto.img}" style="height: 100px"></td>
        <td> $${producto.precio}</td>
        <td><button type="button" class="btn btn-close btn-close-white borrar-producto" onclick="eliminarDelCarrito(${producto.id})" info-borrar="${producto.id}"></button></td>
        </tr>`
    })
}
botonCarrito();


//generacion de cards
function generarCards() {

    productos.forEach((producto) =>{
        const idButton = `add-carts${producto.id}`
        document.getElementById("seccion-cards").innerHTML += `<div class="col mb-5">
        <div class="card h-100">
            <img class="card-img-top" src="${producto.img}" />
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">${producto.producto}</h5>
                    <div class="precio">
                        <p>$${producto.precio}</p>
                    </div>
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                <a class="btn btn-outline-dark mt-auto" id="${idButton}">Agregar al carrito</a></div>
            </div>
        </div>
    </div>`
    })
    productos.forEach((producto) => {
        const idButton =`add-carts${producto.id}`
            document.getElementById(idButton) .onclick = ()=>{
            carrito.push(producto);
            const total = carrito.reduce((total,producto) => total + producto.precio,0);
            calcularCosto(total)   
            console.log(carrito);
            botonCarrito()
            Swal.fire({
                position:'top-end',
                icon: 'success',
                title: 'Su producto ha sido agregado',
                showConfirmButton: false,
                timer: 1500
            })

        }
    })
    
}

function eliminarDelCarrito(productoId) {
    const index = carrito.findIndex((producto) => producto.id === productoId);
    if(index != -1){
        carrito.splice(index,1)
        console.log(carrito);
    }
    
    botonCarrito()
    
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: 'Estas seguro?',
        text: "Su producto se eliminara!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, no eliminar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
            'Eliminado!',
            'Su producto ha sido eliminado.',
            'success'
        )
        } else if (
          /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire(
            'Cancelado',
            'tu producto no ha sido eliminado :)',
            'error'
        )
        }
    })
}

function calcularCosto() {
    const total = carrito.reduce((total,producto) => total + producto.precio,0);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.getElementById("cart-total").innerHTML = carrito.length + "-$"+ total;
        
}
calcularCosto();
