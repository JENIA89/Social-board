import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';
import 'app/styles/index.scss';

const meta = {
    title: 'shared/Text',
    component: Text,
    args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title h1',
        text: 'Text p',
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Text lorem ipsum',
    },
};
