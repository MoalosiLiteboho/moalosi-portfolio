import {Button, Card, CardBody, CardHeader, cn, Image, Link, User} from "@nextui-org/react";
import {FlipWords} from "@/components/animation/flip-words.tsx";
import {SocialMediaLinks} from "@/components/navigation/navigation-links.tsx";
import myProfileImage from "@/assets/images/me2.jpeg"
import Marquee from "react-fast-marquee";

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

    return (
        <>
            <main className="h-screen w-full flex justify-center md:h-fit md:px-5">
                <div className="h-fit w-full mt-5 md:mt-10 flex flex-col items-center md:justify-center gap-y-10 md:flex-row-reverse md:gap-x-2 md:items-start">
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
                        className="bg-white py-6"
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
                                    <blockquote className="text-sm text-slate-600">
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