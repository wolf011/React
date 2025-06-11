import { Link } from "react-router-dom"
import "./styles.css"
export const Header = () => {
    return (
        <header>
            <h2>Empresa XPTO </h2>
            <div className="menu">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/empresa">Empresa</Link>
                        </li>

                        <li>
                            <Link to="/contato">Contato</Link>
                        </li>
                        
                        <li>
                            <Link to="/noticias">Notícias</Link>
                        </li>

                        <li>
                            <Link to="/produtos/:{id}">Produtos</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
