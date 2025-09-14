import LogoCloud from '../LogoCloud';
import PageContainer from '../PageContainer';
import SectionHeading from '../SectionHeading';
import SubHeading from '../SubHeading';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <PageContainer bgColor="bg-boycott-light" textColor="text-boycott-dark">
      <SectionHeading>{t('about.title')}</SectionHeading>
      <SubHeading>{t('about.text')}</SubHeading>
      <LogoCloud />
    </PageContainer>
  );
};

export default About;
