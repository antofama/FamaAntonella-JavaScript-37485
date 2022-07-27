
const carrito = [];

const productos =[
    {
        id: 1,
        producto:"Collar Roma",
        precio: 2400,
        stock: 15,
    },
    {
        id: 2,
        producto: "Pulsera Lisboa",
        precio: 1900,
        stock: 10,
    },
    {
        id: 3,
        producto: "Aros Paris",
        precio: 1200,
        stock: 8,
    }
];

let eleccionProducto = parseInt(prompt("Seleccione el numero que desea comprar 1.Collar Roma 2.Pulsera Lisboa 3.Aros Paris"));
let cantidad = parseInt(prompt("Ingrese la cantidad desea comprar del producto"));
function agregarAlCarrito() {
    const found = productos.find(el => el.id === eleccionProducto);
    const tenemosStock = validarStock(productos, cantidad);
    carrito.push(eleccionProducto);
}
agregarAlCarrito(console.log(carrito)); 

// Creo que me confunden el tema de los parametros, siempre me tira false 

function validarStock(productos, cantidad){
    if (cantidad < productos.stock) {
        return true;
    }else{
        return false;
    } 
}
validarStock(productos,cantidad);


function totalCarrito(carrito) {
    for (let i=0; i < carrito.length; i++){
        console.log(carrito[i]);
    }
}
totalCarrito(carrito);

function eliminarDelCarrito(nombreDelProducto) {
    const index = carrito.findIndex((productos) => productos.producto === nombreDelProducto)
    if(index != -1){
        carrito.splice(index,1)
        console.log(carrito);
    }else{
        alert("Ese producto no esta el carrito");

    }
}
let productoEliminado = prompt("Si desea elimimar algo del carrito ingrese el nombre del producto").toUpperCase;

eliminarDelCarrito(productoEliminado);


//me sale un error undefined, es porque tengo que declarar una variable Let acumulador = 0;?

function calcularCompra() {
    const total = carrito.reduce((acc,el)=> el.precio, 0)
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
