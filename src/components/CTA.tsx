import CopyEmailButton from './EmailCopyButton';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import { FaMailBulk } from 'react-icons/fa';

const CTA = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16" id="FloodTheFederations">
      <div className="mx-auto max-w-7xl">
        <div className="lg:py-14 p-10 flex items-center justify-between flex-col lg:flex-row bg-boycott-black rounded-xl shadow-lg">
          <div className="block mb-5 text-left lg:mb-0">
            <h1 className="font-manrope text-3xl text-white font-semibold mb-5 lg:mb-2">
              {t('CTA.title')}
            </h1>
            <p className="text-base text-white max-w-lg">{t('CTA.text')}</p>
          </div>
          <div className="flex flex-col gap-4 lg:gap-6 items-center lg:items-end">
            <a href="mailto:tomwrankmore@gmail.com?subject=Football%20is%20no%20place%20for%20war%20criminals">
              <Button
                size="lg"
                variant="outline"
                className="text-boycott-black uppercase font-bold bg-boycott-light hover:underline cursor-pointer rounded-full py-4"
              >
                <FaMailBulk />
                {t('CTA.button1')}
              </Button>
            </a>
            <CopyEmailButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
