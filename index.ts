import { verificaIdade, verificaDiaSemana } from "./condicionais";
import { range, executarLoop } from "./loop";
import { soma, fatorial } from "./recursividade";
import { Pessoa, Estudante, Aluno } from "./objetos";
import { Vehicle, AbstractVehicle, Car, Airplane } from "./oo_mid";
import {
    Status,
    NumericId,
    Named,
    Aged,
    Person,
    Animal,
    Fruit,
    Apple,
    FruitBasket,
    FruitStore
} from "./oo_advanced";

const nome: string = "João";
const idade: number = 30;
const ativo: boolean = true;
const habilidades: string[] = ["JavaScript", "TypeScript", "Node.js"];
const pessoa: { nome: string; idade: number; ativo: boolean } = {
    nome: "Maria",
    idade: 25,
    ativo: false,
};
const numeros: Array<number> = [1, 2, 3, 4, 5];

const variaveis = {
    nome,
    idade,
    ativo,
    habilidades,
    pessoa,
    numeros,
};

export {
    variaveis,
    verificaIdade,
    verificaDiaSemana,
    range,
    executarLoop,
    soma,
    fatorial,
    Pessoa,
    Estudante,
    Aluno,
    Vehicle,
    AbstractVehicle,
    Car,
    Airplane,
    // Advanced OO exports
    Status,
    NumericId,
    Named,
    Aged,
    Person,
    Animal,
    Fruit,
    Apple,
    FruitBasket,
    FruitStore
};
// Exportando as variáveis para uso em outros módulos
