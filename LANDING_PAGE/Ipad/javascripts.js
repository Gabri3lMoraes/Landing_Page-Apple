var list = document.querySelector('#Mac')
var iphone = document.querySelector("#ipho")
var ipad = document.querySelector("#ipad")

document.addEventListener('DOMContentLoaded', function(){
    const pagina = window.location.pathname.split('/').pop();
    if(pagina === "index.html"){
    ipad.style.borderBottom = '2px solid #fff'
    console.log(pagina)
}

})



iphone.addEventListener('click', function(){
    window.location.href = "/main/index.html"
})

var watch = document.querySelector('#watch').addEventListener('click', function(){
    window.location.href = "/Whatch/index.html"
})

var mac = document.querySelector("#Mac").addEventListener('click', function(){
    window.location.href = "/Macc/index.html"
  })
  
  var airpods = document.querySelector('#airpods').addEventListener('click', function(){
    window.location.href = "/airpods/index.html"
})