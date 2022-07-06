function carregar () {
var msg = window.document.getElementById ("msg")
var img = window.document.getElementById ("imagem")
var data = new Date()
var hora = data.getHours()
//var hora = 18
msg.innerHTML = `Agora são <strong> ${hora} horas. </strong>`
if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = `img/manhã.jpg`
    document.body.style.background = "#BB7638"
} else if (hora >=12 && hora <18) {
    // BOA TARDE
    img.src = `img/tarde.jpeg`
    document.body.style.background = "#332B67"
} else if (hora) {
    // BOA NOITE
    img.src = `img/noite.jpg`
    document.body.style.background = "#120F24"
}
}