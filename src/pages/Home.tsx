import Divider from '@/components/Divider';
import About from '@/components/landing-page-sections/About';
// import GlobalVoices from '@/components/landing-page-sections/GlobalVoices';
import Hero from '@/components/landing-page-sections/Hero';
import NoMoreWaiting from '@/components/landing-page-sections/NoMoreWaiting';
// import MakeItHappen from '@/components/landing-page-sections/MakeItHappen';
import OurDemand from '@/components/landing-page-sections/OurDemand';
// import ReachOut from '@/components/landing-page-sections/ReachOut';
import TheWhy from '@/components/landing-page-sections/TheWhy';

const Home = () => {
  return (
    <>
      <Hero />
      <TheWhy />
      <Divider />
      <OurDemand />
      <Divider />
      <NoMoreWaiting />
      {/* 
      <MakeItHappen />
      <Divider />
      <GlobalVoices />
      <Divider />
      <ReachOut /> */}
      <Divider />
      <About />
    </>
  );
};

export default Home;
