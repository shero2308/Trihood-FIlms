//components
import Navbar from "@/components/Navbar";
import Social_links from "@/components/Social_links";
import Parallax from "@/components/Parallax";
import Footer from "@/components/Footer";


export default function Contact() {
    return ( 
        <div>
            <Social_links />
            <Navbar />
            <div className="flex items-center flex-col pt-20">
                <h1 className="font-kanit text-xl lg:text-5xl mt-14">
                    Contact Us
                </h1>
            </div>
            <div className="pt-20">
                <Parallax />
                <Footer/>
            </div>
        </div>
    );
}   