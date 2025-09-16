// import VideoSwiper from '../VideoSwiper';
import { Button } from '../ui/button';
import HeroGun from '/Gun_Headline.png';
import RedBG from '/textured/Red_BG-min.png';
// import heroImg from '/gun.png';
import { useTranslation } from 'react-i18next';
import { FaMailBulk } from 'react-icons/fa';
import ReactPlayer from 'react-player/youtube';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-full w-full overflow-hidden pt-36 p-4">
      <img
        src={RedBG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <img
        src={HeroGun}
        alt="Your pitch, your choice. Boyctt Israel"
        className="max-w-[200px] w-full sm:max-w-sm mx-auto mb-12"
      />

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
      <a
        href="mailto:Mark.bullingham@thefa.com,mike.mulraney@scottishfa.co.uk,Paul.cooke@fai.ie,g.graviba@figc.it,Pdiallo@fff.fr,gkagkatsis@epo.gr,info@rbfa.be,gabinetepresidencia@rfef.es?subject=Football%20is%20no%20place%20for%20war%20criminals&body=To%20the%20Presidents%20of%20the%20Football%20federations%20of%20Belgium%2C%20England%2C%20France%2C%20Greece%2C%20Ireland%2C%0D%0AItaly%2C%20Norway%2C%20Scotland%20and%20Spain%0D%0A%0D%0ADear%20Presidents%2C%0D%0A%0D%0AWe%20love%20football.%0D%0A%0D%0ATo%20us%20football%20is%20a%20religion%2C%20a%20family%2C%20a%20community.%20Our%20national%20and%20club%20pitches%20are%20sacred%2C%0D%0Aour%20stadium%20seats%20hallowed.%20It%20is%20here%20we%20form%20our%20closest%20bonds%2C%20our%20strongest%20memories%20and%0D%0Afamily%20traditions%20that%20last%20generations.%0D%0A%0D%0AFootball%20isn%27t%20just%20a%20game.%20Football%20is%20life.%0D%0A%0D%0ABut%20today%20our%20pitches%20are%20stained%20with%20blood%2C%20and%20our%20teams%20covered%20in%20shame.%0D%0AIn%20Gaza%2C%20football%20pitches%20are%20turning%20into%20graveyards%2C%20dreams%20of%20football%20are%20being%20wiped%0D%0Aaway.%0D%0A%0D%0AIsrael%20kills%20the%20equivalent%20of%20two%20children%27s%20football%20teams%20every%20single%20day.%20Players%2C%0D%0Afans%2C%20and%20families%20who%20live%20and%20breathe%20the%20game%20are%20being%20bombed%2C%20starved%2C%20and%20displaced.%0D%0AAnd%20you%20do%20nothing.%20Instead%2C%20Israel%20is%20playing%20in%20Europe%2C%20on%20our%20pitches%2C%20in%20our%20stadiums.%0D%0A%0D%0AThis%20gruesome%20show%20must%20stop.%20Where%20do%20we%20look%20when%20their%20national%20anthem%20plays%20in%20the%0D%0Astadium%2C%20knowing%20what%20crimes%20are%20being%20committed%20in%20their%20name%3F%0D%0A%0D%0AEverywhere%2C%20we%20the%20people%20are%20speaking%20out.%20In%20stadiums%20across%20the%20world%20we%20sing%20for%0D%0APalestine%2C%20raise%20flags%2C%20and%20display%20banners%20of%20solidarity%20-%20often%20risking%20punishment%20for%20doing%0D%0Aso.%20Our%20message%20is%20clear%3A%20football%20can%20no%20longer%20turn%20a%20blind%20eye.%0D%0A%0D%0AYou%20acted%20before.%20When%20Russia%20invaded%20Ukraine%2C%20football%20federations%20and%20associations%20across%0D%0AEurope%20boycotted%20the%20Russian%20National%20team%20and%20Russian%20club%20teams%2C%20leading%20to%20their%0D%0Aeventual%20suspension%20from%20the%20sport.%0D%0A%0D%0AThe%20same%20principle%20must%20apply%20here.%20We%20value%20the%20lives%20of%20Palestinian%20children%20equally%20-%20do%0D%0Ayou%3F%0D%0A%0D%0AIf%20your%20Federation%20boycotts%20Israel%27s%20national%20team%2C%20their%20club%20teams%2C%20and%20ban%20their%20players%2C%0D%0AUEFA%20and%20FIFA%20will%20be%20forced%20to%20listen.%20Refuse%20to%20play%20them%20now%20and%20call%20for%20Israel%20to%20be%0D%0Asuspended.%0D%0A%0D%0AThis%20is%20not%20about%20politics%2C%20it%20is%20about%20humanity%2C%20about%20the%20very%20values%20our%20sport%20claims%20to%0D%0Arepresent.%20Are%20you%20with%20us%3F%0D%0A%0D%0ASincerely%2C%0D%0A%0D%0A%5BInsert%20name%5D"
        target="_blank"
        rel="noreferrer"
        className="hover:underline my-12 block text-center"
      >
        <Button
          size="lg"
          variant="outline"
          className="text-boycott-black uppercase font-bold bg-boycott-light hover:underline cursor-pointer rounded-full py-4"
        >
          <FaMailBulk />
          {t('CTA.title')}
        </Button>
      </a>
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
    </div>
  );
};

export default Hero;
