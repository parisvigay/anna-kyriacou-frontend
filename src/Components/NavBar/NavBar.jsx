import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navContainer">
        <nav className="navBar navLeft">
            <Link className="logoLink" to="/">Anna Kyriacou</Link>
        </nav>
        <nav className="navBar navRight">
            <Link className="link" to="/">Gallery</Link>
            <Link className="link" to="/">Bio</Link>
            <Link className="link" to="/">Contact</Link>
        </nav>
    </div>
  )
}