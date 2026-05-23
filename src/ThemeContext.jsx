import {Reeact, createContext,useState} from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);;

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    }

    const themeStyles = {
        backgroundColor: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'black',
        height: '100vh',
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeStyles }}>
            {children}
        </ThemeContext.Provider>
    );
}


