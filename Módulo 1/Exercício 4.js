function experiencia(anos) {
    var experiencia;
    if(anos>=0 & anos<=1){
        experiencia="Iniciante";
    } else if(anos>1 && anos<=3){
        experiencia="Intermediário";
    } else if(anos>3 && anos<=6){
        experiencia="Avançado";
    } else{
        experiencia="Jedi Master";
    }//fim else
    return experiencia;
}//fim function

var anosEstudo = 7;
console.log(experiencia(anosEstudo));
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
   