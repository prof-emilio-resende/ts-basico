import {
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
    Car,
    Airplane,
    FruitStore
} from "./index";

const { nome, idade, ativo, habilidades, pessoa, numeros } = variaveis;

test("Declaracao de variaveis", () => {
    expect(nome).toBe("João");
    expect(idade).toBe(30);
    expect(ativo).toBe(true);
    expect(habilidades).toEqual(["JavaScript", "TypeScript", "Node.js"]);
    expect(pessoa).toEqual({ nome: "Maria", idade: 25, ativo: false });
    expect(numeros).toEqual([1, 2, 3, 4, 5]);
});

test("Verifica idade", () => {
    expect(verificaIdade(30)).toBe("Maior de idade");
    expect(verificaIdade(17)).toBe("Menor de idade");
});

test("Verifica dia da semana", () => {
    expect(verificaDiaSemana(1)).toBe("Domingo");
    expect(verificaDiaSemana(2)).toBe("Segunda-feira");
    expect(verificaDiaSemana(3)).toBe("Terça-feira");
    expect(verificaDiaSemana(4)).toBe("Quarta-feira");
    expect(verificaDiaSemana(5)).toBe("Quinta-feira");
    expect(verificaDiaSemana(6)).toBe("Sexta-feira");
    expect(verificaDiaSemana(7)).toBe("Sábado");
    expect(verificaDiaSemana(8)).toBe("Dia inválido");
    expect(verificaDiaSemana(0)).toBe("Dia inválido");
});

test("Verifica range", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(range(3, 7)).toEqual([3, 4, 5, 6, 7]);
    expect(range(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
});

test("Executa loop", () => {
    const mockCallback = jest.fn();
    executarLoop(numeros, mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(numeros.length);
    numeros.forEach((numero) => {
        expect(mockCallback).toHaveBeenCalledWith(numero);
    });
});

test("Soma de dois números", () => {
    expect(soma(2, 3)).toBe(5);
    expect(soma(-1, 1)).toBe(0);
    expect(soma(0, 0)).toBe(0);
});

test("Fatorial de um número", () => {
    expect(fatorial(5)).toBe(120);
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
    expect(fatorial(3)).toBe(6);
    expect(fatorial(4)).toBe(24);
});

test("Classes e objetos", () => {
    const pessoa1 = new Aluno("Carlos", 40, "123");
    expect(pessoa1.nome).toBe("Carlos");
    expect(pessoa1.idade).toBe(40);
    expect(pessoa1.matricula).toBe("123");
});

test("Aluno implementa as interfaces Pessoa e Estudante", () => {
    const aluno = new Aluno("Maria", 20, "456");

    // Verificar se implementa Pessoa
    const pessoa: Pessoa = aluno;
    expect(pessoa.nome).toBe("Maria");
    expect(pessoa.idade).toBe(20);

    // Verificar se implementa Estudante
    const estudante: Estudante = aluno;
    expect(typeof estudante.estudar).toBe("function");

    // Testar o método estudar
    const consoleSpy = jest.spyOn(console, "log");
    estudante.estudar();
    expect(consoleSpy).toHaveBeenCalledWith("Maria está estudando.");
    consoleSpy.mockRestore();
});

describe("Orientação a Objetos Avançada", () => {
    test("Carro com propriedades e herança", () => {
        const carro = new Car("Toyota", "Corolla", 2.0);

        // Testa herança de Vehicle
        expect(carro.start()).toBe("Toyota Corolla está ligado");
        expect(carro.stop()).toBe("Toyota Corolla está desligado");

        // Testa métodos próprios
        expect(carro.getFuelType()).toBe("Gasolina");
        expect(carro.drive(100)).toBe("Dirigindo por 100km. Quilometragem total: 100km");
        expect(carro.drive(50)).toBe("Dirigindo por 50km. Quilometragem total: 150km");

        // Testa getter/setter
        expect(carro.model).toBe("Corolla");
        carro.model = "Camry";
        expect(carro.model).toBe("Camry");
        expect(() => { carro.model = ""; }).toThrow("Modelo deve ter pelo menos 1 caractere");
    });

    test("Avião com mixin de voo", () => {
        const aviao = new Airplane("Boeing", "747", 10000);

        // Testa herança de Vehicle
        expect(aviao.start()).toBe("Boeing 747 está ligado");
        expect(aviao.stop()).toBe("Boeing 747 está desligado");

        // Testa capacidades do mixin
        expect(aviao.fly(5000)).toBe("Voando a 5000 metros de altura");
        expect(aviao.land()).toBe("Pousando de 5000 metros");

        // Testa método próprio
        expect(aviao.getFuelType()).toBe("Querosene");
    });
});

describe("Tipos Avançados", () => {
    test("Union Types e Intersection Types", () => {
        const store = new FruitStore();
        
        // Union type (Status)
        expect(store.status).toBe("pending");
        store.status = "completed";  // Deve aceitar "completed"
        expect(store.status).toBe("completed");
        
        // Intersection type (Person = Named & Aged)
        expect(store.owner).toEqual({ name: "João", age: 30 });
        expect(store.owner.name).toBe("João");
        expect(store.owner.age).toBe(30);
    });

    test("Interface Merging", () => {
        const store = new FruitStore();
        
        // Interface Animal tem propriedades de ambas as declarações
        expect(store.mascot.name).toBe("Rex");
        expect(store.mascot.age).toBe(5);
    });

    test("Covariant Types com FruitBasket", () => {
        const store = new FruitStore();
        
        // Adiciona maçãs ao cesto
        store.addApple("Gala");
        store.addApple("Fuji");
        
        // Verifica se as maçãs foram adicionadas corretamente
        const apples = store.getApples();
        expect(apples).toHaveLength(2);
        expect(apples[0].variety).toBe("Gala");
        expect(apples[1].variety).toBe("Fuji");
        expect(apples[0].sweet).toBe(true);
        expect(apples[0].name).toBe("Apple");
    });
});