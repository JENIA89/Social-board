import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { useTheme } from 'app/providers/ThemeProviders';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onCloseHandler();
            }
        },
        [onCloseHandler]
    );

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <div className={classNames(cls.modal, mods, [className, theme])}>
            <div className={cls.overlay} onClick={onCloseHandler}>
                <div className={cls.content} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};
