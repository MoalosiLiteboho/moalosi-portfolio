import {Button, Card, CardFooter, Image} from "@nextui-org/react";

export type Project = {
    id: number;
    name: string;
    status: "upcoming" | "completed" | "in-process";
    description: string;
    image: string;
}

export type ProjectCardProps = Project & {
    className?: string;
}

export default function ProjectCard({name}: ProjectCardProps) {
    return (
        <>
            <Card isFooterBlurred className="w-full h-[250px] col-span-12 sm:col-span-7">
                <Image
                    removeWrapper
                    alt={`${name}'s background image`}
                    className="z-0 w-full h-full object-cover"
                    src="https://nextui.org/images/card-example-5.jpeg"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            className="rounded-full w-10 h-11 bg-black"
                            src="https://nextui.org/images/breathing-app-icon.jpeg"
                        />
                        <p className="text-sm text-white font-light ">{name}</p>
                    </div>
                    <Button
                        radius="full"
                        variant="shadow"
                        color="primary"
                        size="sm">
                        Read More
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}