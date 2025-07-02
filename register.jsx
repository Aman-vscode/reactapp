import React, { useState } from "react";
import Header from "./header";
import Navbar from "./navbar";

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export default function Register() {
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = "Name is required";
        if (!form.email) errs.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email is invalid";
        if (!form.password) errs.password = "Password is required";
        else if (form.password.length < 6) errs.password = "Password must be at least 6 characters";
        if (form.confirmPassword !== form.password) errs.confirmPassword = "Passwords do not match";
        return errs;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
            setForm(initialState);
        } else {
            setErrors(validationErrors);
            setSubmitted(false);
        }
    };

    return (
        <>
        <Header />
        <Navbar />
        <div style={{
            minHeight: "400px",
            marginTop:"70px",
            marginBottom:"70px",
            display: "flex",
            justifyContent: "center",
        }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    background: "linear-gradient(135deg,rgb(156, 242, 200) 0%,rgb(153, 177, 255) 100%)",
                    padding: "2rem 2.5rem",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                    minWidth: 320,
                    maxWidth: 400,
                    width: "100%"
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#2c3e50" }}>Register</h2>
                {submitted && (
                    <div style={{
                        background: "#d1fae5",
                        color: "#065f46",
                        padding: "0.75rem",
                        borderRadius: "0.5rem",
                        marginBottom: "1rem",
                        textAlign: "center"
                    }}>
                        Registration successful!
                    </div>
                )}
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ display: "block", marginBottom: 6, color: "#333" }}>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "0.5rem",
                            borderRadius: "0.5rem",
                            border: errors.name ? "1.5px solid #f87171" : "1px solid #ccc"
                        }}
                        autoComplete="off"
                    />
                    {errors.name && <div style={{ color: "#f87171", fontSize: 13 }}>{errors.name}</div>}
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ display: "block", marginBottom: 6, color: "#555" }}>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "0.5rem",
                            borderRadius: "0.5rem",
                            border: errors.email ? "1.5px solid #f87171" : "1px solid #ccc"
                        }}
                        autoComplete="off"
                    />
                    {errors.email && <div style={{ color: "#f87171", fontSize: 13 }}>{errors.email}</div>}
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ display: "block", marginBottom: 6, color: "#555" }}>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "0.5rem",
                            borderRadius: "0.5rem",
                            border: errors.password ? "1.5px solid #f87171" : "1px solid #ccc"
                        }}
                        autoComplete="new-password"
                    />
                    {errors.password && <div style={{ color: "#f87171", fontSize: 13 }}>{errors.password}</div>}
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ display: "block", marginBottom: 6, color: "#555" }}>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "0.5rem",
                            borderRadius: "0.5rem",
                            border: errors.confirmPassword ? "1.5px solid #f87171" : "1px solid #ccc"
                        }}
                        autoComplete="new-password"
                    />
                    {errors.confirmPassword && <div style={{ color: "#f87171", fontSize: 13 }}>{errors.confirmPassword}</div>}
                </div>
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "0.75rem",
                        background: "linear-gradient(180deg,rgb(46, 140, 255) 50%,rgb(163, 83, 238) 100%)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "0.5rem",
                        fontWeight: 600,
                        fontSize: 16,
                        cursor: "pointer",
                        transition: "background 0.2s"
                    }}
                >
                    Register
                </button>
            </form>
        </div>
        </>
    );
}