import './style.css';
import useUser from '../../hooks/useUser';

const Header = () => {
    const {name} = useUser();
    
    return(
        <header>
            Bem vinde {name}! 
        </header>
    )
}

export default Header;