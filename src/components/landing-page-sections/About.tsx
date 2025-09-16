import LogoCloud from '../LogoCloud';
import PageContainer from '../PageContainer';
import SectionHeading from '../SectionHeading';
import SubHeading from '../SubHeading';
import WhiteBG from '/textured/White_BG-min.png';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <PageContainer textColor="text-boycott-dark">
      <img
        src={WhiteBG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <SectionHeading>{t('about.title')}</SectionHeading>
      <SubHeading>{t('about.text')}</SubHeading>
      <LogoCloud />
    </PageContainer>
  );
};

export default About;
