import {ReactNode} from "react";
import {Button, Card, CardFooter, Image} from "@nextui-org/react";

export type Project = {
    name: string;
    status: "upcoming" | "completed" | "in-process";
    description: string;
    image: string;
    icon: ReactNode;
}

export type ProjectCardProps = Project & {
    className?: string;
}

export default function ProjectCard({name, image, icon}: ProjectCardProps) {
    return (
        <>
            <Card isFooterBlurred className="w-full h-[250px] col-span-12 sm:col-span-7">
                <Image
                    removeWrapper
                    alt={`${name}'s background image`}
                    className="z-0 w-full h-full object-cover"
                    src={image}
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-x-2">
                            {icon && icon}
                            <span className="capitalize text-white text-md">{name}</span>
                        </div>
                        <Button
                            radius="full"
                            variant="shadow"
                            color="primary"
                            size="sm">
                            Read More
                        </Button></div>
                </CardFooter>
            </Card>
        </>
    );
}