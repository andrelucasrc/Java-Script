/*Crie um botão que ao ser clicado cria um novo elemento em tela com a 
forma de um quadradovermelho com 100px de altura e largura. Sempre que 
o botão for clicado um novo quadrado deveaparecer na tela.*/
var btnElement = document.querySelector("button.botão");
function createSquare(){
    var boxElement = document.querySelector(".box");
    boxElement.style.width = 100;
    boxElement.style.height = 100;
    boxElement.style.backgroundColor = "f00";
}//end of function createSquare
btnElement.onclick = function(){
    createSquare();
}//end of function btnElement.onclick