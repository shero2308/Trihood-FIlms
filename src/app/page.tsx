
//components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";

// Images
import AboutSection from "@/components/AboutSection";

export default function Home() {

  return (
    <div>
      <Preloader />
      <Navbar />
      <Hero />
      <AboutSection />
        <Footer />
      </div>
  );
}
