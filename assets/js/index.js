const button = document.querySelectorAll('.button');
const img = document.querySelectorAll('.img');
const informacoes = document.querySelectorAll('.informacoes');

button.forEach((button, indice) => {//ForEach => para cada button acontce algo 
    button.addEventListener('click', () => {
        removeButton();
        button.classList.add("selecionado")

        removeImg();
        img[indice].classList.add("ativa")//indice consigo pegar a posição

        removeInformacoes();
        informacoes[indice].classList.add("ativa")

    })
});

function removeInformacoes() {
    const informaAtiva = document.querySelector(".informacoes.ativa");
    informaAtiva.classList.remove("ativa");
}

function removeImg() {
    const ImagemAtiva = document.querySelector(".ativa");
    ImagemAtiva.classList.remove("ativa");
}

function removeButton() {
    const buttonSelector = document.querySelector(".selecionado");
    buttonSelector.classList.remove("selecionado");
}
