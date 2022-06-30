
// display lobby existe
var displayLobbyExists = false
// display roleta existe
var displayRoletaExists = false

//cartela da roleta
var primeiraDuzia = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
var segundaDuzia = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
var terceiraDuzia = ['25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36']
var primeiraColuna = ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34']
var segundaColuna = ['2', '5', '8', '11', '14', '17', '20', '23', '26', '29', '32', '35']
var terceiraColuna = ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36']
var numerosBaixos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
var numerosAltos = ['19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36']
var numerosImpares = ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '31', '33', '35']
var numerosPares = ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36']
var numerosVermelhos = ['1', '3', '5', '7', '9', '12', '14', '16', '18', '19', '21', '23', '25', '27', '30', '32', '34', '36']
var numerosPretos = ['2', '4', '6', '8', '10', '11', '13', '15', '17', '20', '22', '24', '26', '28', '29', '31', '33', '35']

//variaveis de configuração
var colunaRep = ""
var duziaRep = ""
var altosBaixosRep = ""
var parImparRep = ""
var coresRep = ""

// atualiza todo o processo a cada 3 segundos
setInterval(() => {
    //carrega configuração
    carregarConfiguracao()
    //tela lobby analisando estrategias
    analisandoEstrategias()

}, 3000)

// funcao inserir texto no display de lobby ou roleta unica
function inserirTextoDisplay(texto, tela) {
    if (tela == 1) {
        var textoDisplay = document.getElementById("displaybotlobby")
        textoDisplay.textContent = `${texto}`
    } else if (tela == 2) {
        var textoDisplay = document.getElementById("displaybotroleta")
        textoDisplay.textContent = `${texto}`
    }

}

