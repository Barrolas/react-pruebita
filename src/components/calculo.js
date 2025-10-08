/**
 * Función para calcular la remuneración líquida de un trabajador en Chile
 * @param {number} sueldoBruto - Sueldo bruto del trabajador
 * @param {number} afpPorcentaje - Porcentaje de AFP (por defecto 10%)
 * @param {number} saludPorcentaje - Porcentaje de salud (por defecto 7%)
 * @param {number} seguroCesantiaPorcentaje - Porcentaje de seguro de cesantía (por defecto 0.6%)
 * @returns {object} Objeto con todos los cálculos de remuneración
 */
function calculoRemuneracion(
    sueldoBruto = 0,
    afpPorcentaje = 10,
    saludPorcentaje = 7,
    seguroCesantiaPorcentaje = 0.6
) {
    // Validar que el sueldo bruto sea un número válido
    const sueldo = parseFloat(sueldoBruto) || 0;

    // Calcular descuentos previsionales
    const afp = Math.round((sueldo * afpPorcentaje) / 100);
    const salud = Math.round((sueldo * saludPorcentaje) / 100);
    const seguroCesantia = Math.round((sueldo * seguroCesantiaPorcentaje) / 100);

    // Base imponible para impuesto (sueldo bruto - descuentos previsionales)
    const baseImponible = sueldo - afp - salud - seguroCesantia;

    // Calcular impuesto único de segunda categoría (Tramos 2025)
    const impuesto = calcularImpuestoUnico(baseImponible);

    // Total de descuentos
    const totalDescuentos = afp + salud + seguroCesantia + impuesto;

    // Sueldo líquido (neto)
    const sueldoLiquido = sueldo - totalDescuentos;

    return {
        sueldoBruto: sueldo,
        descuentos: {
            afp: {
                monto: afp,
                porcentaje: afpPorcentaje,
            },
            salud: {
                monto: salud,
                porcentaje: saludPorcentaje,
            },
            seguroCesantia: {
                monto: seguroCesantia,
                porcentaje: seguroCesantiaPorcentaje,
            },
            impuesto: {
                monto: impuesto,
                baseImponible: baseImponible,
            },
        },
        totalDescuentos: totalDescuentos,
        sueldoLiquido: sueldoLiquido,
    };
}

/**
 * Calcular el impuesto único de segunda categoría según tramos vigentes 2025
 * @param {number} baseImponible - Base imponible para el cálculo del impuesto
 * @returns {number} Monto del impuesto a pagar
 */
function calcularImpuestoUnico(baseImponible) {
    // Valores en UF (aproximados a pesos chilenos con UF = $37,000)
    const UF = 37000;

    const tramos = [
        { desde: 0,         hasta: 13.5 * UF,   tasa: 0,        rebaja: 0 },
        { desde: 13.5 * UF, hasta: 30 * UF,     tasa: 0.04,     rebaja: 0.54 * UF },
        { desde: 30 * UF,   hasta: 50 * UF,     tasa: 0.08,     rebaja: 1.74 * UF },
        { desde: 50 * UF,   hasta: 70 * UF,     tasa: 0.135,    rebaja: 4.49 * UF },
        { desde: 70 * UF,   hasta: 90 * UF,     tasa: 0.23,     rebaja: 11.14 * UF },
        { desde: 90 * UF,   hasta: 120 * UF,    tasa: 0.304,    rebaja: 17.8 * UF },
        { desde: 120 * UF,  hasta: 150 * UF,    tasa: 0.355,    rebaja: 23.92 * UF },
        { desde: 150 * UF,  hasta: Infinity,    tasa: 0.40,     rebaja: 30.67 * UF },
    ];

    // Determinar el tramo correspondiente
    let impuesto = 0;
    for (const tramo of tramos) {
        if (baseImponible >= tramo.desde && baseImponible < tramo.hasta) {
            impuesto = baseImponible * tramo.tasa - tramo.rebaja;
            break;
        }
    }

    return Math.round(Math.max(0, impuesto)); // El impuesto no puede ser negativo
}

export default calculoRemuneracion;