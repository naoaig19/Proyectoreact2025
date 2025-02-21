import './NavBar.css';
function NavBar() {
    return (
        <header>
            <nav className="nav-bar">
                <ul className="nav-options">
                    <li className="nav-bar-item">Inicio</li>
                    <li className="nav-bar-item">Productos</li>
                    <li className="nav-bar-item">Contacto</li>
                </ul>
            </nav>
        </header>)
}

export default NavBar;