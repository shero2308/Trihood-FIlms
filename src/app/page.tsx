
//components
import Navbar from "@/components/Navbar";
import Social_links from "@/components/Social_links";
import Parallax from "@/components/Parallax";
import Footer from "@/components/Footer";
import Mulltilayer_parallax from "@/components/Multilayer_parallax";

import Image from "next/image";
import * as motion from "motion/react-client"
import { Button } from "@mui/material";
import Link from "next/link";
import TelegramIcon from '@mui/icons-material/Telegram';

// Images
import scripted_content from "@/assets/scripted_content.png";
import cenemetic from "@/assets/cenemetic.png";
import target_audience from "@/assets/target_audience.png";
import homepic from "@/assets/homepic.png";

export default function Home() {
  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }
  return (
    <div>
      <Social_links />
      <Navbar />
      <Mulltilayer_parallax />  
      <div className="flex justify-center items-center md:flex-row flex-col">  
      <div className="flex justify-center items-center w-1/2 md:pt-10 lg:pt-20">
      <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ transition}}>
        <Image src={homepic} alt="Home Picture" width={700} height={500} className=""/>
        </motion.div>
      </div>

      <div className="flex justify-center w-1/2 md:pt-20">
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ transition}}>
          <p className="font-kanit text-4xl">Digital Transformation Catalyst</p>
          <p className="font-scope_one text-2xl italic text-gray-700 mt-4">&quot;The Most Powerful element in advertising is the truth! — Bill Bernbach&quot;</p>
          <p className="font-kanit text-xl text-gray-700 mt-6">Ad Film Makers & Digital Marketing Partner.</p>
          <p className="font-kanit text-xl text-gray-700">Video Stories & Website Development for your Brand.</p>
          <div className="flex mt-6">
            <Link href="/contact"><Button variant="outlined" size="large">Get in touch <TelegramIcon/> </Button></Link>
          </div>
        </motion.div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center px-10 sm:px-10 lg:px-16 py-4 sm:py-8 lg:py-12">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, x: 1 }}  
        transition={{ duration: 0.8,
                      delay: 0.2,
                      ease: [0, 0.71, 0.2, 1.01]}}
                      className="max-w-7xl text-center sm:text-left">
          <h1 className="font-kanit text-2xl sm:text-3xl lg:text-4xl">Creative Video Production Company</h1>
          <p className="font-bree_serif italic text-sm sm:text-base lg:text-lg text-gray-700 mt-5 leading-relaxed text-justify">
          In the current competitive world, it is believed that videos are more effective than text or speech or combined both. 
          By recognizing the growth potential of a corporate video advertisement, many companies look for better corporate video production 
          companies that can fulfill their marketing needs. Pixerio being one of the leading corporate video production company in Bangalore understand
           its client needs and therefore we offer a wide range of promotional video production services including marketing video production services,
            business video production services, event video production services to name a few. As a professional video production service provider,
             we have a team of expert video makers who are capable of bringing magic on screens by creating top-quality corporate videos.
          </p>
      </motion.div>
    </div>
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{opacity:1, scale: 1 }}
        transition={{ duration: 0.8,
                      delay: 0.2,
                      ease: [0, 0.71, 0.2, 1.01]}}
                      >
    <div className="flex flex-col sm:flex-row justify-center items-center px-6 sm:px-12 lg:px-20 py-6 sm:py-10 lg:py-14 gap-8 sm:gap-12">
      <div className="flex flex-col justify-center items-center w-full sm:w-1/3 text-center transition delay-150
                       duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <Image src={scripted_content} alt="Scripted Content" width={300} height={70} className="mb-4"/>
        <h3 className="font-kanit text-2xl">Scripted Content</h3>
        <p className="font-bree-serif italic mt-4 text-gray-600 leading-relaxed px-4 sm:px-0">
          Catering a script brings out high amount of user engagement, portaiting your services and products 
          hence increasing sales leads and popularising your brand via Commercial Ad Film Making.
          </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full sm:w-1/3 text-center transition delay-150
                       duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <Image src={target_audience} alt="Scripted Content" width={300} height={70} className="mb-4"/>
        <h3 className="font-kanit text-2xl">Targeted Audience</h3>
        <p className="font-bree-serif italic mt-4 text-gray-600 leading-relaxed px-4 sm:px-0">
          Social media today is a great tool to grow your business and get potential reach. We have target sets
          which deliver&apos;s your Commercial Ad Video content only to people who needs your service.
          </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full sm:w-1/3 text-center transition delay-150
                     duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <Image src={cenemetic} alt="Scripted Content" width={300} height={70} className="mb-4"/>
        <h3 className="font-kanit text-2xl">Cinematic Essence</h3>
        <p className="font-bree-serif italic mt-4 text-gray-600 px-4 sm:px-0">
          Ad Film Video with great Cinematic shots, binds viewers with your brand&apos;s video story. Drone, 4k Camera
           is used to create a Motion Graphic Content. Ad Film Videos in Ranchi to Create Engaging Content.
           </p>
      </div>
    </div>
    </motion.div>
    <div className="pt-20">
      <Parallax />
      <Footer/>
    </div>
    </div>
  );
}
