import fetch from 'node-fetch'
let entrar= true
let tienda;
const traerdatos=()=>{
    
    
}
while(entrar){
    console.log("hola mundo que quieres hacer ")
    console.log("opciones\na-usuario")
    fetch('http://localhost:4000/products')
    .then(response=>response.json())
    .then(data=>{
        tienda=data
    })
    console.log("loading ....")
    setTimeout(function(){
        console.log("lista de productos")
        console.log(tienda)
    },5000)
    entrar=undefined
}

