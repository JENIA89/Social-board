import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import 'app/styles/index.scss';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    args: { onClick: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum',
    },
};
