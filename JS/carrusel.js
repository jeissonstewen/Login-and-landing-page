export function rotar(){
    if(foto<images.length){
        foto__carrusel.src = images[foto]
        foto++
    } else {
        foto = 0
    }
}
const images = [
    '../Images/foto1.jpg',
    '../Images/foto2.jpg'
]

let foto = 0

setInterval(rotar,2000)