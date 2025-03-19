//components
import Navbar from "@/components/Navbar";
import Social_links from "@/components/Social_links";
import Parallax from "@/components/Parallax";
import Footer from "@/components/Footer";

//Images
import Publish from "@/assets/publishing.png";
import Youtube from "@/assets/youtube.png";
import Facebook from "@/assets/facebook.png";
import Instagram from "@/assets/instagram.png";

import Image from "next/image";


export default function Publishing_platform() {
    return ( 
        <div>
            <Social_links />
            <Navbar />
            <div className="flex items-center flex-col pt-20">
                <Image src={Publish} alt="publishing" height={800} width={400} className="rounded-lg"/>
                <h1 className="font-kanit text-4xl lg:text-5xl mt-14">
                    Publishing Platforms
                </h1>
                <p className="font-kanit italic text-xl lg:text-2xl px-10 text-center mt-3">
                    Regional TV Channels, Movie Theater & Targeted Social Media Platform where we publish
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 lg:px-20 mt-10">
                    <Image src={Youtube} alt="youtube" height={130} width={130} className="rounded-lg"/>
                    <Image src={Facebook} alt="facebook" height={130} width={130} className="rounded-lg"/>
                    <Image src={Instagram} alt="instagram" height={130} width={130} className="rounded-lg"/>
                </div>
            </div>
                <div className="pt-40">
                  <Parallax />
                  <Footer/> 
                </div>
        </div>
    );
}   