import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

// import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-boycott-black text-boycott-light py-6 px-6 relative z-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] md:grid-rows-1 items-center justify-center md:gap-2">
        <div className="flex items-center justify-center flex-row md:row-start-1 md:col-start-1 gap-4 mb-4 sm:mb-0">
          <p className="md:col-start-1">#GameOverIsrael</p>
          <LanguageSwitcher />
        </div>
        <div className="text-xs text-center col-span-2 md:col-span-1 md:row-start-1 md:col-start-2 ">
          <div className="flex gap-4 items-center justify-center flex-col mb-2 sm:mb-0">
            <p>
              {t('contactUs.contact')}{' '}
              <a
                href="mailto:contact@gameoverisrael.com"
                target="_blank"
                className="text-xs hover:underline"
                rel="noopener noreferrer"
              >
                contact@gameoverisrael.com
              </a>
            </p>

            <p>
              {t('contactUs.press')}{' '}
              <a
                href="mailto:press@gameoverisrael.com"
                target="_blank"
                className="text-xs hover:underline"
                rel="noopener noreferrer"
              >
                press@gameoverisrael.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-row space-x-6 justify-center sm:justify-end py-2 sm:py-0">
          <a
            href="https://www.instagram.com/gameover.israel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-120 transition-all"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.tiktok.com/@gameoverisrael"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:scale-120 transition-all"
          >
            <FaTiktok size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
