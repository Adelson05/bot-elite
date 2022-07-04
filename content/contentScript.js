// display lobby existe
var displayLobbyExists = false
// display roleta existe
var displayRoletaExists = false
//variaveis de configuração
var colunaRep = 0
var duziaRep = 0
var gale = 0
//contagem de acertos e erros
contagemAcertos = 0
contagemErros = 0
//duzias e colunas da roleta
var primeiraDuzia = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
var segundaDuzia = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
var terceiraDuzia = ['25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36']
var primeiraColuna = ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34']
var segundaColuna = ['2', '5', '8', '11', '14', '17', '20', '23', '26', '29', '32', '35']
var terceiraColuna = ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36']

//inverter leitura 
var inverterLeitura = false
var leituras = 0

//variavel que indica inicio de aposta
var apostouDuzia = false
var apostouColuna = false

var configuracao = {
    coluna: 0,
    duzia: 0,
    gale: 0
}

function salvarConfig() {
    chrome.storage.local.set({
        configuracao,
    }, () => {
    })
}

function carregarConfiguracao() {
    chrome.storage.local.get(["configuracao"], (res) => {
        if (res.configuracao == undefined) {
            configuracao.coluna = 5
            configuracao.duzia = 5
            configuracao.gale = 1

            colunaRep = configuracao.coluna
            duziaRep = configuracao.duzia
            gale = configuracao.gale

            salvarConfig()
        } else {
            configuracao = res.configuracao

            colunaRep = configuracao.coluna
            duziaRep = configuracao.duzia
            gale = configuracao.gale
        }
    })
}

function inserirTextoDisplay(texto, tela) {
    if (tela == 1) {
        var textoDisplay = document.getElementById("displaybotlobby")
        textoDisplay.textContent = `${texto}`
    } else if (tela == 2) {
        var textoDisplay = document.getElementById("displaybotroleta")
        textoDisplay.textContent = `${texto}`
    }

}

