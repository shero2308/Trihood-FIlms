import Navbar from "@/components/Navbar";
import Parallax from "@/components/Parallax";
import Social_links from "@/components/Social_links";
import Footer from "@/components/Footer";
import Image from "next/image";
import * as motion from "motion/react-client"


// image
import about from "@/assets/about.jpg";
import { WidthFull } from "@mui/icons-material";

export default function About() {

    const imageStyle = {
        borderRadius: '5%',
        border: '1px solid black',
        boxShadow: '0 0 20px black',
        margin: '10px',
      };

    return ( 
        <div>
            <Social_links />
            <Navbar />
            <div className="flex items-center flex-col p-4 pt-20">
                <h1 className="font-kanit text-5xl">ABOUT</h1> 
                <h1 className="font-bree-serif text-2xl">Trihood Films Pvt. Ltd.</h1> 
            </div>
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{opacity:1, scale: 1 }}
            transition={{   duration: 0.8,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]}}
                            > 
            <div className="flex items-center flex-col p-4">
                <Image src={about} alt="about" height={800} width={1100} style={imageStyle}/>
            |</div>
            </motion.div>
            <div className="pt-25"><Parallax /></div>
            <Footer />
        </div>
    );
}   