/* eslint-disable i18next/no-literal-string */
import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation('');

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ThemeButton.OUTLINE_INVERTED} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ipsa atque repellat nostrum ad sint porro
                maiores facilis labore incidunt.
            </Modal>
        </div>
    );
};
