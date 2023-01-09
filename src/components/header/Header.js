import Logo from "../../assets/images/icons/logo";
import Theme from "../../assets/images/icons/theme";
import Select from 'react-select';

const Header = () => {

const options = [
    { value: 'Moscow', label: 'Moscow' },
    { value: 'Perm', label: 'Perm' },
    { value: 'Ekaterinburg', label: 'Ekaterinburg' }
]

const colourStyles = {
    control: (styles) => ({
        ...styles,
        backgroundColor: 'rgba(71, 147, 255, 0.2)',
        width: '194px',
        height: '37px',
        border: 'none',
        borderRadius: '10px',
        zIndex: 100,
        marginLeft: '20px'
    })
}

 return(


    <div className="header">   
        <div className="header_wrapper">
            <Logo />
            <h2 className="header_title"> React weather </h2>
        </div>

        <div className="header_wrapper">
            <Theme />
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