// analise de estrategias
function analisandoEstrategias() {
    // pegar a quantidade de roletas
    qtdRoletas = document.getElementsByClassName('lobby-tables__item').length
    //valida lobby
    if (qtdRoletas > 1) {
        //analisando todas as roletas

        // inserir display no lobby
        if (!displayLobbyExists) {
            painelLobby = document.querySelector('.lobby__filter');
            painelLobby.insertAdjacentHTML('afterbegin', '<h1 id = "displaybotlobby" style="width: 90%;background-color: #56ef00;color: black;text-align: center; font-size: xx-large;font-weight: bolder;align-self: center;"></h1>');
            displayRoletaExists = false
            displayLobbyExists = true
        }

        inserirTextoDisplay("BOT ELITE - STATUS : ONLINE", 1)
        //listar as roletas do lobby
        var roletasLobby = listarRoletasLobby(qtdRoletas)
        //incrementr as roletas para buscar confirmação de estrategia
        for (let i = 0; i < roletasLobby.length; i++) {
            if (estrategiaDuzias(roletasLobby[i].sequencia) == 1) {
                inserirTextoDisplay(`ENTRE NA ROLETA - ${roletasLobby[i].nome}`, 1)
                break
            } else if (estrategiaDuzias(roletasLobby[i].sequencia) == 2) {
                inserirTextoDisplay(`ENTRE NA ROLETA - ${roletasLobby[i].nome}`, 1)
                break
            } else if (estrategiaDuzias(roletasLobby[i].sequencia) == 3) {
                inserirTextoDisplay(`ENTRE NA ROLETA - ${roletasLobby[i].nome}`, 1)
                break
            } else if (estrategiaColunas(roletasLobby[i].sequencia) == 1) {
                inserirTextoDisplay(`ENTRE NA ROLETA - ${roletasLobby[i].nome}`, 1)
                break
            } else if (estrategiaColunas(roletasLobby[i].sequencia) == 2) {
                inserirTextoDisplay(`ENTRE NA ROLETA - ${roletasLobby[i].nome}`, 1)
                break
            } else if (estrategiaColunas(roletasLobby[i].sequencia) == 3) {
                inserirTextoDisplay(`ENTRE NA ROLETA - ${roletasLobby[i].nome}`, 1)
                break
            } else if (estrategiaAltosBaixos(roletasLobby[i].sequencia) == 1) {
                inserirTextoDisplay(`ENTRE NA ROLETA - ${roletasLobby[i].nome}`, 1)
                break
            } else if (estrategiaAltosBaixos(roletasLobby[i].sequencia) == 2) {
                inserirTextoDisplay(`ENTRE NA ROLETA - ${roletasLobby[i].nome}`, 1)
                break
            } else if (estrategiaParesImpares(roletasLobby[i].sequencia) == 1) {
                inserirTextoDisplay(`ENTRE NA ROLETA - ${roletasLobby[i].nome}`, 1)
                break
            } else if (estrategiaParesImpares(roletasLobby[i].sequencia) == 2) {
                inserirTextoDisplay(`ENTRE NA ROLETA - ${roletasLobby[i].nome}`, 1)
                break
            } else if (estrategiaCores(roletasLobby[i].sequencia) == 1) {
                inserirTextoDisplay(`ENTRE NA ROLETA - ${roletasLobby[i].nome}`, 1)
                break
            } else if (estrategiaCores(roletasLobby[i].sequencia) == 2) {
                inserirTextoDisplay(`ENTRE NA ROLETA - ${roletasLobby[i].nome}`, 1)
                break
            }
        }
    } else {
        var cargaRoleta = document.getElementsByClassName('table-info__nameWp_dByC6ZNXpXrcSPbRB').length
        if (cargaRoleta > 0) {
            //analisando apenas uma roleta
            // inserir display no lobby
            if (!displayRoletaExists) {
                painelRoleta = document.querySelector('.account-panel');
                painelRoleta.insertAdjacentHTML('beforeend', '<span id = "displaybotroleta" style="margin: 10px;width: 90%;background-color: #000000;color: white;text-align: left;"></span>');
                displayRoletaExists = true
                displayLobbyExists = false
            }
            var nomeRoleta = document.getElementsByClassName('table-info__nameWp_dByC6ZNXpXrcSPbRB')[0].outerText
            inserirTextoDisplay(`BOT ELITE - ONLINE : ${nomeRoleta}`, 2)
            //carregar roleta
            var roleta = carregarRoleta()
            //buscar confirmação de estrategia
            if (estrategiaDuziasSalaRoleta(roleta[0].sequencia) == 1) {
                inserirTextoDisplay(`CONFIRMANDO 1° DUZIA - ${roleta[0].nome}`, 2)
            } else if (estrategiaDuziasSalaRoleta(roleta[0].sequencia) == 2) {
                inserirTextoDisplay(`CONFIRMANDO 2° DUZIA - ${roleta[0].nome}`, 2)
            } else if (estrategiaDuziasSalaRoleta(roleta[0].sequencia) == 3) {
                inserirTextoDisplay(`CONFIRMANDO 3° DUZIA - ${roleta[0].nome}`, 2)
            } else if (estrategiaDuziasSalaRoleta(roleta[0].sequencia) == 10) {
                inserirTextoDisplay(`JOGAR NA 2° E 3° DUZIA - ${roleta[0].nome}`, 2)
            } else if (estrategiaDuziasSalaRoleta(roleta[0].sequencia) == 20) {
                inserirTextoDisplay(`JOGAR NA 1° E 3° DUZIA - ${roleta[0].nome}`, 2)
            } else if (estrategiaDuziasSalaRoleta(roleta[0].sequencia) == 30) {
                inserirTextoDisplay(`JOGAR NA 1° E 2° DUZIA - ${roleta[0].nome}`, 2)
            } else if (estrategiaDuziasSalaRoleta(roleta[0].sequencia) == 100) {
                inserirTextoDisplay(`GALE JOGAR NA 2° E 3° DUZIA - ${roleta[0].nome}`, 2)
            } else if (estrategiaDuziasSalaRoleta(roleta[0].sequencia) == 200) {
                inserirTextoDisplay(`GALE JOGAR NA 1° E 3° DUZIA - ${roleta[0].nome}`, 2)
            } else if (estrategiaDuziasSalaRoleta(roleta[0].sequencia) == 300) {
                inserirTextoDisplay(`GALE JOGAR NA 1° E 2° DUZIA - ${roleta[0].nome}`, 2)
            } else if (estrategiaColunasSalaRoleta(roleta[0].sequencia) == 1) {
                inserirTextoDisplay(`CONFIRMANDO 1° COLUNA - ${roleta[0].nome}`, 2)
            } else if (estrategiaColunasSalaRoleta(roleta[0].sequencia) == 2) {
                inserirTextoDisplay(`CONFIRMANDO 2° COLUNA - ${roleta[0].nome}`, 2)
            } else if (estrategiaColunasSalaRoleta(roleta[0].sequencia) == 3) {
                inserirTextoDisplay(`CONFIRMANDO 3° COLUNA - ${roleta[0].nome}`, 2)
            } else if (estrategiaColunasSalaRoleta(roleta[0].sequencia) == 10) {
                inserirTextoDisplay(`JOGAR NA 2° E 3° COLUNA - ${roleta[0].nome}`, 2)
            } else if (estrategiaColunasSalaRoleta(roleta[0].sequencia) == 20) {
                inserirTextoDisplay(`JOGAR NA 1° E 3° COLUNA - ${roleta[0].nome}`, 2)
            } else if (estrategiaColunasSalaRoleta(roleta[0].sequencia) == 30) {
                inserirTextoDisplay(`JOGAR NA 1° E 2° COLUNA - ${roleta[0].nome}`, 2)
            } else if (estrategiaColunasSalaRoleta(roleta[0].sequencia) == 100) {
                inserirTextoDisplay(`GALE JOGAR NA 2° E 3° COLUNA - ${roleta[0].nome}`, 2)
            } else if (estrategiaColunasSalaRoleta(roleta[0].sequencia) == 200) {
                inserirTextoDisplay(`GALE JOGAR NA 1° E 3° COLUNA - ${roleta[0].nome}`, 2)
            } else if (estrategiaColunasSalaRoleta(roleta[0].sequencia) == 300) {
                inserirTextoDisplay(`GALE JOGAR NA 1° E 2° COLUNA - ${roleta[0].nome}`, 2)
            } else if (estrategiaAltosBaixosSalaRoleta(roleta[0].sequencia) == 1) {
                inserirTextoDisplay(`CONFIRMANDO NUMERO ALTO - ${roleta[0].nome}`, 2)
            } else if (estrategiaAltosBaixosSalaRoleta(roleta[0].sequencia) == 2) {
                inserirTextoDisplay(`CONFIRMANDO NUMERO BAIXO - ${roleta[0].nome}`, 2)
            } else if (estrategiaAltosBaixosSalaRoleta(roleta[0].sequencia) == 10) {
                inserirTextoDisplay(`JOGAR NUMERO BAIXO - ${roleta[0].nome}`, 2)
            } else if (estrategiaAltosBaixosSalaRoleta(roleta[0].sequencia) == 20) {
                inserirTextoDisplay(`JOGAR NUMERO ALTO - ${roleta[0].nome}`, 2)
            } else if (estrategiaAltosBaixosSalaRoleta(roleta[0].sequencia) == 100) {
                inserirTextoDisplay(`GALE JOGAR NUMERO BAIXO - ${roleta[0].nome}`, 2)
            } else if (estrategiaAltosBaixosSalaRoleta(roleta[0].sequencia) == 200) {
                inserirTextoDisplay(`GALE JOGAR NUMERO ALTO - ${roleta[0].nome}`, 2)
            } else if (estrategiaParesImparesSalaRoleta(roleta[0].sequencia) == 1) {
                inserirTextoDisplay(`CONFIRMANDO NUMERO IMPAR - ${roleta[0].nome}`, 2)
            } else if (estrategiaParesImparesSalaRoleta(roleta[0].sequencia) == 2) {
                inserirTextoDisplay(`CONFIRMANDO NUMERO PAR- ${roleta[0].nome}`, 2)
            } else if (estrategiaParesImparesSalaRoleta(roleta[0].sequencia) == 10) {
                inserirTextoDisplay(`JOGAR NUMERO PAR - ${roleta[0].nome}`, 2)
            } else if (estrategiaParesImparesSalaRoleta(roleta[0].sequencia) == 20) {
                inserirTextoDisplay(`JOGAR NUMERO IMPAR- ${roleta[0].nome}`, 2)
            } else if (estrategiaParesImparesSalaRoleta(roleta[0].sequencia) == 100) {
                inserirTextoDisplay(`GALE JOGAR NUMERO PAR - ${roleta[0].nome}`, 2)
            } else if (estrategiaParesImparesSalaRoleta(roleta[0].sequencia) == 200) {
                inserirTextoDisplay(`GALE JOGAR NUMERO IMPAR- ${roleta[0].nome}`, 2)
            } else if (estrategiaCoresSalaRoleta(roleta[0].sequencia) == 1) {
                inserirTextoDisplay(`CONFIRMANDO COR PRETO - ${roleta[0].nome}`, 2)
            } else if (estrategiaCoresSalaRoleta(roleta[0].sequencia) == 2) {
                inserirTextoDisplay(`CONFIRMANDO COR VERMELHO - ${roleta[0].nome}`, 2)
            } else if (estrategiaCoresSalaRoleta(roleta[0].sequencia) == 10) {
                inserirTextoDisplay(`JOGAR VERMELHO - ${roleta[0].nome}`, 2)
            } else if (estrategiaCoresSalaRoleta(roleta[0].sequencia) == 20) {
                inserirTextoDisplay(`JOGAR PRETO- ${roleta[0].nome}`, 2)
            } else if (estrategiaCoresSalaRoleta(roleta[0].sequencia) == 100) {
                inserirTextoDisplay(`GALE JOGAR VERMELHO - ${roleta[0].nome}`, 2)
            } else if (estrategiaCoresSalaRoleta(roleta[0].sequencia) == 200) {
                inserirTextoDisplay(`GALE JOGAR PRETO - ${roleta[0].nome}`, 2)
            }
        } else {
            //tela inicial sem carga de dados - offline
        }


    }

}

