import { useState, createContext } from 'react'
import { obtenerDiferencia, calcularPorMarca, calcularPlan, formatearDinero } from '../helpers'

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
        console.log('datos', datos);
    }

    const cotizadorSeguro = () => {
        //Numero base
        let resultado = 2000

        //Obtener la diferencia de años
        let diferencia = obtenerDiferencia(datos.year)

        // por cada año de dif se le resta el 3%
        resultado -= ((diferencia * 3) / 100) * resultado

        //Americano 15%
        //Europeo 30%
        //Asiatico 5%
        resultado *= calcularPorMarca(datos.marca)

        //Básico 20%
        //Completo 50%
        resultado *= calcularPlan(datos.plan)

        //Formatear el dinero
        resultado = formatearDinero(resultado)

        setCargando(true)
        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000);

    }

    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizadorSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export { CotizadorProvider }

export default CotizadorContext
