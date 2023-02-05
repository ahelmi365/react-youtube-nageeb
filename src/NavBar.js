import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
    return (
        <header className="navbar-container">

            <Link to="/" className="navbar-title">
                <h1 >iPlay</h1>
            </Link>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="signup">Sign-Up</Link>
                </li>
                <li>
                    <Link to="login">Log-In</Link>
                </li>
            </ul>
        </header>
    )
}