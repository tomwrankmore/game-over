// import CTA from '../CTA';
// import PageContainer from '../PageContainer';
// import SectionHeading from '../SectionHeading';
// import SubHeading from '../SubHeading';
// import demandImg from '/ball-grenade.png';
import GreenBG from '/textured/Green_BG-min.png';
import { useTranslation } from 'react-i18next';
import { GoDotFill } from 'react-icons/go';

const OurDemands = () => {
  const { t } = useTranslation();
  const listItems = [
    t('ourDemands.demands.1'),
    t('ourDemands.demands.2'),
    t('ourDemands.demands.3'),
  ];
  return (
    <div className={`relative overflow-hidden`} id="our-demands">
      <img
        src={GreenBG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="mx-auto container py-24 px-6 text-left text-boycott-light">
        <h1 className="text-4xl lg:text-5xl uppercase font-bold mb-6 z-10 block text-left">
          {t('ourDemands.title')}
        </h1>
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-24 text-left justify-start">
          <div>
            <h2 className="relative z-20 text-left text-xl font-light mb-4 lg:mb-8 block max-w-xl lg:max-w-2xl mx-auto">
              {t('ourDemands.text')}
            </h2>
            <ul className="space-y-4 mt-6 list-disc list-inside flex flex-col items-left">
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 group demand-item tracking-wider"
                >
                  <div className="hidden sm:flex flex-shrink-0 w-5 h-5 rounded-full bg-primary items-center justify-center mt-0.5 transition-transform group-hover:scale-110">
                    <GoDotFill
                      className="w-3 h-3"
                      strokeWidth={2.5}
                      color="white"
                    />
                  </div>
                  <span className="leading-relaxed font-medium uppercase text-xl not-italic">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* <img
          src={demandImg}
          alt="Hero"
          className="w-full max-w-sm object-contain opacity-100"
          style={{ zIndex: 10 }}
        /> */}
        </div>
        {/* <CTA /> */}
      </div>
    </div>
  );
};

export default OurDemands;
