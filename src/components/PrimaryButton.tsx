import { MouseEvent } from 'react';

type PrimaryButtonTheme = 'dark' | 'light' | 'social' | 'text';

interface IPrimaryButtonProps {
  theme: PrimaryButtonTheme;
  children: string;
  isDisabled: boolean;
  onButtonClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const disabledStyle = 'disabled:bg-mono100 disabled:text-mono200';

const ButtonTheme: Record<PrimaryButtonTheme, string> = {
  dark: 'bg-primary text-white',
  light: 'bg-white text-primary',
  social: 'bg-social text-white',
  text: 'bg-transparent text-white',
};

export default function PrimaryButton({ children, onButtonClick, theme, isDisabled }: IPrimaryButtonProps) {
  return (
    <button
      disabled={isDisabled}
      className={`w-full h-[59px] rounded-primary-button ${ButtonTheme[theme]} ${disabledStyle}`}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
}
