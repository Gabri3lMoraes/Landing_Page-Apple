var botao = document.querySelectorAll(".escolha");
var bordaativa = 0;
var ultimoBotaoClicado = null;
var corpo = document.querySelector("body");
var bordar = document.querySelector("#ipho");
var cor = document.querySelector('#verde')
var cor2 = document.querySelector('#cinza')
var cor3 = document.querySelector('#vermelho')
var cor4 = document.querySelector('#pele')
var cor5 = document.querySelector('#branco')
var cor6 = document.querySelector('#azul')
var img = document.querySelector('#imagem')
var img1 = document.querySelector('#imagem2')
var img2 = document.querySelector('#imagem3')
var img3 = document.querySelector('#imagem4')
var img4 = document.querySelector('#imagem5')
var bola = document.querySelector(".iphone")
var link = document.querySelector("#Mac")

botao.forEach(function (botao) {
  botao.addEventListener("click", function () {
    if (ultimoBotaoClicado !== null) {
      ultimoBotaoClicado.style.border = "none";
    }

    botao.style.border = "2px solid #0ba2f3 ";
    // Atualiza a referência do último botão clicado

    ultimoBotaoClicado = botao;
  });
});


document.addEventListener('DOMContentLoaded', function(){
    const pagina = window.location.pathname.split('/').pop();
    if(pagina === "index.html"){
    bordar.style.borderBottom = '2px solid #fff'
    console.log(pagina)
}

})


cor2.addEventListener('click', function(){
  img4.style.display = "block"
  img.style.display = "none"
  img2.style.display = "none"
  img3.style.display = "none"
  img1.style.display = "none"
  bola.style.backgroundColor = "#43484e"

  
})
cor5.addEventListener('click', function(){
  img2.style.display = "block"
  img4.style.display = "none"
  img.style.display = "none"
  img3.style.display = "none"
  img1.style.display = "none"
  bola.style.backgroundColor = "#e7e4e4"

  
})
cor6.addEventListener('click', function(){
  img.style.display = "block"
  img2.style.display = "none"
  img4.style.display = "none"
  img3.style.display = "none"
  img1.style.display = "none"
  bola.style.backgroundColor = "#419bcc"

  
})
cor.addEventListener('click', function(){
  img1.style.display = "block"
  img2.style.display = "none"
  img4.style.display = "none"
  img.style.display = "none"
  img3.style.display = "none"
  bola.style.backgroundColor = "#013220"

  
})
cor4.addEventListener('click', function(){
  img3.style.display = "block"
  img2.style.display = "none"
  img4.style.display = "none"
  img.style.display = "none"
  img1.style.display = "none"
  bola.style.backgroundColor = "#fae1dc"

  
})



link.addEventListener('click', function(){
  window.location.href = "/Macc/index.html"
})

var watch = document.querySelector('#Watch').addEventListener('click', function(){
  window.location.href = "/Whatch/index.html"
})

var ipad = document.querySelector('#ipad').addEventListener('click', function(){
  window.location.href = "/Ipad/index.html"
})

var airpods = document.querySelector('#airpods').addEventListener('click', function(){
  window.location.href = "/airpods/index.html"
})
