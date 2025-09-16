import SectionHeading from '../SectionHeading';
import SubHeading from '../SubHeading';
import whyImg from '/football.png';
import BlueBG from '/textured/Blue_Bg-min.png';
import { useTranslation } from 'react-i18next';

const TheWhy = () => {
  const { t } = useTranslation();

  return (
    <div className={`relative overflow-hidden  text-boycott-light`}>
      <img
        src={BlueBG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="mx-auto container py-24 px-6">
        <SectionHeading>{t('why.title')}</SectionHeading>
        <div>
          <SubHeading>{t('why.text')}</SubHeading>
        </div>
        {/* <img
          src={whyImg}
          alt="Hero"
          className="w-[60vw] md:w-[30vw] md:max-w-[500px] object-contain opacity-100 absolute right-0 bottom-0"
          style={{ zIndex: 10 }}
        /> */}
      </div>
    </div>
  );
};

export default TheWhy;