// funcao listar todas as roletas do lobby
function listarRoletasLobby(qtd) {
    roletasLobby = []
    // preencher a lista de roletas 
    for (let i = 0; i < qtd; i++) {
        if (document.getElementsByClassName('lobby-tables__item')[i].getElementsByClassName('lobby-table__name-container').length == 1) {
            nomeRoleta = document.getElementsByClassName('lobby-tables__item')[i].getElementsByClassName('lobby-table__name-container')[0].outerText
        } else {
            continue
        }
        if (document.getElementsByClassName('lobby-tables__item')[i].getElementsByClassName('roulette-historyfOmuwAaXbwHRa3HTIjFP').length == 1) {
            sequenciaRoleta = document.getElementsByClassName('lobby-tables__item')[i].getElementsByClassName('roulette-historyfOmuwAaXbwHRa3HTIjFP')[0].outerText
        } else {
            continue
        }
        //transformar texto em lista
        var listaSequenciaOld = sequenciaRoleta.split("\n")
        //tamanho da lista
        var sizesequencia = listaSequenciaOld.length
        //nova lista para receber a sequencia sem multiplicadores
        var listaSequenciaNew = []
        //retirar multiplicadores
        for (let i = 0; i < sizesequencia; i++) {
            if (listaSequenciaOld[i].charAt(0) != "x") {
                listaSequenciaNew.push(listaSequenciaOld[i])
            }
        }

        roletasLobby.push({ nome: nomeRoleta, sequencia: listaSequenciaNew })
    }
    //retornar roletas
    return roletasLobby

}

