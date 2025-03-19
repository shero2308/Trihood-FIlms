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
import Twitter from "@/assets/twitter.png";
import LinkedIn  from "@/assets/linkedin.png";
import Printerest from "@/assets/pinterest.png";

import Image from "next/image";
import * as motion from "motion/react-client"


export default function Publishing_platform() {
    return ( 
        <div>
            <Social_links />
            <Navbar />
            <div className="flex items-center flex-col pt-20">
            <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{opacity:1, scale: 1 }}
                    transition={{ duration: 0.8,
                                  delay: 0.2,
                                  ease: [0, 0.71, 0.2, 1.01]}}>
                <Image src={Publish} alt="publishing" height={800} width={400} className="rounded-lg"/>
            </motion.div>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{opacity:1, scale: 1 }}
                    transition={{ duration: 0.8,
                                  delay: 0.4,
                                  ease: [0, 0.71, 0.2, 1.01]}}
                    className="font-kanit text-4xl lg:text-5xl mt-14">
                    Publishing Platforms
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{opacity:1, scale: 1 }}
                    transition={{ duration: 0.8,
                                  delay: 0.8,
                                  ease: [0, 0.71, 0.2, 1.01]}} 
                    className="font-kanit italic text-xl lg:text-2xl px-10 text-center mt-3">
                    Regional TV Channels, Movie Theater & Targeted Social Media Platform where we publish
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{opacity:1, scale: 1 }}
                    transition={{ duration: 0.8,
                                  delay: 1.0,
                                  ease: [0, 0.71, 0.2, 1.01]}} 
                    className="flex items-baseline gap-10 px-4 md:px-10 lg:px-20 mt-10">
                    <Image src={Youtube} alt="youtube" height={130} width={130} className="rounded-lg transition delay-150
                     duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"/>
                    <Image src={Facebook} alt="facebook" height={130} width={130} className="rounded-lg transition delay-150
                     duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"/>
                    <Image src={Instagram} alt="instagram" height={130} width={130} className="rounded-lg transition delay-150
                     duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"/>
                    <Image src={LinkedIn} alt="linkedin" height={130} width={130} className="rounded-lg transition delay-150
                     duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"/>
                     <Image src={Twitter} alt="twitter" height={50} width={40} className="rounded-lg transition delay-150
                     duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"/>
                    <Image src={Printerest} alt="printrest" height={130} width={40} className="rounded-lg transition delay-150 
                     duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"/>
                </motion.div>
            </div>
                <div className="pt-40">
                  <Parallax />
                  <Footer/> 
                </div>
        </div>
    );
}   