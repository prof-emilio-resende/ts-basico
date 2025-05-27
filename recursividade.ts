// Função básica
export function soma(a: number, b: number): number {
    return a + b;
}

// Função recursiva (fatorial)
export function fatorial(n: number): number {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
}