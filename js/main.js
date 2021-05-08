let nome = prompt('Qual seu nome? ')
let stack = prompt('Qual sua Satck?')
const $btn = document.querySelector('#btn_teste')
const $nome_dev = document.querySelector('#nome_dev')
const $stack_dev = document.querySelector('#stack_dev')
const $btn_lk = document.querySelector('#btn_lk')
const $btn_gh = document.querySelector('#btn_gh')

$btn.addEventListener('click', function mostraDadosDev() {
    $nome_dev.innerHTML += nome
    $stack_dev.innerHTML += stack
})

$btn_lk.addEventListener('click', function perfil() {
    window.open("https://www.linkedin.com/in/juliana-sferreira/") //abre em outra aba
})

$btn_gh.addEventListener('click', function portifolio() {
    window.location.href="https://github.com/julianasf-91" //abre na mesma aba
})
