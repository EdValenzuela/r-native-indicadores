import React, { createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const myIndicatorContext = createContext();

const IndicatorsContext = ({children}) => {
    
    const [data, loading] = useFetch('https://mindicador.cl/api');

    return (
        <myIndicatorContext.Provider value={{data, loading}}>
            {children}
        </myIndicatorContext.Provider>
    )
}

export default IndicatorsContext
