import '../../Stayles/Header.css';
import logo from '../../Asstens/headerlogo.svg';
function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className='header-ul'>
                <li><a>Men</a></li>
                <li><a>Women</a></li>
                <li><a>Shoes</a></li>
                <li><a>Bags</a></li>
                <li><a>New</a></li>
                <li><a>Sale</a></li>
            </div>
        </div>
    );
}
export default Header;