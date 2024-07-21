import {ReactNode} from "react";
import {SiSpring} from "react-icons/si";
import {GrJava, GrSecure} from "react-icons/gr";
import {FaCode, FaCodeBranch, FaLinux, FaPython, FaReact} from "react-icons/fa6";
import {TbBrandCSharp, TbBucket} from "react-icons/tb";
import {CgCPlusPlus} from "react-icons/cg";
import {BiLogoJavascript, BiLogoPostgresql, BiLogoTypescript} from "react-icons/bi";
import {VscTerminalPowershell} from "react-icons/vsc";
import {IoLogoDocker, IoLogoNodejs} from "react-icons/io5";
import {BsBoxes, BsFiletypePhp} from "react-icons/bs";

export type Skill = {
    color: "primary" | "success" | "warning";
    tittle: string;
    icon: ReactNode;
}

export const getMySkills = (): Skill[] => {
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
            icon: <IoLogoNodejs className="mr-1" />
        },
        {
            color: "success",
            tittle: "Microservice architecture",
            icon: <BsBoxes className="mr-1" />
        },
        {
            color: "success",
            tittle: "Php",
            icon: <BsFiletypePhp className="mr-1" />
        },

    ]
}