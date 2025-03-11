//components
import Navbar from "@/components/Navbar";
import Social_links from "@/components/Social_links";
import Parallax from "@/components/Parallax";
import Footer from "@/components/Footer";


export default function Publishing_platform() {
    return ( 
        <div>
            <Social_links />
            <Navbar />
                <div className="pt-20">
                  <Parallax />
                  <Footer/>
                </div>
        </div>
    );
}   