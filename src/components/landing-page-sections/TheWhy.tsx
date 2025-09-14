import PageContainer from '../PageContainer';
import SectionHeading from '../SectionHeading';
// import SlantedHeading from '../SlantedHeading';
import SubHeading from '../SubHeading';
import whyImg from '/football.png';
import { useTranslation } from 'react-i18next';

const TheWhy = () => {
  const { t } = useTranslation();

  return (
    <PageContainer bgColor="bg-boycott-blue" textColor="text-boycott-light">
      <SectionHeading>{t('why.title')}</SectionHeading>
      <div>
        <SubHeading>{t('why.text')}</SubHeading>
      </div>
      <img
        src={whyImg}
        alt="Hero"
        className="w-[30vw] max-w-[500px] object-contain opacity-100 absolute right-0 bottom-0"
        style={{ zIndex: 10 }}
      />
    </PageContainer>
  );
};

export default TheWhy;
