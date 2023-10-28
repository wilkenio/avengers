//funções do menu direito
function menuAbrir() {
    var navdireita = document.getElementById('nav-direita');
    var ham = document.getElementById('ham');
    var x = document.getElementById('x');

    //escurece e embaça menu quando aberto no mobile
    if (window.innerWidth < 1055) {
        var navTopo = document.getElementById('nav-topo');

        navTopo.style.backgroundColor = "rgba(0, 0, 0, 0.363)"
        navTopo.style.backdropFilter = "blur(15px)"
    }
    //removendo o icone hamburguer e mostrando o icone X
    navdireita.style.right = "0%"
    ham.style.display = "none"
    x.style.display = "block"
}

function menuFechar() {
    var navdireita = document.getElementById('nav-direita');
    var ham = document.getElementById('ham');
    var x = document.getElementById('x');

    //remove a cor escura e o embaço do menu quando fechado no mobile
    if (window.innerWidth < 1055) {
        var navTopo = document.getElementById('nav-topo');

        navTopo.style.backgroundColor = "rgba(0, 0, 0, 0.151)"
        navTopo.style.backdropFilter = "blur(1px)"
    }
    //removendo o icone x e mostrando o icone hamburguer
    navdireita.style.right = "-100%"
    ham.style.display = "block"
    x.style.display = "none"
}

//funções para mudar a aparencia e os elementos do site

//imagens do menu lateral esquerdo do desktop
var scarlet = document.getElementById('scarlet');
var draxImg = document.getElementById('img_drax');
var scarletImg = document.getElementById('img_wanda');
var nebulosaImg = document.getElementById('img_nebulosa');
//texto dos personagens
var textoScarlet = document.getElementById('text-scarlet');
var textoDrax = document.getElementById('text-drax');
var textoNebulosa = document.getElementById('text-nebulosa');

var personagens = document.getElementById('personagens');
var estiloDocumento = document.documentElement.style;

//variavel criada para monitorar o atual personagem exibido
var personagem = "scarlet"

function drax() {
    //atualizando a variavel do atual personagem
    personagem = "drax"
    //mudando o estilo de alguns elementos
    textoScarlet.style.display = "none"
    textoDrax.style.display = "block"
    textoNebulosa.style.display = "none"
    personagens.scrollTop = personagens.scrollTop + 120;
    //mudando imagem de fundo 
    scarlet.style.backgroundImage = "url('../img/02.png')";
    draxImg.style.filter = 'brightness(1)'
    draxImg.style.borderImage = 'linear-gradient(to top, var(--cor-relativa1) 6%, var(--cor-relativa2) 80%, var(--cor-relativa2) 2%) 30';
    scarletImg.style.borderImage = 'none'
    scarletImg.style.filter = 'brightness(0.3)'
    nebulosaImg.style.borderImage = 'none'
    nebulosaImg.style.filter = 'brightness(0.3)'
    //mudando a variavel de cor css
    estiloDocumento.setProperty('--cor-relativa1', '#411E6E');
    estiloDocumento.setProperty('--cor-relativa2', '#337F73');
}

function scarlett() {
    //atualizando a variavel do atual personagem
    personagem = "scarlet"
    //mudando o estilo de alguns elementos
    textoScarlet.style.display = "block"
    textoDrax.style.display = "none"
    textoNebulosa.style.display = "none"
    personagens.scrollTop = personagens.scrollTop - 120;
    //mudando imagem de fundo 
    scarlet.style.backgroundImage = "url('../img/01.png')";
    draxImg.style.filter = 'brightness(0.3)'
    nebulosaImg.style.filter = 'brightness(0.3)'
    draxImg.style.borderImage = 'none';
    scarletImg.style.borderImage = 'linear-gradient(to top, var(--cor-relativa1) 6%, var(--cor-relativa2) 80%, var(--cor-relativa2) 2%) 30'
    scarletImg.style.filter = 'brightness(1)'
    //mudando a variavel de cor css
    estiloDocumento.setProperty('--cor-relativa1', '#FF0E39');
    estiloDocumento.setProperty('--cor-relativa2', ' rgb(231, 104, 0)');
}

function nebula() {
    //atualizando a variavel do atual personagem
    personagem = "nebula"
    //mudando o estilo de alguns elementos
    textoScarlet.style.display = "none"
    textoDrax.style.display = "none"
    textoNebulosa.style.display = "block"
    personagens.scrollTop = personagens.scrollTop + 120;
    //mudando imagem de fundo 
    scarlet.style.backgroundImage = "url('../img/03.png')";
    draxImg.style.filter = 'brightness(0.3)'
    //scarlet.style.filter = 'brightness(0.3)'
    draxImg.style.borderImage = 'none';
    scarletImg.style.borderImage = 'none'
    scarletImg.style.filter = 'brightness(0.3)'
    nebulosaImg.style.filter = 'brightness(1)'
    nebulosaImg.style.borderImage = 'linear-gradient(to top, var(--cor-relativa1) 6%, var(--cor-relativa2) 80%, var(--cor-relativa2) 2%) 30'
    estiloDocumento.setProperty('--cor-relativa1', '#0345ED');
    estiloDocumento.setProperty('--cor-relativa2', ' #0345ED');
}

//chamando as funções de acordo com os clicks
draxImg.addEventListener('click', function () {
    drax();
});

scarletImg.addEventListener('click', function () {
    scarlett();
});

nebulosaImg.addEventListener('click', function () {
    nebula();
});

//criando a funcionalidade do scroll lateral esquerdo
var scrollDown = document.getElementById('scroll-down');
scrollDown.addEventListener('click', function () {
    if (personagem == "scarlet") {
        drax()
    } else if (personagem == "drax") {
        nebula()
    }
});

var scrollUp = document.getElementById('scroll-up');
scrollUp.addEventListener('click', function () {
    if (personagem == "drax") {
        scarlett()
    } else if (personagem == "nebula") {
        drax()
    }
});




