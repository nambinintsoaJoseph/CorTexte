import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext(null); 

export const ThemeProvider = ({children}) => {
    
    const [theme, setTheme] = useState('light'); 
    const [textButtonTheme, setTextButtonTheme] = useState('nuit')

    const changeTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light') 
        setTextButtonTheme(theme == 'light' ? 'jour' : 'nuit')
    }

    return (
        <ThemeContext.Provider value={{theme, textButtonTheme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}