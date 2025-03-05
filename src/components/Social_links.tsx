
import React from 'react';
import Link from 'next/link';

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Social_links() { 
    return ( 
        <div>
            <div className='flex justify-end items-end py-1 gap-4 pr-2'>
                <Link href="https://www.instagram.com/">
                    <InstagramIcon sx={{ fontSize: 20 , color:'purple'}}/>
                </Link>
                <Link href="https://www.instagram.com/">
                    <YouTubeIcon sx={{ fontSize: 22 , color:"red"}}/>
                </Link>
                <Link href="https://www.instagram.com/">
                    <FacebookIcon sx={{ fontSize: 22 , color:"blue"}}/>
                </Link>
                <Link href="https://www.instagram.com/">
                    <XIcon sx={{ fontSize: 20 }}/>
                </Link>
                <Link href="https://www.instagram.com/">
                    <LinkedInIcon sx={{ fontSize: 22 , color:"darkblue"}}/>
                </Link>
            </div>
        </div>
    );
}