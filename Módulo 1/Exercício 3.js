function temHabilidade(skills){
    var temJS=false;
    if(skills.indexOf("Javascript")>=0){
        temJS=true;
    }//fim if
    return temJS;
}//fim function

var skills = ["Javascript", "ReactJS", "React Native"];
if(temHabilidade(skills)){
    console.log("OK");
}//fim if
else{
    console.log("Não tem");
}//fim else