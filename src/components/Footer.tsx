import LanguageSwitcher from './LanguageSwitcher';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    // <div className="bg-boycott-ligh text-boycott-black flex flex-row w-full justify-between items-center p-6 border-t border-boycott-light/70">
    //   <div>
    //     <p className="font-bold">#GameOverIsrael</p>
    //   </div>
    //   <div>
    //     <p>Contact</p>

    //     <p className="text-sm">
    //       <a
    //         href="mailto:contact@gameoverisrael.com"
    //         className="hover:underline"
    //       >
    //         contact@gameoverisrael.com
    //       </a>
    //     </p>
    //     <p>
    //       For press inquiries, please contact{' '}
    //       <a href="mailto:press@gameoverisrael.com" className="hover:underline">
    //         press@gameoverisrael.com
    //       </a>
    //     </p>
    //   </div>

    // </div>

    <div className="bg-boycott-light text-boycott-black py-6 relative z-50">
      <div className="container mx-auto grid grid-cols-2 grid-rows-2 md:grid-cols-[1fr_2fr_1fr] md:grid-rows-1 items-center justify-center md:gap-2">
        <div className="flex items-center justify-center flex-row md:row-start-1 md:col-start-1 gap-4">
          <p className="md:col-start-1">#GameOverIsrael</p> <LanguageSwitcher />
        </div>
        <div className="text-xs text-center col-span-2 md:col-span-1 md:row-start-1 md:col-start-2 ">
          {/* <p className="py-2 sm:py-0 text-xs">
            This site is owned and maintained by Global Witness and has not been
            authorised, approved, or endorsed by COP29 or the UNFCCC.
          </p> */}
          <div className="flex gap-4 items-center justify-center flex-col">
            <p>
              Contact Us:{' '}
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
              For press inquiries, please contact{' '}
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
        <div className="flex flex-row space-x-6 justify-end">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-120 transition-all"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:scale-120 transition-all"
          >
            <FaTiktok size={28} />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:scale-120 transition-all"
          >
            <FaXTwitter size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
