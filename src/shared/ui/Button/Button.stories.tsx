import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss';

const meta = {
    title: 'shared/Button',
    component: Button,
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};

export const Clear: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE,
    },
};

export const Background: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.BACKGROUNG,
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.BACKGROUNG_INVERTED,
    },
};

export const OutlineInverted: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE_INVERTED,
    },
};
