

const usuarios=[
    {
        nombre:"Joao",
        username:"Joaom",
        userpass:"123456"
    },
    {
        nombre:"Oscar",
        username:"Oscara",
        userpass:"654321"
    },
    {
        nombre:"Pedro",
        username:"Pedroc",
        userpass:"1234"
    },
    {
        nombre:"pepito",
        username:"pepito123",
        userpass:"123456"
    }
]

/* mostrar.addEventListener('mouseenter', ()=>password.type='text')   
mostrar.addEventListener('mouseleave', ()=>password.type='password') */
mostrar.addEventListener('click', ()=>{
    if(password.type=='text'){
        password.type='password'
    } else {
        password.type='text'
    }    

})       


login.addEventListener('click',()=>{
    if(usuarios.find(usuario=>usuario.username==user.value)){
        indice = usuarios.findIndex(usuario=>usuario.username==user.value)
        if(usuarios[indice].userpass==password.value){
            alert('Bienvenido')
            location.href="../HTML/web.html"
        } else {
            mostrarError()
        }
    } else {
        mostrarError()
    }
})

function mostrarError(){
    error_login.style.display = 'block'
        setTimeout(()=>{
            error_login.style.display = 'none'
        },2000)
}