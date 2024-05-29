import '../styles/NavBar.css';
function NavBar() {
    return (
        <div className="navBar">
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
            </style>
            <nav className="navbar-container">
                <h1 className="name-heading">Garvit Dadheech</h1>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="menu-logo" height="2em" width="10em" xmlns="http://www.w3.org/2000/svg"><path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path></svg>
            </nav>
        </div>
    );
}
export default NavBar;