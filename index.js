

let vitorias = 50;
let derrotas = 10;
console.log("O Herói tem de saldo " + saldoRankeadas(vitorias, derrotas) + " está no nível de " + classificacao(saldoRankeadas(vitorias, derrotas)))

function classificacao(saldo){
    let nivel = " ";
    if (saldo < 10) {
        nivel = "Ferro";
    } else if (saldo < 20) {
        nivel = "Bronze"
    } else if (saldo < 50) {
        nivel = "Prata"
    } else if (saldo < 80) {
        nivel = "Ouro"
    } else if (saldo < 90) {
        nivel = "Diamante"
    } else if (saldo < 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

    return nivel;
}

function saldoRankeadas(vitorias, derrotas){
    return vitorias - derrotas;
}