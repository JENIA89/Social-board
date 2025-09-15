import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
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
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, square, disabled, size = SizeButton.L, ...otherProps } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button type='button' disabled={disabled} className={classNames(cls.button, mods, [className])} {...otherProps}>
            {children}
        </button>
    );
};
