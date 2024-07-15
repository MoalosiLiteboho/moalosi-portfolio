import {ReactNode} from "react";
import {Accordion, AccordionItem, Avatar, Button, Card, CardBody, Chip, Link} from "@nextui-org/react";
import {GrJava, GrSecure} from "react-icons/gr";
import {SiSpring} from "react-icons/si";
import {FaCode, FaCodeBranch, FaLinux, FaPython, FaReact} from "react-icons/fa6";
import {TbBrandCSharp, TbBucket} from "react-icons/tb";
import {CgCPlusPlus} from "react-icons/cg";
import {BiLogoJavascript, BiLogoPostgresql, BiLogoTypescript} from "react-icons/bi";
import {VscTerminalPowershell} from "react-icons/vsc";

export default function AboutMePage() {
    return (
        <>
            <section className="px-5 py-6 flex justify-center">
                <div className="w-full md:w-4/5 lg:w-3/5">
                    <h1 className="text-center text-2xl font-light mt-8">Who am I?</h1>
                    <p className="text-center font-light mt-6">
                        Hi there! I'm Moalosi James Liteboho, a student at Botho University Maseru Lesotho enrolled in
                        Bachelor of Science (Honours) in Computing program concentrating in software engineering and in
                        my last six month of completing my degree. I'm passionate about software engineering, dev-ops
                        engineering and cybersecurity.
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
                                variant="flat"
                                className="m-1"
                                color={skill.color}
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
                    Want to chat? Just shut me a dm <span>on any of the bellow social media links or emails with a
                    direct message or question</span> and i will respond whenever i can.
                </p>

            </section>
        </>
    );
}

type Education = {
    image?: string;
    name: string;
    description: string;
    body: ReactNode;
}

const getEducation = (): Education[] => {
    return [
        {
            name: "Botho University",
            description: "B.sc(Hons) in Computing",
            body: "2020-25"
        },
        {
            name: "Holy Cross High School",
            description: "JC and LJCSE",
            body: ""
        },
        {
            name: "Seaka L.E.C Primary",
            description: "Primary Certificate",
            body: ""
        },
    ];
}

type Skill = {
    color: "primary" | "success" | "warning";
    tittle: string;
    level: string;
    icon: ReactNode;
}

const getMySkills = (): Skill[] => {
    return [
        {
            color: "success",
            tittle: "Spring boot",
            level: "70%",
            icon: <SiSpring className="mr-1"/>
        },
        {
            color: "success",
            tittle: "Java",
            level: "90%",
            icon: <GrJava className="mr-1"/>
        },
        {
            color: "primary",
            tittle: "GitHub",
            level: "75%",
            icon: <FaCodeBranch className="mr-1" />
        },
        {
            color: "success",
            tittle: "C-Sharp",
            level: "93%",
            icon: <TbBrandCSharp className="mr-1" />
        },
        {
            color: "success",
            tittle: "Functional Programing",
            level: "93%",
            icon: <FaCode className="mr-1" />
        },
        {
            color: "success",
            tittle: "C-Plus-Plus",
            level: "93%",
            icon: <CgCPlusPlus className="mr-1" />
        },
        {
            color: "success",
            tittle: "Python",
            level: "93%",
            icon: <FaPython className="mr-1" />
        },
        {
            color: "success",
            tittle: "React",
            level: "93%",
            icon: <FaReact className="mr-1" />
        },
        {
            color: "success",
            tittle: "Typescript",
            level: "93%",
            icon: <BiLogoTypescript className="mr-1" />
        },
        {
            color: "success",
            tittle: "Javascript",
            level: "93%",
            icon: <BiLogoJavascript className="mr-1" />
        },
        {
            color: "success",
            tittle: "Linux",
            level: "93%",
            icon: <FaLinux className="mr-1" />
        },
        {
            color: "success",
            tittle: "Shell Scripting",
            level: "93%",
            icon: <VscTerminalPowershell className="mr-1" />
        },
        {
            color: "success",
            tittle: "Cybersecurity",
            level: "93%",
            icon: <GrSecure className="mr-1" />
        },
        {
            color: "success",
            tittle: "S3 Bucket",
            level: "93%",
            icon: <TbBucket className="mr-1" />
        },
        {
            color: "success",
            tittle: "Postgresql",
            level: "93%",
            icon: <BiLogoPostgresql className="mr-1" />
        },
    ]
}

type Experience = {
    tittle: string;
    description: string;
    image?: string;
    url?: string;
    duration: string;
}

const getExperience = (): Experience[] => {
    return [
        {
            tittle: "ISOC Lesotho",
            description: "Web Developer & Designer, DevOps Engineer",
            url: "https://isoc.org.ls/",
            duration: "June, 2024"
        },
        {
            tittle: "Tsepo Ea Rona Finance",
            description: "Internee: Web Developer & Designer, DevOps Engineer, Backend Engineer",
            duration: "Jul-Nov, 2023"
        }
    ];
}