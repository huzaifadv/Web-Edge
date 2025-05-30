import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="footer sm:py-[70px] px-[20px] py-[20px] sm:mx-[150px] mx-[15px] sm:my-[70px] my-[30px]">
                <div className="max-w-screen-xl mx-auto">
                    <div className="md:flex md:justify-between md:gap-8">
                        <div className="mb-10 md:mb-0 max-w-md">
                            <a href="/" className="flex items-center mb-4">
                                <img
                                    src="/src/assets/images/logo.png"
                                    className="sm:h-15 sm:w-30 h-10 w-20"
                                    alt="Web Edge Logo"
                                />
                                <span className="text-2xl font-bold dark:text-white">Web Edge</span>
                            </a>
                            <p className="text-gray-600 dark:text-gray-400 sm:text-[15px] text-[13px] leading-relaxed">
                              At WebEdge, we design and develop high-performing websites that don’t just look great — they work. From sleek landing pages to full-scale eCommerce stores, we build responsive, user-focused solutions that help your business stand out online.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Menus
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 text-sm">
                                    <li className="mb-3"><a href="#" className="hover:underline">Home</a></li>
                                    <li className="mb-3"><a href="#" className="hover:underline">About</a></li>
                                    <li className="mb-3"><a href="#" className="hover:underline">Services</a></li>
                                    <li><a href="#" className="hover:underline">Portfolio</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Follow Us
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 text-sm">
                                    <li className="mb-3"><a href="#" className="hover:underline">Instagram</a></li>
                                    <li className="mb-3"><a href="#" className="hover:underline">Facebook</a></li>
                                    <li className="mb-3"><a href="#" className="hover:underline">Linkedin</a></li>
                                    <li className="mb-3"><a href="#" className="hover:underline">Discord</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Legal
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 text-sm">
                                    <li className="mb-3"><a href="#" className="hover:underline">Privacy Policy</a></li>
                                    <li className="mb-3"><a href="#" className="hover:underline">Disclaimer</a></li>
                                    <li className="mb-3"><a href="#" className="hover:underline">Terms & Conditions</a></li>
                                    <li className="mb-3"><a href="#" className="hover:underline">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className="my-10 mt-[90px] border-[#80808042]" />

                    <div className="text-center mx-auto">
                        <span className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
                            © 2025 <a href="#" className="hover:underline">Web Edge</a> | Designed by <a className='underline' target='_blank' href="https://devhuzaifa.site/">Huzaifa</a>
                        </span>

                    </div>
                </div>
            </footer>

        </>
    )
}
