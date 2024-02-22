'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MdClose, MdHome, MdMenu } from 'react-icons/md';

function Header() {
    const [navbar, setNavbar] = useState(false);
    const [isVisible, setIsVisible] = useState(false)
    const [header, setHeader] = useState(false)

    const toggleMenu = () => {
        setIsVisible(!isVisible);
    };

    const scrollHeader = () => {
        if (window.scrollY >= 20) {
            setHeader(true)
        }
        else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)
        return () => {
            window.addEventListener('scroll', scrollHeader)
        }
    })

    return (
        <div className="fixed w-full z-50">
            <div className={header ? "hidden" : "flex"}>
                <div className="w-full flex justify-between items-start bg-purple-600 py-4 px-4 md:px-12 h-24">
                    <Link href={'/'}>
                        <Image src={'/logo.png'} alt='' width={100} height={100} />
                    </Link>
                    <div className="text-white text-sm text-end">
                        <p className="font-bold text-xs md:text-sm">Core Agenda & Exhibition: 01 May 2024</p>
                        <p className="text-xs md:text-sm">Exhibition Opening Dates: 01 - 02 May 2024</p>
                        <p className="">Rainbow Towers, Harare</p>
                    </div>
                </div>
            </div>

            <header className="flex justify-between items-center px-4 md:px-12 h-full py-4 md:py-0 md:h-20 bg-purple-200">
                <ul className="hidden md:flex items-center ml-4 justify-center">
                    <div className="">
                        {
                            header ?
                                <Link href={'/'}>
                                    <Image src={'/logo.png'} alt='' width={100} height={100} />
                                </Link> :
                                <Link href="/" className="text-3xl pb-4 md:pb-0 text-purple-500 ">
                                    <MdHome />
                                </Link>
                        }
                    </div>

                    <li className="px-6 text-center mb-4 md:mb-0  ">
                        <Link
                            href="/about"
                            className="hover:border-b-2 hover:border-purple-500 transition-all  pb-2 text-purple-500"
                            onClick={() => setNavbar(!navbar)}
                        >
                            About
                        </Link>
                    </li>
                    <li className="px-6 text-center mb-4 md:mb-0  ">
                        <Link
                            href="/speakers"
                            className="hover:border-b-2 hover:border-purple-500 transition-all  pb-2 text-purple-500"
                            onClick={() => setNavbar(!navbar)}
                        >
                            Speakers
                        </Link>
                    </li>
                    <li className="px-6 text-center mb-4 md:mb-0  ">
                        <Link
                            href="/event"
                            className="hover:border-b-2 hover:border-purple-500 transition-all  pb-2 text-purple-500"
                            onClick={() => setNavbar(!navbar)}
                        >
                            Event
                        </Link>
                    </li>
                    <li className="px-6 text-center mb-4 md:mb-0  ">
                        <Link
                            href="/contact"
                            className="hover:border-b-2 hover:border-purple-500 transition-all pb-2 text-purple-500"
                            onClick={() => setNavbar(!navbar)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>



                <div className={"w-full flex items-center justify-between"}>
                    {
                        header ?
                            <Link href="/" className="text-3xl block md:hidden pb-4 md:pb-0 text-purple-500">
                                <Image src={'/logo.png'} alt='' width={100} height={100}></Image>
                            </Link>
                            :
                            <Link href="/" className="text-3xl pb-4 md:pb-0 text-purple-500 ">
                                <MdHome />
                            </Link>
                    }
                    <div className="flex items-center justify-end md:py-3 md:block">
                        {/* HAMBURGER BUTTON FOR MOBILE */}
                        <div className="md:hidden">
                            <button
                                className="-mt-8 px-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <MdClose className="text-2xl text-purple-500" />
                                ) : (
                                    <MdMenu className="focus:border-none active:border-none text-2xl text-purple-500" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>



                <div
                    className={`flex-1 h-full justify-self-center pb-3 -mt-14 md:block md:pb-0 md:mt-0 ${navbar ? "p-12 md:p-0 block" : "hidden"
                        }`}
                >
                    <div className="flex h-full flex-col mt-8  md:hidden gap-5">

                        <ul
                            className={`flex-1 justify-self-center pb-3 -mt-14 md:block md:pb-0 md:mt-0 ${navbar ? "p-12 md:p-0 block" : "hidden"
                                }`}
                        >
                            <li className="px-6 text-center mb-4 md:mb-0  ">
                                <Link
                                    href="/"
                                    className="hover:border-b-2 hover:border-purple-500 transition-all  pb-2 text-purple-500"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="px-6 text-center mb-4 md:mb-0  ">
                                <Link
                                    href="/about"
                                    className="hover:border-b-2 hover:border-purple-500 transition-all  pb-2 text-purple-500"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="px-6 text-center mb-4 md:mb-0  ">
                                <Link
                                    href="/speakers"
                                    className="hover:border-b-2 hover:border-purple-500 transition-all  pb-2 text-purple-500"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    Speakers
                                </Link>
                            </li>
                            <li className="px-6 text-center mb-4 md:mb-0  ">
                                <Link
                                    href="/event"
                                    className="hover:border-b-2 hover:border-purple-500 transition-all  pb-2 text-purple-500"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    Event
                                </Link>
                            </li>
                            <li className="px-6 text-center mb-4 md:mb-0  ">
                                <Link
                                    href="/contact"
                                    className="hover:border-b-2 hover:border-purple-500 transition-all pb-2 text-purple-500"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        <button
                            onClick={() => setNavbar(!navbar)}
                            className="px-4 py-2 bg-purple-600 text-white rounded-sm hover:scale-95"
                        >
                            <Link href="/register" className="text-sm">
                                Register
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="hidden md:flex gap-5">
                    <Button className="bg-purple-700 hover:bg-purple-400">
                        <Link href="/register" className="text-sm">
                            Register
                        </Link>
                    </Button>
                </div>


            </header>
        </div>
    )
}

export default Header