// funcao listar apenas uma roleta
function carregarRoleta() {
    roleta = []
    // preencher a roleta 
    nomeRoleta = document.getElementsByClassName('table-info__nameWp_dByC6ZNXpXrcSPbRB')[0].outerText
    sequenciaRoleta = document.getElementsByClassName('roulette-historyfOmuwAaXbwHRa3HTIjFP')[0].outerText
    //transformar texto em lista
    var listaSequenciaOld = sequenciaRoleta.split("\n")
    //tamanho da lista
    var sizesequencia = listaSequenciaOld.length
    //nova lista para receber a sequencia sem multiplicadores
    var listaSequenciaNew = []
    //retirar multiplicadores
    for (let i = 0; i < sizesequencia; i++) {
        if (listaSequenciaOld[i].charAt(0) != "x") {
            listaSequenciaNew.push(listaSequenciaOld[i])
        }
    }

    roleta.push({ nome: nomeRoleta, sequencia: listaSequenciaNew })

    //retornar roleta
    return roleta

}

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

//salvar repetições de par/impar nas configurações
function setCoresRep(coresrep) {
    chrome.storage.local.set({
        coresrep,
    }, () => {
    })
}

//funcao de carregar as configurações de repetições 
function carregarConfiguracao() {
    chrome.storage.local.get(["colunarep", "duziarep", "altosbaixosrep", "parimparrep", "coresrep"], (res) => {
        if (res.colunarep == undefined) {
            setColunaRep("5")
            colunaRep = 5
        } else {
            colunaRep = parseInt(res.colunarep)
        }
        if (res.duziarep == undefined) {
            setDuziaRep("5")
            duziaRep = 5
        } else {
            duziaRep = parseInt(res.duziarep)
        }
        if (res.altosbaixosrep == undefined) {
            setAltosBaixosRep("0")
            altosBaixosRep = 0
        } else {
            altosBaixosRep = parseInt(res.altosbaixosrep)
        }
        if (res.parimparrep == undefined) {
            setParImparRep("0")
            parImparRep = 0
        } else {
            parImparRep = parseInt(res.parimparrep)
        }
        if (res.coresrep == undefined) {
            setCoresRep("0")
            coresRep = 0
        } else {
            coresRep = parseInt(res.coresrep)
        }
    })
}

