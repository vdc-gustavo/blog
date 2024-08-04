import logo from "../../svg/logo.svg"

const Header = () => {
    return (<>
        <header className="flex-space-between">
            <div className="logo">
            <img src={logo} alt="logo blog"/>
            </div>
            <div className="search">
                <input type="text" className="input-search" name="search"></input>
            </div>
            <div>
                <ul className="menu">
                    <li><a href="#" className="nav-link">Categorias</a></li>
                    <li><a href="#"  className="nav-link">Sobre</a></li>
                    <li><a href="#"  className="nav-link">Contato</a></li>
                </ul>
            </div>
        </header>
        </>
    )
}

export default Header;

