import { MouseEvent } from 'react';

interface IIconButtonProps {
  iconPath: string;
  alt: string;
  onIconClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function IconButton({ onIconClick, iconPath, alt }: IIconButtonProps) {
  return (
    <button onClick={onIconClick}>
      <img alt={alt} src={iconPath} />
    </button>
  );
}
