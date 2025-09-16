import PageContainer from '../PageContainer';
import SlantedHeading from '../SlantedHeading';
import RedBG from '/textured/Red_BG-min.png';
import { useTranslation } from 'react-i18next';

const NoMoreWaiting = () => {
  const { t } = useTranslation();

  return (
    <PageContainer textColor="text-boycott-white">
      <img
        src={RedBG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <SlantedHeading>{t('callout')}</SlantedHeading>
    </PageContainer>
  );
};

export default NoMoreWaiting;
