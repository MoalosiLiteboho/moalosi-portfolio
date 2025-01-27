import {ReactNode} from "react";
import {
    Button,
    Card,
    CardFooter,
    Chip,
    Image,
    Link,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    useDisclosure
} from "@heroui/react";
import {PiGlobeThin, PiUsers} from "react-icons/pi";
import {IoLogoGithub} from "react-icons/io5";
import {CgUnavailable} from "react-icons/cg";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {Drawer, DrawerContent, DrawerHeader, DrawerTrigger} from "@/components/ui/drawer.tsx";

export type Project = {
    name: string;
    status?: "upcoming" | "completed" | "in-process";
    image: string;
    icon?: ReactNode;
    contributors?: string;
    webUrl?: string;
    githubUrl?: string;
    body?: ReactNode;
}

export type ProjectCardProps = Project & {
    className?: string;
}

export default function ProjectCard({name, image, contributors, githubUrl, webUrl, icon, body}: ProjectCardProps) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
                <CardFooter className="absolute bg-white/40 dark:bg-black/50 bottom-0 border-t-1 border-zinc-100/50 z-10">
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
                                {webUrl && (
                                    <Chip
                                        as={Link}
                                        isExternal
                                        href={webUrl}
                                        startContent={<PiGlobeThin/>}
                                        className="border-foreground border-1"
                                        variant="bordered"
                                    >
                                        Website
                                    </Chip>
                                )}
                                {githubUrl && (
                                    <Chip
                                        as={Link}
                                        isExternal
                                        href={githubUrl}
                                        startContent={<IoLogoGithub/>}
                                        variant="bordered"
                                        className="border-foreground border-1"
                                    >
                                        Source
                                    </Chip>
                                )}
                                {!githubUrl && !webUrl && (
                                    <Chip
                                        startContent={<CgUnavailable />}
                                        variant="bordered"
                                        className="border-foreground border-1"
                                    >
                                        Not Deployed Yet
                                    </Chip>
                                )}
                            </div>
                            <Button
                                color="primary"
                                variant="shadow"
                                size="sm"
                                className="w-fit hidden lg:flex"
                                onPress={onOpen}
                            >
                                More
                            </Button>
                            <Drawer>
                                <DrawerTrigger asChild>
                                    <Button
                                        color="primary"
                                        variant="shadow"
                                        size="sm"
                                        className="w-fit lg:hidden"
                                    >
                                        More
                                    </Button>
                                </DrawerTrigger>
                                <DrawerContent className="py-2 px-4 h-[80vh] md:h-[45vh] focus:outline-none">
                                    <DrawerHeader>{name}</DrawerHeader>
                                    <ScrollArea className="mx-auto w-full max-wg-sm md:max-wg-md pr-3">
                                        <div>
                                            <div className="flex gap-x-1 items-center text-md">
                                                <PiUsers/>
                                                <span>{contributors}</span>
                                            </div>
                                            <div className="flex gap-x-1">
                                                {webUrl && (
                                                    <Chip
                                                        as={Link}
                                                        isExternal
                                                        href={webUrl}
                                                        startContent={<PiGlobeThin/>}
                                                        variant="bordered"
                                                        className="text-foreground"
                                                        classNames={{
                                                            base: "border-black dark:border-white"
                                                        }}
                                                    >
                                                        Website
                                                    </Chip>
                                                )}
                                                {githubUrl && (
                                                    <Chip
                                                        as={Link}
                                                        isExternal
                                                        href={githubUrl}
                                                        startContent={<IoLogoGithub/>}
                                                        variant="bordered"
                                                        className="text-foreground"
                                                        color="primary"
                                                    >
                                                        Source
                                                    </Chip>
                                                )}
                                            </div>
                                        </div>
                                        {image &&
                                            <div className="flex justify-center w-full h-fit mt-4">
                                                <Image
                                                    alt={name + 'image'}
                                                    src={image}
                                                    className=" w-full h-full"
                                                />
                                            </div>
                                        }
                                        <div className="mt-3">{body}</div>
                                    </ScrollArea>
                                </DrawerContent>
                            </Drawer>
                        </div>
                    </div>
                </CardFooter>
            </Card>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="2xl"
                className="hidden lg:flex"
            >
                <ModalContent className="hidden p-3 lg:flex">
                    <>
                        <ModalHeader>{name}</ModalHeader>
                        <ModalBody className="-mt-4">
                            <ScrollArea className="mx-auto w-full max-wg-sm md:max-wg-md pr-3">
                                <div>
                                    <div className="flex gap-x-1 items-center text-md">
                                        <PiUsers/>
                                        <span>{contributors}</span>
                                    </div>
                                    <div className="flex gap-x-1">
                                        {webUrl && (
                                            <Chip
                                                as={Link}
                                                isExternal
                                                href={webUrl}
                                                startContent={<PiGlobeThin/>}
                                                variant="bordered"
                                                className="text-foreground border-foreground border-1"
                                            >
                                                Website
                                            </Chip>
                                        )}
                                        {githubUrl && (
                                            <Chip
                                                as={Link}
                                                isExternal
                                                href={githubUrl}
                                                startContent={<IoLogoGithub/>}
                                                variant="bordered"
                                                className="text-foreground border-foreground border-1"
                                            >
                                                Source
                                            </Chip>
                                        )}
                                    </div>
                                </div>
                                {image &&
                                    <div className="flex justify-center mb-10 w-full h-fit mt-5">
                                        <Image
                                            alt={name + 'image'}
                                            src={image}
                                            className=" w-full h-full"
                                        />
                                    </div>
                                }
                                <div className="mt-2">{body}</div>
                            </ScrollArea>
                        </ModalBody>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
}