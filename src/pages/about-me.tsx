import {ReactNode} from "react";
import {Accordion, AccordionItem, Avatar, Button, Card, CardBody, Chip, Link} from "@nextui-org/react";
import {GrJava, GrSecure} from "react-icons/gr";
import {SiSpring} from "react-icons/si";
import {FaCode, FaCodeBranch, FaLinux, FaNode, FaPython, FaReact} from "react-icons/fa6";
import {TbBrandCSharp, TbBucket} from "react-icons/tb";
import {CgCPlusPlus} from "react-icons/cg";
import {BiLogoJavascript, BiLogoPostgresql, BiLogoTypescript} from "react-icons/bi";
import {VscTerminalPowershell} from "react-icons/vsc";
import cybersecurityCertificate from "@/assets/pdf/liteboho-sanren-cyberserurity-cerificate-finals.pdf"
import bothoUniversityTranscript from "@/assets/pdf/liteboho-moalosi-botho-university-transcript.pdf"
import {IoLogoDocker} from "react-icons/io5";

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
            image: "data:image/jpeg;base64,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",
            name: "Botho University Lesotho",
            description: "B.sc(Hons) in Computing",
            body: <p className="font-light text-sm">
                I am currently enrolled in Botho University Maseru Lesotho doing B.sc (Hons) in Computing concentrating
                in Software Engineering, in my last six month of my studies. And all modules i did are in this
                <Link className="ml-1" href={bothoUniversityTranscript} download="liteboho-moalosi-botho-university-transcript.pdf">transcript</Link>.
            </p>
        },
        {
            image: "data:image/png;base64,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",
            name: "SANReN Cyber Security Competition",
            description: "Participation In Finals 2022 Certificate",
            body: <p className="font-light text-sm">
                I participated in SANReN CSC Cyber Security Challenge final in 2022 that was in Pretoria South Africa,
                under Cyber Codex - Botho University Lesotho team. And We appeared in 4 position and obtained
                <Link className="ml-1" href={cybersecurityCertificate} download="moalosi-liteboho-sanren-cybersecurity-final-2022-certificate.pdf">certificate</Link>.
            </p>
        },
        {
            name: "Holy Cross High School",
            description: "JC and LJCSE",
            body: <p className="font-light text-sm">
                I did my JS and LJCSE certificate in Holy Cross High School in Mohale's Hoek Lesotho, and got second class
                in both certificate.
            </p>
        },
    ];
}

type Skill = {
    color: "primary" | "success" | "warning";
    tittle: string;
    icon: ReactNode;
}

const getMySkills = (): Skill[] => {
    return [
        {
            color: "success",
            tittle: "Spring boot",
            icon: <SiSpring className="mr-1"/>
        },
        {
            color: "success",
            tittle: "Java",
            icon: <GrJava className="mr-1"/>
        },
        {
            color: "primary",
            tittle: "GitHub",
            icon: <FaCodeBranch className="mr-1" />
        },
        {
            color: "success",
            tittle: "C-Sharp",
            icon: <TbBrandCSharp className="mr-1" />
        },
        {
            color: "success",
            tittle: "Functional Programing",
            icon: <FaCode className="mr-1" />
        },
        {
            color: "success",
            tittle: "C-Plus-Plus",
            icon: <CgCPlusPlus className="mr-1" />
        },
        {
            color: "success",
            tittle: "Python",
            icon: <FaPython className="mr-1" />
        },
        {
            color: "success",
            tittle: "React",
            icon: <FaReact className="mr-1" />
        },
        {
            color: "success",
            tittle: "Typescript",
            icon: <BiLogoTypescript className="mr-1" />
        },
        {
            color: "success",
            tittle: "Javascript",
            icon: <BiLogoJavascript className="mr-1" />
        },
        {
            color: "success",
            tittle: "Linux",
            icon: <FaLinux className="mr-1" />
        },
        {
            color: "success",
            tittle: "Shell Scripting",
            icon: <VscTerminalPowershell className="mr-1" />
        },
        {
            color: "success",
            tittle: "Cybersecurity",
            icon: <GrSecure className="mr-1" />
        },
        {
            color: "success",
            tittle: "S3 Bucket",
            icon: <TbBucket className="mr-1" />
        },
        {
            color: "success",
            tittle: "Postgresql",
            icon: <BiLogoPostgresql className="mr-1" />
        },
        {
            color: "success",
            tittle: "Docker",
            icon: <IoLogoDocker className="mr-1" />
        },
        {
            color: "success",
            tittle: "NodeJs",
            icon: <FaNode className="mr-1" />
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