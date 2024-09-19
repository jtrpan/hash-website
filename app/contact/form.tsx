'use client'

import React, {useState} from 'react';
import emailjs from 'emailjs-com';


const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        emailjs.sendForm('service_s6ovfvk', 'template_1lxhhk8', form, 'OiWR6TedbTSJsj5Ci')
            .then((result) => {
                console.log(result.text);
                setIsSubmitted(true);
                setSubmitMessage('Your message has been sent successfully!');
                // Optionally clear the form here
                form.reset();
            }, (error) => {
                console.log(error.text);
                setIsSubmitted(false);
                setSubmitMessage('Failed to send the message. Please try again.');
            });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-200 mb-4">Get in Touch</h3>

                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label htmlFor="from_name"
                               className="block text-sm font-medium text-gray-200 mb-2">Name</label>
                        <input type="text" id="from_name" name="from_name"
                               className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 font-medium text-gray-700"
                               required/>
                    </div>

                    <div className="w-full md:w-1/2 px-2">
                        <label htmlFor="from_addr"
                               className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                        <input type="email" id="from_addr" name="from_addr"
                               className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 font-medium text-gray-700"
                               required/>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message"
                           className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                    <textarea id="message" name="message" rows={4}
                              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 font-medium text-gray-700"
                              required></textarea>
                </div>

                {isSubmitted && (
                    <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
                        {submitMessage}
                    </div>
                )}

                <button type="submit" id="submit" value="Submit"
                        className="w-full btn bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-5 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
                    Send Message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
