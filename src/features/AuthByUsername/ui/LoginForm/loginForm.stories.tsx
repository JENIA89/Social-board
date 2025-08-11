import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { LoginForm } from './LoginForm';
import 'app/styles/index.scss';

const meta = {
    title: 'feature/LoginForm',
    component: LoginForm,
    args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
