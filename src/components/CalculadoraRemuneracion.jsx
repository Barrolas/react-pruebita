import { useState, useEffect } from 'react';
import calculoRemuneracion from './calculo';

function CalculadoraRemuneracion() {
    const [sueldoBruto, setSueldoBruto] = useState('');
    const [resultados, setResultados] = useState(null);

    // Calcular automáticamente cuando cambia el sueldo bruto
    useEffect(() => {
        if (sueldoBruto && !isNaN(sueldoBruto)) {
            const calculo = calculoRemuneracion(parseFloat(sueldoBruto));
            setResultados(calculo);
        } else {
            setResultados(null);
        }
    }, [sueldoBruto]);

    // Formatear números como moneda chilena
    const formatearMoneda = (valor) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0
        }).format(valor);
    };

    return (
        <div className="row mt-3 bg-danger text-white p-5">
            <div className="col-12">
                <h1>Recursos Humanos</h1>
                <p>Cálculo de remuneración</p>
            </div>

            {/*seccion de calculo remuneracion*/}

            <div className="row text center">
                <div className="col-lg-6">
                    <h4>Datos Sueldo</h4>
                    <label className="form-label" htmlFor="sueldoBruto">Ingrese el sueldo bruto</label>
                    <div className="input-group mb-3 w-25 mx-auto">
                        <span className="input-group-text bg-success text-white">$</span>
                        <input
                            className="form-control"
                            id="sueldoBruto"
                            placeholder="Ej: 1000000"
                            type="number"
                            value={sueldoBruto}
                            onChange={(e) => setSueldoBruto(e.target.value)}
                            aria-label="Sueldo bruto"
                            aria-describedby="simbolo-peso"
                        />
                    </div>

                    {resultados && (
                        <div className="mt-3">
                            <small className="text-muted">
                                * Los cálculos se realizan automáticamente según normativa chilena vigente 2025
                            </small>
                        </div>
                    )}
                </div>

                <div className="col-lg-6">
                    <h4>Resultados</h4>

                    {resultados ? (
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">Concepto</th>
                                        <th scope="col" className="text-center">Porcentaje</th>
                                        <th scope="col" className="text-end">Monto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table-success">
                                        <td><strong>Sueldo Bruto</strong></td>
                                        <td className="text-center">-</td>
                                        <td className="text-end"><strong>{formatearMoneda(resultados.sueldoBruto)}</strong></td>
                                    </tr>
                                    <tr className="table-secondary">
                                        <td colSpan="3" className="text-center">
                                            <strong>Descuentos Legales</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>AFP</td>
                                        <td className="text-center">{resultados.descuentos.afp.porcentaje}%</td>
                                        <td className="text-end text-warning"><strong>-{formatearMoneda(resultados.descuentos.afp.monto)}</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Salud (Isapre/Fonasa)</td>
                                        <td className="text-center">{resultados.descuentos.salud.porcentaje}%</td>
                                        <td className="text-end text-warning"><strong>-{formatearMoneda(resultados.descuentos.salud.monto)}</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Seguro de Cesantía</td>
                                        <td className="text-center">{resultados.descuentos.seguroCesantia.porcentaje}%</td>
                                        <td className="text-end text-warning"><strong>-{formatearMoneda(resultados.descuentos.seguroCesantia.monto)}</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Impuesto (2da Categoría)</td>
                                        <td className="text-center">Variable</td>
                                        <td className="text-end text-warning"><strong>-{formatearMoneda(resultados.descuentos.impuesto.monto)}</strong></td>
                                    </tr>
                                    <tr className="table-danger">
                                        <td><strong>Total Descuentos</strong></td>
                                        <td className="text-center">-</td>
                                        <td className="text-end"><strong>-{formatearMoneda(resultados.totalDescuentos)}</strong></td>
                                    </tr>
                                    <tr className="table-success">
                                        <td><strong>Sueldo Líquido (Neto)</strong></td>
                                        <td className="text-center">-</td>
                                        <td className="text-end">
                                            <h5 className="mb-0"><strong>{formatearMoneda(resultados.sueldoLiquido)}</strong></h5>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="alert alert-info py-2" role="alert">
                                <small>
                                    <i className="bi bi-info-circle"></i> Base imponible para impuesto: {formatearMoneda(resultados.descuentos.impuesto.baseImponible)}
                                </small>
                            </div>
                        </div>
                    ) : (
                        <div className="alert alert-secondary" role="alert">
                            Ingrese un sueldo bruto para ver los resultados
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CalculadoraRemuneracion;

