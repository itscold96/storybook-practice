import { ChangeEvent, MouseEvent, useState } from 'react';
import IconButton from './IconButton';
import ErrorMessage from './ErrorMessage';

interface IDefaultTextFieldProps {
  id: string;
  placeholder: string;
  value: string;
  iconPath: string;
  iconAlt: string;
  isError: boolean;
  errorMessage: string;
  onValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onIconClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function DefaultTextField({
  id,
  placeholder,
  value,
  isError,
  iconPath,
  iconAlt,
  errorMessage,
  onValueChange,
  onIconClick,
}: IDefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused ? 'border-secondary' : !value ? 'border-mono300' : 'border-primary';
  return (
    <div className={'relative'}>
      <div
        className={`
    text-primary
    border-b
  ${borderColor}`}
      >
        <div>
          <input
            id={id}
            className={'outline-none'}
            type={'text'}
            value={value}
            placeholder={placeholder}
            onChange={onValueChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {!!value && <IconButton alt={iconAlt} iconPath={iconPath} onIconClick={onIconClick} />}
        </div>
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
