let producto = prompt("Ingrese el nombre del producto que desee comprar 1. Zapatillas 2. Remera 3. Pantalon").toUpperCase();
let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar"));
let totalAPagar = parseInt(prompt("Ingrse el total de su compra"));
let pago = parseInt(prompt("Indique en las cuotas que desea pagar 1 Cuota 3 Cuotas 6 Cuotas 12 Cuotas"));
let stock = 10;
let precio = 8000;



function agregarAlCarrito() {
    if (producto === "ZAPATILLAS" || producto === "REMERA" || producto === "PANTALON") {
        console.log("Agregaste el procuto al carrito: " + producto);
        
    }else{
        console.log("No elegiste ninguna opcion");
    } 
}
agregarAlCarrito();

function validarStock() {
    if(cantidad <= 10){
        console.log("Vas a comprar la cantidad de: " + cantidad + "de este:" + producto);
    }else{
        console.log("No contamos con esa cantidad");
    }
    
}
validarStock();

function calcularCompra() {
    const resultado = cantidad * precio
    alert("el valor de su compra es de:" + resultado)
    
}
calcularCompra();

function formaDepago(totalAPagar, pago) {
    switch (pago) {
        case 1:
            return alert("En: " + pago + "debe abonar 1 couta de:" + totalAPagar);
            break;
        case 3:
            return alert("En: " + pago + "debe abonar 1 couta de:" + totalAPagar/3);
            break;
        case 6:
            return alert("En: " + pago + "debe abonar 1 couta de:" + totalAPagar/6);
            break;
        case 12:
            return alert("En: " + pago + "debe abonar 1 couta de:" + totalAPagar/12);
            break;
        default:
            alert("No ingreso la cantidad de coutas validas");
            break;
    }
    
}
formaDepago();

