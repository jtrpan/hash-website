export const metadata = {
    title: 'Clients',
    description: 'Clients page.',
}

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import {StaticImageData} from 'next/image';

import logo01 from '@/public/images/logos/logo01.png'
import logo02 from '@/public/images/logos/logo02.png'
import logo03 from '@/public/images/logos/logo03.png'
import logo04 from '@/public/images/logos/logo04.png'
import logo05 from '@/public/images/logos/logo05.png'
import logo06 from '@/public/images/logos/logo06.png'
import logo07 from '@/public/images/logos/logo07.png'
import logo08 from '@/public/images/logos/logo08.png'
import logo09 from '@/public/images/logos/logo09.png'
import logo10 from '@/public/images/logos/logo10.png'
import logo11 from '@/public/images/logos/logo11.png'
import logo12 from '@/public/images/logos/logo12.png'
import logo13 from '@/public/images/logos/logo13.png'
import logo14 from '@/public/images/logos/logo14.png'
import logo15 from '@/public/images/logos/logo15.png'
import logo16 from '@/public/images/logos/logo16.png'
import logo17 from '@/public/images/logos/logo17.png'
import logo18 from '@/public/images/logos/logo18.png'
import logo19 from '@/public/images/logos/logo19.png'
import logo20 from '@/public/images/logos/logo20.png'
import logo21 from '@/public/images/logos/logo21.png'

type LogoType = {
    src: StaticImageData;
    alt: string;
};

const fLogos = [
    {src: logo07, alt: "Tesla, Inc."},
    {src: logo02, alt: "Sensata Technologies"},
    {src: logo12, alt: "General Electric"},
    {src: logo21, alt: "Volvo Cars"},
];

const logos = [
    {src: logo01, alt: "Company Logo 1"},
    // {src: logo02, alt: "Company Logo 2"},
    {src: logo03, alt: "Company Logo 3"},
    {src: logo04, alt: "Company Logo 4"},
    {src: logo05, alt: "Company Logo 5"},
    {src: logo06, alt: "Company Logo 6"},
    // {src: logo07, alt: "Company Logo 7"},
    {src: logo08, alt: "Company Logo 8"},
    {src: logo09, alt: "Company Logo 9"},
    {src: logo10, alt: "Company Logo 10"},
    {src: logo11, alt: "Company Logo 11"},
    // {src: logo12, alt: "Company Logo 12"},
    {src: logo13, alt: "Company Logo 13"},
    {src: logo14, alt: "Company Logo 14"},
    {src: logo15, alt: "Company Logo 15"},
    {src: logo16, alt: "Company Logo 16"},
    {src: logo17, alt: "Company Logo 17"},
    {src: logo18, alt: "Company Logo 18"},
    // {src: logo19, alt: "Company Logo 19"},
    // {src: logo20, alt: "Company Logo 20"},
    // {src: logo21, alt: "Company Logo 21"},
];

// Filter out any featured logo srcs
const logoSet = new Set(fLogos.map(logo => logo.src));
const shuffledLogos = shuffleArray(logos.filter(logo => !logoSet.has(logo.src))).slice(0, 12); // Adjust count if needed


function shuffleArray(array: LogoType[]) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}


export default function Clients() {
    // const shuffledLogos = shuffleArray(logos).slice(0, 16);
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1 mb-4" data-aos="fade-up">Clients</h1>
                        <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Experience speaks
                            volumes. As trusted partners to industry giants, our commitment to quality resonates. See
                            for yourself the esteemed brands that trust in Hash Machinery Systems.</p>
                    </div>
                    {/* Logo Cluster */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center">
                        {fLogos.map((logo, index) => (
                            <div
                                key={`featured-${index}`}
                                className="logo large flex justify-center items-center"
                            >
                                <Image src={logo.src} alt={logo.alt} />
                            </div>
                        ))}
                    </div>

                    {/* Shuffled Logos */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
                        {shuffledLogos.map((logo, index) => (
                            <div
                                key={`shuffled-${index}`}
                                className="flex justify-center items-center p-4"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-auto w-auto max-h-24 max-w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
