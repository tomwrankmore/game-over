import SectionHeading from '../SectionHeading';
import SubHeading from '../SubHeading';
import BlueBG from '/textured/Blue_Bg-min.png';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';

const TheWhy = () => {
  const { t } = useTranslation();

  return (
    <div
      className={`relative overflow-hidden  text-boycott-light`}
      id="the-why"
    >
      <img
        src={BlueBG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="mx-auto container py-24 px-6">
        <SectionHeading>{t('why.title')}</SectionHeading>
        <div className="mb-8">
          <SubHeading>{t('why.text')}</SubHeading>
        </div>
        <div className="relative w-full flex items-center justify-center ">
          <div className="relative w-full max-w-4xl aspect-video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=VGD-fJm81UM&t=1s"
              playing={false}
              controls={true}
              width="100%"
              height="100%"
              className="rounded-2xl overflow-hidden shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheWhy;
