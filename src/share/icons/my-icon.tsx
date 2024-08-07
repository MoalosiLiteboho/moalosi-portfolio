import {cn} from "@nextui-org/react";

export type MyIconProps = {
    width?: string;
    height?: string;
    color?: string;
    className?: string;
}

export default function MyIcon({className, height = "1em", width = "1em", color = "#ffffff"}: MyIconProps) {
    return (
        <div className={cn("", className)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox="-1.773 -1.773 11.305 11.296">
                <path fill={color}
                      d="M116.2,62.9L59.8,86.8c-4.3,1.8-9.1,1.7-13.2-0.3l-27.8-14l-3.6,7.1l27.9,14C46.4,95.2,50,96,53.6,96   c3.2,0,6.4-0.6,9.3-1.9l56.4-23.8c3-1.3,5.3-3.7,6.5-6.7c1.2-3.1,1.1-6.4-0.3-9.4c-2.7-5.8-9.8-8.5-15.9-5.9l-3.5,1.5l0,0l-17,7.2   l3.1,7.4l17-7.2l0,0l3.5-1.5c2.1-0.9,4.6-0.1,5.5,1.9c0.5,1,0.5,2.1,0.1,3.1C117.9,61.7,117.2,62.5,116.2,62.9z"/>
                <path fill={color}
                      d="M9,56.9l9.4-7.8c5.4-4.1,12-5.9,18.7-5.1c2.7,0.3,5.2,1,7.6,2.1l25.9,11.5c0.7,0.3,1.3,0.8,1.7,1.5l0,0l0,0   c0.7,1.1,0.8,2.5,0.3,3.8c-0.2,0.4-0.4,0.7-0.6,1c-1.2,1.3-3,1.7-4.6,1l-20-8.9l-3.3,7.3l20,8.9c1.6,0.7,3.3,1.1,4.9,1.1   c3.4,0,6.6-1.4,9-4.1c0.8-0.9,1.5-1.9,2-3c1.6-3.7,1.3-7.9-0.8-11.3c-1.3-2-3.1-3.6-5.2-4.5L48,38.8c-3.1-1.4-6.5-2.3-9.9-2.7   c-8.8-1-17.5,1.4-24.5,6.7L1,53.1V97h8V56.9z"/>
            </svg>
            {/*<svg*/}
            {/*    xmlns="http://www.w3.org/2000/svg"*/}
            {/*    width={width}*/}
            {/*    height={height}*/}
            {/*    viewBox="-1.773 -1.773 11.305 11.296">*/}

            {/*</svg>*/}
        </div>
    );
}