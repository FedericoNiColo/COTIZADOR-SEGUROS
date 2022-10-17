import { useState, createContext } from 'react'

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const handleChangeDatos = e => {
        console.log(e);
    }

    return (
        <CotizadorContext.Provider
            value={{
                handleChangeDatos
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {CotizadorProvider}

export default CotizadorContext
