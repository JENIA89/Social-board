import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation('');

    const onToggle = () => {
        setCollapsed((collapsed) => !collapsed);
    };

    return (
        <div data-testid='sidebar' className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button data-testid='sidebar-toggle' onClick={onToggle}>
                {t('Переключить')}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
