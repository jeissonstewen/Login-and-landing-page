import {rotar} from './carrusel.js'
rotar()
const items = document.querySelector('.card')
const url = 'https://fakestoreapi.com/products'

async function productos(){
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    console.log(datos)
    datos.forEach(item => {
        items.innerHTML+=`<div class="card">
        <h3>Producto</h3>
        <img src="https://via.placeholder.com/150" alt="Product Image">
        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non magni molestias! Ad
            voluptates rerum dolores, ipsa excepturi minus soluta placeat cum quis non exercitationem modi minima maxime
            labore eveniet?
        </p>
        <p class="precio">$<span>10.00</span></p>
        <button>Comprar ahora!</button>    
    </div>`
    });
}

productos()