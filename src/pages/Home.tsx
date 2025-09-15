import Divider from '@/components/Divider';
import About from '@/components/landing-page-sections/About';
import CallToAction from '@/components/landing-page-sections/CallToAction';
import Hero from '@/components/landing-page-sections/Hero';
import NoMoreWaiting from '@/components/landing-page-sections/NoMoreWaiting';
import OurDemand from '@/components/landing-page-sections/OurDemand';
import TheWhy from '@/components/landing-page-sections/TheWhy';

const Home = () => {
  return (
    <>
      <Hero />
      <Divider />
      <OurDemand />
      <Divider />
      <CallToAction />
      <Divider />
      <TheWhy />
      <Divider />
      <NoMoreWaiting />
      <Divider />
      <About />
    </>
  );
};

export default Home;
