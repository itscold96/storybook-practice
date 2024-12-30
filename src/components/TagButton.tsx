import { MouseEvent } from 'react';
interface ITagButtonProps {
  isSelected: boolean;
  children: string;
  onButtonClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function TagButton({ children, onButtonClick, isSelected }: ITagButtonProps) {
  const buttonStyle = isSelected ? 'bg-white text-primary' : 'bg-social text-white';
  return (
    <button
      className={`border border-white px-[10px] h-[33px] rounded-tag-button ${buttonStyle} text-sm font-medium`}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
}
