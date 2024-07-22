import {Accordion, AccordionItem, Avatar, Button, Card, CardBody, Chip, cn, Link} from "@nextui-org/react";
import {getEducation} from "@/pages/about/get-education.tsx";
import {getMySkills} from "@/pages/about/get-skills.tsx";
import {getExperience} from "@/pages/about/get-experience.tsx";

export default function AboutMePage() {
    return (
        <>
            <section className="px-5 py-6 flex justify-center">
                <div className="w-full md:w-4/5 lg:w-3/5">
                    <h1 className="text-center text-2xl font-light mt-8">Who am Moalosi Liteboho?</h1>
                    <p className="text-center font-light mt-6">
                        In 2020 I was enrolled in Botho University Maseru Lesotho in a program named Bachelor of Science
                        (Honours) in Computing which was 4.5 years program and I did not know anything about computing
                        as I thought I wanted to be Doctor as I grown told that that looks nice on me until I chose to be
                        Doctor of Computers. Later I chose to specialize in Software Engineering and now in my last six
                        month of completing my degree. During my learning, I felt in love with Software Engineering
                        especially Web Design and Development, and Api Development. And I also become passionate with
                        DevOps Engineering and Cybersecurity and more.
                    </p>
                </div>
            </section>
            <section className="w-full h-fit flex py-6 flex-col gap-y-5 justify-center md:flex-row">
                <div className="px-2 w-full flex flex-col gap-y-4">
                    <h1 className="text-center text-2xl font-light">Education</h1>
                    <Accordion variant="splitted">
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
                <div className="w-full flex flex-col gap-5">
                    <h1 className="text-center text-2xl font-light">My Skills</h1>
                    <div className="p-1">
                        {getMySkills().map((skill, index) => (
                            <Chip
                                key={index}
                                variant="bordered"
                                className={cn("m-0.5", skill.className)}
                                endContent={skill.icon}
                            >
                                {skill.tittle}
                            </Chip>
                        ))}
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center">
                <h1 className="text-center text-2xl font-light">Experience</h1>
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center gap-y-3 gap-x-3 ">
                    {getExperience().map((item, index) => (
                        <Card
                            key={index}
                            className="lg:w-1/4"
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
            <section className="flex flex-col items-center p-4">
                <h1 className="text-center text-2xl font-light">Get in Touch</h1>
                <p className="text-center w-full md:w-3/4 lg:w-3/5">
                    Want to chat? Just shut me a dm on <Link isExternal href="https://www.linkedin.com/in/liteboho-moalosi-64151626a/">
                    LinkedIn</Link>, <Link isExternal href="https://twitter.com/GenieMoalosi">Twitter</Link> or <Link isExternal href="mailto:litebohojamesmoalosi@gmail.com">
                    Email</Link> me with a direct message or question and I will respond whenever i can.
                </p>
            </section>
        </>
    );
}