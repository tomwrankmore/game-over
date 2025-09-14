import PageContainer from '@/components/PageContainer';
import SectionHeading from '@/components/SectionHeading';
import SubHeading from '@/components/SubHeading';
import { useTranslation } from 'react-i18next';

const Call = () => {
  const { t } = useTranslation();
  return (
    <PageContainer
      bgColor="bg-boycott-red"
      textColor="text-boycott-light"
      fullHeight
    >
      <SectionHeading>{t('call.title')}</SectionHeading>
      <SubHeading>{t('call.text')}</SubHeading>
      {/* <p className="text-lg max-w-3xl mx-auto text-center">
        Find your country's football federation head and call them to demand
        they take a stand against Israel's actions.
      </p> */}
      <ul>
        {Object.entries(t('call.countryNumbers', { returnObjects: true })).map(
          ([country, { name, number }]) => (
            <li key={country}>
              {name}: <a href={`tel:${number}`}>{number}</a>
            </li>
          )
        )}
      </ul>
    </PageContainer>
  );
};

export default Call;
