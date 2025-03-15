import {Button, Card, CardBody, CardFooter, cn, Image, Link, Spinner, User} from "@heroui/react";
import {IoMdArrowForward} from "react-icons/io";
import {GoVerified} from "react-icons/go";
import {FlipWords} from "@/components/animation/flip-words.tsx";
import {SocialMediaLinks} from "@/components/navigation/navigation-links.tsx";
import ProjectCard from "@/components/ui/project-card.tsx";
import {getFavoriteProjects} from "@/pages/projects/get-all-projects.tsx";
import useReviews from "@/pages/reviews/use-reviews.ts";

const words = ["Software Engineer.", "FullStack Developer.", "Java Developer.", "DevOps Engineer.", "CTF Player."];

export default function HomePage() {
    const {reviews, loading, error} = useReviews();

    return (
        <>
            <main className="w-full h-screen -mt-[3.5em] px-6 lg:px-14 flex flex-col-reverse lg:flex-row justify-center items-center gap-x-16 gap-y-5 md:gap-y-16">
                <div className="flex flex-col gap-y-2">
                    <p className="text-primary-500 text-center lg:text-start font-medium text-lg md:text-xl">Hello, It's me</p>
                    <h1 className="max-w-2xl text-balance text-4xl text-center lg:text-start md:text-6xl xl:text-7xl">Liteboho James Moalosi</h1>
                    <h3 className="text-xl flex justify-center lg:justify-start text-pretty gap-x-2 text-gray-600 ">
                        <span>And {"I'm"} a</span>
                        <FlipWords words={words} className="text-primary"/>
                    </h3>
                    <p className="max-w-2xl text-pretty text-center lg:text-start text-lg md:text-xl text-gray-600">
                        With a <strong className="text-red-600">heart ❤️</strong> for innovation and helping
                        others. I thrive on building efficient systems and processes that make a difference.
                        Connect with me on <strong className="text-primary">LinkedIn    </strong>
                        and <strong>Twitter</strong> for insights and collaboration.
                    </p>
                    <div className="flex flex-row gap-x-3 justify-center lg:justify-start items-center mt-4 ">
                        <Button
                            as={Link}
                            href="/pdf/moalosi-liteboho-cv.pdf"
                            color="primary"
                            variant="shadow"
                            className="h-8"
                            download="moalosi-liteboho-cv.pdf"
                        >
                            Download CV
                        </Button>
                        <div className="flex justify-center items-center gap-x-0">
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
                <Image
                    removeWrapper
                    loading="lazy"
                    className="z-0 w-[10em] h-[10em] md:w-[25em] md:h-[25em] mt-[4em] scale-100 object-cover"
                    alt="my-profile-image"
                    src="/images/my-profile-picture.jpeg"
                    radius="full"
                />
            </main>
            <section className="py-8">
                <div className="mx-auto max-w-7xl space-y-4 px-6 md:space-y-8">
                    <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center md:space-y-6">
                        <h2 className="text-4xl font-light lg:text-5xl">Check out my latest work</h2>
                        <p className="text-lg lg:text-xl text-gray-600">
                            Throughout my career, I've had the opportunity to work on a diverse range of projects, spanning
                            simple websites, complex web applications, backend APIs, desktop applications, and more. Below,
                            I've highlighted a few of my most notable and favorite projects.
                        </p>
                    </div>
                    <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {getFavoriteProjects().map((project, index) => (
                            <ProjectCard
                                key={index}
                                {...project}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Button
                            as={Link}
                            href="/projects"
                            className="mt-6"
                            variant="shadow"
                            color="primary"
                            endContent={<IoMdArrowForward/>}
                        >
                            See More
                        </Button>
                    </div>
                </div>
            </section>
            <section className="px-6 lg:px-14 py-8 flex flex-col gap-y-6">
                <h1 className="text-4xl lg:text-5xl text-center font-light">
                    <span>Kind words about</span>
                    <span className="text-primary ml-2">My Effort</span>
                </h1>
                <div className="w-full h-fit flex items-center justify-center mt-3">
                    {loading ? <Spinner size="lg" label="loading reviews..." variant="gradient" />
                        : error ? <span className="text-xl text-gray-600 text-pretty">Oops! there's something went wrong when fetching reviews....</span>
                            : <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {reviews.map((review, index) => (
                                    <Card
                                        key={`best-review-card-of-${review.name}-${index}`}
                                        className={cn(
                                            index === 0 && "md:col-span-2 lg:row-span-2"
                                        )}
                                    >
                                        <CardBody className="-mb-2">
                                            <blockquote
                                                className={cn(
                                                    "text-sm text-gray-500",
                                                    index === 0 && "lg:text-4xl lg:leading-[1em]",
                                                    index === 2 && "md:text-2xl lg:text-sm"
                                                )}
                                            >
                                                &quot;
                                                {review.body}
                                                &quot;
                                            </blockquote>
                                        </CardBody>
                                        <CardFooter>
                                            <User
                                                name={review.name}
                                                description={(
                                                    <Link
                                                        href={review.profileLink}
                                                        className="flex items-center gap-x-1 text-tiny hover:underline"
                                                    >
                                                        <GoVerified className="text-lg" />
                                                        {typeof review.status === 'string' ?
                                                            <span>{review.status}</span>
                                                            : <span>{review.status.join(", ")}</span>
                                                        }
                                                    </Link>
                                                )}
                                                avatarProps={{
                                                    src: `${review.img}`,
                                                    isBordered: true
                                                }}
                                            />
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                    }
                </div>
            </section>
            <section className="py-8">
                <div className="mx-auto max-w-7xl space-y-4 px-6 md:space-y-8">
                    <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center md:space-y-6">
                        <h2 className="text-4xl font-light lg:text-5xl">Get in Touch</h2>
                        <p className="text-lg lg:text-xl text-gray-600">
                            Want to chat? Just shut me a dm on <Link isExternal className="text-lg lg:text-xl" href="https://www.linkedin.com/in/liteboho-moalosi-64151626a/">
                            LinkedIn</Link>, <Link isExternal className="text-lg lg:text-xl" href="https://twitter.com/GenieMoalosi">
                            Twitter</Link> or <Link isExternal className="text-lg lg:text-xl" href="mailto:litebohojamesmoalosi@gmail.com">Email</Link> me
                            with a direct message or question and I will respond whenever i can.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
