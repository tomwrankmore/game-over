import CTA from '@/components/CTA';
import PageContainer from '@/components/PageContainer';
import SectionHeading from '@/components/SectionHeading';
import SubHeading from '@/components/SubHeading';
import { useTranslation } from 'react-i18next';

const FloodFeds = () => {
  const { t } = useTranslation();
  return (
    <PageContainer
      bgColor="bg-boycott-red"
      textColor="text-boycott-light"
      fullHeight
    >
      <SectionHeading>{t('CTA.title')}</SectionHeading>
      <SubHeading>{t('CTA.text')}</SubHeading>
      <CTA />
    </PageContainer>
  );
};

export default FloodFeds;
