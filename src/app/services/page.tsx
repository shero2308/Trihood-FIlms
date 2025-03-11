//components
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Parallax from "@/components/Parallax";
import Social_links from "@/components/Social_links";

import Image from "next/image";

//images
import about from "@/assets/about.jpg";

export default function Services() {
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
            <div className="flex items-center flex-col pt-20">
                <h1 className="font-kanit text-xl lg:text-5xl">
                    Services
                </h1>
            </div>
            <div className="flex flex-row item center pt-20 px-40">
                <div className="flex flex-col w-1/2">               
                    <h1 className="font-bree-serif text-5xl">
                        #1 Ad Film Makers
                    </h1>
                    <p className="font-scope-one mt-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fuga nulla quo minus?
                         Voluptatem voluptas iste molestias quas ad labore, aliquam sunt adipisci explicabo reiciendis tempora, provident deserunt ut facere!
                    </p>
                </div>
                <div className="flex flex-col w-1/2">               
                <Image src={about} alt="about" height={800} width={1100} style={imageStyle}/>
                </div>
            </div>
            <div className="flex flex-row item center pt-20 px-40">
            <div className="flex flex-col w-1/2">               
                <Image src={about} alt="about" height={800} width={1100} style={imageStyle}/>
                </div>
                <div className="flex flex-col w-1/2 px-10">               
                    <h1 className="font-bree-serif text-5xl">
                        #1 Ad Film Makers
                    </h1>
                    <p className="font-scope-one mt-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fuga nulla quo minus?
                         Voluptatem voluptas iste molestias quas ad labore, aliquam sunt adipisci explicabo reiciendis tempora, provident deserunt ut facere!
                    </p>
                </div>
            </div>
            <div className="flex flex-row item center pt-20 px-40">
                <div className="flex flex-col w-1/2">               
                    <h1 className="font-bree-serif text-5xl">
                        #1 Ad Film Makers
                    </h1>
                    <p className="font-scope-one mt-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fuga nulla quo minus?
                         Voluptatem voluptas iste molestias quas ad labore, aliquam sunt adipisci explicabo reiciendis tempora, provident deserunt ut facere!
                    </p>
                </div>
                <div className="flex flex-col w-1/2">               
                <Image src={about} alt="about" height={800} width={1100} style={imageStyle}/>
                </div>
            </div>
            <div className="flex flex-row item center pt-20 px-40">
            <div className="flex flex-col w-1/2">               
                <Image src={about} alt="about" height={800} width={1100} style={imageStyle}/>
                </div>
                <div className="flex flex-col w-1/2 px-10">               
                    <h1 className="font-bree-serif text-5xl">
                        #1 Ad Film Makers
                    </h1>
                    <p className="font-scope-one mt-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fuga nulla quo minus?
                         Voluptatem voluptas iste molestias quas ad labore, aliquam sunt adipisci explicabo reiciendis tempora, provident deserunt ut facere!
                    </p>
                </div>
            </div>
            <div className="flex flex-row item center pt-20 px-40">
                <div className="flex flex-col w-1/2">               
                    <h1 className="font-bree-serif text-5xl">
                        #1 Ad Film Makers
                    </h1>
                    <p className="font-scope-one mt-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fuga nulla quo minus?
                         Voluptatem voluptas iste molestias quas ad labore, aliquam sunt adipisci explicabo reiciendis tempora, provident deserunt ut facere!
                    </p>
                </div>
                <div className="flex flex-col w-1/2">               
                <Image src={about} alt="about" height={800} width={1100} style={imageStyle}/>
                </div>
            </div>
            <div className="pt-20"><Parallax /></div>
            <Footer/>
        </div>
    );
}   