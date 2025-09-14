import PageContainer from '../PageContainer';
import SlantedHeading from '../SlantedHeading';
import { useTranslation } from 'react-i18next';

const NoMoreWaiting = () => {
  const { t } = useTranslation();

  return (
    <PageContainer bgColor="bg-boycott-red" textColor="text-boycott-white">
      <SlantedHeading>{t('callout')}</SlantedHeading>
    </PageContainer>
  );
};

export default NoMoreWaiting;
