import ADC from '/partner-logos/ADC.png';
import CodePink from '/partner-logos/CodePink.png';
import GazaTribunal from '/partner-logos/GazaTribunal-Logo-black.png';
import HW4P from '/partner-logos/HW4P-trns.png';
import HindRajabFoundation from '/partner-logos/HindRajabFoundation.jpg';
import Progressive from '/partner-logos/progressive-international.png';
import t4p from '/partner-logos/t4p-full.png';

const LogoCloud = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-8 py-12">
      <img
        src={ADC}
        alt="American-Arab Anti-Discrimination Committee"
        className="h-8 md:h-12"
      />
      <img src={CodePink} alt="Gaza Tribunal" className="h-8 md:h-12" />
      <img src={t4p} alt="Tech for Palestine" className="h-8 md:h-12" />
      <img src={GazaTribunal} alt="Gaza Tribunal" className="h-8 md:h-12" />
      <img
        src={HindRajabFoundation}
        alt="Hind Rajab Foundation"
        className="h-8 md:h-12"
      />
      <img
        src={HW4P}
        alt="Health workers for Palestine"
        className="h-8 md:h-12"
      />
      <img
        src={Progressive}
        alt="Progressive International"
        className="h-8 md:h-12"
      />
      <img src={CodePink} alt="Code Pink" className="h-8 md:h-12" />
    </div>
  );
};

export default LogoCloud;
