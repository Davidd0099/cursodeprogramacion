var  express = require("express");
var app = express();

app.get("/", start);
app.get("/cursos", cursos);


function start(peticion, resultado)
{
    resultado.send("Este es el <strong>home</strong>");
}
function cursos(peticion, resultado)
{
    resultado.send("Estos son los <strong>cursos</strong>");
}

app.listen(8989);