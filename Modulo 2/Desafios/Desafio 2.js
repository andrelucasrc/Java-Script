/*Crie um botão que ao ser clicado cria um novo elemento em tela com a 
forma de um quadradovermelho com 100px de altura e largura. Sempre que 
o botão for clicado um novo quadrado deveaparecer na tela.*/
/*Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o 
mouse por cima dealgum quadrado troque sua cor para uma cor aleatória gerada pela 
função abaixo:
function getRandomColor() {  
    var letters = "0123456789ABCDEF";
    var color = "#";  
    for (var i = 0; i < 6; i++) {    
        color += letters[Math.floor(Math.random() * 16)];
    }  
    return color;
}
var newColor = getRandomColor(); // #E943F0*/
var btnElement = document.querySelector("button.botão");
var boxElement = document.querySelector(".box");
function createSquare(){
    boxElement.style.width = 100;
    boxElement.style.height = 100;
    boxElement.style.backgroundColor = "f00";
}//end of function createSquare
btnElement.onclick = function(){
    createSquare();
}//end of function btnElement.onclick
//Disponibilizado pelo desafio
function getRandomColor() {  
    var letters = "0123456789ABCDEF";
    var color = "#";  
    for (var i = 0; i < 6; i++) {    
        color += letters[Math.floor(Math.random() * 16)];
    }  
    return color;
}//end of getRandomColor
boxElement.onmouseover = function(){
    boxElement.style.backgroundColor = getRandomColor();
}//fim boxElement.onmouseover