import Image from "next/image";

export const metadata = {
    title: 'Die Casting Services',
    description: 'Die Casting Services page.',
}

import Link from 'next/link'
import FeatImage01 from "@/public/images/services/diecasting_01.jpg";
import FeatImage02 from "@/public/images/services/diecasting_02.jpg";
import FeatImage03 from "@/public/images/services/diecasting_03.jpg";

export default function DieCasting() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <div data-aos="fade-up"
                             className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-blue-600 bg-blue-200 rounded-full mb-4">Services
                        </div>
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h1 className="h1 mb-4" data-aos="fade-up" data-aos-delay="200">Die Casting</h1>
                            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="400">At Hash
                                Machinery Systems (HMS), we specialize in
                                delivering high-quality die casting services catering to a broad range of industries
                                including Telecom, Automobile, and Home Appliances. Our commitment to precision,
                                reliability, and innovation places us at the forefront of the industry.</p>
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
                                            className="font-architects-daughter text-xl text-red-600 mb-2">Technology
                                        </div>
                                        <h3 className="h3 mb-3">Advanced Integration</h3>
                                        <p className="text-xl text-gray-400 mb-4">Our die casting services are powered
                                            by state-of-the-art machinery and technology. This includes:</p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>High-Pressure Die Casting Machines</span>
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Precision Mold Making</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Automated Process Control</span>
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
                                            className="font-architects-daughter text-xl text-red-600 mb-2">Quality
                                        </div>
                                        <h3 className="h3 mb-3">Material Expertise</h3>
                                        <p className="text-xl text-gray-400 mb-4">Our material expertise spans a wide
                                            range of metals, including but not limited to:</p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Aluminum Alloys</span>
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Zinc Alloys</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Magnesium Alloys</span>
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
                                            className="font-architects-daughter text-xl text-red-600 mb-2">Certification
                                        </div>
                                        <h3 className="h3 mb-3">Quality Assurance</h3>
                                        <p className="text-xl text-gray-400 mb-4">We are ISO 9001
                                            certified, ensuring that all processes and products meet the highest
                                            international standards. Measures include:</p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>X-Ray Inspection</span>
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>CMM (Coordinate Measuring Machine)</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Surface Finish Analysis</span>
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
