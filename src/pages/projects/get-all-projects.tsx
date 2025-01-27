import {Project} from "@/pages/projects/project-card.tsx";
import {Chip} from "@heroui/react";
import {IoLogoDocker, IoLogoReact} from "react-icons/io5";
import {BiLogoPostgresql, BiLogoTailwindCss, BiLogoTypescript} from "react-icons/bi";
import {DiNodejsSmall} from "react-icons/di";
import {TbBrandFramerMotion, TbBucket} from "react-icons/tb";
import {GrJava, GrSecure, GrShieldSecurity} from "react-icons/gr";
import {FcAcceptDatabase, FcDataEncryption} from "react-icons/fc";
import {RiJavascriptFill, RiMoreLine, RiNextjsFill} from "react-icons/ri";
import {FaCodeBranch} from "react-icons/fa6";
import {SiAxios, SiJsonwebtokens, SiKubernetes, SiSpring} from "react-icons/si";
import {CiServer} from "react-icons/ci";
import signInSignupJavaSwings from "@/assets/images/signin-signup-java-swings.png"
import salonWebApp from "@/assets/images/salon-web-app.png"
import isocLesothoApp from "@/assets/images/isoc_lesotho_app.png"
import happyBirthdayApp from "@/assets/images/happy-birthday-app.png"
import rainbowHoldingTravelAndTours from "@/assets/images/rainbow-holding-travel-and-tours.png"
import {BsBoxes} from "react-icons/bs";

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
            name: "Happy Birthday App",
            contributors: "Moalosi Liteboho",
            status: "completed",
            image: happyBirthdayApp,
            githubUrl: "https://github.com/MoalosiLiteboho/moalosi-birthday-app",
            body: <>
                <p>
                    This project was made in my birthday to display birthday wishes people wish for me. It store messages
                    in json file and retrieve them and display by rendering them one by one in a loop form. Json server acts
                    as an api for my app and every request is send using axios library. Form is used to add data to the server
                    if data is validated and also sooner library is used to display notification either error or success ones.
                </p>
                <div className="mt-3">
                    <Chip
                        variant="light"
                        className="text-blue-500"
                        endContent={<IoLogoReact/>}
                    >
                        React
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-foreground"
                        endContent={<SiAxios/>}
                    >
                        Axios
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-600"
                        endContent={<BiLogoTypescript/>}
                    >
                        Typescript
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-500"
                        endContent={<BiLogoTailwindCss/>}
                    >
                        Tailwind Css
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-yellow-500"
                        endContent={<RiJavascriptFill/>}
                    >
                        JavaScript
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-[#3c873a]"
                        endContent={<DiNodejsSmall/>}
                    >
                        NodeJs
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-foreground"
                        endContent={<CiServer/>}
                    >
                        Json Server
                    </Chip>
                    <Chip
                        variant="light"
                        className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                        endContent={<TbBrandFramerMotion className="text-violet-600"/>}
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
            body: <>
                <div>
                    <Chip
                        variant="light"
                        className="text-blue-500"
                        endContent={<IoLogoReact/>}
                    >
                        React
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-600"
                        endContent={<BiLogoTypescript/>}
                    >
                        Typescript
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-blue-500"
                        endContent={<BiLogoTailwindCss/>}
                    >
                        Tailwind Css
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-yellow-500"
                        endContent={<RiJavascriptFill/>}
                    >
                        JavaScript
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-[#3c873a]"
                        endContent={<DiNodejsSmall/>}
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
            name: "Rainbow Holdings Travel and Tours",
            contributors: "Moalosi Liteboho",
            image: rainbowHoldingTravelAndTours,
            webUrl: "https://rainbowtravel.co.ls/",
            body: <div className="flex flex-col gap-y-4">
                <p>
                    I designed, developed, maintained, and managed the Rainbow Holdings Travel and Tours website, a
                    comprehensive platform offering tailored travel services such as travel insurance, visa arrangements,
                    hotel bookings, and flight reservations. Located in Mohalalitoe Maseru, the company aims to provide
                    economical, safe, fun, and memorable travel experiences.
                </p>
                <div className="flex flex-col gap-y-2">
                    <h3 className="font-semibold underline">My Role</h3>
                    <ul className="list-disc ml-[2.5em]">
                        <li>
                            <span className="underline">Design and Development:</span> I was solely responsible for
                            designing and developing the website's architecture, ensuring it was both visually appealing
                            and functionally robust. This included implementing responsive design principles to ensure
                            seamless user experiences across various devices.
                        </li>
                        <li>
                            <span className="underline">DevOps Engineering:</span> I applied DevOps methodologies to
                            streamline the development lifecycle, focusing on continuous integration and continuous
                            delivery (CI/CD) pipelines. This involved using tools like Jenkins for automated testing
                            and deployment, Docker for containerization, and Kubernetes for efficient resource management.
                        </li>
                        <li>
                            <span className="underline">Maintenance and Management:</span> My responsibilities included
                            maintaining the website's availability, performance, and security. This involved monitoring
                            server health, managing updates, and ensuring compliance with the latest security standards.
                        </li>
                        <li>
                            <span className="underline">Availability and Performance Optimization</span> I worked on
                            optimizing the website's infrastructure for scalability and flexibility, ensuring it could
                            handle fluctuating traffic demands without compromising performance. This involved
                            implementing load balancing techniques and leveraging cloud services for enhanced reliability.
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h3 className="font-semibold underline">Project Impact</h3>
                    <p>
                        The successful deployment of the Rainbow Holdings Travel and Tours website has significantly
                        enhanced the company's online presence, providing customers with a seamless and intuitive
                        platform to plan their travels. By integrating DevOps practices, I achieved faster deployment
                        cycles, reduced downtime, and improved overall customer satisfaction.
                    </p>
                </div>
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
                        className="text-green-600"
                        endContent={<SiSpring className="text-green-600" />}
                    >
                        Spring Boot Security
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
                        className="text-green-600"
                        endContent={<SiSpring className="text-green-600" />}
                    >
                        Spring Boot Cloud
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
                        className="text-green-600"
                        endContent={<SiSpring className="text-green-600" />}
                    >
                        Spring Boot Authorization
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
                        endContent={<BsBoxes />}
                    >
                        Microservices
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-green-600"
                        endContent={<SiSpring className="text-green-600" />}
                    >
                        Spring Boot
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-yellow-400"
                        endContent={<TbBucket />}
                    >
                        AWS S3
                    </Chip>
                    <Chip
                        variant="light"
                        endContent={<RiNextjsFill />}
                    >
                        NextJs
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-primary"
                        endContent={<SiKubernetes className="text-primary" />}
                    >
                        Kubernetes
                    </Chip>
                    <Chip
                        variant="light"
                        endContent={<GrShieldSecurity />}
                    >
                        Next Auth
                    </Chip>
                    <Chip
                        variant="light"
                        className="text-primary"
                        endContent={<IoLogoDocker className="text-primary" />}
                    >
                        Docker
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
                        endContent={<RiMoreLine />}
                    >
                        More
                    </Chip>
                </div>
            </div>
        },
        {
            name: "Salon Web App",
            contributors: "Moalosi Liteboho",
            image: salonWebApp,
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