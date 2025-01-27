import {cn} from "@heroui/react";
import {PiGreaterThanLight, PiLessThanLight} from "react-icons/pi";

export type LogoProps = {
    className?: string;
}

export default function Logo({className}: LogoProps) {
    return (
        <p className={cn("text-xl font-sans flex items-center", className || "")}>
            <PiLessThanLight />
            <span className="text-foreground font-light">M</span>
            <span className="hidden text-foreground font-light md:flex">oalosi</span>
            <span className="ml-1">/</span>
            <PiGreaterThanLight />
        </p>
    );
}