// estrategia das duzias
function estrategiaDuzias(roleta) {
    // variaveis de repeticao
    repeticaoPrimeiraDuzia = 0
    repeticaoSegundaDuzia = 0
    repeticaoTerceiraDuzia = 0
    // inverter lista de sequencia da roleta
    roleta.reverse()
    // incrementa a repeticao de duzias
    for (let i = 0; i < roleta.length; i++) {
        if (primeiraDuzia.includes(roleta[i])) {
            repeticaoPrimeiraDuzia++
            repeticaoSegundaDuzia = 0
            repeticaoTerceiraDuzia = 0
        } else if (segundaDuzia.includes(roleta[i])) {
            repeticaoPrimeiraDuzia = 0
            repeticaoSegundaDuzia++
            repeticaoTerceiraDuzia = 0
        } else if (terceiraDuzia.includes(roleta[i])) {
            repeticaoPrimeiraDuzia = 0
            repeticaoSegundaDuzia = 0
            repeticaoTerceiraDuzia++
        } else {
            repeticaoPrimeiraDuzia = 0
            repeticaoSegundaDuzia = 0
            repeticaoTerceiraDuzia = 0
        }
    }
    // validar de houve repeticao
    if (duziaRep == 0) {
        roleta.reverse()
        return 0
    } else if (repeticaoPrimeiraDuzia == duziaRep) {
        roleta.reverse()
        return 1
    } else if (repeticaoSegundaDuzia == duziaRep) {
        roleta.reverse()
        return 2
    } else if (repeticaoTerceiraDuzia == duziaRep) {
        roleta.reverse()
        return 3
    } else {
        roleta.reverse()
        return 0
    }
}

// estrategia das duzias - NA SALA DA ROLETA
function estrategiaDuziasSalaRoleta(roleta) {
    // variaveis de repeticao
    repeticaoPrimeiraDuzia = 0
    repeticaoSegundaDuzia = 0
    repeticaoTerceiraDuzia = 0
    // inverter lista de sequencia da roleta
    roleta.reverse()
    // incrementa a repeticao de duzias
    for (let i = 0; i < roleta.length; i++) {
        if (primeiraDuzia.includes(roleta[i])) {
            repeticaoPrimeiraDuzia++
            repeticaoSegundaDuzia = 0
            repeticaoTerceiraDuzia = 0
        } else if (segundaDuzia.includes(roleta[i])) {
            repeticaoPrimeiraDuzia = 0
            repeticaoSegundaDuzia++
            repeticaoTerceiraDuzia = 0
        } else if (terceiraDuzia.includes(roleta[i])) {
            repeticaoPrimeiraDuzia = 0
            repeticaoSegundaDuzia = 0
            repeticaoTerceiraDuzia++
        } else {
            repeticaoPrimeiraDuzia = 0
            repeticaoSegundaDuzia = 0
            repeticaoTerceiraDuzia = 0
        }
    }
    // validar de houve repeticao
    if (duziaRep == 0) {
        roleta.reverse()
        return 0
    } else if (repeticaoPrimeiraDuzia == duziaRep) {
        roleta.reverse()
        return 1
    } else if (repeticaoSegundaDuzia == duziaRep) {
        roleta.reverse()
        return 2
    } else if (repeticaoTerceiraDuzia == duziaRep) {
        roleta.reverse()
        return 3
    } if (repeticaoPrimeiraDuzia == (duziaRep + 1)) {
        roleta.reverse()
        return 10
    } else if (repeticaoSegundaDuzia == (duziaRep + 1)) {
        roleta.reverse()
        return 20
    } else if (repeticaoTerceiraDuzia == (duziaRep + 1)) {
        roleta.reverse()
        return 30
    } if (repeticaoPrimeiraDuzia == (duziaRep + 2)) {
        roleta.reverse()
        return 100
    } else if (repeticaoSegundaDuzia == (duziaRep + 2)) {
        roleta.reverse()
        return 200
    } else if (repeticaoTerceiraDuzia == (duziaRep + 2)) {
        roleta.reverse()
        return 300
    } else {
        roleta.reverse()
        return 0
    }
}

