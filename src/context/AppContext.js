import React , {  useState, createContext  } from 'react';



export const AppContext = createContext();

export const AppProvider = (props) => {

    const [nameRetrevied , setNameRetrevied ] = useState('');
    const [objectRetreived , setObjectRetreived ] = useState({
        
    });

 

   
   


    return (
            <AppContext.Provider value={ { nameRet: [nameRetrevied , setNameRetrevied] , objectRet: [ objectRetreived , setObjectRetreived  ]  }} >
                {props.children}
            </AppContext.Provider>
    )
}