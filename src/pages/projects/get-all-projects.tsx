import {Project} from "@/pages/projects/project-card.tsx";
import {Chip} from "@nextui-org/react";
import {IoLogoDocker, IoLogoReact} from "react-icons/io5";
import {BiLogoPostgresql, BiLogoTailwindCss, BiLogoTypescript} from "react-icons/bi";
import {DiNodejsSmall} from "react-icons/di";
import {TbBrandFramerMotion, TbBucket} from "react-icons/tb";
import {GrJava, GrSecure} from "react-icons/gr";
import {FcAcceptDatabase, FcDataEncryption} from "react-icons/fc";
import {RiJavascriptFill} from "react-icons/ri";
import signInSignupJavaSwings from "@/assets/images/signin-signup-java-swings.png"
import salonWebApp from "@/assets/images/salon-web-app.png"
import isocLesothoApp from "@/assets/images/isoc_lesotho_app.png"
import {SiJsonwebtokens, SiSpring} from "react-icons/si";
import {FaCodeBranch} from "react-icons/fa6";

export const getAllProjects = (): Project[] => {
    return [
        {
            name: "ISOC Lesotho Chapter",
            contributors: "Moalosi Liteboho",
            status: "completed",
            image: isocLesothoApp,
            webUrl: "https://isoc.org.ls/",
            body: <>
                <p>
                    The Internet Society Lesotho Chapter's website was designed and developed by Moalosi Liteboho, a web
                    development and design professional. A website serves as an online presence for the Lesotho Chapter
                    to promote its mission and activities in the country.
                </p>
                <div className="mt-3">
                    <Chip
                        variant="light"
                        className="text-blue-500"
                        endContent={<IoLogoReact />}
                    >
                        React
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-600"
                        endContent={<BiLogoTypescript />}
                    >
                        Typescript
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-500"
                        endContent={<BiLogoTailwindCss />}
                    >
                        Tailwind Css
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-yellow-500"
                        endContent={<RiJavascriptFill />}
                    >
                        JavaScript
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-[#3c873a]"
                        endContent={<DiNodejsSmall />}
                    >
                        NodeJs
                    </Chip>
                    <Chip
                        variant="light"
                        className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                        endContent={<TbBrandFramerMotion className="text-violet-600" />}
                    >
                        Framer Motion
                    </Chip>
                </div>
            </>
        },
        {
            name: "Salon Web App",
            contributors: "Moalosi Liteboho",
            status: "in-process",
            image: salonWebApp,
            githubUrl: "https://github.com/MoalosiLiteboho/student-grading-using-bash",
            body: <>
                <div>
                    <Chip
                        variant="light"
                        className="text-blue-500"
                        endContent={<IoLogoReact />}
                    >
                        React
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-600"
                        endContent={<BiLogoTypescript />}
                    >
                        Typescript
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-500"
                        endContent={<BiLogoTailwindCss />}
                    >
                        Tailwind Css
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-yellow-500"
                        endContent={<RiJavascriptFill />}
                    >
                        JavaScript
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-[#3c873a]"
                        endContent={<DiNodejsSmall />}
                    >
                        NodeJs
                    </Chip>
                    <Chip
                        variant="light"
                        className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                        endContent={<TbBrandFramerMotion className="text-violet-600" />}
                    >
                        Framer Motion
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-danger"
                        endContent={<GrJava className="text-blue-600" />}
                    >
                        Java
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-green-600"
                        endContent={<SiSpring />}
                    >
                        Spring Boot
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-green-600"
                        endContent={<GrSecure />}
                    >
                        Spring Boot Security
                    </Chip>
                    <Chip
                        variant="light"
                        className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-400 to-cyan-400"
                        endContent={<SiJsonwebtokens className="text-cyan-400" />}
                    >
                        Jason Web Token
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-700"
                        endContent={<BiLogoPostgresql />}
                    >
                        Postgres
                    </Chip>
                    <Chip
                        variant="light"
                        endContent={<FcDataEncryption />}
                    >
                        Password Encryption
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-[#ff9900]"
                        endContent={<TbBucket />}
                    >
                        S3 Buckets
                    </Chip>
                    <Chip
                        variant="light"
                        endContent={<FaCodeBranch />}
                    >
                        GitHub Actions
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-500"
                        endContent={<IoLogoDocker />}
                    >
                        Docker
                    </Chip>
                </div>
            </>
        },
        {
            name: "University System",
            contributors: "Moalosi Liteboho",
            status: "completed",
            image: "https://nextui.org/images/card-example-6.jpeg",
            githubUrl: "https://github.com/MoalosiLiteboho/moalosi-university-web-application"
        },
        {
            name: "SignIn & SignUp Java-Swings",
            contributors: "Moalosi Liteboho",
            status: "completed",
            image: signInSignupJavaSwings,
            githubUrl: "https://github.com/MoalosiLiteboho/desktop-application-logIn-and-registration-interface",
            body: <>
                <p>
                    This project is was build using java swings for UI, mysql database to store data and retrieve it,
                    password encryption for security. It was build allow user to login if the user has account and also
                    to register account if the user has no password and also it shows authentication errors.
                </p>
                <div className="mt-2">
                    <Chip
                        variant="light"
                        className="text-danger"
                        endContent={<GrJava className="text-blue-600" />}
                    >
                        Java
                    </Chip>
                    <Chip
                        variant="light"
                        endContent={<FcDataEncryption />}
                    >
                        Password Encryption
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-danger"
                        endContent={<GrJava className="text-blue-600" />}
                    >
                        Java Swings
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-700"
                        endContent={<FcAcceptDatabase />}
                    >
                        MySql
                    </Chip>
                </div>
            </>
        }
    ]
}

export const getFavoriteProjects = (): Project[] => {
    return [
        {
            name: "ISOC Lesotho Chapter",
            contributors: "Moalosi Liteboho",
            image: isocLesothoApp,
            webUrl: "https://isoc.org.ls/",
            body: <>
                <p>
                    The Internet Society Lesotho Chapter's website was designed and developed by Moalosi Liteboho, a web
                    development and design professional. A website serves as an online presence for the Lesotho Chapter
                    to promote its mission and activities in the country.
                </p>
                <div className="mt-3">
                    <Chip
                        variant="light"
                        className="text-blue-500"
                        endContent={<IoLogoReact />}
                    >
                        React
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-600"
                        endContent={<BiLogoTypescript />}
                    >
                        Typescript
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-500"
                        endContent={<BiLogoTailwindCss />}
                    >
                        Tailwind Css
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-yellow-500"
                        endContent={<RiJavascriptFill />}
                    >
                        JavaScript
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-[#3c873a]"
                        endContent={<DiNodejsSmall />}
                    >
                        NodeJs
                    </Chip>
                    <Chip
                        variant="light"
                        className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                        endContent={<TbBrandFramerMotion className="text-violet-600" />}
                    >
                        Framer Motion
                    </Chip>
                </div>
            </>
        },
        {
            name: "Salon Web App",
            contributors: "Moalosi Liteboho",
            image: salonWebApp,
            githubUrl: "https://github.com/MoalosiLiteboho/student-grading-using-bash",
            body: <>
                <div>
                    <Chip
                        variant="light"
                        className="text-blue-500"
                        endContent={<IoLogoReact />}
                    >
                        React
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-600"
                        endContent={<BiLogoTypescript />}
                    >
                        Typescript
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-500"
                        endContent={<BiLogoTailwindCss />}
                    >
                        Tailwind Css
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-yellow-500"
                        endContent={<RiJavascriptFill />}
                    >
                        JavaScript
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-[#3c873a]"
                        endContent={<DiNodejsSmall />}
                    >
                        NodeJs
                    </Chip>
                    <Chip
                        variant="light"
                        className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                        endContent={<TbBrandFramerMotion className="text-violet-600" />}
                    >
                        Framer Motion
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-danger"
                        endContent={<GrJava className="text-blue-600" />}
                    >
                        Java
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-green-600"
                        endContent={<SiSpring />}
                    >
                        Spring Boot
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-green-600"
                        endContent={<GrSecure />}
                    >
                        Spring Boot Security
                    </Chip>
                    <Chip
                        variant="light"
                        className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-400 to-cyan-400"
                        endContent={<SiJsonwebtokens className="text-cyan-400" />}
                    >
                        Jason Web Token
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-700"
                        endContent={<BiLogoPostgresql />}
                    >
                        Postgres
                    </Chip>
                    <Chip
                        variant="light"
                        endContent={<FcDataEncryption />}
                    >
                        Password Encryption
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-[#ff9900]"
                        endContent={<TbBucket />}
                    >
                        S3 Buckets
                    </Chip>
                    <Chip
                        variant="light"
                        endContent={<FaCodeBranch />}
                    >
                        GitHub Actions
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-500"
                        endContent={<IoLogoDocker />}
                    >
                        Docker
                    </Chip>
                </div>
            </>
        },
        {
            name: "University System",
            contributors: "Moalosi Liteboho",
            image: "https://nextui.org/images/card-example-6.jpeg",
            githubUrl: "https://github.com/MoalosiLiteboho/moalosi-university-web-application"
        },
        {
            name: "SignIn & SignUp Java-Swings",
            contributors: "Moalosi Liteboho",
            image: signInSignupJavaSwings,
            githubUrl: "https://github.com/MoalosiLiteboho/desktop-application-logIn-and-registration-interface",
            body: <>
                <p>
                    This project is was build using java swings for UI, mysql database to store data and retrieve it,
                    password encryption for security. It was build allow user to login if the user has account and also
                    to register account if the user has no password and also it shows authentication errors.
                </p>
                <div className="mt-2">
                    <Chip
                        variant="light"
                        className="text-danger"
                        endContent={<GrJava className="text-blue-600" />}
                    >
                        Java
                    </Chip>
                    <Chip
                        variant="light"
                        endContent={<FcDataEncryption />}
                    >
                        Password Encryption
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-danger"
                        endContent={<GrJava className="text-blue-600" />}
                    >
                        Java Swings
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-700"
                        endContent={<FcAcceptDatabase />}
                    >
                        MySql
                    </Chip>
                </div>
            </>
        }
    ];
}