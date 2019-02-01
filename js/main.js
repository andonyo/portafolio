var consulta = window.matchMedia('(max-width: 760px)');
consulta.addListener(mediaQuery);

function mediaQuery(){
    if (consulta.matches) {
    console.log('si');
    $burguerButton.addEventListener('touchstart', toggleMenu);

    }else{
    console.log('no');
    $burguerButton.removeEventListener('touchstart', toggleMenu);
    }
}

var $burguerButton = document.getElementById('burguer-button');
var $menu = document.getElementById('menu');
mediaQuery();

function toggleMenu(){
    $menu.classList.toggle('active');
};

const $inici = document.getElementById('inici')
const $inicio = document.getElementById('inicio')
const $habilida = document.getElementById('habilida')
const $proyec = document.getElementById('proyec')
const $contac = document.getElementById('contac')
const $contacto = document.getElementById('contacto')
const $yo = document.getElementById('yo')
const $laptop = document.getElementById('laptop')
const $iconos = document.getElementById('iconos')

$contac.addEventListener('click', (event) => {
    $yo.classList.add('activa');
    $laptop.classList.add('no');
    $iconos.classList.add('si');
} )

$contacto.addEventListener('click', (event) => {
    $yo.classList.add('activa');
    $laptop.classList.add('no');
    $iconos.classList.add('si');
    $menu.classList.toggle('active');
} )

$inici.addEventListener('click', (event) => {
    $yo.classList.remove('activa');
    $laptop.classList.remove('no');
    $iconos.classList.remove('si');
    $menu.classList.toggle('active');
} )

$inicio.addEventListener('click', (event) => {
    $yo.classList.remove('activa');
    $laptop.classList.remove('no');
    $iconos.classList.remove('si');
} )

$habilida.addEventListener('click', (event) => {
    $menu.classList.toggle('active');
} )

$proyec.addEventListener('click', (event) => {
$menu.classList.toggle('active');
} )