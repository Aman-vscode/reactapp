import React, { useState } from "react";
import Header from "./header";
import NavBar from "./navbar";
import { Link } from "react-router-dom";

const styles = {
    container: {
        minHeight: "350px",
        display: "flex",
        justifyContent: "center",
        marginTop: "70px",
    },
    form: {
        background: "linear-gradient(135deg,rgb(156, 242, 200) 0%,rgb(153, 177, 255) 100%)",
        padding: "2.5rem 2rem",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(44, 62, 80, 0.2)",
        width: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem",
    },
    input: {
        padding: "0.8rem",
        borderRadius: "8px",
        border: "1px solid #d1d5db",
        fontSize: "1rem",
        outline: "none",
        transition: "border 0.2s",
    },
    button: {
        padding: "0.9rem",
        borderRadius: "8px",
        border: "none",
        background: "linear-gradient(180deg,rgb(46, 140, 255) 50%,rgb(163, 83, 238) 100%)",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "1.1rem",
        cursor: "pointer",
        transition: "background 0.2s",
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "2rem",
        color: "#2c3e50",
        marginBottom: "0.5rem",
    },
    error: {
        color: "#e53e3e",
        fontSize: "0.95rem",
        textAlign: "center",
    },
    success: {
        color: "#38a169",
        fontSize: "1rem",
        textAlign: "center",
    },
};

const fakeUser = {
    username: "demo",
    password: "123",
};

function storeUserData(data) {
    localStorage.setItem("user", JSON.stringify(data));
}

export default function Login() {
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
        setSuccess(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            form.username === fakeUser.username &&
            form.password === fakeUser.password
        ) {
            storeUserData({ username: form.username });
            setSuccess(true);
            setError("");
        } else {
            setError("Invalid username or password.");
            setSuccess(false);
        }
    };

    return (
        <>
            <Header />
            <NavBar />
        <div style={styles.container}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.title}>Login</div>
                <input
                    style={styles.input}
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                    autoComplete="username"
                    required
                />
                <input
                    style={styles.input}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    required
                />
                <button style={styles.button} type="submit">
                    Sign In
                </button>
                {error && <div style={styles.error}>{error}</div>}
                {success && (
                    <div style={styles.success}>Login successful! 🎉</div>
                )}
            <p style={{fontSize:"1rem", color:"#333", textAlign:"center"}}>Don't have account ? <Link to="/register" style={{color:"blue"}}> Register Now </Link> </p>
            </form>
        </div>
        </>
    );
}