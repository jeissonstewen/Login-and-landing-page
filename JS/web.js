import {rotar} from './carrusel.js'
let elementos ='' /* se crea para el modal */
rotar()
const items = document.querySelector('.cards')
const url = 'https://fakestoreapi.com/products'

async function productos(){
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    elementos=Array.from(datos)
    let cont= 0
    console.log(datos)
    datos.forEach(item => {
        items.innerHTML+=`<div class="card">
        <h3>${item.title}</h3>
        <img class="card-img" src="${item.image}" alt="Product Image">
        <p class="card-description">${item.description}
        </p>
        <p class="precio">$<span>${item.price}</span></p>
        <button class="btn-buy" value="${cont}">Comprar!</button>    
    </div>`
    cont++
    });
}

productos()

/* event.stopPropagation() revisar que sirve para no propagar los click en escucha de una ventana*/
addEventListener('click',(event)=>{
    if(event.target.className=='btn-buy'){
    modal.style.display = 'flex'
    contenido.innerHTML=
    `<div class="card-modal">
        <h3>${elementos[event.target.value].title}</h3>
        <img class="card-img" src="${elementos[event.target.value].image}" alt="Product Image">
        <p class="card-description">${elementos[event.target.value].description}
        </p>
        <p class="precio">$<span>${elementos[event.target.value].price}</span></p>
        <button class="btn-sale" value="">Comprar</button>    
    </div>`
    }
    
    const ventana = document.querySelector('.ventanta')    
    ventana.addEventListener('click',event=>{
        if(event.target.className=='btn-sale'){
            alert('comprado')
        }
    })
})