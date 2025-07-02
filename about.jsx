import React from 'react';
import Header from './header';
import NavBar from './navbar';

function About() {
    return (
        <>
            <Header />
            <NavBar />
        <div style={{
            maxWidth: "700px",
            margin: "40px auto",
            padding: "32px",
            background: "linear-gradient(135deg,rgb(156, 242, 200) 0%,rgb(153, 177, 255) 100%)",
            borderRadius: "12px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            fontFamily: "Segoe UI, Arial, sans-serif",
            color: "#222"
        }}>
            <h1 style={{
                fontSize: "2.2rem",
                marginBottom: "18px",
                color: "#2c3e50",
                letterSpacing: "1px"
            }}>About All Courses</h1>
            <p style={{ fontSize: "1.1rem", marginBottom: "14px", lineHeight: 1.7 }}>
                Our platform offers a diverse range of courses designed to equip you with the latest skills in web development, programming, and technology. Each course is crafted by experienced instructors and follows a hands-on, project-based approach to maximize your learning experience.
            </p>
            <p style={{ fontSize: "1.1rem", marginBottom: "10px", lineHeight: 1.7 }}>
                <strong style={{ color: "#2c3e50" }}>React Course:</strong> Learn the fundamentals and advanced concepts of React, including components, hooks, state management, and routing. Build interactive and scalable web applications through practical projects.
            </p>
            <p style={{ fontSize: "1.1rem", marginBottom: "10px", lineHeight: 1.7 }}>
                <strong style={{ color: "#2c3e50" }}>JavaScript Essentials:</strong> Master core JavaScript concepts such as variables, functions, objects, and asynchronous programming. This course lays the groundwork for all modern web development.
            </p>
            <p style={{ fontSize: "1.1rem", marginBottom: "10px", lineHeight: 1.7 }}>
                <strong style={{ color: "#2c3e50" }}>HTML &amp; CSS:</strong> Understand the building blocks of the web. Create responsive layouts, style your pages, and ensure accessibility and cross-browser compatibility.
            </p>
            <p style={{ fontSize: "1.1rem", marginBottom: "10px", lineHeight: 1.7 }}>
                <strong style={{ color: "#2c3e50" }}>Node.js &amp; Express:</strong> Dive into backend development with Node.js. Learn to build RESTful APIs, manage databases, and deploy your applications.
            </p>
            <p style={{ fontSize: "1.1rem", marginBottom: "10px", lineHeight: 1.7 }}>
                <strong style={{ color: "#2c3e50" }}>Full-Stack Projects:</strong> Apply your skills by building complete applications from scratch, integrating frontend and backend technologies, and following best practices in deployment and version control.
            </p>
            <p style={{ fontSize: "1.1rem", marginTop: "18px", lineHeight: 1.7 }}>
                Each course includes detailed explanations, real-world examples, and interactive assignments. Whether you are a beginner or an experienced developer, our curriculum is designed to help you achieve your learning goals and advance your career in tech.
            </p>
        </div>
        </>
    );
}

export default About;