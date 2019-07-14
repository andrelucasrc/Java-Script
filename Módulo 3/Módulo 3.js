//Recuperar todos os valores necessários para a criação da lista
var inputElement = document.querySelector("#app input");    //Variável responsável pelo texto digitado pelo usuário 
var buttonElement = document.querySelector("#app button");  //Variável responsável pelo o botão de adicionar elementos na lista
var listElement = document.querySelector("#app ul");        //Variável responsável pela lista criada

/*Definir a variável todos o valor salvo no localStorage , caso não seja possível definir a
  variável como uma lista vazia.
 */
var todos = JSON.parse(localStorage.getItem('lista_todo')) || []

//Função que renderiza toda a lista na tela
function renderTodo(){
    //Define o conteúdo dentro do HTML como vázio para que a lista não apareça mais de uma vez no texto.
    listElement.innerHTML='';
    //Percorre todos os itens existentes na lista criando eles na tela
    for(todo of todos){
        var elementList=document.createElement("li");   //Criar um elemento responsável pelo conteúdo da lista
        var textElement=document.createTextNode(todo);  //Criar um elemento de texto para a lista pegando o item do arranjo de strings
        var deleteElement=document.createElement("a");  //Cria um elemento responsável por deletar o item da lista
        deleteElement.setAttribute("href" , "#");       //Definir os atributos do elemento, necessário para deleta-lo da lista
        var linkText=document.createTextNode("Delete"); //Defini o nome deste elemento de exclusão
        deleteElement.appendChild(linkText);            //Adiciona o texto que ira aparecer para exlusão de item
        var pos = todos.indexOf(todo);                  //Verifica a posição que ira ser deletada caso o item de exclusão seja clicado
        deleteElement.setAttribute("onclick" , "deleteTodo(" + pos + ")"); //Setar a função que sera ativada ao clicar no item de exclusão
        elementList.appendChild(textElement);
        elementList.appendChild(deleteElement);
        listElement.appendChild(elementList);
    }//end of for
}//end of renderTodo

renderTodo();

//Função responsável por adicionar um novo item To do na tela
function addTodo(){
    var text=inputElement.value;    //Recuperar o valor
    todos.push(text);               //Adicionar a lista o texto;
    inputElement.value="";          //Remover o valor digitado no input após a adição
    renderTodo();                   //Logo após isso renderizar e salvar
    saveTodo();
}//end of addTodo

buttonElement.onclick = addTodo;

//Função responsável por deletar um item da lista
function deleteTodo(pos){
    todos.splice(pos, 1);   //Função que deleta item de um arranjo
    renderTodo();
    saveTodo();
}//end of deleteElement

//Função responsável por salvar o item dentro do Local Storage
function saveTodo(){
    localStorage.setItem('lista_todo' , JSON.stringify(todos));
}//enf of saveTodo