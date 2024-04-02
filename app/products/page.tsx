export const metadata = {
    title: 'Products',
    description: 'Products page.',
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
                        <h1 className="h1 mb-4" data-aos="fade-up">Products</h1>
                        <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
                            At Hash Machinery Systems (HMS), we utilize advanced manufacturing technology to produce
                            precision-machined products for global clients across industries such as Telecom,
                            Automobile, Medical, Home Appliances, Military, and Aerospace. Our expertise in complex
                            component manufacturing ensures each product meets the highest standards of precision and
                            performance, fulfilling the specific needs of each sector with innovative and reliable
                            solutions.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos="fade-up"
                         data-aos-delay="400">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                            <div className="image-button">
                                <img src="/images/image_buttons/die_casting2.jpg" alt="Die Casting"/>
                                <div className="overlay-text">
                                    <Link href="products/diecasting">Die Casting Products</Link>
                                </div>
                            </div>
                            <div className="image-button">
                                <img src="/images/image_buttons/machining2.jpg" alt="Die Casting"/>
                                <div className="overlay-text">
                                    <Link href="products/machining">Machining Products</Link>
                                </div>
                            </div>
                            <div className="image-button">
                                <img src="/images/image_buttons/plastic_mold2.jpg" alt="Die Casting"/>
                                <div className="overlay-text">
                                    <Link href="products/plastic_molding">Plastic Molding Products</Link>
                                </div>
                            </div>
                            <div className="image-button">
                                <img src="/images/image_buttons/stamping2.jpg" alt="Die Casting"/>
                                <div className="overlay-text">
                                    <Link href="products/stamping">Stamping Products</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
