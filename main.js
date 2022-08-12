const carrito = JSON.parse(localStorage.getItem('carrito')) ?? []; 

const productos =[
    {
        id: 1,
        producto:"Cafe Colombia",
        img: "../img/Colombia.jpg", 
        precio: 2400,
        stock: 15,
    },
    {
        id: 2,
        producto: "Cafe El Salvador",
        img: "../img/El Salvador.jpg",
        precio: 1900,
        stock: 10,
    },
    {
        id: 3,
        producto: "Cafe Etiopia",
        img: "../img/Etiopia.jpg",
        precio: 2200,
        stock: 8,
    },
    {
        id: 4,
        producto: "Cafe Guatemala",
        img: "../img/Guatemala.jpg",
        precio: 1900,
        stock: 11,
    },
    {
        id: 5,
        producto: "Cafe Honduras",
        img: "../img/Honduras.jpg",
        precio: 1750,
        stock: 14,
    },
    {
        id: 6,
        producto: "Cafe Kenia",
        img: "../img/Kenia.jpg",
        precio: 2000,
        stock: 9,
    },
    {
        id: 7,
        producto: "Cafe Nicaragua",
        img: "../img/Nicaragua.jpg",
        precio: 1600,
        stock: 7,
    },
    {
        id: 8,
        producto: "Cafe Peru",
        img: "../img/Peru.jpg",
        precio: 1500,
        stock: 6,
    }
];

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

// Agregamos productos al carrito

function AgregarAlCarrito() {
    productos.forEach((producto) => {
        const idButton =`add-carts${producto.id}`
        document.getElementById(idButton) .onclick = ()=>{
        carrito.push(producto);
        const total = carrito.reduce((total,producto) => total + producto.precio,0);
        calcularCosto(total)   
        console.log(carrito);
        botonCarrito()
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su producto se agrego correctamente',
            showConfirmButton: false,
            timer: 1500
        })

        }
    })
};

AgregarAlCarrito();



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
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        )
        } else if (
          /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
        )
        }
    })
}
eliminarDelCarrito(productoId);

function calcularCosto(costo) {
    const total = carrito.reduce((total,producto) => total + producto.precio,0);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.getElementById("cart-total").innerHTML = carrito.length + "-$"+ costo;
        
}
calcularCosto(costo);


/*realiza algunos cambios y agregue las librerias, lo unico que observo es que agrego o elimino del carrito,
vuelvo a cargar la pagina y quedan los productos anteriores agregados y cuando elimino no va bajando la cantidad
ni de precio, ni de cantidad. No puedo ver el error o ver que es lo que me falta.
*/