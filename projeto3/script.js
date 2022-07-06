function contar() {
    var ini = document.getElementById("txti")
    var fim = document.getElementById ("txtf")
    var passo = document.getElementById ("txtp")
    var res = document.getElementById ("res")

    if (ini.value.lenght == 0 | fim.value.length == 0 | passo.value.length == 0) {
        res.innerHTML = `Impossível contar!`
        window.alert(`[ERRO] Faltam dados!`)
    } else {
        res.innerHTML = `Contando...<br>` 
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert (`Passso inválido! Considerado PASSO 1`)
            p = 1
        }
        if ( i < f) {
            //Contagem crescente
        for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F91A}`
        }
     } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p)  {
        res.innerHTML += ` ${c} \u{1F91A}`
        }   
    }   
        res.innerHTML += `\u{1F929}`
        txti.style.textAlign = "center"
        txtf.style.textAlign = "center"
        txtp.style.textAlign = "center"
}
}
