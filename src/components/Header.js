import { FaBars } from 'react-icons/fa';
import '../styles/Header.css';
import '../styles/NavBar.css';
import { useRef } from 'react';
function Header() {

    function showDisplay(){
        document.querySelector('.navLink-container').style.display = 'block';
        document.querySelector('.right-blur').style.display = 'block';
    }

    return (
        <div className="navBar" id='Header'>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
            </style>
            <nav className="navbar-container">
                <h1 className="name-heading">Garvit Dadheech</h1>
                <div onClick={showDisplay} className="menu-logo" >
                    <FaBars/>
                </div>
            </nav>
        </div>
    );
}
export default Header;