import {ReactNode} from "react";
import {Button, Card, CardFooter, Chip, Image} from "@nextui-org/react";
import {PiGlobeThin, PiUsers} from "react-icons/pi";

export type Project = {
    name: string;
    status: "upcoming" | "completed" | "in-process";
    description: string;
    image: string;
    icon?: ReactNode;
}

export type ProjectCardProps = Project & {
    className?: string;
}

export default function ProjectCard({name, image, icon}: ProjectCardProps) {
    return (
        <>
            <Card
                isFooterBlurred
                className="w-full h-[16em]"
            >
                <Image
                    removeWrapper
                    alt={`${name}-image`}
                    className="z-0 w-full h-full scale-100 object-cover"
                    src={image}
                />
                <CardFooter className="absolute bg-white/50 dark:bg-black/50 bottom-0 border-t-1 border-zinc-100/50 z-10">
                    <div className="w-full flex flex-col">
                        <h6 className="text-black dark:text-white text-md font-semibold flex gap-x-2">
                            {icon}
                            {name}
                        </h6>
                        <div className="flex gap-x-1 items-center text-sm">
                            <PiUsers />
                            <span>Moalosi Liteboho</span>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <div className="flex gap-x-1">
                                <Chip
                                    startContent={<PiGlobeThin/>}
                                    variant="bordered"
                                    color="default"
                                >
                                    Website
                                </Chip>
                            </div>
                            <Button
                                color="primary"
                                variant="shadow"
                                size="sm"
                                className="w-fit"
                            >
                                More
                            </Button>
                        </div>
                    </div>
                </CardFooter>
            </Card>

        </>
    );
}