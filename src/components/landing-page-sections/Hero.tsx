// import VideoSwiper from '../VideoSwiper';
import { Button } from '../ui/button';
import HeroGun from '/Gun_Headline.png';
// import heroImg from '/gun.png';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player/youtube';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-full w-full overflow-hidden bg-boycott-red py-24">
      <img
        src={HeroGun}
        alt=""
        className="max-w-[200px] w-full sm:max-w-sm mx-auto my-4"
      />
      <a
        href="https://linktr.ee/game.over.israel"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline my-12 block text-center"
      >
        <Button
          size="lg"
          variant="outline"
          className="text-boycott-black uppercase font-bold bg-boycott-light hover:underline cursor-pointer rounded-full py-4 mx-auto"
        >
          {t('heroTitle')}
        </Button>
      </a>
      {/* <div className="text-center">
        <a
          href="https://linktr.ee/game.over.israel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <Button
            size="lg"
            variant="outline"
            className="text-boycott-black uppercase font-bold bg-boycott-light hover:underline cursor-pointer rounded-full py-4 mx-auto"
          >
            {t('heroTitle')}
          </Button>
        </a>
      </div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ucm5lhFB7Ps"
        playing
        loop
        width="100%"
        height="100%"
        className="absolute top-0 left-0 object-cover"
      /> */}
      {/* <img
        src={heroImg}
        alt="Hero"
        className="absolute right-10 bottom-[-5px] left-0 w-full max-w-sm sm:max-w-[50vw] md:max-w-[45vw] object-contain opacity-100"
        style={{ zIndex: 10 }}
      /> */}
      {/* <h1 className="mx-auto text-4xl lg:text-5xl uppercase font-bold mb-4 w-fit z-10 block text-boycott-light">
        <a
          href="https://linktr.ee/game.over.israel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {t('heroTitle')}
        </a>
      </h1> */}
      {/* <VideoSwiper /> */}
      <div className="relative w-full flex items-center justify-center ">
        {/* Video */}
        <div className="relative w-full max-w-4xl aspect-video">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ucm5lhFB7Ps"
            playing
            loop
            controls={false}
            width="100%"
            height="100%"
            className="rounded-2xl overflow-hidden shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
