import { Fragment, useCallback, useMemo, useRef } from 'react'
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from '../constants'

const Resultado = () => {

    const { resultado, datos } = useCotizador()
    const { marca, plan, year } = datos

    const nombreMarca = useCallback(MARCAS.filter(marc => marc.id === Number(marca)), [resultado])
    const nombrePlan = useCallback(PLANES.filter(pla => pla.id === Number(plan)), [resultado])

    const useYear = useRef(year)
    console.log(nombreMarca[0]);


    if (resultado === 0) return null

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>

            <p className="my-2">
                <span className="font-bold">Marca:</span>
                {nombreMarca[0]?.nombre}
            </p>

            <p className="my-2">
                <span className="font-bold">Plan:</span>
                {nombrePlan[0]?.nombre}
            </p>

            <p className="my-2">
                <span className="font-bold">Año:</span>
                {useYear.current}
            </p>
            <p className="my-2 text-2xl">
                <span className="font-bold">Total Cotizacion:</span>
                {resultado}
            </p>

        </div>
    )
}

export default Resultado
