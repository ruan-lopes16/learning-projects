// Selecionando elementos do DOM
const lampDiv = document.getElementById('lamp-off');
const btnLigar = document.getElementById('on');
const btnDesligar = document.getElementById('off');

// Estado da lâmpada
let lampadaQuebrada = false;

// Função para ligar a lâmpada
function ligarLampada() {
    if (!lampadaQuebrada) {
        lampDiv.innerHTML = '<img src="assets/img/lamp-on.svg">';
    }
}

// Função para desligar a lâmpada
function desligarLampada() {
    if (!lampadaQuebrada) {
        lampDiv.innerHTML = '<img src="assets/img/lamp-off.svg">';
    }
}

// Função para quebrar a lâmpada
function quebrarLampada() {
    lampDiv.innerHTML = '<img src="assets/img/lamp-broken.svg">';
    lampadaQuebrada = true;
}

// Event listeners para os botões
btnLigar.addEventListener('click', ligarLampada);
btnDesligar.addEventListener('click', desligarLampada);

// Event listener para quebrar a lâmpada ao clicar nela
lampDiv.addEventListener('click', quebrarLampada);

// Opcional: adicionar hover para mostrar interatividade
lampDiv.addEventListener('mouseover', function() {
    if (!lampadaQuebrada) {
        lampDiv.style.cursor = 'pointer';
        lampDiv.style.opacity = '0.8';
    }
});

lampDiv.addEventListener('mouseout', function() {
    lampDiv.style.opacity = '1';
});