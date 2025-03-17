"use client";

import Navbar from "@/components/Navbar";
import Social_links from "@/components/Social_links";
import Parallax from "@/components/Parallax";
import Footer from "@/components/Footer";
import VideocamIcon from '@mui/icons-material/Videocam';

const Youtube_link = [
    "https://www.youtube.com/embed/itli8isoXQQ",
    "https://www.youtube.com/embed/7168SXKS0_c?si=Xin7aD2Q4ELjsRxU",
    "https://www.youtube.com/embed/UVeloGznItU?si=RBpZ8z1EDDVp7Att",
    "",
    "",
    "",
    "",
    "",
    "",
];

export default function Portfolio() {
    return ( 
        <div className="w-full">
            <Social_links />
            <Navbar />
            
            {/* Title Section */}
            <div className="flex items-center flex-col pt-20 text-center">
                <h1 className="font-kanit text-xl md:text-3xl lg:text-5xl flex items-center gap-2">
                    Our Video Projects <VideocamIcon fontSize="large" />
                </h1>
                <h2 className="font-kanit text-lg md:text-2xl lg:text-3xl mt-5 italic">
                    Below are some of the latest projects created by Team Trihood Films —
                </h2>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 lg:px-20 mt-10">
                {Youtube_link.map((link, index) => (
                    <div key={index} className="flex justify-center">
                        <iframe 
                            src={link}
                            width="100%" 
                            height="315" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                ))}
            </div>

            {/* Parallax & Footer */}
            <div className="pt-40">
                <Parallax />
                <Footer />
            </div>
        </div>
    );
}
