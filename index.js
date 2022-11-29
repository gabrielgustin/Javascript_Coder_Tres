//Clase Productos
class Producto{
    constructor(id,nombre,precio,imagen) {
        this.id = id
        this.nombre = nombre
        this.precio = precio 
    }
}
//Creamos los Productos
const producto1 = new Producto(1,'CoponLulu', 1300)
const producto2 = new Producto(2,'Yackie', 350)
const producto3 = new Producto(3,'Bestie', 2000)
const producto4 = new Producto(4,'Copin', 700)
const producto5 = new Producto(5,'Titi', 800)
const producto6 = new Producto(6,'Flowi', 150)
const producto7 = new Producto(7,'Niki ', 900)
const producto8 = new Producto(8,'Bossi', 200)
const producto9 = new Producto(9,'Foker', 600)
const producto10 = new Producto(10,'Fifi', 350)
const producto11 = new Producto(9,'Loli', 600)
const producto12 = new Producto(10,'Striler', 350)
//Creamos arreglo Productos 
const productosArray = [ 
    producto1, 
    producto2, 
    producto3, 
    producto4, 
    producto5, 
    producto6, 
    producto7, 
    producto8, 
    producto9, 
    producto10,
    producto11,
    producto12,
]
//Buscamos elementos al DOM

const divProduct = document.getElementById('divProduct')

productosArray.forEach(producto => {

divProduct.innerHTML +=`
    <div class="card cardPorductos" id="${producto.id}" >
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">$${producto.precio}</p>
    <button id="${producto.id} type="button" class="btn btn-dark">AGREGAR</button>
    </div>
    </div>
    `
})

//Carrito de compra 
const carrito = []
const botonesAgregar = document.querySelectorAll('.btn-dark')  

botonesAgregar.forEach(boton =>{
    
    boton.onclick = ()=>{
        const producto = productosArray.find(prod=>prod.id===parseInt(boton.id))
        const productoCarrito ={
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 1
    }
    const indexCarrito = carrito.findIndex(prod => prod.id === producto.id)
    if(indexCarrito === -1){
        carrito.push(productoCarrito)
    }else{
        carrito[indexCarrito].cantidad += 1
    }
    console.log(carrito)
    }
})


//Boton Finalizar Compra

const botonFinalizar = document.getElementById('finalizar')
botonFinalizar.onclick = () => {
    const totalCompra = carrito
    .map(prod => prod.precio * prod.cantidad)
    .reduce((elem1,elem2)=>elem1+elem2)
    console.log(totalCompra)

    const totalCarrito = document.getElementById('divTotal')
    const parrafoConResultado = document.createElement('p')
    parrafoConResultado.innerText = totalCarrito
    alert(`El total de tu compra es ${totalCompra}`)
}





