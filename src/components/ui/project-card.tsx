import {ReactNode} from "react";
import {
    Button,
    Card,
    CardFooter, CardHeader, CardProps,
    Chip,
    Drawer,
    DrawerContent,
    DrawerHeader,
    Image, ImageProps,
    Link,
    Modal,
    ModalContent,
    ModalHeader,
    ScrollShadow,
    useDisclosure
} from "@heroui/react";
import {PiGlobeThin, PiUsers} from "react-icons/pi";
import {IoLogoGithub} from "react-icons/io5";
import {CgUnavailable} from "react-icons/cg";
import useScreenType from "react-screentype-hook";

export type Project = {
    name: string;
    status?: "upcoming" | "completed" | "in-process";
    image: string;
    icon?: ReactNode;
    contributors?: string;
    webUrl?: string;
    githubUrl?: string;
    body?: ReactNode;
    isBest?: boolean;
}

export type ProjectCardProps = Project & {
    className?: string;
    displayStatus?: boolean;
    cardProps?: CardProps;
    imageProps?: ImageProps;
}

export default function ProjectCard({displayStatus, name, status, image, contributors, githubUrl, webUrl, icon, body, cardProps, imageProps}: ProjectCardProps) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const screenType = useScreenType();

    return (
        <>
            <Card
                isFooterBlurred
                className="w-full h-[18em]"
                {...cardProps}
            >
                {displayStatus && (
                    <CardHeader className="absolute justify-end">
                        <Chip
                            size="sm"
                            variant="shadow"
                            color={status === "completed" ? "success"
                                : status === "upcoming" ? "warning"
                                    : "secondary"
                            }
                            className="text-white capitalize"
                        >
                            {status}
                        </Chip>
                    </CardHeader>
                )}
                <Image
                    removeWrapper
                    alt={`${name}-image`}
                    className="z-0 w-full h-full scale-100 object-cover"
                    src={image}
                    {...imageProps}
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
                                className="w-fit"
                                onPress={onOpen}
                            >
                                More
                            </Button>
                        </div>
                    </div>
                </CardFooter>
            </Card>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            <Drawer
                size="md"
                placement="bottom"
                scrollBehavior="inside"
                isOpen={isOpen && (screenType.isMobile || screenType.isTablet)}
                onOpenChange={onOpenChange}
            >
                <DrawerContent>
                    <>
                        <DrawerHeader>{name}</DrawerHeader>
                        <ScrollShadow
                            hideScrollBar
                            orientation="horizontal"
                            className="mx-auto w-full max-wg-sm md:max-wg-md p-5"
                            offset={100}
                        >
                            <div className="flex flex-col gap-y-4">
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
                        </ScrollShadow>
                    </>
                </DrawerContent>
            </Drawer>
            <Modal
                scrollBehavior="inside"
                isOpen={isOpen && (screenType.isDesktop || screenType.isLargeDesktop)}
                onOpenChange={onOpenChange}
                size="3xl"
                className="hidden lg:flex"
            >
                <ModalContent className="hidden p-3 lg:flex">
                    <>
                        <ModalHeader>{name}</ModalHeader>
                        <ScrollShadow
                            hideScrollBar
                            orientation="horizontal"
                            className="mx-auto w-full max-wg-sm md:max-wg-md p-5"
                            offset={100}
                        >
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
                        </ScrollShadow>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
}