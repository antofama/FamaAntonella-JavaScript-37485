
let stock = 10;
let precio = 2000;
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

let eleccionProducto = prompt("Ingrese el producto que desea comprar 1.Collar Roma 2.Pulsera Lisboa 3.Aros Paris").toUpperCase();
function agregarAlCarrito() {
    if (eleccionProducto === "COLLAR ROMA" || eleccionProducto === "PULSERA LISBOA" || eleccionProducto === "AROS PARIS") {
        carrito.push(eleccionProducto)
        console.log(carrito);        
    }else{
        console.log("No elegiste ninguna opcion");
    } 
    
}
agregarAlCarrito(); 

// Me gustaria saber como valido el stock con los datos del array ???
let cantidad = parseInt(prompt("Ingrese la cantidad desea comprar del producto"));
function validarStock() {
    if(cantidad <= stock){
        console.log("Contamos con esa cantidad");
    }else{
        console.log("No contamos con esa cantidad");
    }
    
}
validarStock();

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


//Aca tengo la misma consulta como deberia hacer para tomar el dato del precio ??
function calcularCompra(cantidad,precio) {
    return cantidad * precio
}
const resultado = calcularCompra(cantidad,precio);
alert("Su total a pagar es de:" + resultado)

let pago = parseInt(prompt("Indique en las cuotas que desea pagar 1 Cuota 3 Cuotas 6 Cuotas 12 Cuotas"));
function formaDepago(resultado, pago) {
    switch (pago) {
        case 1:
            return alert("En: " + pago + "debe abonar 1 couta de:" + resultado);
            break;
        case 3:
            return alert("En: " + pago + "debe abonar 3 coutas de:" + resultado/3);
            break;
        case 6:
            return alert("En: " + pago + "debe abonar 6 coutas de:" + resultado/6);
            break;
        case 12:
            return alert("En: " + pago + "debe abonar 12 coutas de:" + resultado/12);
            break;
        default:
            alert("No ingreso la cantidad de coutas validas");
            break;
    }
    
}
formaDepago(resultado, pago);

