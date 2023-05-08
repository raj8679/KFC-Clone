import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export default function AuthContextProvider ({children}){
    const [deletePass, setDeletePass] = useState(false)
    const [loggedUserName, setLoggedUserName] = useState("")
   

    return(
<AuthContext.Provider value={{deletePass, setDeletePass,loggedUserName,setLoggedUserName}}>{children}</AuthContext.Provider>
    ); 
}