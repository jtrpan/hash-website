export default function Features() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Services</h2>
                        <p className="text-xl text-gray-400">We excel in diverse manufacturing services tailored for
                            industry leaders. From expert assembly to precision parts production, each process ensures
                            unparalleled quality and efficiency. Dive in and explore our comprehensive core offerings to
                            meet your demands.</p>
                    </div>

                    {/* Items */}
                    <div
                        className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
                        data-aos-id-blocks>

                        {/* 1st item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up"
                             data-aos-anchor="[data-aos-id-blocks]">
                            {/*<svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*    <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>*/}
                            {/*    <path className="stroke-current text-purple-100"*/}
                            {/*          d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"*/}
                            {/*          strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd"/>*/}
                            {/*    <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9"*/}
                            {/*          strokeLinecap="square" strokeWidth="2"/>*/}
                            {/*</svg>*/}
                            <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                                <img className="w-12 h-12" src="/images/icons/assembly.png"
                                     alt="Assembly Services Icon"/>
                            </div>
                            <h4 className="h4 mb-2">Product Assembly</h4>
                            <p className="text-lg text-gray-400 text-center">Expert assembly services tailorable to your
                                needs. Combining precision, efficiency, and reliability to deliver top-tier finished
                                products every time.</p>
                        </div>

                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="150"
                             data-aos-anchor="[data-aos-id-blocks]">
                            {/*<svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*    <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>*/}
                            {/*    <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none"*/}
                            {/*       fillRule="evenodd">*/}
                            {/*        <path className="stroke-current text-purple-300"*/}
                            {/*              d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"/>*/}
                            {/*        <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3"/>*/}
                            {/*        <path className="stroke-current text-purple-100"*/}
                            {/*              d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"/>*/}
                            {/*    </g>*/}
                            {/*</svg>*/}
                            <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                                <img className="w-12 h-12" src="/images/icons/stamping.png"
                                     alt="Stamping Icon"/>
                            </div>
                            <h4 className="h4 mb-2">Stamping</h4>
                            <p className="text-lg text-gray-400 text-center">Crafting with precision, our stamping
                                processes shape metals to exact specifications, guaranteeing durability and fit.</p>
                        </div>

                        {/* 3rd item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300"
                             data-aos-anchor="[data-aos-id-blocks]">
                            {/*<svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*    <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>*/}
                            {/*    <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none"*/}
                            {/*       fillRule="evenodd">*/}
                            {/*        <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5"*/}
                            {/*                 ry="11"/>*/}
                            {/*        <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22"/>*/}
                            {/*        <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11"/>*/}
                            {/*    </g>*/}
                            {/*</svg>*/}

                            <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                                <img className="w-12 h-12" src="/images/icons/machining.png"
                                     alt="Machining Icon"/>
                            </div>
                            <h4 className="h4 mb-2">Machining</h4>
                            <p className="text-lg text-gray-400 text-center">Mastering machining manufacturing, we craft
                                precision components with utmost accuracy. Experience top-tier quality and detailed
                                finishes in every product.</p>
                        </div>

                        {/* 4th item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="450"
                             data-aos-anchor="[data-aos-id-blocks]">
                            {/*<svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*    <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>*/}
                            {/*    <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none"*/}
                            {/*       fillRule="evenodd">*/}
                            {/*        <path className="stroke-current text-purple-100"*/}
                            {/*              d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5"/>*/}
                            {/*        <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3"/>*/}
                            {/*    </g>*/}
                            {/*</svg>*/}
                            <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                                <img className="w-12 h-12" src="/images/icons/injection_mold.png"
                                     alt="Injection Molding Icon"/>
                            </div>
                            <h4 className="h4 mb-2">Plastic Molding</h4>
                            <p className="text-lg text-gray-400 text-center">Transforming designs into tangible
                                products, our injection molding delivers precision and efficiency in every mold.</p>
                        </div>

                        {/* 5th item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="600"
                             data-aos-anchor="[data-aos-id-blocks]">
                            {/*<svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*    <circle className="fill-current text-purple-600" cx="32" cy="32" r="32"/>*/}
                            {/*    <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square"*/}
                            {/*          d="M21 23h22v18H21z" fill="none" fillRule="evenodd"/>*/}
                            {/*    <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5"*/}
                            {/*          strokeWidth="2" strokeLinecap="square"/>*/}
                            {/*</svg>*/}
                            <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                                <img className="w-12 h-12" src="/images/icons/die_casting.png"
                                     alt="Die Casting Icon"/>
                            </div>
                            <h4 className="h4 mb-2">Die Casting</h4>
                            <p className="text-lg text-gray-400 text-center">Specialized in die casting manufacturing,
                                we transform molten metal into precision parts. Achieve superior quality and intricate
                                designs with our advanced casting solutions.</p>
                        </div>

                        {/* 6th item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="750"
                             data-aos-anchor="[data-aos-id-blocks]">
                            {/*<svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*    <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>*/}
                            {/*    <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">*/}
                            {/*        <path className="stroke-current text-purple-100"*/}
                            {/*              d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6"/>*/}
                            {/*        <path className="stroke-current text-purple-300" d="M22 30h4v12h-4z"/>*/}
                            {/*    </g>*/}
                            {/*</svg>*/}
                            <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                                <img className="w-12 h-12" src="/images/icons/production.png"
                                     alt="Parts Production Icon"/>
                            </div>
                            <h4 className="h4 mb-2">Engineering Consultation</h4>
                            <p className="text-lg text-gray-400 text-center">Our engineering consultation and parts
                                production services are the cornerstone of manufacturing excellence across various
                                industries.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
