import Navbar from "@/components/Navbar";
import Parallax from "@/components/Parallax";
import Social_links from "@/components/Social_links";
import Footer from "@/components/Footer";


export default function About() {
    return ( 
        <div>
            <Social_links />
            <Navbar />
            <div>
                <h1>About</h1>  
                
            </div>
            <Parallax />
            <Footer />
        </div>
    );
}   