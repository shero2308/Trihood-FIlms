//components
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Parallax from "@/components/Parallax";
import Social_links from "@/components/Social_links";

import Image from "next/image";
import * as motion from "motion/react-client"

//images
import about from "@/assets/about.jpg";

export default function Services() {
    const imageStyle = {
        borderRadius: '5%',
        border: '1px solid black',
        boxShadow: '0 0 20px black',
        margin: '10px',
      };

    const transition = {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }

    return ( 
        <div>
            <Social_links />
            <Navbar />
            <div className="flex items-center flex-col pt-20">
                <h1 className="font-kanit text-xl lg:text-5xl mt-14">
                    Services
                </h1>
            </div>
            <div className=" flex flex-col-reverse lg:flex-row items-center justify-center gap-10 pt-16 px-6 md:px-16 lg:px-40">
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 1 }}
                    transition={{ transition}}
                    className="flex flex-col w-1/2">               
                    <h1 
                        className="font-bree-serif lg:text-5xl sm:4xl">
                        #1. Video Production
                    </h1>
                    <p className="font-scope-one mt-6">
                        {lorem}
                    </p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 1 }}
                    transition={{ transition}}
                className="flex flex-col w-1/2">               
                <Image src={about} alt="about" height={1000} width={1200} style={imageStyle}/>
                </motion.div>
            </div>
            <div className=" flex flex-col-reverse lg:flex-row items-center justify-center gap-10 pt-16 px-6 md:px-16 lg:px-40">
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 1 }}
                    transition={{ transition}}
                    className="flex flex-col w-1/2">               
                    <h1 
                        className="font-bree-serif lg:text-5xl sm:4xl">
                        #1. Video Production
                    </h1>
                    <p className="font-scope-one mt-6">
                        {lorem}
                    </p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 1 }}
                    transition={{ transition}}
                className="flex flex-col w-1/2">               
                <Image src={about} alt="about" height={800} width={1100} style={imageStyle}/>
                </motion.div>
            </div>
   
   
            <div className="pt-40"><Parallax /></div>
            <Footer/>
        </div>
    );
}   

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget felis fermentum aliquet"