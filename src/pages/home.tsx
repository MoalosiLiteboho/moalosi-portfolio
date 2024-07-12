import {Button, cn, Link} from "@nextui-org/react";
import {FlipWords} from "@/components/animation/flip-words.tsx";
import {SocialMediaLinks} from "@/components/navigation/navigation-links.tsx";

export default function HomePage() {
    const words = ["Software Engineer.", "Backend Engineer.", "Frontend Engineer.", "DevOps Engineer."];

    return (
        <>
            <main className="h-screen w-full px-[1em] pt-[3em]">
                <div className="flex flex-col items-center">
                    <div className="w-11/12">
                        <h3 className="text-xl text-center">Hello, It's me</h3>
                        <h2 className="text-2xl text-center">Liteboho James Moalosi</h2>
                        <h3 className="text-xl flex gap-x-2 items-center justify-center">
                            <span>And {"I'm"} a</span>
                            <FlipWords words={words} className="text-primary"/>
                        </h3>
                        <p className="text-center">
                            I love building things and assisting people with my heat. Very active on LinkedIn and Twitter.
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
                <div className="grid grid-cols-1 items-center">

                </div>
            </main>
            <section>
            </section>
        </>
    );
}