import { MouseEvent } from 'react';
import IconButton from './IconButton';
import { flexRowCenter } from 'styles/mixins';

interface INavigationBarProps {
  isDark: boolean;
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onCloseButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function NavigationBar({
  showBackButton,
  showCloseButton,
  showTitle,
  title = '',
  isDark = false,
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: INavigationBarProps) {
  const titleColor = `${isDark ? 'text-white' : 'text-primary'}`;
  const iconColor = `${isDark ? '_white' : ''}`;

  return (
    <div className={'flex justify-between w-full'}>
      <div className={`${flexRowCenter} gap-2`}>
        {/* 뒤로 가기 버튼 */}
        {showBackButton && (
          <IconButton
            alt={'뒤로 가기'}
            iconPath={`/icons/ic-back_left${iconColor}.svg`}
            onIconClick={onBackButtonClick}
          />
        )}

        {/* 페이지 타이틀 */}
        {showTitle && <p className={`text-2xl ${titleColor}`}>{title}</p>}
      </div>

      {/* 닫기 버튼 */}
      {showCloseButton && (
        <IconButton alt={'닫기'} iconPath={`/icons/ic-cancel${iconColor}.svg`} onIconClick={onCloseButtonClick} />
      )}
    </div>
  );
}