function analisandoEstrategias() {
    // pegar a quantidade de roletas
    qtdRoletas = document.getElementsByClassName('lobby-tables__item').length
    //valida lobby
    if (qtdRoletas > 1) {
        apostouDuzia = false
        apostouColuna = false

        // inserir display no lobby
        if (!displayLobbyExists) {
            painelLobby = document.querySelector('.lobby__filter');
            painelLobby.insertAdjacentHTML('afterbegin', '<h1 id = "displaybotlobby" style="width: 90%;background-color: #56ef00;color: black;text-align: center; font-size: xx-large;font-weight: bolder;align-self: center;"></h1>');
            displayRoletaExists = false
            displayLobbyExists = true
        }

        inserirTextoDisplay(`BOT ELITE - ${contagemAcertos} ACERTOS - ${contagemErros} ERROS`, 1)
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
            //carregar roleta
            var roleta = carregarRoleta()
            //buscar confirmação de estrategia
            var repeticaoDuzia = estrategiaDuziasSalaRoleta(roleta[0].sequencia)
            var repeticaoColuna = estrategiaColunasSalaRoleta(roleta[0].sequencia)
            if (apostouDuzia) {
                if (repeticaoDuzia > parseInt(duziaRep) && repeticaoDuzia <= (parseInt(duziaRep) + parseInt(gale) + 1)) {
                    if (repeticaoDuzia > parseInt(duziaRep) + 1) {
                        if (primeiraDuzia.includes(roleta[0].sequencia[0])) {
                            inserirTextoDisplay(`GALE NA 2 E 3 DUZIA - CUBRA : 0 - 00 - BONUS`, 2)
                        } else if (segundaDuzia.includes(roleta[0].sequencia[0])) {
                            inserirTextoDisplay(`GALE NA 1 E 3 DUZIA - CUBRA : 0 - 00 - BONUS`, 2)
                        } else if (terceiraDuzia.includes(roleta[0].sequencia[0])) {
                            inserirTextoDisplay(`GALE NA 1 E 2 DUZIA - CUBRA : 0 - 00 - BONUS`, 2)
                        }
                    }
                } else if (repeticaoDuzia > (parseInt(duziaRep) + parseInt(gale) + 1)) {
                    contagemErros++
                    apostouDuzia = false
                    inserirTextoDisplay(`NÃO FOI DESSA VEZ - ${contagemAcertos} ACERTOS - ${contagemErros} ERROS`, 2)
                } else {
                    apostouDuzia = false
                    contagemAcertos++
                    inserirTextoDisplay(`$$$$$$$ - GANHOU - $$$$$$$ - ${contagemAcertos} ACERTOS - ${contagemErros} ERROS`, 2)
                }
            } else if (apostouColuna) {
                if (repeticaoColuna > parseInt(colunaRep) && repeticaoColuna <= (parseInt(colunaRep) + parseInt(gale) + 1)) {
                    if (repeticaoColuna > parseInt(colunaRep) + 1) {
                        if (primeiraColuna.includes(roleta[0].sequencia[0])) {
                            inserirTextoDisplay(`GALE NA 2 E 3 COLUNA - CUBRA : 0 - 00 - BONUS`, 2)
                        } else if (segundaColuna.includes(roleta[0].sequencia[0])) {
                            inserirTextoDisplay(`GALE NA 1 E 3 COLUNA - CUBRA : 0 - 00 - BONUS`, 2)
                        } else if (terceiraColuna.includes(roleta[0].sequencia[0])) {
                            inserirTextoDisplay(`GALE NA 1 E 2 COLUNA - CUBRA : 0 - 00 - BONUS`, 2)
                        }
                    }
                } else if (repeticaoColuna > (parseInt(colunaRep) + parseInt(gale) + 1)) {
                    contagemErros++
                    apostouColuna = false
                    inserirTextoDisplay(`NÃO FOI DESSA VEZ - ${contagemAcertos} ACERTOS - ${contagemErros} ERROS`, 2)
                } else {
                    apostouColuna = false
                    contagemAcertos++
                    inserirTextoDisplay(`$$$$$$$ - GANHOU - $$$$$$$ - ${contagemAcertos} ACERTOS - ${contagemErros} ERROS`, 2)
                }
            } else if (repeticaoDuzia > 1) {
                if (repeticaoDuzia == parseInt(duziaRep)) {
                    inserirTextoDisplay(`ESTRATEGIA - DUZIAS - AGUARDE CONFIRMAÇÃO `, 2)
                } else if (repeticaoDuzia > parseInt(duziaRep)) {
                    if (repeticaoDuzia <= (parseInt(duziaRep) + parseInt(gale) + 1)) {
                        apostouDuzia = true
                        if (primeiraDuzia.includes(roleta[0].sequencia[0])) {
                            inserirTextoDisplay(`APOSTAR NA 2 E 3 DUZIA - CUBRA : 0 - 00 - BONUS`, 2)
                        } else if (segundaDuzia.includes(roleta[0].sequencia[0])) {
                            inserirTextoDisplay(`APOSTAR NA 1 E 3 DUZIA - CUBRA : 0 - 00 - BONUS`, 2)
                        } else if (terceiraDuzia.includes(roleta[0].sequencia[0])) {
                            inserirTextoDisplay(`APOSTAR NA 1 E 2 DUZIA - CUBRA : 0 - 00 - BONUS`, 2)
                        }
                    } else if (repeticaoDuzia > (parseInt(duziaRep) + parseInt(gale) + 1)) {
                        inserirTextoDisplay(`NENHUMA JOGADA CONFIRMADA - SAIA DESSA ROLETA`, 2)
                    }
                }
            } else if (repeticaoColuna > 1) {
                if (repeticaoColuna == parseInt(colunaRep)) {
                    inserirTextoDisplay(`ESTRATEGIA - COLUNAS - AGUARDE CONFIRMAÇÃO`, 2)
                } else if (repeticaoColuna > colunaRep) {
                    if (repeticaoColuna <= (parseInt(colunaRep) + parseInt(gale) + 1)) {
                        apostouColuna = true
                        if (primeiraColuna.includes(roleta[0].sequencia[0])) {
                            inserirTextoDisplay(`APOSTAR NA 2 E 3 COLUNA - CUBRA : 0 - 00 - BONUS`, 2)
                        } else if (segundaColuna.includes(roleta[0].sequencia[0])) {
                            inserirTextoDisplay(`APOSTAR NA 1 E 3 COLUNA - CUBRA : 0 - 00 - BONUS`, 2)
                        } else if (terceiraColuna.includes(roleta[0].sequencia[0])) {
                            inserirTextoDisplay(`APOSTAR NA 1 E 2 COLUNA - CUBRA : 0 - 00 - BONUS`, 2)
                        }
                    } else if (repeticaoColuna > (parseInt(colunaRep) + parseInt(gale) + 1)) {
                        inserirTextoDisplay(`NENHUMA JOGADA CONFIRMADA - SAIA DESSA ROLETA`, 2)
                    }
                }
            } else {
                inserirTextoDisplay(`NENHUMA JOGADA CONFIRMADA - SAIA DESSA ROLETA`, 2)
            }

        }
    }

}

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
    if(inverterLeitura){
        return roletasLobby.reverse()
    }else{
        return roletasLobby
    }
    

}

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
    if (parseInt(duziaRep) == 0) {
        roleta.reverse()
        return 0
    } else if (repeticaoPrimeiraDuzia == parseInt(duziaRep)) {
        roleta.reverse()
        return 1
    } else if (repeticaoSegundaDuzia == parseInt(duziaRep)) {
        roleta.reverse()
        return 2
    } else if (repeticaoTerceiraDuzia == parseInt(duziaRep)) {
        roleta.reverse()
        return 3
    } else {
        roleta.reverse()
        return 0
    }
}

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
    if (parseInt(duziaRep) == 0) {
        roleta.reverse()
        return 0
    } else if (repeticaoPrimeiraDuzia >= parseInt(duziaRep)) {
        roleta.reverse()
        return repeticaoPrimeiraDuzia
    } else if (repeticaoSegundaDuzia >= parseInt(duziaRep)) {
        roleta.reverse()
        return repeticaoSegundaDuzia
    } else if (repeticaoTerceiraDuzia >= parseInt(duziaRep)) {
        roleta.reverse()
        return repeticaoTerceiraDuzia
    } else {
        roleta.reverse()
        return 1
    }
}

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
    if (parseInt(colunaRep) == 0) {
        roleta.reverse()
        return 0
    } else if (repeticaoPrimeiraColuna == parseInt(colunaRep)) {
        roleta.reverse()
        return 1
    } else if (repeticaoSegundaColuna == parseInt(colunaRep)) {
        roleta.reverse()
        return 2
    } else if (repeticaoTerceiraColuna == parseInt(colunaRep)) {
        roleta.reverse()
        return 3
    } else {
        roleta.reverse()
        return 0
    }
}


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
    if (parseInt(colunaRep) == 0) {
        roleta.reverse()
        return 0
    } else if (repeticaoPrimeiraColuna >= parseInt(colunaRep)) {
        roleta.reverse()
        return repeticaoPrimeiraColuna
    } else if (repeticaoSegundaColuna >= parseInt(colunaRep)) {
        roleta.reverse()
        return repeticaoSegundaColuna
    } else if (repeticaoTerceiraColuna >= parseInt(colunaRep)) {
        roleta.reverse()
        return repeticaoTerceiraColuna
    } else {
        roleta.reverse()
        return 1
    }
}

// Ciclo do bot
setInterval(() => {
    leituras++
    if(leituras == 7){
        leituras = 0
        if(inverterLeitura){
            inverterLeitura = false
        }else{
            inverterLeitura = true
        }  
    }
    //carrega configuração
    carregarConfiguracao()
    //analisar estrategias
    analisandoEstrategias()
}, 3000)
