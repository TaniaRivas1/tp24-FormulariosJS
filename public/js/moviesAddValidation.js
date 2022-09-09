console.log('moviesAddValidation success');
window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    


let errores= document.querySelector('.errores');
let inputTitle = document.getElementById('title');
let errorTitle= document.getElementById('errorTitle');
let inputRating = document.getElementById('rating');
let errorRating= document.getElementById('errorRating');
let inputAwards= document.getElementById('awards');
let errorAwards= document.getElementById('errorAwards');
let inputDate = document.getElementById('release_date');
let errorDate= document.getElementById('errorDate');
let inputLength = document.getElementById('length');
let errorLength= document.getElementById('errorLength');
let inputGenre = document.getElementById('genre_id');
let errorGenre= document.getElementById('errorGenre');
let form = document.getElementById('form');

inputTitle.focus();
let erroresArray = []
console.log(inputTitle)

inputTitle.addEventListener('blur', () =>{
    if (!inputTitle.value) {
        errorTitle.innerHTML = 'El campo titulo no puede estar vacio';
        inputTitle.classList.add('is-invalid')
    }else{
        errorTitle.innerHTML = null
        inputTitle.classList.remove
    }
})
inputRating.addEventListener('blur', () =>{
    switch (true) {
        case !inputRating.value:
            errorRating.innerHTML = 'El campo rating no puede estar vacio';
            inputRating.classList.add('is-invalid')
            break;
            case inputRating.value < 0 || inputRating.value > 10:
            errorRating.innerHTML = 'El campo rating debe ser entre 0 y 10 puntos';
            inputRating.classList.add('is-invalid')
            break;
        default:
            errorRating.innerHTML = null;
            inputRating.classList.remove('is-invalid')
            break;
    }
})
inputAwards.addEventListener('blur', () =>{
    switch (true) {
        case !inputAwards.value:
            errorAwards.innerHTML = 'El campo awards no puede estar vacio';
            inputAwards.classList.add('is-invalid')
            break;
            case inputAwards.value < 0 || inputAwards.value > 10:
            errorAwards.innerHTML = 'El campo awards debe ser entre 0 y 10 puntos';
            inputAwards.classList.add('is-invalid')
            break;
        default:
            errorAwards.innerHTML = null;
            inputAwards.classList.remove('is-invalid')
            break;
    }
})
inputDate.addEventListener('blur', () =>{
    if (!inputDate.value) {
        errorDate.innerHTML = 'El campo release_date no puede estar vacio';
        inputDate.classList.add('is-invalid')
    }else{
        errorDate.innerHTML = null
        inputDate.classList.remove('is-invalid')
    }
})
inputLength.addEventListener('blur', () =>{
    switch (true) {
        case !inputLength.value:
            errorLength.innerHTML = 'El campo length no puede estar vacio';
            inputLength.classList.add('is-invalid')
            break;
            case inputLength.value < 60 || inputLength.value > 360:
            errorLength.innerHTML = 'El campo length debe ser entre 60 y 360 minutos';
            inputLength.classList.add('is-invalid')
            break;
        default:
            errorLength.innerHTML = null;
            inputLength.classList.remove('is-invalid')
            break;
    }
})
inputGenre.addEventListener('blur', () =>{
    if (!inputGenre.value) {
        errorGenre.innerHTML = 'El campo genero no puede estar vacio';
        inputGenre.classList.add('is-invalid')
    }else{
        errorGenre.innerHTML = null
        inputGenre.classList.remove('is-invalid')
    }
})
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let elements = form.elements;
    let error = false;

    for (let i = 0; i < elements.length-1 ; i++) {
        if (elements[i].classList.contains('is-invalid') || elements[i].value) {
            error= true
        }
    }
    if (error) {
        e.target.submit()
    }
})
}