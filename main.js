const carrito = [];
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

//Generamos las Cards.

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
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" id="${idButton}">Agregar al carrito</a></div>
        </div>
    </div>
</div>`
})

productos.forEach((producto) => {
    const idButton =`add-carts${producto.id}`
    document.getElementById(idButton) .onclick = ()=>{
    carrito.push(producto);
    document.getElementById("cart-total").innerHTML = carrito.length;   
    console.log(carrito);
}
});

// entiendo qu esta funcion ya no se necesita porque la utilice arriba
/* 
function totalCarrito(carrito) {
    for (let i=0; i < carrito.length; i++){
        console.log(carrito[i]);
    }
}
totalCarrito(carrito); */

/* function eliminarDelCarrito() {
    const index = carrito.findIndex((productos) => productos.producto === nombreDelProducto)
    if(index != -1){
        carrito.splice(index,1)
        console.log(carrito);
    }else{
        alert("Ese producto no esta el carrito");

    }
}
eliminarDelCarrito();
 */

//me sale un error undefined, es porque tengo que declarar una variable Let acumulador = 0;?
//la funcion de calcular se puede llamar de agregar al carrito o la declaro directamente ahi ?
 
function calcularCompra() {
    const total = carrito.reduce((acumulador,producto) => acumulador + producto.precio,0)
    console.log(total);
}
calcularCompra(); 

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
