import React, { useEffect } from 'react'
import Logo from '/src/assets/images/logo.png'
import { initFlowbite } from 'flowbite';
import 'animate.css';

export default function NavbarTop() {

    useEffect(() => {
        initFlowbite();
    }, []);


    return (

        <>
            <nav className="sm:w-[85%] w-[90%] mx-auto navbar sm:rounded-[100px] rounded-[50px] animate__animated animate__backInDown">
                <div className="flex flex-wrap items-center justify-between mx-auto sm:px-[60px] px-[12px] sm:py-2 py-5">
                    <a
                        href="#"
                        className="flex items-center rtl:space-x-reverse"
                    >
                        <img
                            src={Logo}
                            className="sm:h-15 sm:w-30 h-10 w-20"
                            alt="Web Edge"
                        />
                        <span className="sm:text-[25px] text-[17px] font-[800] whitespace-nowrap dark:text-white">
                            Web Edge
                        </span>
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none  dark:text-gray-400 "
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div className="hidden w-full lg:block lg:w-auto py-3" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-[7px] md:mt-0 md:border-0">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-6 text-white bg-[#531ec7] rounded-[100px]"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-6 hover:bg-[#531ec7] text-white bg-[transparent] rounded-[100px]"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                     className="block py-2 px-6 hover:bg-[#531ec7] text-white bg-[transparent] rounded-[100px]"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                   className="block py-2 px-6 hover:bg-[#531ec7] text-white bg-[transparent] rounded-[100px]"
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-6 hover:bg-[#531ec7] text-white bg-[transparent] rounded-[100px]"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
