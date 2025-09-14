import PageContainer from '@/components/PageContainer';
import SectionHeading from '@/components/SectionHeading';
import SubHeading from '@/components/SubHeading';
import { Button } from '@/components/ui/button';
import { link } from 'fs/promises';
import { useTranslation } from 'react-i18next';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Downloads = () => {
  const { t } = useTranslation();

  const downloadLinks = [
    { label: t('downloads.buttons.1'), url: t('downloads.links.1') },
    { label: t('downloads.buttons.2'), url: t('downloads.links.2') },
    { label: t('downloads.buttons.3'), url: t('downloads.links.3') },
  ];

  return (
    <PageContainer
      bgColor="bg-boycott-red"
      textColor="text-boycott-light"
      fullHeight
    >
      <SectionHeading>{t('downloads.title')}</SectionHeading>
      <SubHeading>{t('downloads.text')}</SubHeading>
      <ul>
        {Object.entries(t('downloads.buttons', { returnObjects: true })).map(
          ([download, { label, url }]) => (
            <li key={download} className="mb-4">
              <a href={url || ''} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-boycott-black uppercase font-bold bg-boycott-light hover:underline cursor-pointer rounded-full py-4"
                >
                  <FaCloudDownloadAlt />
                  <span className="ml-2">{label}</span>
                </Button>
              </a>
            </li>
          )
        )}
      </ul>
      <div className="mt-8">
        <a
          href={t('downloads.infoLink.url')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            variant="secondary"
            className="text-boycott-black uppercase font-bold bg-boycott-light hover:underline cursor-pointer rounded-full py-4"
          >
            {t('downloads.infoLink.text')}
          </Button>
        </a>
      </div>
    </PageContainer>
  );
};

export default Downloads;
