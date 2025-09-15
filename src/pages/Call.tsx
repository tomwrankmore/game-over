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
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border-collapse text-sm md:text-base">
          <thead className="">
            <tr>
              <th className="px-4 py-2 text-left">Country</th>
              <th className="px-4 py-2 text-left">Contact Email</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(
              t('call.countryContacts', { returnObjects: true })
            ).map(([country, { name, number }]) => (
              <tr key={country} className="">
                <td className="border border-gray-100/25 border-dotted px-4 py-2">
                  {name}
                </td>
                <td className="border border-gray-100/25 border-dotted px-4 py-2">
                  <a
                    href={`tel:${number}`}
                    className="underline text-boycott-light hover:text-boycott-light/80"
                  >
                    {number}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
};

export default Call;
