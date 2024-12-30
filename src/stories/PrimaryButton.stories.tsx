import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import PrimaryButton from 'components/PrimaryButton';

const meta = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  decorators: [
    (Story) => (
      <div className={'w-80'}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['dark', 'light', 'social', 'text'],
      },
      description: '버튼 테마',
    },
    children: { control: 'text', description: 'PrimaryButton의 내용' },
    onButtonClick: { description: '버튼 클릭 이벤트' },
    isDisabled: { control: 'boolean', description: '버튼 비활성화 여부' },
  },
  args: {
    onButtonClick: fn(),
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: { children: 'Button', theme: 'dark', isDisabled: false },
};

export const Light: Story = {
  args: { children: 'Button', theme: 'light', isDisabled: false },
};

export const Social: Story = {
  args: { children: 'Button', theme: 'social', isDisabled: false },
};

export const Text: Story = {
  args: { children: 'Button', theme: 'text', isDisabled: false },
};
