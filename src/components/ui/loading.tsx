import {cn, Spinner} from "@heroui/react";

export type LoadingProps = {
    className?: string;
    size?: "sm" | "md" | "lg";
}

export default function Loading({ className, size = "md" }: LoadingProps) {

    return (
        <div className="w-full h-full flex items-center justify-center mt-6">
            <Spinner
                className={cn("", className)}
                size={size}
                color="primary"
            />
        </div>
    );
}