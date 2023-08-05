const producto = document.getElementById('producto')
const productoImage = producto.querySelector('.producto__imagen')
const thumbs = producto.querySelector('.producto__thumbs')

// color
const propiedadColor = producto.querySelector('#propiedad-color')

// Cantidad

const btnIncrementarCantidad = producto.querySelector('#incrementar-cantidad')
const btnDisminuirCantidad = producto.querySelector('#disminuir-cantidad')
const inputCantidad = producto.querySelector('#cantidad')


thumbs.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
        const imagenSrc = e.target.src
        const lastIndex = imagenSrc.lastIndexOf('/')
        const nombreImagen = imagenSrc.substring(lastIndex + 1)

        productoImage.src = `./img/tennis/${nombreImagen}` 
    }
})

propiedadColor.addEventListener('click', (e)=>{

    if(e.target.tagName === 'INPUT'){

        productoImage.src = `./img/tennis/${e.target.value}.jpg`
    
    }

})


btnIncrementarCantidad.addEventListener('click', (e)=>{
    inputCantidad.value = parseInt(inputCantidad.value) + 1 

})

btnDisminuirCantidad.addEventListener('click', ()=>{
    if((inputCantidad.value) > 1)  inputCantidad.value = parseInt(inputCantidad.value) - 1
})


