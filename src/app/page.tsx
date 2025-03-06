import Navbar from "@/components/Navbar";
import Social_links from "@/components/Social_links";
import Image from "next/image";
import homepic from "@/assets/homepic.png";
import * as motion from "motion/react-client"
import { Button } from "@mui/material";
import Link from "next/link";
import TelegramIcon from '@mui/icons-material/Telegram';

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
      <div className="flex justify-center items-center">  
      <div className="flex justify-center items-center w-1/2 pt-20">
      <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ transition}}>
        <Image src={homepic} alt="Home Picture" width={700} height={500} />
        </motion.div>
      </div>

      <div className="flex justify-center w-1/2">
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ transition}}>
          <p className="font-kanit text-4xl">Digital Transformation Catalyst</p>
          <p className="font-scope_one text-2xl italic text-gray-700 mt-4">"The Most Powerful element in advertising is the truth! — Bill Bernbach"</p>
          <p className="font-kanit text-xl text-gray-700 mt-6">Ad Film Makers & Digital Marketing Partner.</p>
          <p className="font-kanit text-xl text-gray-700">Video Stories & Website Development for your Brand.</p>
          <div className="flex mt-6">
            <Link href="/contact"><Button variant="outlined" size="large" className="bg-blue-600 text-white">Get in touch <TelegramIcon/> </Button></Link>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
