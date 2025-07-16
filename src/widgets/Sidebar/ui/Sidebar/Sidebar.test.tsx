import React from 'react';
import { MemoryRouter } from 'react-router-dom';
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
        render(
            <MemoryRouter initialEntries={['/my-route']}>
                <Sidebar />
            </MemoryRouter>
        );
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test with toggle', () => {
        render(
            <MemoryRouter initialEntries={['/my-route']}>
                <Sidebar />
            </MemoryRouter>
        );
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
