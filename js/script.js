
//mapeando os elementos (assets) HTML 
const mario = document.querySelector ('.mario');
const pipe = document.querySelector ('.pipe'); 


const restar = document.querySelector(".restart");
const clouds = document.querySelector(".clouds");


//criando um novo elemento HTML e armazenando na variavel gameOverText
const gameOverText = document.createElement("div");

gameOverText.innerText = "Game Over"; //define o conteudo do texto do elemento
gameOverText.classList.add("game-over-text"); // definindo o nome da classe do elemento para game-over-text
document.body.appendChild(gameOverText); //anexa o elemento gameOverText ao elemtno <body> do HTML</body>

//criando a funçao showGameOver para exibir o texto "game over"
const showGameOver = () => {
  //declaração da função showGameOver
  gameOverText.style.display = "block"; //definindo a propriedade do elemento gameOverText como "block", torna elemento visivel
};



//função jump que simula a ação de pular
const jump = () =>
{mario.classList.add ('jump');

//função remove a classe jump do elemento Mario, pra depois chamar de novo
setTimeout(() =>
{ mario.classList.remove ('jump');} , 500);

};
//criando a função que vai parar a animação das nuvens quando perder o jogo
const stopClouds = () => {
    //declarando a função stopClouds
    clouds.style.animation = "none"; //interrompe a animação que esta atribuida a classe clouds
  };
  







//loop do jogo para verificar se ganhou ou perdeu
const loop = setInterval (() => 
{ const pipePosition = pipe.offsetLeft;

//verifica a altura do player, e converte valor string para numero para que calculo aconteça
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

// principal logica do jogo, verifica se player caiu no pipe, verifica altura do player, se nao jogo é interrompido 'gameover' b
if (pipePosition <= 120 && pipePosition > 0 && marioPosition <80)
    { 
        pipe.style.animation = 'none';
        //informa o local do pipe para que ele fique na posiçao exata que o player bateu
        pipe.style.left = `${pipePosition}px`;


        mario.style.animation = 'none';
        //informa o local do player  para que ele fique na posiçao exata onde bateu
        mario.style.bottom = `${marioPosition}px`;
        // troca a imagem para imagem de game over caso player morra
        mario.src = './imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // encerra o loop do jogo
        clearInterval(loop);

        stopClouds(); // Chama a função stopClouds(), que interrompe a animação das nuvens.
        showGameOver(); // Chama a função showGameOver()

     } 
 


},10);

//criando a função para recarregar a pagina ao clicar no botão restart
restar.addEventListener("click", () => {
    //adicionando ouvinte de eventos (clique) no botão restar
    location.reload(true); //chamento a função que irá recarrega a pagina
  });
  
  //adicionando ouvintes de eventos ao documento html
  document.querySelector(".restart").addEventList











//Quando uma tecla é acionada, a função jump é chamada
document.addEventListener ('keydown', jump);