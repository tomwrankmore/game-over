import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const CopButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <Link
      to="/"
      type="button"
      className={cn(
        'w-fit no-underline leading-none px-6 pt-3 pb-2.5 rounded-full bg-cop-red hover:bg-cop-white hover:text-cop-red hover:border-cop-red border flex items-center justify-center text-cop-white font-bold text-xl cursor-pointer transition-colors shadow-sm',
        className
      )}
    >
      {text}
    </Link>
  );
};

export default CopButton;
