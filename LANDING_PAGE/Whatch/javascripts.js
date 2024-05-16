var list = document.querySelector('#watch')
var iphone = document.querySelector("#ipho")
var link = document.querySelector("#Mac")

document.addEventListener('DOMContentLoaded', function(){
    const pagina = window.location.pathname.split('/').pop();
    if(pagina === "index.html"){
    list.style.borderBottom = '2px solid #fff'
    console.log(pagina)
}

})


iphone.addEventListener('click', function(){
    window.location.href = "http://127.0.0.1:5500/main/index.html"
})


link.addEventListener('click', function(){
    window.location.href = "/Macc/index.html"
  })

  var ipad = document.querySelector('#ipad').addEventListener('click', function(){
    window.location.href = "/Ipad/index.html"
})

var airpods = document.querySelector('#airpods').addEventListener('click', function(){
    window.location.href = "/airpods/index.html"
})