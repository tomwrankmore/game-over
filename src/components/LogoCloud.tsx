import ADC from '/partner-logos/ADC.png';
import CodePink from '/partner-logos/CodePink.png';
import GazaTribunal from '/partner-logos/GazaTribunal-Logo-black.png';
import HW4P from '/partner-logos/HW4P-trns.png';
import HindRajabFoundation from '/partner-logos/THRF_Logo_Black.png';
// import Progressive from '/partner-logos/progressive-international.png';
import t4p from '/partner-logos/t4p-full.png';

const LogoCloud = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-8 py-12">
      <a href="https://www.adc.org/" target="_blank" rel="noopener noreferrer">
        <img
          src={ADC}
          alt="American-Arab Anti-Discrimination Committee"
          className="h-8 md:h-12"
        />
      </a>
      <a
        href="https://www.codepink.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={CodePink} alt="Gaza Tribunal" className="h-8 md:h-12" />
      </a>
      <a
        href="https://techforpalestine.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={t4p} alt="Tech for Palestine" className="h-8 md:h-12" />
      </a>
      <a
        href="https://gazatribunal.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GazaTribunal} alt="Gaza Tribunal" className="h-8 md:h-12" />
      </a>
      <a
        href="https://hindrajabfoundation.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={HindRajabFoundation}
          alt="Hind Rajab Foundation"
          className="h-8 md:h-12"
        />
      </a>
      <a
        href="https://www.healthworkers4palestine.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={HW4P}
          alt="Health workers for Palestine"
          className="h-8 md:h-12"
        />
      </a>
      {/* <img
        src={Progressive}
        alt="Progressive International"
        className="h-8 md:h-12"
      /> */}
    </div>
  );
};

export default LogoCloud;
