import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TagButton from 'components/TagButton';

const meta = {
  title: 'Buttons/TagButton',
  component: TagButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isSelected: { control: 'boolean', description: 'TagButton 선택 여부' },
    children: { control: 'text', description: 'TagButton의 내용' },
    onButtonClick: { description: '버튼 클릭 이벤트' },
  },
  args: {
    onButtonClick: fn(),
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: '1~2명', isSelected: false },
};
