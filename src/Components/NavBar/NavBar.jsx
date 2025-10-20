import { useState } from 'react';
import './NavBar.css';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="navContainer">
        <nav className="navBar navLeft">
            <Link className="logoLink" to="/">Anna Kyriacou</Link>
        </nav>
        <nav className="navBar navRight">
            <Link className={`link ${pathname.startsWith("/gallery") ? "activeLink" : ""}`} to="/gallery">Gallery</Link>
            <Link className={`link ${pathname === "/biography" ? "activeLink" : ""}`} to="/biography">Biography</Link>
            <Link className={`link ${pathname === "/contact" ? "activeLink" : ""}`} to="/contact">Contact</Link>
        </nav>
    </div>
  )
}