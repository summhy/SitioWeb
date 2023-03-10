const express = require("express");
const app = express();
const hbs = require("hbs");
const archivo = require("fs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "hbs");
app.use(express.static("./css"));
app.use(express.static("./js"));

let path = "./data/data.json";

hbs.registerPartials(__dirname + "/views/partials");

app.listen(3000);
app.get("/", (req, res) => {
  res.render("formulario");
});

app.post("/cargar", (req, res) => {
    registro = {
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        cantidad: req.body.cantidad,
      };
      let resultado = archivo.readFileSync(path, {encoding:"utf-8"});
      console.log(resultado)
      resultado=JSON.parse(resultado);
      let indice = resultado.cursos.map(user => user.nombre).indexOf(registro.nombre);
      if(indice >=0){
        res.render("formulario",{"error": "Registro Existe"})
      }else{
          resultado.cursos.push(registro)
      }
      archivo.writeFileSync(path, JSON.stringify(resultado));
      res.render("formulario",{"mensaje": "Detalle Almacenado"})
  
});


