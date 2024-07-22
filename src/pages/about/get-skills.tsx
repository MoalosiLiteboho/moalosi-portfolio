import {ReactNode} from "react";
import {SiGraphql, SiJsonwebtokens, SiSpring} from "react-icons/si";
import {GrJava, GrSecure} from "react-icons/gr";
import {FaCode, FaCodeBranch, FaLinux, FaPython, FaReact, FaRegComments} from "react-icons/fa6";
import {TbBrandCSharp, TbBrandFramerMotion, TbBucket} from "react-icons/tb";
import {CgCPlusPlus} from "react-icons/cg";
import {BiLogoJavascript, BiLogoPostgresql, BiLogoTailwindCss, BiLogoTypescript} from "react-icons/bi";
import {VscTerminalPowershell} from "react-icons/vsc";
import {IoLogoDocker, IoLogoGithub, IoLogoNodejs} from "react-icons/io5";
import {BsBoxes, BsFiletypePhp} from "react-icons/bs";
import {LiaBrainSolid} from "react-icons/lia";

export type Skill = {
    tittle: string;
    className?: string;
    icon: ReactNode;
}

export const getMySkills = (): Skill[] => {
    return [
        {
            className: "border-foreground",
            tittle: "Good Communication",
            icon: <FaRegComments className="mr-1"/>
        },
        {
            className: "text-green-600 border-green-600",
            tittle: "Spring boot",
            icon: <SiSpring className="mr-1"/>
        },
        {
            className: "text-danger border-danger",
            tittle: "Java",
            icon: <GrJava className="mr-1 text-blue-600"/>
        },
        {
            className: "border-foreground",
            tittle: "GitHub Actions",
            icon: <FaCodeBranch className="mr-1" />
        },
        {
            className: "text-[#8a2be2] border-[#8a2be2]",
            tittle: "C-Sharp",
            icon: <TbBrandCSharp className="mr-1" />
        },
        {
            className: "border-foreground",
            tittle: "Functional Programing",
            icon: <FaCode className="mr-1" />
        },
        {
            className: "text-blue-700 border-blue-700",
            tittle: "C-Plus-Plus",
            icon: <CgCPlusPlus className="mr-1" />
        },
        {
            className: "text-[#4584b6] border-[#4584b6]",
            tittle: "Python",
            icon: <FaPython className="mr-1 text-[#ffde57]" />
        },
        {
            className: "text-[#61dbfb] border-[#61dbfb]",
            tittle: "React",
            icon: <FaReact className="mr-1" />
        },
        {
            className: "text-blue-500 border-blue-500",
            tittle: "Typescript",
            icon: <BiLogoTypescript className="mr-1" />
        },
        {
            className: "text-yellow-600 border-yellow-600",
            tittle: "Javascript",
            icon: <BiLogoJavascript className="mr-1" />
        },
        {
            className: "text-[#e95420] border-[#e95420]",
            tittle: "Linux",
            icon: <FaLinux className="mr-1" />
        },
        {
            className: "text-foreground border-foreground",
            tittle: "Shell Scripting",
            icon: <VscTerminalPowershell className="mr-1" />
        },
        {
            className: "border-foreground",
            tittle: "Cybersecurity",
            icon: <GrSecure className="mr-1" />
        },
        {
            className: "text-yellow-400 border-yellow-400",
            tittle: "S3 Bucket",
            icon: <TbBucket className="mr-1" />
        },
        {
            className: "text-[#0064a5] border-[#0064a5]",
            tittle: "Postgresql",
            icon: <BiLogoPostgresql className="mr-1" />
        },
        {
            className: "text-blue-700 border-blue-600",
            tittle: "Docker",
            icon: <IoLogoDocker className="mr-1" />
        },
        {
            className: "text-[#3c873a] border-[#3c873a]",
            tittle: "NodeJs",
            icon: <IoLogoNodejs className="mr-1" />
        },
        {
            className: "text-foreground border-foreground",
            tittle: "Microservice architecture",
            icon: <BsBoxes className="mr-1" />
        },
        {
            className: "text-blue-900 border-blue-900",
            tittle: "Php",
            icon: <BsFiletypePhp className="mr-1" />
        },
        {
            className: "border-foreground",
            tittle: "GitHub",
            icon: <IoLogoGithub className="mr-1" />
        },
        {
            className: "border-foreground",
            tittle: "Problem Solving",
            icon: <LiaBrainSolid className="mr-1" />
        },
        {
            className: "text-green-600 border-green-600",
            tittle: "Spring boot Security",
            icon: <SiSpring className="mr-1"/>
        },
        {
            className: "text-[#e535ab] border-[#e535ab]",
            tittle: "GraphQl",
            icon: <SiGraphql className="mr-1"/>
        },
        {
            className: "bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-400 to-cyan-400 border-cyan-400",
            tittle: "Json Web Token",
            icon: <SiJsonwebtokens className="mr-1 text-cyan-400"/>
        },
        {
            className: "text-blue-500 border-blue-500",
            tittle: "Tailwind Css",
            icon: <BiLogoTailwindCss className="mr-1"/>
        },
        {
            className: "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 border-violet-600",
            tittle: "Framer Motion",
            icon: <TbBrandFramerMotion className="mr-1 text-violet-600"/>
        },
    ]
}