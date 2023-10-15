export const metadata = {
    title: 'Reset Password - Open PRO',
    description: 'Page description',
}

import Link from 'next/link';
import Head from 'next/head';

export default function Products() {

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1 mb-4">Products</h1>
                        <p className="text-xl text-gray-400">With our advanced manufacturing technology, we produce wide
                            range of products to our
                            customers all over the world. Industries we served includes:
                            Telecom Industry
                            Automobile Industry
                            Medical Incustry
                            Home Appliances Incustry
                            Military, Aerospace Insustry</p>
                    </div>

                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <div
                            className="max-w-xs mx-auto sm:max-w-none sm:flex sm:flex-col sm:items-center space-y-4 sm:space-y-6">
                            <div data-aos="fade-up" data-aos-delay="400">
                                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                                   href="products/diecasting">Die Casting Products</a>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="400">
                                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                                   href="products/machining">Machining Products</a>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="400">
                                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                                   href="products/molding">Plastic Molding Products</a>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="400">
                                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                                   href="products/stamping">Stamping Products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
