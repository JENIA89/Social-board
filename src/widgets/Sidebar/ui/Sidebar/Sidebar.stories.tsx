import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import 'app/styles/index.scss';
import { Sidebar } from './Sidebar';
import { Theme } from 'app/providers/ThemeProviders';

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    args: { onClick: fn() },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
