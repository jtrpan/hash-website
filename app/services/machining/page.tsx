import Image from "next/image";

export const metadata = {
    title: 'Machining Services',
    description: 'Machining Services page.',
}

import Link from 'next/link'
import FeatImage01 from "@/public/images/services/machining_01.jpg";
import FeatImage02 from "@/public/images/services/machining_02.jpg";
import FeatImage03 from "@/public/images/services/machining_03.jpg";

export default function Machining() {
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
                            <h1 className="h1 mb-4" data-aos="fade-up" data-aos-delay="200">Machining</h1>
                            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="400">At Hash
                                Machinery Systems, our mission is to deliver precision machining services with unmatched
                                accuracy and attention to detail. Our cutting-edge facility is equipped with
                                industry-leading equipment, enabling us to achieve a maximum precision of 1 μm. We serve
                                various sectors, including aerospace, automotive, medical, and more, ensuring that every
                                component meets the highest standards of quality and performance.</p>
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
                                            className="font-architects-daughter text-xl text-red-600 mb-2">Accuracy
                                        </div>
                                        <h3 className="h3 mb-3">Precision Engineering</h3>
                                        <p className="text-xl text-gray-400 mb-4">Our state-of-the-art equipment
                                            delivers components with micro-level accuracy, ensuring consistent quality
                                            for even the most complex designs.</p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Sub-micron Precision</span>
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Complex Geometries</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Superior Finish Quality</span>
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
                                            className="font-architects-daughter text-xl text-red-600 mb-2">Speed
                                        </div>
                                        <h3 className="h3 mb-3">Rapid Production Cycle</h3>
                                        <p className="text-xl text-gray-400 mb-4">Our expedited machining processes
                                            ensure swift production and delivery without sacrificing the high-quality
                                            standards you expect.</p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Accelerated Machining Time</span>
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Quick Setup Efficiency</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>On-time Delivery</span>
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
                                        <h3 className="h3 mb-3">Cutting-Edge Techniques</h3>
                                        <p className="text-xl text-gray-400 mb-4">Continuously advancing our methods to
                                            offer the most innovative and efficient machining solutions in the
                                            industry.</p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Advanced Material Use</span>
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Customized Machining Solutions</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Continuous Improvement</span>
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
