import { createContext } from "react";

const ThemeChange = createContext({
    theme: '',
    changeTheme: () => {}
});

export default ThemeChange;
