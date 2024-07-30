import {createContext,useState } from 'react'
export const darkModeContext=createContext()
const DarkModeProvider = ({ children }) => {
    const [dark,setDark]=useState(false)
return (
    <darkModeContext.Provider value={{dark,setDark}}>{ children}</darkModeContext.Provider>
)
}

export default DarkModeProvider