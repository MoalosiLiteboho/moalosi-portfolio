import {ReactNode} from "react";
import {Chip} from "@nextui-org/react";
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
            <section className="px-5 py-6">
                <h1 className="text-center text-2xl font-light">Who am I?</h1>
                <p className="text-center font-light mt-6">
                    Hi there! I'm Moalosi James Liteboho, a student at Botho University Maseru Lesotho enrolled in
                    Bachelor of Science (Honours) in Computing program concentrating in software engineering and in my
                    last six month of completing my degree. I'm passionate about software engineering, dev-ops
                    engineering and cybersecurity.
                </p>
            </section>
            <section className="p-5 flex flex-col gap-5">
                <h1 className="text-center text-2xl font-light">My Skills</h1>
                <div className="p-1 border rounded-lg">
                    {getMySkills().map((skill, index) => (
                        <Chip
                            key={index}
                            variant="flat"
                            className="m-1"
                            color={skill.color}
                            startContent={<div className="ml-1">{skill.level}</div>}
                            endContent={skill.icon}
                        >
                            {skill.tittle}
                        </Chip>
                    ))}
                </div>
            </section>
            <section>
                <h1 className="text-center text-2xl font-light">My Certificates</h1>
                <div>

                </div>
            </section>
        </>
    );
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
            icon: <SiSpring className="mr-1" />
        },
        {
            color: "success",
            tittle: "Java",
            level: "90%",
            icon: <GrJava className="mr-1" />
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