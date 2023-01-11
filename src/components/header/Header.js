import Logo from "../../assets/images/icons/logo";
import Theme from "../../assets/images/icons/theme";
import Select from 'react-select';
import { useEffect, useState } from "react";

const Header = () => {

const options = [
    { value: 'Moscow', label: 'Moscow' },
    { value: 'Perm', label: 'Perm' },
    { value: 'Ekaterinburg', label: 'Ekaterinburg' }
]

const [theme, setTheme] = useState('light');

const colourStyles = {
    control: (styles) => ({
        ...styles,
        backgroundColor: theme === 'dark' ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
        width: '194px',
        height: '37px',
        border: 'none',
        borderRadius: '10px',
        zIndex: 100,
        marginLeft: '20px'
    }),
    singleValue: (styles) => ({
        ...styles,
        color: theme === 'dark' ? '#fff' : '#000',
    }),
};


function changeTheme(){
    setTheme(theme === 'light' ? 'dark' : 'light');
}

useEffect(() => {

    const root = document.querySelector(':root');

    const components = [
        'bg-default', 
        'component-bg', 
        'card-bg', 
        'color'
    ];

    root.style.setProperty('--bg-default', `var(--bg-${theme})`);

    components.forEach((component) => {
        root.style.setProperty(
            `--${component}-default`, 
            `var(--${component}-${theme})`
        );
    })
}, [theme])

 return(


    <div className="header">   
        <div className="header_wrapper">
            <Logo />
            <h2 className="header_title"> React weather </h2>
        </div>

        <div className="header_wrapper">

            <div 
                onClick={changeTheme}
                className="change_theme"
            >
                <Theme />
            </div>
            
            <Select 
                defaultValue={options[0]} 
                styles={colourStyles} 
                options={options}
            />
        </div>
    </div>
 );
}

export default Header;