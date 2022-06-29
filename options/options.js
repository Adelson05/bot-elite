var colunaInput = document.getElementById("inputColuna")
var duziaInput = document.getElementById("inputDuzia")
var altosBaixosInput = document.getElementById("inputAltosBaixos")
var imparParInput = document.getElementById("inputImparPar")
var coresInput = document.getElementById("inputCores")
var salvarBtn = document.getElementById("btnSalvar")

window.onload = init()

function init() {
    chrome.storage.local.get(["colunarep", "duziarep", "altosbaixosrep", "parimparrep", "coresrep"], (res) => {
        if (res.colunarep == undefined) {
            setColunaRep("5")
            colunaInput.setAttribute('value', '5')
        } else {
            colunaInput.setAttribute('value', `${res.colunarep}`)
        }
        if (res.duziarep == undefined) {
            setDuziaRep("5")
            duziaInput.setAttribute('value', '5')
        } else {
            duziaInput.setAttribute('value', `${res.duziarep}`)
        }
        if (res.altosbaixosrep == undefined) {
            setAltosBaixosRep("0")
            altosBaixosInput.setAttribute('value', '0')
        } else {
            altosBaixosInput.setAttribute('value', `${res.altosbaixosrep}`)
        }
        if (res.parimparrep == undefined) {
            setParImparRep("0")
            imparParInput.setAttribute('value', '0')
        } else {
            imparParInput.setAttribute('value', `${res.parimparrep}`)
        }
        if (res.coresrep == undefined) {
            setCoresRep("0")
            coresInput.setAttribute('value', '0')
        } else {
            coresInput.setAttribute('value', `${res.coresrep}`)
        }
    })
}


salvarBtn.addEventListener("click", () => {
    //salvar configurações
    if (colunaInput.value == '') {
        setColunaRep('5')
    } else {
        setColunaRep(colunaInput.value)
    }
    if (duziaInput.value == '') {
        setDuziaRep('5')
    } else {
        setDuziaRep(duziaInput.value)
    }
    if (altosBaixosInput.value == '') {
        setAltosBaixosRep('0')
    } else {
        setAltosBaixosRep(altosBaixosInput.value)
    }
    if (imparParInput.value == '') {
        setParImparRep('0')
    } else {
        setParImparRep(imparParInput.value)
    }
    if (coresInput.value == '') {
        setCoresRep('0')
    } else {
        setCoresRep(coresInput.value)
    }

    confirm("CONFIGURAÇÃO SALVA COM SUCESSO")
})

//salvar repetições de colunas nas configurações
function setColunaRep(colunarep) {
    chrome.storage.local.set({
        colunarep,
    }, () => {
    })
}
//salvar repetições de duzias nas configurações
function setDuziaRep(duziarep) {
    chrome.storage.local.set({
        duziarep,
    }, () => {
    })
}
//salvar repetições de altos/baixos nas configurações
function setAltosBaixosRep(altosbaixosrep) {
    chrome.storage.local.set({
        altosbaixosrep,
    }, () => {
    })
}
//salvar repetições de par/impar nas configurações
function setParImparRep(parimparrep) {
    chrome.storage.local.set({
        parimparrep,
    }, () => {
    })
}
//salvar repetições de cores nas configurações
function setCoresRep(coresrep) {
    chrome.storage.local.set({
        coresrep,
    }, () => {
    })
}