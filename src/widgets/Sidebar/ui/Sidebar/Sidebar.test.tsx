import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Sidebar } from './Sidebar';

jest.mock('widgets/ThemeSwitcher', () => ({
    ThemeSwitcher: () => <div data-testid='theme-switcher' />,
}));

jest.mock('widgets/LangSwitcher', () => ({
    LangSwitcher: () => <div data-testid='lang-switcher' />,
}));

describe('SideBar', () => {
    test('Test with id', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test with toggle', () => {
        render(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
