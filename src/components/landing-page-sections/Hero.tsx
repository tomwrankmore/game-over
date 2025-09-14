import VideoSwiper from '../VideoSwiper';
import heroImg from '/gun.png';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-full min-h-lvh w-full overflow-hidden bg-boycott-red pt-36 pb-16">
      <img
        src={heroImg}
        alt="Hero"
        className="absolute right-10 bottom-[-5px] left-0 w-full max-w-sm sm:max-w-[50vw] md:max-w-[35vw] object-contain opacity-100"
        style={{ zIndex: 10 }}
      />
      <h1 className="mx-auto text-4xl lg:text-5xl uppercase font-bold mb-4 w-fit z-10 block text-boycott-light">
        <a
          href="https://linktr.ee/game.over.israel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {t('heroTitle')}
        </a>
      </h1>
      <VideoSwiper />
    </div>
  );
};

export default Hero;
