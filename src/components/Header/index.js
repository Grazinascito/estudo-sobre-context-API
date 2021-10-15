import './style.css';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';

const Header = () => {
    const {name} = useContext(UserContext);
   

    return(
        <header>
            Bem vinde {name}! 
        </header>
    )
}

export default Header;