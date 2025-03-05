"use client" // This is a client-side component

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <div>
            <div className='flex justify-between items-center py-2 gap-2 shadow-md bg-white'>  
                { /*Logo*/ }
                <div className='font-tangerine text-6xl pl-2'><Link href="/">Trihood Films</Link></div>

                { /*Desktop Nav Links*/ }

                <div className='hidden md:flex gap-4'>
                    <ul className='list-none flex gap-4 font-kanit text-blue-600 pr-2'>
                        {navLinks.map((link) => (
                            <li key={link.href} className="hover:text-black">
                                <Link className={`link ${pathname === link.href ? "text-black":"text-blue-600"}`} href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                    { /*Mobile Nav Links-----Complete This */ }
                <div className='md:hidden flex gap-4'>
                    <Button onClick={() => setIsOpen(!isOpen)}> 
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </Button>    

                </div>
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