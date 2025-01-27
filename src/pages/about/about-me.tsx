import {Accordion, AccordionItem, Avatar, Button, Card, CardBody, Chip, cn, Link} from "@heroui/react";
import {getEducation} from "@/pages/about/get-education.tsx";
import {getMySkills} from "@/pages/about/get-skills.tsx";
import {getExperience} from "@/pages/about/get-experience.tsx";

export default function AboutMePage() {
    return (
        <>
            <section className="px-5 py-6 flex justify-center items-center w-full lg:h-screen">
                <div className="w-full md:w-4/5 lg:w-3/5">
                    <h1 className="text-center text-2xl font-light lg:-mt-[3.5em]">Getting to Know Moalosi Liteboho</h1>
                    <p className="text-center font-light mt-6 flex flex-col gap-y-3">
                        <p>
                            As a passionate and driven individual, I embarked on a transformative journey at <span className="text-primary">Botho
                            University in Maseru, Lesotho</span>, where I pursued a <span className="text-primary">Bachelor
                            of Science (Honours) in Computing Concentrating in Software Engineering</span>.
                            Initially drawn to a career in medicine, I discovered a new passion for computing that
                            reshaped my path. Software Engineering became my true calling, igniting a fire within me to
                            craft innovative solutions and build impactful projects.
                        </p>
                        <p>
                            Beyond the realms of Web Design and Development, API Development, DevOps Engineering, and
                            Cybersecurity, I am deeply passionate about the art of Software Engineering itself. I love
                            building systems that solve real-world problems, turning ideas into reality, and pushing the
                            boundaries of what technology can achieve.
                        </p>
                        <p>
                            I successfully completed my degree in December 2024 and am now eagerly awaiting my
                            graduation ceremony. This milestone marks the culmination of my academic journey, and I am
                            excited to apply my skills and knowledge to drive innovation, foster growth, and make a
                            lasting impact in the tech world.
                        </p>
                    </p>
                </div>
            </section>
            <section className="w-full h-fit flex py-6 flex-col gap-y-5 justify-center md:flex-row">
                <div className="px-2 w-full flex flex-col gap-y-4">
                    <h1 className="text-center text-2xl font-light">Education</h1>
                    <Accordion
                        variant="splitted"
                        defaultExpandedKeys={["0"]}
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