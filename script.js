let order = []; // Ordens do jogo aleatoriamente
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// Cria ordem aleatória de cores;
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); // Sorteia de 1 a 3
    order[order.length] = colorOrder; // atribui o sorteio
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
};

// Vai para a próxima cor;
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
};

// Checa se a ordem clicada foi correta;
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
            break; 
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê foi bem! Vamos para o próximo nível!`);
        nextLevel();
    }
};

// Função do clique;
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

};

// Função que retorna a cor;
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3){
        return blue;
    }
};

// Função para o próximo nível;
let nextLevel = () => {
    score++;
    shuffleOrder();
};

// Função game over;
let lose = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para que possa jogar novamente!`);
    order = [];
    clickedOrder = [];

    playGame();
};

// Função que inicia o jogo;
let playGame = () => {
    alert('Boas vindas ao Gênisis! Você é bom o bastante para esse desafio?!')
    score = 0;

    nextLevel();
};

// Funções de Cliques para as cores;
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// Início do jogo;
playGame();