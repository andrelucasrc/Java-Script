function a(dic)
{
    for(i in dic)
    {
        console.log("O usuario", dic[i].nome, "tem as habilidades", dic[i].habilidades.join(","))
    }
}

var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];

a(usuarios);