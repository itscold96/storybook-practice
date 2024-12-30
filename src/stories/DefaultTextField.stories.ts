import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DefaultTextField from 'components/DefaultTextField';

const meta = {
  title: 'Text/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text', description: '텍스트 필드 id' },
    placeholder: { control: 'text', description: '텍스트 필드 플레이스홀더' },
    value: { control: 'text', description: '텍스트값' },
    isError: { control: 'boolean', description: '텍스트 필드 에러 유무' },
    iconPath: { control: 'text', description: '아이콘 경로' },
    iconAlt: { control: 'text', description: '아이콘 alt 속성' },
    errorMessage: { control: 'text', description: '에러 메시지 내용' },
    onIconClick: { description: '아이콘 클릭 시 실행될 함수' },
    onValueChange: { description: '텍스트 필드 내용 텍스트 시 실행될 함수' },
  },
  args: {
    onIconClick: fn(),
    onValueChange: fn(),
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'input htmlFor id',
    placeholder: '내용을 입력 해주세요',
    value: '',
    isError: false,
    iconPath: '/icons/ic-cancel.svg',
    iconAlt: '뒤로가기',
    errorMessage: '잘못된 형식입니다.',
  },
};
