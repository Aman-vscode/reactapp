import React from "react";
import "./nav.css"
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        background: "#222",
        color: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
        <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            MyApp
        </div>
        <ul style={{
            display: "flex",
            listStyle: "none",
            gap: "2rem",
            margin: 0,
            padding: 0
        }}>
            <li>
                <Link to="/" className="link" >Home</Link>
            </li>
            <li>
                <Link to="/about"  className="link" >About</Link>
            </li>
            <li>
                <Link to="/contact" className="link" >Contact</Link>
            </li>
            <li>
                <Link to="/login" className="link" >Login</Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;