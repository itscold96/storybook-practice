import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TagList from 'components/TagList';

const meta = {
  title: 'Buttons/TagList',
  component: TagList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tagList: { control: 'object', description: '태그 리스트' },
    onTagClick: { description: '버튼 클릭 이벤트' },
  },
  args: {
    onTagClick: fn(),
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { tagList: ['1~2명', '3~5명', '6~8명', '9명 이상'] },
};
