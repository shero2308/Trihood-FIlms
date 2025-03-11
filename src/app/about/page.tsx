import Navbar from "@/components/Navbar";
import Parallax from "@/components/Parallax";
import Social_links from "@/components/Social_links";
import Footer from "@/components/Footer";
import Image from "next/image";
import * as motion from "motion/react-client"


// image
import about from "@/assets/about.jpg";

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
            <div className="flex items-center flex-col p-4 pt-20 ">
                <h1 className="font-kanit text-5xl lg:pr-200">About us</h1> 
                <h1 className="font-bree-serif text-2xl lg:pr-200">Trihood Films Pvt. Ltd.</h1> 
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
            <div className="flex items-center flex-col px-5 sm:px-5 lg:px-55 pt-10 font-bree-serif italic text-sm sm:text-sm lg:text-2xl mt-0 lg:mt-3 text-gray-700 text-justify">
                <p>
                Established in 2019 in Delhi, Cybertize Media Productions Pvt. Ltd. is a company built on strong
                 ideals and a clear objective, essential elements for success in today's market. With its outstanding 
                 video production and animated ads, the company has achieved consistent growth and expanded its client 
                 base since its founding.
                </p>
                <p className="mt-10">Rapidly gaining recognition as a trailblazer in video production, Cybertize Media Productions has quickly 
                    become synonymous with cutting-edge offerings that consistently elevate its brand presence. The company 
                    stands out for its team of highly skilled and tech-savvy professionals who spare no effort in creating 
                    luxurious video commercials for corporations, products, or services. Despite leveraging advanced video 
                    production technology, Cybertize Media remains committed to delivering exceptional results.
                </p>
                <p className="mt-10">
                Cybertize Media specializes in a diverse range of content creation, including short video content, ad films,
                 short films, 3D animation videos, 2D animation videos, brand storytelling videos, and corporate videos.
                </p>
            </div>
            <div className="flex items-center flex-col px-5 sm:px-5 lg:px-55">
                <h1 className="font-kanit text-3xl lg:text-5xl py-10">More about the production house</h1>
                <p className="font-bree-serif italic text-sm lg:text-2xl mt-2 lg:mt-10 text-gray-700 text-justify">
                    Employing state-of-the-art technology, Cybertize Media Productions excels in crafting high-quality brand videos and video advertisements.
                    Partnering with Cybertize Media enables you to enhance your marketing and advertising objectives quickly and effectively.
                </p>
                <p className="font-bree-serif italic text-sm lg:text-2xl mt-2 lg:mt-10 text-gray-700 text-justify">
                    Cybertize Media Productions Pvt. Ltd. positions itself with an innovative approach to elevate businesses across various sectors, be it real
                    estate, beauty salons, restaurants, NGOs, travel agencies, or tech startups. This Delhi-based marketing organization is not only adept at
                    creating content for a diverse range of industries but also excels in producing documentaries, biographies, political films, and motivational
                    content. Leveraging its extensive network, the company effectively engages and revitalizes both targeted and non-targeted audiences.
                </p>
                <p className="font-bree-serif italic text-sm lg:text-2xl mt-2 lg:mt-10 text-gray-700 text-justify">
                    Cybertize Media Productions boasts exceptional management and service personnel. By leveraging their expertise, along with compelling video marketing
                    and advertising materials, you can receive valuable guidance from Cybertize Media on efficiently expanding your business. When it comes to video ads,
                    Cybertize is the go-to choice.
                </p>
                <p className="font-bree-serif italic text-sm lg:text-2xl mt-2 lg:mt-10 text-gray-700 text-justify">
                    <p className="font-bold">Cybertize Media Productions was Founded in 2019, currenty providing —</p>
                    Films & Video Production House Service in New Delhi, South Delhi, North Delhi, Nirman vihar, Ghaziabad, Gurugram, Dwarka, Noida, Noida Sector, Connaught Place, Rajiv Chowk. 
                    Saket, Huda City Center, Okhla, Noida City Center, Anand Vihar, Kalkaji, Kashmere Gate and all over Delhi & Delhi NCR.
                </p>
            </div>
            <div className="pt-25"><Parallax /></div>
            <Footer />
        </div>
    );
}   