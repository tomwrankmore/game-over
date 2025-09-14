import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
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
import { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const languages = [
  {
    value: 'en',
    label: 'EN',
  },
  {
    value: 'es',
    label: 'ES',
  },
  {
    value: 'fr',
    label: 'FR',
  },
  {
    value: 'de',
    label: 'DE',
  },
  {
    value: 'it',
    label: 'IT',
  },
];

export default function LanguageSwitcher() {
  const { lng } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const switchLanguage = (newLng: string) => {
    if (!lng) return;
    const newPath = location.pathname.replace(`/${lng}`, `/${newLng}`);
    navigate(newPath + location.search, { replace: true });
  };

  return (
    // <div style={{ display: 'flex', gap: '0.5rem' }}>
    //   <button disabled={lng === 'en'} onClick={() => switchLanguage('en')}>
    //     English
    //   </button>
    //   <button disabled={lng === 'es'} onClick={() => switchLanguage('es')}>
    //     Español
    //   </button>
    // </div>
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[80px] justify-between"
        >
          {value
            ? languages.find((language) => language.value === value)?.label
            : 'EN'}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[80px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  value={language.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
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
