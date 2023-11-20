import React from 'react';

const ContactForm = () => {
    // Function to handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Prevent the form from submitting and refreshing the page
        event.preventDefault();

        // Process form data here
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            {/* Form fields */}
            <button type="submit" className="btn bg-blue-500 text-white">Send Message</button>
        </form>
    );
};

export default ContactForm;
