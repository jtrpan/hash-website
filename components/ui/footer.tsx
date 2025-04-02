import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    {/* Top area: Blocks */}
                    <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

                        {/* 1st block */}
                        <div className="md:col-span-4 lg:col-span-5">
                            <div className="mb-2">
                                {/* Logo */}
                                <Link href="/" className="block" aria-label="">
                                    <img src="/images/hash.jpg" alt="Logo" className="h-7 w-auto"/>
                                </Link>
                            </div>
                            <div className="text-gray-400">Hash Machinery Systems is dedicated to pioneering advanced
                                manufacturing solutions, serving industries globally with unparalleled quality and
                                precision.
                            </div>
                        </div>

                        {/* 2nd, 3rd and 4th blocks */}
                        <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

                            {/* 2nd block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">Services</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link href="/services/diecasting"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Die
                                            Casting Services</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/services/machining"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Machining
                                            Services</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/services/plastic_molding"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Plastic
                                            Molding Services</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/services/stamping"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Stamping
                                            Services</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* 3rd block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link href="/products/diecasting"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Die
                                            Casting Products</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/products/machining"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Machining
                                            Products</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/products/plastic_molding"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Plastic
                                            Molding Products</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/products/stamping"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Stamping
                                            Products</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* 4th block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link href="/about"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">About
                                            Us</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/quality"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Quality
                                            Assurance</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/clients"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Clients</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/contact"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Contact</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    {/* Bottom area */}
                    <div className="md:flex md:items-center md:justify-between">

                        {/* Social links */}
                        <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                            <li>
                                <a
                                    href="https://x.com/HashMachinery/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center text-red-600 bg-gray-800 hover:text-gray-100 hover:bg-red-600 rounded-full transition duration-150 ease-in-out"
                                    aria-label="X.com"
                                >
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g transform="scale(0.65) translate(12.5, 12.5)">
                                            <path
                                                d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li className="ml-4">
                                <a
                                    href="https://www.linkedin.com/company/hash-machinery-systems/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center text-red-600 bg-gray-800 hover:text-gray-100 hover:bg-red-600 rounded-full transition duration-150 ease-in-out"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="ml-4">
                                <a
                                    href="https://www.instagram.com/hashmachinery/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center text-red-600 bg-gray-800 hover:text-gray-100 hover:bg-red-600 rounded-full transition duration-150 ease-in-out"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20.145" cy="11.892" r="1"/>
                                        <path
                                            d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"/>
                                        <path
                                            d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="ml-4">
                                <a
                                    href="https://www.facebook.com/profile.php?id=61574711231939"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center text-red-600 bg-gray-800 hover:text-gray-100 hover:bg-red-600 rounded-full transition duration-150 ease-in-out"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="ml-4">
                                <a
                                    href="https://www.youtube.com/c/Hashmachinery"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center text-red-600 bg-gray-800 hover:text-gray-100 hover:bg-red-600 rounded-full transition duration-150 ease-in-out"
                                    aria-label="YouTube"
                                >
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g transform="scale(0.73) translate(9.9, 9.9)">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </ul>

                        {/* Copyrights note */}
                        <div className="text-gray-400 text-sm mr-4">&copy; hashmachinery.com. All rights reserved.</div>

                    </div>

                </div>
            </div>
        </footer>
    )
}
