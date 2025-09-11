'use client';

import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { FaTiktok, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Take Action', href: 'https://linktr.ee/' },
    { name: 'Flood the Federations', href: 'https://google.com/' },
    { name: 'Call Your Federation head', href: 'https://google.com/' },
    { name: 'Cover the Walls', href: 'https://google.com/' },
    { name: 'Press Inquiries', href: 'https://google.com/' },
  ];
  return (
    <header className={cn('bg-boycott-red shadow-md fixed top-0 z-50 w-full')}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6 sm:px-0">
        <Link to="/" className="text-xl font-bold">
          <Logo isDark={false} />
        </Link>
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
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-lg pb-4 border-b border-boycott-light/25 hover:translate-x-1 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      <h1 className="text-lg md:text-xl font-bold">
                        {item.name}
                      </h1>
                    </Link>
                  ))}
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
