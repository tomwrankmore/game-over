import PageContainer from '@/components/PageContainer';
import SectionHeading from '@/components/SectionHeading';
import SubHeading from '@/components/SubHeading';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt } from 'react-icons/fa';

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
      <div className="mt-6">
        {Object.entries(t('call.countryContacts', { returnObjects: true })).map(
          ([country, { name, number }]) => (
            <a
              href={`tel:${number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline my-6 block"
              key={country}
            >
              <Button
                size="lg"
                variant="outline"
                className="text-boycott-black uppercase font-bold bg-boycott-light hover:underline cursor-pointer rounded-full py-4 mx-auto"
              >
                <FaPhoneAlt className="inline-block mr-2" />
                {name}
              </Button>
            </a>
          )
        )}
      </div>
    </PageContainer>
  );
};

export default Call;
