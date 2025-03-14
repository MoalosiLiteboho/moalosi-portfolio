import {useEffect, useState} from "react";
import {SwitchProps, useSwitch, VisuallyHidden} from "@heroui/react";
import {useTheme} from "next-themes";
import clsx from "clsx";
import {IoSunnyOutline} from "react-icons/io5";
import {PiMoonStarsLight} from "react-icons/pi";

export interface ThemeSwitchProps {
    className?: string;
    classNames?: SwitchProps["classNames"];
}

export default function ThemeSwitch({className, classNames,}: ThemeSwitchProps) {
    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const onChange = () => theme === "light" ? setTheme("dark") : setTheme("light");

    const {
        Component,
        slots,
        isSelected,
        getBaseProps,
        getInputProps,
        getWrapperProps,
    } = useSwitch({
        isSelected: theme === "light",
        onChange,
    });

    useEffect(() => {
        setIsMounted(true);
    }, [isMounted]);

    if (!isMounted) return <div className="w-6 h-6" />;

    return (
        <Component
            {...getBaseProps({
                className: clsx(
                    "px-px transition-opacity hover:opacity-80 cursor-pointer",
                    className,
                    classNames?.base
                ),
            })}
        >
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>
            <div
                {...getWrapperProps()}
                className={slots.wrapper({
                    class: clsx(
                        [
                            "w-auto h-auto",
                            "bg-transparent",
                            "rounded-lg",
                            "flex items-center justify-center",
                            "group-data-[selected=true]:bg-transparent",
                            "!text-default-500",
                            "pt-px",
                            "px-0",
                            "mx-0",
                        ],
                        classNames?.wrapper
                    ),
                })}
            >
                {isSelected ? (
                    <PiMoonStarsLight size={22} />
                ) : (
                    <IoSunnyOutline size={22} />
                )}
            </div>
        </Component>
    );
};