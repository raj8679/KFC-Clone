import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export default function AuthContextProvider ({children}){
    const [loggedUserName, setLoggedUserName] = useState("")
   

    return(
<AuthContext.Provider value={{loggedUserName,setLoggedUserName}}>{children}</AuthContext.Provider>
    ); 
}