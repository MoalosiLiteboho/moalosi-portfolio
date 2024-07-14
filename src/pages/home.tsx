import {Button, Card, CardBody, CardFooter, CardHeader, Chip, cn, Image, Link, User} from "@nextui-org/react";
import Marquee from "react-fast-marquee";
import {PiGlobeThin, PiUsers} from "react-icons/pi";
import {IoLogoGithub} from "react-icons/io5";
import {IoMdArrowForward} from "react-icons/io";
import {FlipWords} from "@/components/animation/flip-words.tsx";
import {SocialMediaLinks} from "@/components/navigation/navigation-links.tsx";
import myProfileImage from "@/assets/images/me2.jpeg"

export default function HomePage() {
    const words = ["Software Engineer.", "Backend Engineer.", "Frontend Engineer.", "DevOps Engineer."];

    const reviews = [
        {
            name: "Jack",
            username: "@jack",
            body: "I've never seen anything like this before. It's amazing. I love it.",
            img: "https://avatar.vercel.sh/jack",
        },
        {
            name: "Jill",
            username: "@jill",
            body: "I don't know what to say. I'm speechless. This is amazing.",
            img: "https://avatar.vercel.sh/jill",
        },
        {
            name: "John",
            username: "@john",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/john",
        },
        {
            name: "Jane",
            username: "@jane",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/jane",
        },
        {
            name: "Jenny",
            username: "@jenny",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/jenny",
        },
        {
            name: "James",
            username: "@james",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/james",
        },
    ];

    const favoriteProjects = [
        {
            name: "ISOC Lesotho Chapter",
            contributors: "Moalosi Liteboho",
            image: "https://isoc.org.ls/wp-content/uploads/2020/08/background_isoc-1.png",
            webUrl: "https://isoc.org.ls/"
        },
        {
            name: "Login & SignUp Java-Swings",
            contributors: "Moalosi Liteboho",
            image: "https://user-images.githubusercontent.com/112495633/227000232-a0b1bb49-75d8-4886-bdcd-4dadc1dd7fe1.png",
            githubUrl: "https://github.com/MoalosiLiteboho/desktop-application-logIn-and-registration-interface"
        },
        {
            name: "Student grading Shell",
            contributors: "Moalosi Liteboho",
            image: "https://source.unsplash.com/4Mw7nkQDByk",
            githubUrl: "https://github.com/MoalosiLiteboho/student-grading-using-bash"
        },
        {
            name: "University System",
            contributors: "Moalosi Liteboho",
            image: "https://nextui.org/images/card-example-6.jpeg",
            githubUrl: "https://github.com/MoalosiLiteboho/moalosi-university-web-application"
        },
    ];

    return (
        <>
            <main className="h-screen w-full flex justify-center md:h-fit lg:h-screen items-center md:px-5">
                <div className="h-fit w-full mt-5 md:mt-10 lg:-mt-10 flex flex-col items-center md:justify-center gap-y-10 md:flex-row-reverse md:gap-x-2 md:items-start">
                    <div className="w-[12em] h-[12em] md:w-[19em] md:h-[15em] lg:w-[16em] lg:h-[16em]">
                        <Image
                            removeWrapper
                            loading="lazy"
                            className="z-0 w-full h-full scale-100 object-cover"
                            alt="my-profile-image"
                            src={myProfileImage}
                            radius="full"
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[90%] md:w-[80%]">
                            <h3 className="text-xl text-center">Hello, It's me</h3>
                            <h2 className="text-2xl text-center">Liteboho James Moalosi</h2>
                            <h3 className="text-xl flex gap-x-2 items-center justify-center">
                                <span>And {"I'm"} a</span>
                                <FlipWords words={words} className="text-primary"/>
                            </h3>
                            <p className="text-center">
                                I love building things and assisting people with my heat. Very active on LinkedIn and
                                Twitter.
                            </p>
                        </div>
                        <div className="flex flex-col gap-x-3 items-center mt-5">
                            <Button
                                color="primary"
                                variant="shadow"
                                className="h-8">
                                Download CV
                            </Button>
                            <div className="flex justify-center items-center mt-5 gap-x-0">
                                {SocialMediaLinks().map((socialLink, index) => (
                                    <Button
                                        key={index}
                                        as={Link}
                                        isIconOnly
                                        isExternal
                                        href={socialLink.route}
                                        radius="full"
                                        variant="light"
                                        className={cn("h-8", socialLink.color || "")}>
                                        {socialLink.icon}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <section className="my-5 px-5 flex flex-col justify-center items-center">
                <h3 className="text-2xl text-center font-light">Check out my latest work</h3>
                <p className="w-full text-center md:w-3/4 lg:w-3/5">
                    I've worked on a variety of projects, from simple websites to complex web applications, backend apis
                    , desktop apps and more. Here are a few of my favorites.
                </p>
                <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-4">
                    {favoriteProjects.map((project, index) => (
                        <Card
                            key={index}
                            isFooterBlurred
                            className="w-full h-[20em]"
                        >
                            <Image
                                removeWrapper
                                alt="Card example background"
                                className="z-0 w-full h-full scale-100 object-cover"
                                src={project.image}
                            />
                            <CardFooter className="absolute bg-white/70 dark:bg-black/50 bottom-0 border-t-1 border-zinc-100/50 z-10">
                                <div className="w-full flex flex-col">
                                    <h6 className="text-black dark:text-white text-md font-semibold">{project.name}</h6>
                                    <div className="flex gap-x-1 items-center text-sm">
                                        <PiUsers />
                                        <span>{project.contributors}</span>
                                    </div>
                                    <div className="w-full flex justify-between items-center">
                                        <div className="flex gap-x-1">
                                            {project.webUrl && (
                                                <Chip
                                                    as={Link}
                                                    isExternal
                                                    href={project.webUrl}
                                                    startContent={<PiGlobeThin/>}
                                                    variant="bordered"
                                                    className="text-foreground"
                                                    color="primary"
                                                >
                                                    Website
                                                </Chip>
                                            )}
                                            {project.githubUrl && (
                                                <Chip
                                                    as={Link}
                                                    isExternal
                                                    href={project.githubUrl}
                                                    startContent={<IoLogoGithub/>}
                                                    variant="bordered"
                                                    className="text-foreground"
                                                    color="primary"
                                                >
                                                    Source
                                                </Chip>
                                            )}
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
                    ))}
                </div>
                <Button
                    as={Link}
                    href="/projects"
                    className="mt-6"
                    variant="bordered"
                    color="primary"
                    endContent={<IoMdArrowForward />}
                >
                    See More
                </Button>
            </section>
            <section>
                <h1 className="flex gap-x-1 text-2xl justify-center font-light">
                    <span>Kind words about</span>
                    <span className="text-primary">My Effort</span>
                </h1>
                <div className="h-fit w-full">
                    <Marquee
                        pauseOnClick
                        pauseOnHover
                        direction="right"
                        className="py-6"
                    >
                        {reviews.map((review, index) => (
                            <Card
                                key={index}
                                className="w-[20em] mx-2"
                            >
                                <CardHeader>
                                    <User
                                        name={review.name}
                                        description={review.username}
                                        avatarProps={{
                                            src: `${review.img}`
                                        }}
                                    />
                                </CardHeader>
                                <CardBody className="-mt-2">
                                    <blockquote className="text-sm text-gray-500">
                                        &quot;
                                        {review.body}
                                        &quot;
                                    </blockquote>
                                </CardBody>
                            </Card>
                        ))}
                    </Marquee>
                </div>
            </section>
        </>
    );
}