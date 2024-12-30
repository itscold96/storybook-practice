import { MouseEvent, useState } from 'react';
import TagButton from './TagButton';

// 인자를 기반으로 자동 타입 추론 및 검사가 이루어짐
interface ITagListProps<T extends string> {
  // 문자열 또는 문자열 리터럴 타입만 받겠다는 의미
  tagList: T[];
  onTagClick: (tag: T) => void; // API 호출 등을 위해 부모 컴포넌트로 클릭된 태그 내용을 전달해야 함
}

export default function TagList<T extends string>({ tagList, onTagClick }: ITagListProps<T>) {
  const [selectedTag, setSelectedTag] = useState<T>(tagList[0]);

  const handleTagClick = (event: MouseEvent) => {
    const eventTarget = event.target as HTMLButtonElement;
    const tagText = eventTarget.textContent as T;
    onTagClick(tagText);
  };

  return (
    <div className={'flex gap-4'} onClick={handleTagClick}>
      {tagList.map((tag) => (
        <TagButton key={tag} isSelected={selectedTag === tag} onButtonClick={() => setSelectedTag(tag)}>
          {tag}
        </TagButton>
      ))}
    </div>
  );
}
