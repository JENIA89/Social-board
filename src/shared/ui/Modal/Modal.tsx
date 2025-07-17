import React, { FC, ReactNode, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}
export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose } = props;

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
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <div className={classNames(cls.modal, mods, [className])}>
            <div className={cls.overlay} onClick={onCloseHandler}>
                <div className={cls.content} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};
