import {cn} from "@nextui-org/react";

export type ItemsNotFoundedProps = {
    className?: string;
    message?: string;
}

export default function ItemsNotFound({className, message = "Items not found..."}: ItemsNotFoundedProps) {
    return (
        <div className="flex items-center justify-center h-1/2 px-1 py-2">
            <p className={cn("text-xl font-light mt-6", className)}>
                {message}
            </p>
        </div>
    );
}