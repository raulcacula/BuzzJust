var bar = document.querySelector('.bar-lateral')
var fechar = document.getElementById('fechar-bar')
var abrir = document.getElementById('Seta-bar')

function AbrirBar(){
    if(abrir = bar.style.display = 'flex' ){

    }
}
abrir.addEventListener('click', AbrirBar)

function FecharBar(){
    if(fechar = bar.style.display = 'none'){
    }
}
fechar.addEventListener('click', FecharBar)

const burger = document.querySelector(".burger-container")
const items = document.querySelector(".header")

burger.addEventListener("click", () =>
items.classList.toggle("active"))



var inputP = document.getElementById('srch')
function AbrirPesq(){

}

const myObserver = new IntersectionObserver((efeito) => {
    efeito.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('shox')
        }
    })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach( (element) => myObserver.observe(element))