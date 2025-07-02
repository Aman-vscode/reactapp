import React from "react";
import Header from "./header";
import NavBar from "./navbar";

const Home = () => {
    const styles = {
        container: {
            padding: "2rem",
            maxWidth: "800px",
            margin: "50px auto",
            background: "linear-gradient(135deg,rgb(156, 242, 200) 0%,rgb(153, 177, 255) 100%)",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(44, 62, 80, 0.2)",
            fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
        },
        heading: {
            color: "#2c3e50",
            fontSize: "2rem",
            marginBottom: "1rem",
        },
        subheading: {
            color: "#34495e",
            fontSize: "1.6rem",
            marginTop: "2rem",
            marginBottom: "1rem",
        },
        paragraph: {
            color: "#333",
            lineHeight: "1.6",
            marginBottom: "1rem",
            fontSize: "1.3rem",
        },
        list: {
            paddingLeft: "1.5rem",
            marginBottom: "1.5rem",
        },
        listItem: {
            marginBottom: "0.8rem",
            fontSize: "1.3rem",
            color: "#333",
            lineHeight: "1.3",
        },
    };

    return (
        <>
            <Header />
            <NavBar />
            <div style={styles.container}>
                <h1 style={styles.heading}>Welcome to the Full Stack Web Development Course</h1>
                <p style={styles.paragraph}>
                    This comprehensive course covers everything you need to become a proficient full stack web developer. Whether you're a beginner or looking to expand your skills, you'll learn the latest technologies and best practices in web development.
                </p>
                <h2 style={styles.subheading}>Course Modules</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <strong>HTML &amp; CSS:</strong> Learn the building blocks of the web. Understand semantic HTML, responsive layouts, Flexbox, Grid, and modern CSS techniques to create visually appealing and accessible websites.
                    </li>
                    <li style={styles.listItem}>
                        <strong>JavaScript (JS):</strong> Master the fundamentals of JavaScript, including ES6+ features, DOM manipulation, event handling, and asynchronous programming with promises and async/await.
                    </li>
                    <li style={styles.listItem}>
                        <strong>React:</strong> Dive into component-based development with React. Build dynamic user interfaces, manage state with hooks, and explore advanced topics like context, routing, and performance optimization.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Express.js:</strong> Develop robust backend APIs using Express.js. Learn about RESTful routing, middleware, authentication, and integrating with databases.
                    </li>
                    <li style={styles.listItem}>
                        <strong>MongoDB:</strong> Store and manage data with MongoDB, a popular NoSQL database. Understand data modeling, CRUD operations, aggregation, and connecting MongoDB with Node.js applications.
                    </li>
                    <li style={styles.listItem}>
                        <strong>PHP:</strong> Explore server-side scripting with PHP. Learn about form handling, sessions, database integration, and building dynamic web applications.
                    </li>
                </ul>
                <h2 style={styles.subheading}>What You'll Build</h2>
                <p style={styles.paragraph}>
                    Throughout the course, you'll work on real-world projects such as personal portfolios, interactive dashboards, RESTful APIs, and full stack applications combining frontend and backend technologies.
                </p>
                <h2 style={styles.subheading}>Who Should Enroll?</h2>
                <p style={styles.paragraph}>
                    This course is ideal for aspiring web developers, designers looking to code, or anyone interested in building modern web applications from scratch.
                </p>
                <h2 style={styles.subheading}>Get Started</h2>
                <p style={styles.paragraph}>
                    Ready to begin your journey? Dive into the modules, follow along with hands-on exercises, and join our community of learners!
                </p>
            </div>
        </>
    );
};

export default Home;