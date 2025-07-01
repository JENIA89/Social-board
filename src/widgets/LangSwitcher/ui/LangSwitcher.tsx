import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import i18n from "shared/config/routeConfig/i18n/i18n";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t } = useTranslation();

    const onToggleLang = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button theme={ThemeButton.CLEAR} onClick={onToggleLang} className={classNames(cls.langSwitcher, {}, [className])}>
            {t("ру")}
        </Button>
    );
};
