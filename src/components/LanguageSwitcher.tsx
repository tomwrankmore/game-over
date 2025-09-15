import { Button } from '@/components/ui/button';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

// ✅ keep this in sync with App.tsx
export const supportedLocales = [
  { value: 'en', label: 'EN' },
  { value: 'es', label: 'ES' },
  { value: 'fr', label: 'FR' },
];

export default function LanguageSwitcher() {
  const { lng } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(
    lng && supportedLocales.some((l) => l.value === lng)
      ? lng
      : supportedLocales[0].value
  );

  // keep dropdown value in sync with route param
  useEffect(() => {
    if (lng && supportedLocales.some((l) => l.value === lng)) {
      setValue(lng);
    } else {
      setValue(supportedLocales[0].value);
    }
  }, [lng]);

  const switchLanguage = (newLng: string) => {
    const segments = location.pathname.split('/').filter(Boolean);

    if (segments.length === 0) {
      // No path — go to base of new language
      navigate(`/${newLng}`, { replace: true });
      return;
    }

    // Replace first segment with new language
    segments[0] = newLng;
    const newPath = `/${segments.join('/')}${location.search}`;
    navigate(newPath, { replace: true });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[80px] justify-between"
        >
          {supportedLocales.find((language) => language.value === value)
            ?.label ?? supportedLocales[0].label}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[80px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {supportedLocales.map((language) => (
                <CommandItem
                  key={language.value}
                  value={language.value}
                  onSelect={() => {
                    setValue(language.value);
                    switchLanguage(language.value);
                    setOpen(false);
                  }}
                >
                  {language.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === language.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
