'use client';

import Image from 'next/image';
import logoImage from '/public/images/logo.png';
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs';
import { useEffect, useState } from 'react';

import NavBarItem from './NavBarItem';
import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';

const TOP_OFFSET = 66;

const NavBar = () => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const [accountMenuVisible, setAccountMenuVisible] = useState(false);
    const [backgroundVisible, setBackgroundVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setBackgroundVisible(true);
            } else {
                setBackgroundVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="w-full fixed z-40">
            <div
                className={`px-4 md:px-16 py-6 flex items-center transition duration-500 ${
                    backgroundVisible ? 'bg-zinc-900 bg-opacity-90' : ''
                }`}
            >
                <Image
                    className="h-4 lg:h-7 w-auto"
                    src={logoImage}
                    alt="Logo"
                />
                <div className="ml-8 gap-7 hidden lg:flex">
                    <NavBarItem label="Home" />
                    <NavBarItem label="Series" />
                    <NavBarItem label="Films" />
                    <NavBarItem label="New & Popular" />
                    <NavBarItem label="My List" />
                    <NavBarItem label="Browse by languages" />
                </div>
                <div
                    onClick={() => {
                        setMobileMenuVisible((current) => !current);
                    }}
                    className="lg:hidden flex items-center gap-2 ml-8 cursor-pointer relative"
                >
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown
                        className={`text-white transition ${
                            mobileMenuVisible && 'rotate-180'
                        }`}
                    />
                    <MobileMenu visible={mobileMenuVisible} />
                </div>
                <div className="flex items-center ml-auto gap-7">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell />
                    </div>
                    <div
                        onClick={() => {
                            setAccountMenuVisible((current) => !current);
                        }}
                        className="flex items-center gap-2 cursor-pointer relative"
                    >
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <Image
                                width={40}
                                height={40}
                                src="/images/default-slate.png"
                                alt="Profile"
                            />
                        </div>
                        <BsChevronDown
                            className={`text-white transition ${
                                accountMenuVisible && 'rotate-180'
                            }`}
                        />
                        <AccountMenu visible={accountMenuVisible} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
