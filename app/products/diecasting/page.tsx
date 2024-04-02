import Image from "next/image";

export const metadata = {
    title: 'Die Casting Products',
    description: 'Die Casting Products page.',
}

import Link from 'next/link'
import FeatImage01 from "@/public/images/products/diecasting_01.jpg";
import FeatImage02 from "@/public/images/products/diecasting_02.jpg";
import FeatImage03 from "@/public/images/products/diecasting_03.jpg";

export default function DieCasting() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <div data-aos="fade-up"
                             className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-orange-600 bg-orange-200 rounded-full mb-4">Products
                        </div>
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h1 className="h1 mb-4" data-aos="fade-up" data-aos-delay="200">Die Casting</h1>
                            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="400">At Hash
                                Machinery Systems (HMS), we are proud to offer a wide range of die casting products that
                                cater to industries such as telecommunications, automobile, and home appliances. Our
                                extensive experience, combined with a dedication to precision, reliability, and
                                innovation, ensures our products meet the highest standards. Trusted by industry leaders
                                like Nokia, Nortel, Andrew, and Bosch, our die casting solutions embody quality and
                                excellence.</p>
                        </div>
                    </div>
                    <div>
                        {/* Items */}
                        <div className="grid gap-20">

                            {/* 1st item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div
                                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                    data-aos="fade-up" data-aos-delay="600">
                                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01}
                                           width={540}
                                           height={405} alt="Advanced Integration"/>
                                </div>
                                {/* Content */}
                                <div
                                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                    data-aos="fade-right" data-aos-delay="600">
                                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                        <div
                                            className="font-architects-daughter text-xl text-red-600 mb-2">Precision
                                        </div>
                                        <h3 className="h3 mb-3">High Component Accuracy</h3>
                                        <p className="text-xl text-gray-400 mb-4">Precision engineering for components
                                            that require micron-level accuracy, enhancing product reliability and
                                            performance.</p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Micron-level Precision</span>
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Complex Capabilities</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Consistent Quality</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* 2nd item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div
                                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                                    data-aos="fade-up">
                                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02}
                                           width={540}
                                           height={405} alt="Features 02"/>
                                </div>
                                {/* Content */}
                                <div
                                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                    data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                        <div
                                            className="font-architects-daughter text-xl text-red-600 mb-2">Durability
                                        </div>
                                        <h3 className="h3 mb-3">Engineered for Longevity</h3>
                                        <p className="text-xl text-gray-400 mb-4">Our die-cast products are designed to
                                            withstand the rigors of use, offering enhanced durability and wear
                                            resistance for long-lasting performance.
                                        </p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>High-Strength Materials</span>
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Superior Wear Resistance</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Long-Lasting Performance</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* 3rd item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div
                                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                    data-aos="fade-up">
                                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03}
                                           width={540}
                                           height={405} alt="Advanced Integration"/>
                                </div>
                                {/* Content */}
                                <div
                                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                    data-aos="fade-right">
                                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                        <div
                                            className="font-architects-daughter text-xl text-red-600 mb-2">Innovation
                                        </div>
                                        <h3 className="h3 mb-3">Advanced Design Solution</h3>
                                        <p className="text-xl text-gray-400 mb-4">We continuously innovate to provide
                                            cutting-edge solutions, utilizing advanced materials and design techniques
                                            for optimal functionality and efficiency.</p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Innovative Materials</span>
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Customizable Designs</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Efficient Production</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
