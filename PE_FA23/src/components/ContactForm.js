import React, { useState } from 'react';

const ContactForm = () => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to send message
        alert(`Message sent: ${message}`);
        setMessage('');
    };

    return (
        <div>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <textarea value={message} onChange={handleMessageChange} />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;