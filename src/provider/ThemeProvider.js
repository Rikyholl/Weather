import { useState } from "react";
import ThemeContext from "../context/ThemeContext";
import changeCSSRootVar from "../model/ChangeCSSRootVar";

const ThemeProvider = ({ children, ...props }) =>{

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    changeCSSRootVar(theme);
    
    function changeTheme(theme){
        localStorage.setItem('theme', theme);
        setTheme(theme);
        changeCSSRootVar(theme);
    }

    return(
       <ThemeContext.Provider
        value={{
            theme, 
            changeTheme
        }}
        {...props}
       > {children} </ThemeContext.Provider>
    );
}

export default ThemeProvider;