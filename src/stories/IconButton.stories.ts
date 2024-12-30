import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import IconButton from 'components/IconButton';

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    alt: { control: 'text', description: '이미지의 alt 속성' },
    iconPath: { control: 'text', description: '아이콘 이미지 경로' },
  },
  args: {
    onIconClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'icon',
    iconPath: '/icons/ic-cancel.svg',
  },
};
