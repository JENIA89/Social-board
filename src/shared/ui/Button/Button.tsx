import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUNG = 'background',
    BACKGROUNG_INVERTED = 'backgroundInverted',
}

export enum SizeButton {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: SizeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, square, size = SizeButton.L, ...otherProps } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };

    return (
        <button type='button' className={classNames(cls.button, mods, [className])} {...otherProps}>
            {children}
        </button>
    );
};
