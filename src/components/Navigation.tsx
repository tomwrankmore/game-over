import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
// import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { NavLink, useParams } from 'react-router-dom';

const Navigation = () => {
  const { t } = useTranslation();
  const { lng } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={cn('bg-boycott-black shadow-md fixed top-0 z-50 w-full')}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <NavLink to={`/${lng}`} className="text-xl font-bold">
          <Logo />
        </NavLink>
        <div className="flex items-center justify-end gap-4 flex-1">
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="default"
                aria-label="Menu"
                className="hover:cursor-pointer bg-boycott-black hover:bg-boycott-black/80 text-white"
              >
                <h4 className="sr-only mb-1">Menu</h4>
                {/* <Menu size={32} strokeWidth={2} /> */}
                <h1 className="text-lg sm:text-xl font-bold">MENU</h1>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-fit sm:w-2xl bg-boycott-red"
            >
              <div className="flex flex-col space-y-4 mt-8">
                <nav className="flex flex-col space-y-4 text-center text-white">
                  <NavLink
                    to="https://linktr.ee/game.over.israel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg pb-4 border-b border-boycott-light/25 hover:translate-x-1 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <h1 className="text-lg md:text-xl font-bold">
                      {t('nav.takeAction')}
                    </h1>
                  </NavLink>
                  <a
                    href="mailto:info@rbfa.be,mark.bullingham@thefa.com,pdiallo@fff.fr,info@scottishfa.co.uk,paul.cooke@fai.ie,press@figc.it,international@figc.it,epo@epo.gr,President@fotball.no,gabinetepresidencia@rfef.es,integridad@rfef.es,prensa@rfef.es?subject=Football%20is%20no%20place%20for%20war%20criminals&body=To%20the%20Presidents%20of%20the%20Football%20federations%20of%20Belgium%2C%20England%2C%20France%2C%20Greece%2C%20Ireland%2C%20Italy%2C%20Norway%2C%20Scotland%20and%20Spain%0D%0A%0D%0ADear%20Presidents%2C%0D%0A%0D%0AWe%20love%20football.%0D%0A%0D%0ATo%20us%20football%20is%20a%20religion%2C%20a%20family%2C%20a%20community.%20Our%20national%20and%20club%20pitches%20are%20sacred%2C%20our%20stadium%20seats%20hallowed.%20It%20is%20here%20we%20form%20our%20closest%20bonds%2C%20our%20strongest%20memories%20and%20family%20traditions%20that%20last%20generations.%0D%0A%0D%0AFootball%20isn%E2%80%99t%20just%20a%20game.%20Football%20is%20life.%0D%0A%0D%0ABut%20today%20our%20pitches%20are%20stained%20with%20blood%2C%20and%20our%20teams%20covered%20in%20shame.%0D%0A%0D%0AIn%20Gaza%2C%20football%20pitches%20are%20turning%20into%20graveyards%2C%20dreams%20of%20football%20are%20being%20wiped%20away.%0D%0A%0D%0AIsrael%20kills%20the%20equivalent%20of%20two%20children%E2%80%99s%20football%20teams%20every%20single%20day.%20Players%2C%20fans%2C%20and%20families%20who%20live%20and%20breathe%20the%20game%20are%20being%20bombed%2C%20starved%2C%20and%20displaced.%0D%0A%0D%0AAnd%20you%20do%20nothing.%20Instead%2C%20Israel%20is%20playing%20in%20Europe%2C%20on%20our%20pitches%2C%20in%20our%20stadiums.%0D%0A%0D%0AThis%20gruesome%20show%20must%20stop.%20Where%20do%20we%20look%20when%20their%20national%20anthem%20plays%20in%20the%20stadium%2C%20knowing%20what%20crimes%20are%20being%20committed%20in%20their%20name%3F%0D%0A%0D%0AEverywhere%2C%20we%20the%20people%20are%20speaking%20out.%20In%20stadiums%20across%20the%20world%20we%20sing%20for%20Palestine%2C%20raise%20flags%2C%20and%20display%20banners%20of%20solidarity%20%E2%80%93%20often%20risking%20punishment%20for%20doing%20so.%20Our%20message%20is%20clear%3A%20football%20can%20no%20longer%20turn%20a%20blind%20eye.%0D%0A%0D%0AYou%20acted%20before.%20When%20Russia%20invaded%20Ukraine%2C%20football%20federations%20and%20associations%20across%20Europe%20boycotted%20the%20Russian%20National%20team%20and%20Russian%20club%20teams%2C%20leading%20to%20their%20eventual%20suspension%20from%20the%20sport.%0D%0A%0D%0AThe%20same%20principle%20must%20apply%20here.%20We%20value%20the%20lives%20of%20Palestinian%20children%20equally%20%E2%80%93%20do%20you%3F%0D%0A%0D%0AIf%20your%20Federation%20boycotts%20Israel%E2%80%99s%20national%20team%2C%20their%20club%20teams%2C%20and%20ban%20their%20players%2C%20UEFA%20and%20FIFA%20will%20be%20forced%20to%20listen.%20Refuse%20to%20play%20them%20now%20and%20call%20for%20Israel%20to%20be%20suspended.%0D%0A%0D%0AThis%20is%20not%20about%20politics%2C%20it%20is%20about%20humanity%2C%20about%20the%20very%20values%20our%20sport%20claims%20to%20represent.%20Are%20you%20with%20us%3F%0D%0A%0D%0ASincerely%2C%0D%0A%0D%0A%5BInsert%20name%5D"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg pb-4 border-b border-boycott-light/25 hover:translate-x-1 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <h1 className="text-lg md:text-xl font-bold">
                      {t('nav.floodFeds')}
                    </h1>
                  </a>
                  <NavLink
                    to={`/${lng}/call`}
                    className="text-lg pb-4 border-b border-boycott-light/25 hover:translate-x-1 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <h1 className="text-lg md:text-xl font-bold">
                      {t('nav.call')}
                    </h1>
                  </NavLink>
                  <NavLink
                    to={`/${lng}/downloads`}
                    className="text-lg pb-4 border-b border-boycott-light/25 hover:translate-x-1 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <h1 className="text-lg md:text-xl font-bold">
                      {t('nav.cover')}
                    </h1>
                  </NavLink>
                  <a
                    href="mailto:press@gameoverisrael.com"
                    className="text-lg pb-4 border-b border-boycott-light/25 hover:translate-x-1 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <h1 className="text-lg md:text-xl font-bold">
                      {t('nav.press')}
                    </h1>
                  </a>
                </nav>

                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
                <div className="flex flex-row space-x-6 justify-center text-white mt-2">
                  <a
                    href="https://www.instagram.com/gameover.israel"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-boycott-light/80 hover:scale-120 transition-all"
                  >
                    <FaInstagram size={28} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@gameover.israel"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="hover:text-boycott-light/80 hover:scale-120 transition-all"
                  >
                    <FaTiktok size={28} />
                  </a>
                  {/*  <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-boycott-light/80 hover:scale-120 transition-all"
            >
              <FaXTwitter size={28} />
            </a> */}
                </div>
                {/* <div className="flex flex-row space-x-6 justify-center mt-6 text-white">
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-boycott-light/80 hover:scale-120 transition-all"
                  >
                    <FaInstagram size={28} />
                  </a>
                  <a
                    href="https://tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="hover:text-boycott-light/80 hover:scale-120 transition-all"
                  >
                    <FaTiktok size={28} />
                  </a>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="hover:text-boycott-light/80 hover:scale-120 transition-all"
                  >
                    <FaXTwitter size={28} />
                  </a>
                </div> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
