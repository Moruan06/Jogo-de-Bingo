function mostrarArea() {
    document.getElementById('Bingo').style.display = 'block'
}

function mostrarNome() {
    var nome = prompt("Qual o nome Jogador?")
    const nomeCartelaId = document.getElementById('cartela-bingo')
    const titulo = document.createElement('h3')
    titulo.textContent = (nome)
    nomeCartelaId.appendChild(titulo)
}

function criarCartela() {
    var cartelaNumero = []
    const coluna = [[1,15], [16,30], [31,45], [46,60], [61,75]]

    for(var i = 0; i < 5; i++){
        cartelaNumero[i] = []
        for(var j = 0; j < 5; j++){
            let numeros
            do {
                numeros = Math.floor(Math.random() * (coluna[j][1] - coluna[j][0] + 1)) + coluna[j][0];
              } while (cartelaNumero.some(row => row.includes(numeros)));
              cartelaNumero[i][j] = numeros;
        }
    }

    cartelaNumero[2][2] = 'X'
    return cartelaNumero
}

function mostrarCartela(cartelaNumero, nome) {
    const cartelaBingoId = document.getElementById('cartela-bingo')
   
    const divContainer = document.createElement('div');
    divContainer.classList.add('cartela-container');
    
    const titulo = document.createElement('h3');
    titulo.textContent = nome;
    divContainer.appendChild(titulo)

    const cartela = document.createElement('table')

    
    const header = document.createElement('tr')
    const letras = ['B', 'I', 'N', 'G', 'O']
    for (let i = 0; i < letras.length; i++) {
        const th = document.createElement('th')
        th.textContent = letras[i]
        header.appendChild(th)
    }
    cartela.appendChild(header)

    for(var i = 0; i < 5; i++){
        const linha = document.createElement('tr')
        for(var j = 0; j < 5; j++){
            const nmr = document.createElement('td')
            nmr.textContent = cartelaNumero[i][j]
            linha.appendChild(nmr)
        }
        cartela.appendChild(linha)
    }
    divContainer.appendChild(cartela)
    cartelaBingoId.appendChild(divContainer)
}

function mostrarJogo(){
    const cartelaNumero = criarCartela();
    mostrarNome()
    mostrarCartela(cartelaNumero)
    mostrarArea()
}