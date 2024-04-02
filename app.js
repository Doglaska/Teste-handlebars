const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.get("/", function(req, res){
  res.render("pagina_inicial")
})

app.get("/login", function(req,res){
  res.render("login")
})

app.get("/cadastrar", function(req, res){
  res.render("cadastrar")
})

app.get("/agenda", function(req, res){
  res.render("agenda")
})

app.listen(8081, function(){
  console.log("Servidor ativo!")
})