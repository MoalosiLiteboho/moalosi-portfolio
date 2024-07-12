import {ReactNode} from "react";
import {Chip} from "@nextui-org/react";
import {GrJava} from "react-icons/gr";
import {SiSpring} from "react-icons/si";
import {FaCode, FaCodeBranch} from "react-icons/fa6";

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
            tittle: "Functional Programing",
            level: "93%",
            icon: <FaCode className="mr-1" />
        },

    ]
}