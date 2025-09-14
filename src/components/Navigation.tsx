'use client';

import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { FaTiktok, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { NavLink, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
  const { lng } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cn('bg-boycott-red shadow-md fixed top-0 z-50 w-full')}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6 sm:px-0">
        <NavLink to={`/${lng}`} className="text-xl font-bold">
          <Logo />
        </NavLink>
        <div className="flex items-center justify-end gap-4 flex-1">
          <LanguageSwitcher />
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="default"
                aria-label="Menu"
                className="hover:cursor-pointer bg-boycott-black hover:bg-boycott-black/80 text-white"
              >
                <h4 className="sr-only mb-1">Menu</h4>
                <Menu size={32} strokeWidth={2} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-fit sm:w-2xl bg-boycott-red/60 backdrop-blur-lg text-white"
            >
              <div className="flex flex-col space-y-4 mt-8">
                <nav className="flex flex-col space-y-4 text-center">
                  <NavLink
                    to="https://linktr.ee/game.over.israel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg pb-4 border-b border-boycott-light/25 hover:translate-x-1 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <h1 className="text-lg md:text-xl font-bold">
                      Take Action
                    </h1>
                  </NavLink>
                  <HashLink
                    smooth
                    to="#FloodTheFederations"
                    className="text-lg pb-4 border-b border-boycott-light/25 hover:translate-x-1 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <h1 className="text-lg md:text-xl font-bold">
                      Flood the Federations
                    </h1>
                  </HashLink>
                  <NavLink
                    to={`/${lng}/call`}
                    className="text-lg pb-4 border-b border-boycott-light/25 hover:translate-x-1 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <h1 className="text-lg md:text-xl font-bold">
                      Call Your Federation head
                    </h1>
                  </NavLink>
                  <NavLink
                    to={`/${lng}/downloads`}
                    className="text-lg pb-4 border-b border-boycott-light/25 hover:translate-x-1 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <h1 className="text-lg md:text-xl font-bold">
                      Cover the Walls
                    </h1>
                  </NavLink>
                  <NavLink
                    to="https://linktr.ee/game.over.israel"
                    className="text-lg pb-4 border-b border-boycott-light/25 hover:translate-x-1 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <h1 className="text-lg md:text-xl font-bold">
                      Press Inquiries
                    </h1>
                  </NavLink>
                </nav>
                <div className="flex flex-row space-x-6 justify-center mt-6">
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
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
