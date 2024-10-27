function calcularRank(vitorias, derrotas) {

    let saldoVitorias = vitorias - derrotas

    if(saldoVitorias < 0) {
        saldoVitorias = 0
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de FERRO`
    }else if(saldoVitorias <= 10){
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de FERRO`
    } else if(saldoVitorias > 10 && saldoVitorias <= 20){
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de BRONZE`
    } else if(saldoVitorias > 20 && saldoVitorias <= 50){
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de PRATA`
    } else if(saldoVitorias > 50 && saldoVitorias <= 80){
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de OURO`
    } else if(saldoVitorias > 80 && saldoVitorias <= 90){
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de DIAMANTE`
    } else if(saldoVitorias > 90 && saldoVitorias <= 100){
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de LENDÁRIO`
    } else {
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de IMORTAL`
    } 
}

console.log(calcularRank(101, 0))


