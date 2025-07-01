import React, { FC, useState } from "react";
import cls from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((collapsed) => !collapsed);
    };
    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>toogle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
