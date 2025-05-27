# Inicializando projeto:
- Crie um novo diretório
- Inicialize o projeto node

```bash
> npm init -y
> npm install --save-dev typescript tslint @types/node jest @types/jest ts-node ts-jest
````

## Declarando estruturas básicas
```typescript
// Tipos básicos
let nome: string = "João";
let idade: number = 25;
let ativo: boolean = true;

// Inferência de tipos
let cidade = "São Paulo"; // TypeScript infere que é string

// Constantes
const PI = 3.1415;
```

## Estruturas condicionais
```typescript
// If-else
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// Switch-case
let diaDaSemana = 3;
switch (diaDaSemana) {
    case 1: console.log("Domingo"); break;
    case 2: console.log("Segunda"); break;
    // ...
    default: console.log("Dia inválido");
}
```
## Laços de repetição
```typescript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}
```
## Funções e recursividade
```typescript
// Função básica
function soma(a: number, b: number): number {
    return a + b;
}

// Função recursiva (fatorial)
function fatorial(n: number): number {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
}
```
## Orientação a objetos
```typescript
// Interface
interface Pessoa {
    nome: string;
    idade: number;
}

// Classe
class Aluno implements Pessoa {
    constructor(public nome: string, public idade: number, public matricula: string) {}
    
    estudar() {
        console.log(`${this.nome} está estudando.`);
    }
}
```
