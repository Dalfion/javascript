class Producto {
    constructor(nombre, id, precio, stock) {
        this.nombre = nombre
        this.id = id;
        this.precio = precio;
        this.stock = stock;
    }

    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}

const procesadores = [];
const graficas = [];
const mothers = [];
const rams = [];
const almacenamientos = [];
const fuentes = [];

procesadores.push(new Producto("Intel i3", 1, 17000, 50));
procesadores.push(new Producto("Intel i5", 2, 30000, 50));
procesadores.push(new Producto("Intel i7", 3, 65000, 50));
procesadores.push(new Producto("Intel i9", 4, 110000, 50));
procesadores.push(new Producto("Ryzen 3", 5, 20000, 50));
procesadores.push(new Producto("Ryzen 5", 6, 43000, 50));
procesadores.push(new Producto("Ryzen 7", 7, 63000, 50));
procesadores.push(new Producto("Ryzen 9", 8, 100000, 50));

graficas.push(new Producto("RTX 2060", 9, 95000, 50));
graficas.push(new Producto("RTX 2070", 10, 180000, 50));
graficas.push(new Producto("RTX 2080", 11, 260000, 50));

mothers.push(new Producto("Asus B450m Am4", 12, 17500, 50));
mothers.push(new Producto("Msi B450m Pro-m2", 13, 20000, 50));

rams.push(new Producto("HyperX 4GB ddr4", 14, 5700, 50));
rams.push(new Producto("HyperX 8GB ddr4", 15, 7600, 50));
rams.push(new Producto("HyperX 16GB ddr4", 16, 18700, 50));

almacenamientos.push(new Producto("HDD WD 1TB", 17, 10000, 50));
almacenamientos.push(new Producto("SSD KINGSTON 480GB", 18, 9500, 50));
almacenamientos.push(new Producto("SSD KINGSTON 240GB", 19, 5700, 50));
almacenamientos.push(new Producto("SSD KINGSTON 250GB m.2", 20, 6300, 50));

fuentes.push(new Producto("500w 80plus bronze", 21, 9400, 50));
fuentes.push(new Producto("750w 80plus gold", 22, 22000, 50));
fuentes.push(new Producto("1000w 80plus gold", 23, 33000, 50));



for (const procesador of procesadores) {
    alert("Procesador ID (" + procesador.id + ") - " + procesador.nombre);
}
for (const grafica of graficas) {
    alert("Grafica ID (" + grafica.id + ") - " + grafica.nombre);
}
for (const mother of mothers) {
    alert("Mother ID (" + mother.id + ") - " + mother.nombre);
}
for (const ram of rams) {
    alert("Ram ID (" + ram.id + ") - " + ram.nombre);
}
for (const almacenamiento of almacenamientos) {
    alert("Almacenamiento ID (" + almacenamiento.id + ") - " + almacenamiento.nombre);
}
for (const fuente of fuentes) {
    alert("Fuente ID (" + fuente.id + ") - " + fuente.nombre);
}


function calcularPrecio(precioComps, cantidadComps, costoEnvio) {
    return (precioComps * cantidadComps) + costoEnvio;
}

let compSeleccionado = parseInt(prompt("Ingrese el ID del componente a comprar:"));
const cpuBuscado = procesadores.find(procesador => procesador.id === compSeleccionado);
const graficaBuscada = graficas.find(grafica => grafica.id === compSeleccionado);
const motherBuscada = mothers.find(mother => mother.id === compSeleccionado);
const ramBuscada = rams.find(ram => ram.id === compSeleccionado);
const almcBuscado = almacenamientos.find(almacenamiento => almacenamiento.id === compSeleccionado);
const fuenteBuscada = fuentes.find(fuente => fuente.id === compSeleccionado);

let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar:"));


const envio = 1000;


if (compSeleccionado <= 0) {
    alert("Ingrese un ID valido");
} else if (compSeleccionado <= 8) {
    alert("El precio final de tu compra es: $" + calcularPrecio(cpuBuscado.precio, cantidad, envio));
    cpuBuscado.vender(cantidad);
} else if (compSeleccionado <= 11) {
    alert("El precio final de tu compra es: $" + calcularPrecio(graficaBuscada.precio, cantidad, envio));
    graficaBuscada.vender(cantidad);
} else if (compSeleccionado <= 13) {
    alert("El precio final de tu compra es: $" + calcularPrecio(motherBuscada.precio, cantidad, envio));
    motherBuscada.vender(cantidad);
} else if (compSeleccionado <= 16) {
    alert("El precio final de tu compra es: $" + calcularPrecio(ramBuscada.precio, cantidad, envio));
    ramBuscada.vender(cantidad);
} else if (compSeleccionado <= 20) {
    alert("El precio final de tu compra es: $" + calcularPrecio(almcBuscado.precio, cantidad, envio));
    almcBuscado.vender(cantidad);
} else if (compSeleccionado <= 23) {
    alert("El precio final de tu compra es: $" + calcularPrecio(fuenteBuscada.precio, cantidad, envio));
    fuenteBuscada.vender(cantidad);
} else {
    alert("Ingresa un ID valido");
}