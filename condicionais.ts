export function verificaIdade(idade: number): string {
    if (idade >= 18) {
        console.log("Maior de idade");
        return "Maior de idade";
    } else {
        console.log("Menor de idade");
        return "Menor de idade";
    }
}

export function verificaDiaSemana(dia: number): string {
    switch (dia) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Dia inválido";
    }
}