// estrategia das colunas
function estrategiaColunas(roleta) {
    // variaveis de repeticao
    repeticaoPrimeiraColuna = 0
    repeticaoSegundaColuna = 0
    repeticaoTerceiraColuna = 0
    // inverter lista de sequencia da roleta
    roleta.reverse()
    // incrementa a repeticao de Colunas
    for (let i = 0; i < roleta.length; i++) {
        if (primeiraColuna.includes(roleta[i])) {
            repeticaoPrimeiraColuna++
            repeticaoSegundaColuna = 0
            repeticaoTerceiraColuna = 0
        } else if (segundaColuna.includes(roleta[i])) {
            repeticaoPrimeiraColuna = 0
            repeticaoSegundaColuna++
            repeticaoTerceiraColuna = 0
        } else if (terceiraColuna.includes(roleta[i])) {
            repeticaoPrimeiraColuna = 0
            repeticaoSegundaColuna = 0
            repeticaoTerceiraColuna++
        } else {
            repeticaoPrimeiraColuna = 0
            repeticaoSegundaColuna = 0
            repeticaoTerceiraColuna = 0
        }
    }
    // validar de houve repeticao
    if (colunaRep == 0) {
        roleta.reverse()
        return 0
    } else if (repeticaoPrimeiraColuna == colunaRep) {
        roleta.reverse()
        return 1
    } else if (repeticaoSegundaColuna == colunaRep) {
        roleta.reverse()
        return 2
    } else if (repeticaoTerceiraColuna == colunaRep) {
        roleta.reverse()
        return 3
    } else {
        roleta.reverse()
        return 0
    }
}

// estrategia das colunas dentro da sala da roleta
function estrategiaColunasSalaRoleta(roleta) {
    // variaveis de repeticao
    repeticaoPrimeiraColuna = 0
    repeticaoSegundaColuna = 0
    repeticaoTerceiraColuna = 0
    // inverter lista de sequencia da roleta
    roleta.reverse()
    // incrementa a repeticao de Colunas
    for (let i = 0; i < roleta.length; i++) {
        if (primeiraColuna.includes(roleta[i])) {
            repeticaoPrimeiraColuna++
            repeticaoSegundaColuna = 0
            repeticaoTerceiraColuna = 0
        } else if (segundaColuna.includes(roleta[i])) {
            repeticaoPrimeiraColuna = 0
            repeticaoSegundaColuna++
            repeticaoTerceiraColuna = 0
        } else if (terceiraColuna.includes(roleta[i])) {
            repeticaoPrimeiraColuna = 0
            repeticaoSegundaColuna = 0
            repeticaoTerceiraColuna++
        } else {
            repeticaoPrimeiraColuna = 0
            repeticaoSegundaColuna = 0
            repeticaoTerceiraColuna = 0
        }
    }
    // validar de houve repeticao
    if (colunaRep == 0) {
        roleta.reverse()
        return 0
    } else if (repeticaoPrimeiraColuna == colunaRep) {
        roleta.reverse()
        return 1
    } else if (repeticaoSegundaColuna == colunaRep) {
        roleta.reverse()
        return 2
    } else if (repeticaoTerceiraColuna == colunaRep) {
        roleta.reverse()
        return 3
    } if (repeticaoPrimeiraColuna == (colunaRep + 1)) {
        roleta.reverse()
        return 10
    } else if (repeticaoSegundaColuna == (colunaRep + 1)) {
        roleta.reverse()
        return 20
    } else if (repeticaoTerceiraColuna == (colunaRep + 1)) {
        roleta.reverse()
        return 30
    } if (repeticaoPrimeiraColuna == (colunaRep + 2)) {
        roleta.reverse()
        return 100
    } else if (repeticaoSegundaColuna == (colunaRep + 2)) {
        roleta.reverse()
        return 200
    } else if (repeticaoTerceiraColuna == (colunaRep + 2)) {
        roleta.reverse()
        return 300
    } else {
        roleta.reverse()
        return 0
    }
}

