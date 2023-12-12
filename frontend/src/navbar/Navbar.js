import "./navbar.css"
import {Link} from "react-router-dom"

export default function Navbar()
{
    return(
        <nav className="nav">
            <Link to="/" className="gameTitle">GameName</Link>
            <ul>
                <li>
                    <Link to="/clasament">Clasament</Link>
                </li>
            </ul>
        </nav>
    )
}