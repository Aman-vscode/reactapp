import React from 'react';
import Header from './header';
import NavBar from './navbar';

function Contact() {
    return (
        <>
            <Header />
            <NavBar />
        <div style={{
            maxWidth: '500px',
            margin: '40px auto',
            padding: '32px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg,rgb(156, 242, 200) 0%,rgb(153, 177, 255) 100%)',
            boxShadow: '0 8px 32px rgba(60,60,120,0.12)'
        }}>
            <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '24px' }}>
                Contact Us
            </h1>
            <p style={{ textAlign: 'center', color: '#333', marginBottom: '32px', fontSize: '18px' }}>
                Have questions about our courses or want to get in touch? Fill out the form below and we'll get back to you soon!
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    style={{
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #c7d2fe',
                        fontSize: '16px'
                    }}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    style={{
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #c7d2fe',
                        fontSize: '16px'
                    }}
                />
                <select
                    required
                    style={{
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #c7d2fe',
                        fontSize: '16px',
                        color: '#64748b'
                    }}
                >
                    <option value="">Select Topic</option>
                    <option value="course">Course Inquiry</option>
                    <option value="general">General Question</option>
                    <option value="support">Support</option>
                </select>
                <textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    style={{
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #c7d2fe',
                        fontSize: '16px',
                        resize: 'vertical'
                    }}
                />
                <button
                    type="submit"
                    style={{
                        background: 'linear-gradient(180deg,rgb(46, 140, 255) 50%,rgb(163, 83, 238) 100%)',
                        color: '#fff',
                        padding: '14px',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                    }}
                >
                    Send Message
                </button>
            </form>
            <div style={{ marginTop: '32px', textAlign: 'center', color: '#333', fontSize: '18px' }}>
                <h2><strong>FAQ:</strong></h2>
                <p style={{ margin: '8px 0' }}>Here are some common questions we receive:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', textAlign: 'left' }}>
                    <li>
                        <b>Q:</b> How do I enroll in a course?<br />
                        <b>A:</b> Visit our Courses page and click "Enroll" on your chosen course.
                    </li>
                    <li style={{ marginTop: '12px' }}>
                        <b>Q:</b> Can I get a refund?<br />
                        <b>A:</b> Yes, within 14 days of purchase. Contact us for help.
                    </li>
                    <li style={{ marginTop: '12px' }}>
                        <b>Q:</b> How long do I have access to the course?<br />
                        <b>A:</b> You get lifetime access after enrolling.
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Contact;