// estrategia dos numeros altos e baixos
function estrategiaAltosBaixos(roleta) {
    // variaveis de repeticao
    repeticaoNumerosAltos = 0
    repeticaoNumerosBaixos = 0
    // inverter lista de sequencia da roleta
    roleta.reverse()
    // incrementa a repeticao
    for (let i = 0; i < roleta.length; i++) {
        if (numerosBaixos.includes(roleta[i])) {
            repeticaoNumerosAltos = 0
            repeticaoNumerosBaixos++
        } else if (numerosAltos.includes(roleta[i])) {
            repeticaoNumerosAltos++
            repeticaoNumerosBaixos = 0
        } else {
            repeticaoNumerosAltos = 0
            repeticaoNumerosBaixos = 0
        }
    }
    // validar de houve repeticao
    if (altosBaixosRep == 0) {
        roleta.reverse()
        return 0
    } else if (repeticaoNumerosAltos == altosBaixosRep) {
        roleta.reverse()
        return 1
    } else if (repeticaoNumerosBaixos == altosBaixosRep) {
        roleta.reverse()
        return 2
    } else {
        roleta.reverse()
        return 0
    }
}

// estrategia dos numeros altos e baixos dentro da sala da roleta
function estrategiaAltosBaixosSalaRoleta(roleta) {
    // variaveis de repeticao
    repeticaoNumerosAltos = 0
    repeticaoNumerosBaixos = 0
    // inverter lista de sequencia da roleta
    roleta.reverse()
    // incrementa a repeticao
    for (let i = 0; i < roleta.length; i++) {
        if (numerosBaixos.includes(roleta[i])) {
            repeticaoNumerosAltos = 0
            repeticaoNumerosBaixos++
        } else if (numerosAltos.includes(roleta[i])) {
            repeticaoNumerosAltos++
            repeticaoNumerosBaixos = 0
        } else {
            repeticaoNumerosAltos = 0
            repeticaoNumerosBaixos = 0
        }
    }
    // validar de houve repeticao
    if (altosBaixosRep == 0) {
        roleta.reverse()
        return 0
    } else if (repeticaoNumerosAltos == altosBaixosRep) {
        roleta.reverse()
        return 1
    } else if (repeticaoNumerosBaixos == altosBaixosRep) {
        roleta.reverse()
        return 2
    } if (repeticaoNumerosAltos == (altosBaixosRep + 1)) {
        roleta.reverse()
        return 10
    } else if (repeticaoNumerosBaixos == (altosBaixosRep + 1)) {
        roleta.reverse()
        return 20
    } if (repeticaoNumerosAltos == (altosBaixosRep + 2)) {
        roleta.reverse()
        return 100
    } else if (repeticaoNumerosBaixos == (altosBaixosRep + 2)) {
        roleta.reverse()
        return 200
    } else {
        roleta.reverse()
        return 0
    }
}

// estrategia dos numeros pares e impares
function estrategiaParesImpares(roleta) {
    // variaveis de repeticao
    repeticaoNumerosImpares = 0
    repeticaoNumerosPares = 0
    // inverter lista de sequencia da roleta
    roleta.reverse()
    // incrementa a repeticao
    for (let i = 0; i < roleta.length; i++) {
        if (numerosImpares.includes(roleta[i])) {
            repeticaoNumerosImpares++
            repeticaoNumerosPares = 0
        } else if (numerosPares.includes(roleta[i])) {
            repeticaoNumerosImpares = 0
            repeticaoNumerosPares++
        } else {
            repeticaoNumerosImpares = 0
            repeticaoNumerosPares = 0
        }
    }
    // validar de houve repeticao
    if (parImparRep == 0) {
        roleta.reverse()
        return 0
    } else if (repeticaoNumerosImpares == parImparRep) {
        roleta.reverse()
        return 1
    } else if (repeticaoNumerosPares == parImparRep) {
        roleta.reverse()
        return 2
    } else {
        roleta.reverse()
        return 0
    }
}

