export function range(start: number, end: number): number[] {
    const resultado: number[] = [];
    for (let i = start; i <= end; i++) {
        resultado.push(i);
    }
    return resultado;
}

export function executarLoop(
    numeros: number[],
    callback: (numero: number) => void
): void {
    for (const numero of numeros) {
        callback(numero);
    }
}
