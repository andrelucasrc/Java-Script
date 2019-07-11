var nomes = ["Diego", "Gabriel", "Lucas"];
var listReference = document.querySelector("#lista");
function createElement(nome){
    var linkElement = document.createElement("li");
    linkElement.innerHTML=nome;
    listReference.appendChild(linkElement);
}//end of createElement
for(var i=0; i<3;i++){
    createElement(nomes[i]);
}//end of for
var inputElement=document.querySelector("#nome");
var buttonElement=document.querySelector("button.botão");
buttonElement.onclick = function(){
    var text = inputElement.value;
    createElement(text);
    inputElement.value = "";
}//end of onclick button