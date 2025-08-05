
//components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

// Images
import AboutSection from "@/components/AboutSection";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
        <Footer />
      </div>
  );
}
