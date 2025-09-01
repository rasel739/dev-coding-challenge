import { Icons } from '@/lib/icons';
import clsx from 'clsx';
import { IconType } from 'react-icons';

type ButtonTypePros = {
  title: string;
  className?: string;
  icon?: React.ReactNode | IconType;
  iconPosition?: 'left' | 'right';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'full';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  title,
  className,
  icon,
  iconPosition = 'left',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
}: ButtonTypePros) => {
  const baseStyles =
    'flex justify-center items-center gap-2 rounded-md font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles: Record<typeof variant, string> = {
    primary: 'bg-[#7F56D9] text-white hover:bg-[#6941c6] focus:ring-[#7F56D9]',
    secondary: 'bg-white text-[#344054] shadow hover:bg-gray-100 focus:ring-gray-300',
    outline: 'border border-gray-300 text-[#344054] hover:bg-gray-50 focus:ring-gray-200',
    ghost: 'text-white/90 hover:bg-white/10 focus:ring-white/30',
  };

  const sizeStyles: Record<typeof size, string> = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
    full: 'w-full px-4 py-2',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        (disabled || loading) && 'opacity-60 cursor-not-allowed',
        className
      )}
    >
      {loading ? (
        <Icons.Loader className='animate-spin w-5 h-5' />
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          {title}
          {icon && iconPosition === 'right' && icon}
        </>
      )}
    </button>
  );
};

export default Button;
