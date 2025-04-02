import Image from 'next/image'

import FeatImage01 from '@/public/images/featured_img01.jpg'
import FeatImage02 from '@/public/images/featured_img02.jpg'

export default function Zigzag() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <div
                            className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Our
                            value to you
                        </div>
                        <h1 className="h2 mb-4">Get to know us</h1>
                        <p className="text-xl text-gray-400">Discover Hash Machinery: With a strong foothold in Suzhou
                            and a dynamic team of engineering professionals, we're dedicated to providing unmatched
                            manufacturing services across diverse industries. Experience quality and innovation with
                            Hash Machinery.</p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">

                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540}
                                       height={405} alt="Features 01"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-red-600 mb-2">Innovation
                                    </div>
                                    <h3 className="h3 mb-3">Engineering Solutions</h3>
                                    <p className="text-xl text-gray-400 mb-4">Our team is equipped with cutting-edge
                                        technology and the expertise to solve complex engineering challenges, ensuring
                                        that every solution is not only effective but also innovative.</p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Tailored Engineering Consultation</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>State-of-the-Art Manufacturing Techniques</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Sustainable Practices</span>
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
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540}
                                       height={405} alt="Features 02"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-left">
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <div className="font-architects-daughter text-xl text-red-600 mb-2">Excellence
                                    </div>
                                    <h3 className="h3 mb-3">Global Supply Chain</h3>
                                    <p className="text-xl text-gray-400 mb-4">Leverage our global network for your
                                        manufacturing needs. We offer unparalleled access to a vast supply chain,
                                        ensuring the
                                        efficient delivery of high-quality components.</p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Streamlined Logistics</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Quality Control</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Customs and Compliance</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
