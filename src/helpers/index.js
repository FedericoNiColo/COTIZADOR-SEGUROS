export function obtenerDiferencia(year) {
    return new Date().getFullYear() - year
}

export function calcularPorMarca(marca) {

    let incremento
    switch (marca) {

        case '1':
            incremento = 1.3;
            break;

        case '2':
            incremento = 1.15;
            break;

        case '3':
            incremento = 1.05;
            break;

    }

    return incremento

}

export function calcularPlan(plan) {
    return plan === '1' ? 1.2 : 1.5;
}

export function formatearDinero(dinero) {
    return dinero.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}