// estrategia dos numeros pares e impares dentro da sala da roleta
function estrategiaParesImparesSalaRoleta(roleta) {
    // variaveis de repeticao
    repeticaoNumerosImpares = 0
    repeticaoNumerosPares = 0
    // inverter lista de sequencia da roleta
    roleta.reverse()
    // incrementa a repeticao
    for (let i = 0; i < roleta.length; i++) {
        if (numerosImpares.includes(roleta[i])) {
            repeticaoNumerosImpares++
            repeticaoNumerosPares = 0
        } else if (numerosPares.includes(roleta[i])) {
            repeticaoNumerosImpares = 0
            repeticaoNumerosPares++
        } else {
            repeticaoNumerosImpares = 0
            repeticaoNumerosPares = 0
        }
    }
    // validar de houve repeticao
    if (parImparRep == 0) {
        roleta.reverse()
        return 0
    } else if (repeticaoNumerosImpares == parImparRep) {
        roleta.reverse()
        return 1
    } else if (repeticaoNumerosPares == parImparRep) {
        roleta.reverse()
        return 2
    } if (repeticaoNumerosImpares == (parImparRep + 1)) {
        roleta.reverse()
        return 10
    } else if (repeticaoNumerosPares == (parImparRep + 1)) {
        roleta.reverse()
        return 20
    } if (repeticaoNumerosImpares == (parImparRep + 2)) {
        roleta.reverse()
        return 100
    } else if (repeticaoNumerosPares == (parImparRep + 2)) {
        roleta.reverse()
        return 200
    } else {
        roleta.reverse()
        return 0
    }
}

// estrategia das cores
function estrategiaCores(roleta) {
    // variaveis de repeticao
    repeticaoNumerosPretos = 0
    repeticaoNumerosVermelhos = 0
    // inverter lista de sequencia da roleta
    roleta.reverse()
    // incrementa a repeticao
    for (let i = 0; i < roleta.length; i++) {
        if (numerosPretos.includes(roleta[i])) {
            repeticaoNumerosPretos++
            repeticaoNumerosVermelhos = 0
        } else if (numerosVermelhos.includes(roleta[i])) {
            repeticaoNumerosPretos = 0
            repeticaoNumerosVermelhos++
        } else {
            repeticaoNumerosPretos = 0
            repeticaoNumerosVermelhos = 0
        }
    }
    // validar de houve repeticao
    if (coresRep == 0) {
        roleta.reverse()
        return 0
    } else if (repeticaoNumerosPretos == coresRep) {
        roleta.reverse()
        return 1
    } else if (repeticaoNumerosVermelhos == coresRep) {
        roleta.reverse()
        return 2
    } else {
        roleta.reverse()
        return 0
    }
}

// estrategia das cores dentro da sala da roleta
function estrategiaCoresSalaRoleta(roleta) {
    // variaveis de repeticao
    repeticaoNumerosPretos = 0
    repeticaoNumerosVermelhos = 0
    // inverter lista de sequencia da roleta
    roleta.reverse()
    // incrementa a repeticao
    for (let i = 0; i < roleta.length; i++) {
        if (numerosPretos.includes(roleta[i])) {
            repeticaoNumerosPretos++
            repeticaoNumerosVermelhos = 0
        } else if (numerosVermelhos.includes(roleta[i])) {
            repeticaoNumerosPretos = 0
            repeticaoNumerosVermelhos++
        } else {
            repeticaoNumerosPretos = 0
            repeticaoNumerosVermelhos = 0
        }
    }
    // validar de houve repeticao
    if (coresRep == 0) {
        roleta.reverse()
        return 0
    } else if (repeticaoNumerosPretos == coresRep) {
        roleta.reverse()
        return 1
    } else if (repeticaoNumerosVermelhos == coresRep) {
        roleta.reverse()
        return 2
    } else if (repeticaoNumerosPretos == (coresRep + 1)) {
        roleta.reverse()
        return 10
    } else if (repeticaoNumerosVermelhos == (coresRep + 1)) {
        roleta.reverse()
        return 20
    } else if (repeticaoNumerosPretos == (coresRep + 2)) {
        roleta.reverse()
        return 100
    } else if (repeticaoNumerosVermelhos == (coresRep + 2)) {
        roleta.reverse()
        return 200
    } else {
        roleta.reverse()
        return 0
    }
}