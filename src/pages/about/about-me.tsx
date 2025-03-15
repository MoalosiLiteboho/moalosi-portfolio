import {Accordion, AccordionItem, Avatar, Button, Card, CardBody, Chip, cn, Image, Link} from "@heroui/react";
import {getEducation} from "@/pages/about/get-education.tsx";
import {getMySkills} from "@/pages/about/get-skills.tsx";
import {getExperience} from "@/pages/about/get-experience.tsx";

export default function AboutMePage() {
    return (
        <>
            <main className="py-14">
                <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-13">
                    <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Who I Am?</h2>
                    <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-20">
                        <div className="relative space-y-4">
                            <p className="text-muted-foreground">
                                I am Liteboho Moalosi, a passionate Software Engineer dedicated to creating impactful
                                digital experiences. With expertise in web development, cloud computing, and
                                cybersecurity basics, I specialize in crafting user-friendly systems that empower
                                businesses and individuals to achieve their goals.
                            </p>
                            <div className="">
                                <h3 className="font-medium text-2xl ">Why Work With Me</h3>
                                <ul className="list-disc list-outside pl-8 text-gray-700">
                                    <li><span className="font-medium text-foreground">Tailored Solutions:</span> I craft modern websites and apps designed to fit your unique needs.</li>
                                    <li><span className="font-medium text-foreground">Cutting-Edge Innovation:</span> I build solutions that enhance engagement using the latest technology.</li>
                                    <li><span className="font-medium text-foreground">Creative Precision:</span> I bring your ideas to life with accuracy and creativity.</li>
                                    <li><span className="font-medium text-foreground">Expert Execution:</span> Proficient in SQL, Java, Spring Boot, and more, I deliver excellence every time.</li>
                                </ul>
                            </div>
                        </div>
                        <Card
                            isFooterBlurred
                            className="w-full h-[20em] mt-10"
                        >
                            <Image
                                removeWrapper
                                alt={`-image`}
                                className="z-0 w-full h-full scale-100 object-cover"
                                src="/images/my-image-one.jpeg"
                            />
                        </Card>
                    </div>
                </div>
            </main>
            <section className="py-10">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                        <div className="flex flex-col gap-y-4">
                            <h2 className="text-4xl lg:text-5xl font-medium w-full lg:w-3/5">The Academic Path to Expertise</h2>
                            <p className="text-lg">
                                My journey in computing has been defined by a commitment to continuous learning and a
                                passion for innovative problem-solving. From foundational courses to specialized
                                studies, each step has prepared me to excel in the tech industry.
                            </p>
                        </div>
                        <Accordion
                            variant="splitted"
                        >
                            {getEducation().map((item, index) => (
                                <AccordionItem
                                    isCompact
                                    key={index}
                                    aria-label={item.name}
                                    title={item.name}
                                    subtitle={item.description}
                                    startContent={
                                        <Avatar
                                            isBordered
                                            size="md"
                                            name={item.name}
                                            src={item.image}
                                        />
                                    }
                                >
                                    {item.body}
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
            <section className="w-full h-fit flex py-6 px-6 lg:px-14 flex-col gap-y-5 items-center">
                <h1 className="text-4xl font-medium lg:text-5xl">Core Competencies</h1>
                <p className="max-w-3xl text-center text-lg">
                    My expertise lies in crafting innovative solutions that drive efficiency and enhance user
                    experiences. Combining technical proficiency with creative problem-solving, I deliver results that
                    exceed expectations.
                </p>
                <div className="p-1 flex flex-wrap justify-center gap-2">
                    {getMySkills().map((skill, index) => (
                        <Chip
                            key={index}
                            variant="bordered"
                            className={cn("", skill.className)}
                            endContent={skill.icon}
                        >
                            {skill.tittle}
                        </Chip>
                    ))}
                </div>
            </section>
            <section className="w-full h-fit flex py-6 px-6 lg:px-14 flex-col lg:flex-row gap-y-5 items-center">
               <div className="w-full lg:w-1/2 flex flex-col gap-y-9">
                   <h1 className="text-4xl font-medium lg:text-5xl">Professional Journey</h1>
                   <p className="text-lg">
                       Through diverse roles and challenging projects, I've honed my expertise in software engineering
                       and problem-solving. My experience demonstrates a commitment to delivering impactful solutions
                       and driving technological innovation.
                   </p>
               </div>
                <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-y-3 gap-x-3 ">
                    {getExperience().map((item, index) => (
                        <Card
                            key={index}
                            className="w-full"
                        >
                            <CardBody>
                                <div className="w-full flex flex-col gap-y-2">
                                    <div className="flex justify-between gap-y-1">
                                        <h4 className="text-start">{item.tittle}</h4>
                                        <p className="">{item.duration}</p>
                                    </div>
                                    <div className="flex justify-between gap-x-1">
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                        {item.url &&
                                            <Button
                                                isIconOnly
                                                as={Link}
                                                isExternal
                                                showAnchorIcon
                                                href={item.url}
                                                variant="shadow"
                                                size="sm"
                                                color="primary"
                                            />
                                        }
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    );
}