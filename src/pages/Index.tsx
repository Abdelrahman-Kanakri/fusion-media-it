import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen pb-16 lg:pb-0">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <BackToTop />
      <BottomNavigation />
    </div>
  );
};

export default Index;
