import {Button, Card, CardBody, CardHeader, cn, Image, Link, User} from "@nextui-org/react";
import {IoMdArrowForward} from "react-icons/io";
import {GoVerified} from "react-icons/go";
import {FlipWords} from "@/components/animation/flip-words.tsx";
import {SocialMediaLinks} from "@/components/navigation/navigation-links.tsx";
import myProfileImage from "@/assets/images/me2.jpeg"
import myCv from "@/assets/pdf/Moalosi CV.pdf"
import ProjectCard from "@/pages/projects/project-card.tsx";
import {getFavoriteProjects} from "@/pages/projects/get-all-projects.tsx";
import {reviews} from "@/pages/home/reviews.tsx";

const words = ["Software Engineer.", "Backend Engineer.", "Frontend Engineer.", "DevOps Engineer."];

export default function HomePage() {
    return (
        <>
            <main className="h-screen w-full flex justify-center md:h-fit lg:h-screen items-center md:px-5">
                <div className="h-fit w-full md:mt-10 lg:-mt-10 flex flex-col items-center md:justify-center gap-y-10 md:flex-row-reverse md:gap-x-2 md:items-start">
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
                        <div className="flex flex-col gap-x-3 items-center mt-5 md:flex-row">
                            <Button
                                as={Link}
                                href={myCv}
                                color="primary"
                                variant="shadow"
                                className="h-8"
                                download="moalosi-liteboho-cv.pdf"
                            >
                                Download CV
                            </Button>
                            <div className="flex justify-center items-center mt-5 md:mt-0 gap-x-0">
                                {SocialMediaLinks().map((socialLink, index) => (
                                    <Button
                                        key={index}
                                        as={Link}
                                        isIconOnly
                                        isExternal
                                        href={socialLink.route}
                                        radius="full"
                                        variant="light"
                                        className={cn("h-8 ", socialLink.color || "")}>
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
                    {getFavoriteProjects().map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                        />
                    ))}
                </div>
                <Button
                    as={Link}
                    href="/projects"
                    className="mt-6"
                    variant="bordered"
                    color="primary"
                    endContent={<IoMdArrowForward/>}
                >
                    See More
                </Button>
            </section>
            <section className="px-5">
                <h1 className="flex gap-x-1 text-2xl justify-center font-light">
                    <span>Kind words about</span>
                    <span className="text-primary">My Effort</span>
                </h1>
                <div className="w-full h-fit flex items-center justify-center mt-3">
                    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-3">
                        {reviews.map((review, index) => (
                            <Card
                                key={index}
                                className={cn(review.className)}
                            >
                                <CardHeader>
                                    <User
                                        name={review.name}
                                        description={(
                                            <Link
                                                href={review.profileLink}
                                                className="flex items-center gap-x-1 text-tiny hover:underline"
                                            >
                                                <GoVerified/>
                                                {typeof review.status === 'string' ?
                                                    <span>{review.status}</span>
                                                    : <span>{review.status.join(", ")}</span>
                                                }
                                            </Link>
                                        )}
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
                    </div>
                </div>
            </section>
        </>
    );
}
