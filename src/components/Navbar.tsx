"use client" // This is a client-side component

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { link } from "fs";
import { Button } from "@mui/material";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <div>
            <div className='flex justify-evenly items-center p-5'>  
                { /*Logo*/ }
                <div className='font-tangerine text-6xl pl-2'><Link href="/">Trihood Films</Link></div>
                { /*Mobile Menu Icon*/ }

                <div className='md:hidden flex gap-4 justify-center'>
                <Button variant="outlined" size="medium" onClick={() => setIsOpen(!isOpen)}> 
                    {isOpen ? <CloseIcon /> : <MenuIcon /> }
                </Button>
                </div>

                { /*Desktop Nav Links*/ }

                <div className='hidden md:flex pt-20'>
                    <ul className='list-none flex gap-10 font-kanit text-blue-600 pr-2'>
                        {navLinks.map((link) => (
                            <li key={link.href} className="hover:text-black">
                                <Link className={`link ${pathname === link.href ? "text-black":"text-blue-600"}`} href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            { /*Mobile Nav Links */ }
                <div className='md:hidden flex gap-4 justify-center items-center'>
                    {isOpen && (
                        <ul className="flex flex-col gap-20 font-kanit text-blue-600 pt-5 text-3xl">
                            {navLinks.map((link) => (
                                 <li key={link.href} className="hover:text-black">
                                 <Link className={`link ${pathname === link.href ? "text-black":"text-blue-600"}`} href={link.href}>{link.label}</Link>

                             </li>
                            ))}
                        </ul>    
                    )}  
                </div>
        </div>
    );
}

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/publishing-platforms", label: "Publishing Platforms" },
    { href: "/contact", label: "Contact us" },
];