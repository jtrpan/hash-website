import dynamic from 'next/dynamic';
// import { useEffect } from 'react';
export const metadata = {
    title: 'Contact',
    description: 'Get in touch with Hash Machinery Systems for inquiries about our products and services or for customer support.',
}

import Link from 'next/link';
import Head from 'next/head';

// Dynamically import the component that includes client-side interactivity
const ContactForm = dynamic(() => import('./form'), {
    ssr: false, // This will disable server-side rendering for this component
});

export default function Contact() {
    // Function to handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Prevent the form from submitting and refreshing the page
        event.preventDefault();

        // Process form data here
    };

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1 mb-4" data-aos="fade-up">Contact</h1>
                        <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
                            Whether you have questions about our products, need support, or want to discuss your
                            equipment needs, we're here to help. Connect with our team of experts to find tailored
                            solutions that drive your business forward.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <div
                            className="max-w-xs mx-auto sm:max-w-none sm:flex sm:flex-col sm:items-center">
                            {/* Contact Form */}
                            <div data-aos="fade-up" data-aos-delay="400">
                                <form className="contact-form" onSubmit={null}>
                                    <div className="space-y-6 bg-white p-6 rounded shadow-lg">
                                        <h3 className="text-lg font-semibold text-gray-700">Get in Touch</h3>

                                        <div className="flex">
                                            <label htmlFor="name"
                                                   className="text-sm font-medium text-gray-600">Name</label>
                                            <input type="text" id="name" name="name"
                                                   className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                   required/>
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="email"
                                                   className="text-sm font-medium text-gray-600">Email</label>
                                            <input type="email" id="email" name="email"
                                                   className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                   required/>
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="message"
                                                   className="text-sm font-medium text-gray-600">Message</label>
                                            <textarea id="message" name="message" rows={4}
                                                      className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                      required></textarea>
                                        </div>

                                        <button type="submit"
                                                className="btn bg-blue-500 hover:bg-blue-600 text-white font-medium p-2 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Additional Contact */}
                    <div className="max-w-3xl mx-auto text-left pb-12 md:pb-20">
                        <h4 className="h4 mb-4" data-aos="fade-up" data-aos-delay="600">Other Ways to Reach Us</h4>
                        <ul className="contact-details" data-aos="fade-up" data-aos-delay="800">
                            <li><strong>Address:</strong> 343 Preston Street, 11th Floor, Ottawa, K1S 1N4,
                                Canada
                            </li>
                            <li><strong>Email:</strong> info@hashmachinery.com</li>
                            <li><strong>Phone:</strong> +1 (613) 884-3388</li>
                            <li><strong>Fax:</strong> +1 (613) 491-0426</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
