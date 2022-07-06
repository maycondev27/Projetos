function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 | fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
       var fsex = document.getElementsByName (`radsex`)
       var idade = ano - Number(fano.value)
       var gênero = ""
       var img = document.createElement ("img")
       img.setAttribute("id", "foto")

       if (fsex[0].checked) {
        gênero = "Homem" 
        if (idade >=0 && idade < 10) {
            img.setAttribute("src", "img/foto-bebe-m.png")
        }
        //criança

        else if (idade < 21) {
            img.setAttribute("src", "img/foto-jovem-m.png")
        }
        //jovem
        else if (idade <50) {
            img.setAttribute("src", "img/foto-adulto-m.png")
        }
        //homem
        else {
            img.setAttribute("src", "img/foto-idoso-m.png")
        }
        //idoso

       } else if (fsex[1].checked) {
        gênero = "Mulher"
        if (idade >=0 && idade < 10) {
            img.setAttribute("src", "img/foto-bebe-f.png")
        }
        //criança
        else if (idade < 21) {
            img.setAttribute("src", "img/foto-jovem-f.png")
        }
        //jovem
        else if (idade <50) {
            img.setAttribute("src", "img/foto-adulto-f.png")
        }
        //mulher
        else {
            img.setAttribute("src", "img/foto-idoso-f.png")
        }
        //idosa
       }
       res.style.textAlign = "center"
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
       res.appendChild(img)
    
    
    
    
    }
}