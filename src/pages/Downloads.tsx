import BlueEN from '/coverthewalls/en/blue.jpg';
import GreenEN from '/coverthewalls/en/green.jpg';
import BlackEn from '/coverthewalls/en/red.jpg';
import RedEN from '/coverthewalls/en/red.jpg';
import BlueES from '/coverthewalls/es/blue.jpg';
import GreenES from '/coverthewalls/es/green.jpg';
import BlackES from '/coverthewalls/es/red.jpg';
import RedES from '/coverthewalls/es/red.jpg';
import BlueFR from '/coverthewalls/fr/blue.jpg';
import GreenFR from '/coverthewalls/fr/green.jpg';
import BlackFR from '/coverthewalls/fr/red.jpg';
import RedFR from '/coverthewalls/fr/red.jpg';
import BlueIT from '/coverthewalls/it/blue.jpg';
import GreenIT from '/coverthewalls/it/green.jpg';
import BlackIT from '/coverthewalls/it/red.jpg';
import RedIT from '/coverthewalls/it/red.jpg';
import RedBG from '/textured/Red_BG-min.png';
import PageContainer from '@/components/PageContainer';
import SectionHeading from '@/components/SectionHeading';
// import SubHeading from '@/components/SubHeading';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Downloads = () => {
  const { t, i18n } = useTranslation();

  const englishImages = {
    black: BlackEn,
    blue: BlueEN,
    green: GreenEN,
    red: RedEN,
  };

  const frenchImages = {
    black: BlackFR,
    blue: BlueFR,
    green: GreenFR,
    red: RedFR,
  };

  const spanishImages = {
    black: BlackES,
    blue: BlueES,
    green: GreenES,
    red: RedES,
  };

  const italianImages = {
    black: BlackIT,
    blue: BlueIT,
    green: GreenIT,
    red: RedIT,
  };

  const images =
    {
      en: englishImages,
      fr: frenchImages,
      es: spanishImages,
      it: italianImages,
    }[i18n.language] || englishImages;

  return (
    <PageContainer textColor="text-boycott-light" fullHeight id="downloads">
      <img
        src={RedBG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <SectionHeading>{t('downloads.title')}</SectionHeading>
      <div className="flex flex-wrap justify-start mb-8">
        {Object.entries(images).map(([color, src]) => (
          <img
            key={color}
            src={src}
            alt={`${color} cover the walls poster`}
            className="w-32 h-auto inline-block m-2 shadow-2xl shadow-black"
          />
        ))}
      </div>
      {/* <SubHeading>{t('downloads.text')}</SubHeading> */}
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
          className="underline hover:text-boycott-light/65"
        >
          {t('downloads.infoLink.text')}
        </a>
      </div>
    </PageContainer>
  );
};

export default Downloads;
