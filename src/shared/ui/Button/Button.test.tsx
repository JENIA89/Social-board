import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('Test render with text', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>Text</Button>);
        expect(screen.getByText('Text')).toBeInTheDocument();
    });

    test('Test render with class', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button theme={ThemeButton.CLEAR}>Text</Button>);
        expect(screen.getByText('Text')).toHaveClass('clear');
        screen.debug();
    });
});
