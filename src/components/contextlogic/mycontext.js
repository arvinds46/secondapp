import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

function MyContextProvider({children}) {
    const [name,setName] = useState("Arvind B S");

    return(
        <MyContext.Provider value={{name,setName}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider;
export const useMyContext = () => {
    return useContext(MyContext);
}