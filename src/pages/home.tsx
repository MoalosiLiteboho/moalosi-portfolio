import {Button, cn, Image, Link} from "@nextui-org/react";
import {FlipWords} from "@/components/animation/flip-words.tsx";
import {SocialMediaLinks} from "@/components/navigation/navigation-links.tsx";
import myProfileImage from "@/assets/images/me2.jpeg"

export default function HomePage() {
    const words = ["Software Engineer.", "Backend Engineer.", "Frontend Engineer.", "DevOps Engineer."];

    return (
        <>
            <main className="h-screen w-full px-[1em] pt-[2em] flex flex-col items-center md:justify-center gap-y-10 md:flex-row-reverse md:gap-x-2 md:items-start">
                <div className="w-[12em] h-[12em] md:w-[16em] md:h-[15em] lg:h-[16em]">
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
            </main>
            <section>
            </section>
        </>
    );
}