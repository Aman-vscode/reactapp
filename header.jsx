import React from "react";

const headerStyle = {
    background: "linear-gradient(90deg,rgb(38, 213, 219) 0%,rgb(37, 244, 154) 100%)",
    color: "#fff",
    padding: "2rem 0",
    textAlign: "center",
    boxShadow: "0 4px 16px rgba(30,60,114,0.2)",
    letterSpacing: "2px",
};

const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    margin: 0,
    fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
    textShadow: "0 2px 8px rgba(0,0,0,0.15)"
};

const subtitleStyle = {
    fontSize: "1.2rem",
    marginTop: "0.5rem",
    fontWeight: 300,
    opacity: 0.85
};

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>🚀 My First React App</h1>
            <div style={subtitleStyle}>Building awesome UIs with React & Vite</div>
        </header>
    );
}