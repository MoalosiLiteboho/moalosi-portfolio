import React from "react";
import {cn} from "@nextui-org/react";


export interface MyLogoProps {
    className?: string;
}

export const MyLogo: React.FC<MyLogoProps> = ({className}) => {
    return (
        <p className={cn("text-xl", className || "")}>
           <span className="text-primary font-bold">Moalosi</span>
           <span className="text-black">Liteboho</span>
        </p>
    );
}