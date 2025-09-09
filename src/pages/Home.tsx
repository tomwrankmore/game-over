import About from "@/components/landing-page-sections/About";
import GlobalVoices from "@/components/landing-page-sections/GlobalVoices";
import Hero from "@/components/landing-page-sections/Hero";
import MakeItHappen from "@/components/landing-page-sections/MakeItHappen";
import OurDemand from "@/components/landing-page-sections/OurDemand";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurDemand />
      <GlobalVoices />
      <MakeItHappen />
      <About />
    </div>
  );
};

export default Home;
