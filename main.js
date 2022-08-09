const carrito = JSON.parse(localStorage.getItem('carrito'))||[]; //??
const total = carrito.reduce((total,producto) => total + producto.precio,0);



const productos =[
    {
        id: 1,
        titulo:"Cafe Colombia",
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
        <td>${producto.precio}</td>
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
    const total = carrito.reduce((total,producto) => total + producto.precio,0);
    calcularCosto(total);
    botonCarrito()
    
}
eliminarDelCarrito();
 
function calcularCosto(costo) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.getElementById("cart-total").innerHTML = carrito.length + "-$"+ costo;
    
}

console.log(...carrito); // asi se utilizaria un spread de arrays ??

//La forma de pago no se si es necesario dejarlo o se me complica mas el tema de la logica ?

/* function formaDepago(resultado, pago) {
    switch (pago) {
        case 1:
            return alert("En: " + pago + "debe abonar 1 couta de:" + resultado);
            break;
        case 3:
            return alert("En: " + pago + "debe abonar 3 couta de:" + resultado/3);
            break;
        case 6:
            return alert("En: " + pago + "debe abonar 6 couta de:" + resultado/6);
            break;
        case 12:
            return alert("En: " + pago + "debe abonar 12 couta de:" + resultado/12);
            break;
        default:
            alert("No ingreso la cantidad de coutas validas");
            break;
    }
    
}
formaDepago(resultado, pago); */