// Interface
export interface Pessoa {
    nome: string;
    idade: number;
}

export interface Estudante {
    estudar(): void;
}

// Classe
export class Aluno implements Pessoa, Estudante {
    constructor(public nome: string, public idade: number, public matricula: string) {}
    
    estudar() {
        console.log(`${this.nome} está estudando.`);
    }
}