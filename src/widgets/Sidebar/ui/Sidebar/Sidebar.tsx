import React, { FC, useState } from 'react';
import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

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
            <div className={cls.links}>
                <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY} className={cls.item}>
                    <MainIcon className={cls.icon} />
                    <span>{t('Главная')}</span>
                </AppLink>

                <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY} className={cls.item}>
                    <AboutIcon className={cls.icon} />
                    <span>{t('О сайте')}</span>
                </AppLink>
            </div>
            <Button
                data-testid='sidebar-toggle'
                theme={ThemeButton.BACKGROUNG_INVERTED}
                onClick={onToggle}
                className={cls.collapseBtn}
                size={SizeButton.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
