import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Error.module.scss";
import { Button } from "shared/ui/Button/Button";

interface ErrorProps {
    className?: string;
}

export const Error: FC<ErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={classNames(cls.error, {}, [className])}>
            <p>{t("Произошла ошибка")}</p>
            <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
        </div>
    );
};
