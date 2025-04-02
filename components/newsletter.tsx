'use client'

import React, { useState, FormEvent } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Simple email regex

        if (!isValid) {
            setHasError(true);
            setIsSubmitted(false);
            return;
        }

        setHasError(false);
        setIsSubmitted(true);

        // Here you would typically send the email to your backend
    };

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="relative bg-red-600 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">
                    <div className="relative flex flex-col lg:flex-row justify-between items-center">
                        {/* CTA content */}
                        <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
                            <h3 className="h3 text-white mb-2">Stay in the loop</h3>
                            <p className="text-red-200 text-lg">Join our newsletter to get top news before anyone else.</p>
                        </div>

                        {/* CTA form */}
                        <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
                            <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`w-full appearance-none bg-red-700 border ${hasError ? 'border-red-300' : 'border-red-500'} focus:border-red-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-red-400`}
                                    placeholder="Your best email…"
                                    aria-label="Your best email…"
                                />
                                <button
                                    type="submit"
                                    className="btn text-red-600 bg-red-100 hover:bg-white shadow"
                                >
                                    Subscribe
                                </button>
                            </div>

                            {/* Error message */}
                            {hasError && (
                                <p className="text-center lg:text-left mt-2 text-red-200 text-sm">
                                    Please enter a valid email address.
                                </p>
                            )}

                            {/* Success message */}
                            {isSubmitted && !hasError && (
                                <p className="text-center lg:text-left mt-2 text-red-100 text-sm">
                                    Thanks for subscribing!
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
