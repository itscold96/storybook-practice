import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import NavigationBar from 'components/NavigationBar';

const meta = {
  title: 'Navigation/NavigationBar',
  component: NavigationBar,
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
    isDark: { control: 'boolean', description: 'NavigationBar의 다크 모드 여부' },
    showBackButton: { control: 'boolean', description: 'NavigationBar의 뒤로가기 버튼 표시 여부' },
    showCloseButton: { control: 'boolean', description: 'NavigationBar의 닫기 버튼 표시 여부' },
    showTitle: { control: 'boolean', description: 'NavigationBar의 타이틀 버튼 표시 여부' },
    title: { control: 'text', description: 'NavigationBar의 타이틀' },
    onBackButtonClick: { description: '뒤로가기 버튼 클릭 이벤트' },
    onCloseButtonClick: { description: '닫기 버튼 클릭 이벤트' },
  },
  args: {
    onBackButtonClick: fn(),
    onCloseButtonClick: fn(),
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDark: false,
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: '페이지 이름',
  },
};
