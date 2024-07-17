import {Project} from "@/pages/projects/project-card.tsx";
import {Chip} from "@nextui-org/react";
import {IoLogoReact} from "react-icons/io5";
import {BiLogoTailwindCss, BiLogoTypescript} from "react-icons/bi";
import {DiNodejsSmall} from "react-icons/di";
import {TbBrandFramerMotion} from "react-icons/tb";

export const getAllProjects = (): Project[] => {
    return [
        {
            name: "ISOC Lesotho Chapter",
            status: "completed",
            image: "https://isoc.org.ls/wp-content/uploads/2020/08/background_isoc-1.png",
            icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="-1.773 -1.773 11.305 11.296"
            >
                <path
                    fill="#ffffff"
                    d="M5.64 5.673h-.473a.146.146 0 0 1-.147-.157l.048-1.65-.001-.235a.154.154 0 0 1 .155-.157h.47a.16.16 0 0 1 .16.157l.001.235-.047 1.65a.169.169 0 0 1-.167.157M4.9 6.93a.183.183 0 0 1-.178.156H2.367a.183.183 0 0 1-.173-.14l-.107-.5a.126.126 0 0 1 .128-.154h2.587c.087 0 .15.07.142.156L4.9 6.93M1.822 8.28a3.895 3.895 0 0 1-.683-.4 1.05 1.05 0 0 1-.347-.485l-.228-.95C.547 6.37.605 6.3.692 6.3h.487a.2.2 0 0 1 .188.154c.125.604.294 1.156.5 1.625l.065.14c.034.07-.04.093-.11.06M.327 4.118l-.002-.235c0-.565.032-1.12.093-1.65a.182.182 0 0 1 .176-.156h.48c.087 0 .147.07.137.156a13.46 13.46 0 0 0-.101 1.65l.002.235a.153.153 0 0 1-.153.157h-.47a.16.16 0 0 1-.16-.157m3.78.77a.15.15 0 0 1 .151.157l-.025.47a.17.17 0 0 1-.167.157H1.39a.182.182 0 0 1-.177-.156l-.05-.473a.142.142 0 0 1 .144-.156zM1.952 2.233a.17.17 0 0 1 .167-.157h.472c.087 0 .152.07.147.157L2.7 3.882l.001.235c0 .087-.07.157-.155.157h-.47a.16.16 0 0 1-.16-.157l-.001-.235.047-1.65m.862-.94L2.87.82a.183.183 0 0 1 .178-.156H5.39c.08 0 .156.062.173.14l.107.5c.017.085-.04.154-.128.154H2.956a.14.14 0 0 1-.142-.156M5.937-.53c.237.11.467.24.683.4a1.05 1.05 0 0 1 .347.485l.228.95c.017.085-.04.154-.128.154H6.58a.2.2 0 0 1-.188-.154A8.17 8.17 0 0 0 5.89-.331l-.064-.14c-.034-.07.04-.093.11-.06m1.495 4.163.002.236a14.39 14.39 0 0 1-.093 1.65.182.182 0 0 1-.176.156h-.48a.135.135 0 0 1-.137-.156c.066-.532.1-1.088.1-1.65l-.002-.235a.153.153 0 0 1 .153-.157h.47c.087 0 .16.07.16.157m-3.78-.77a.15.15 0 0 1-.151-.157l.025-.47a.17.17 0 0 1 .167-.157H6.37c.087 0 .167.07.178.156l.05.473a.142.142 0 0 1-.144.157zM5.73 6.459a.177.177 0 0 1 .172-.156h3.08a5.63 5.63 0 0 0 .546-2.427 5.69 5.69 0 0 0-.091-1.013H7.554a.174.174 0 0 1-.17-.157l-.046-.473a.135.135 0 0 1 .138-.156H9.24a5.653 5.653 0 0 0-5.36-3.854l-.333.01c-.15.25-.318.676-.47 1.363l-.05.247a.198.198 0 0 1-.186.154h-.483a.127.127 0 0 1-.13-.154L2.3-.574c.09-.4.193-.763.308-1.062A5.66 5.66 0 0 0-.773.663H1.94c.087 0 .148.07.137.156l-.052.473a.177.177 0 0 1-.172.156h-3.08a5.63 5.63 0 0 0-.546 2.426 5.69 5.69 0 0 0 .091 1.013H.205c.087 0 .162.07.17.156l.046.473a.135.135 0 0 1-.138.156H-1.48a5.653 5.653 0 0 0 5.36 3.854l.333-.01c.15-.25.318-.676.47-1.363l.05-.247a.198.198 0 0 1 .186-.154h.483c.087 0 .145.07.13.154l-.084.416c-.09.4-.193.763-.308 1.062a5.66 5.66 0 0 0 3.391-2.3H5.818a.135.135 0 0 1-.137-.156l.052-.473"
                />
            </svg>
        }
    ]
}

export const getFavoriteProjects = (): Project[] => {
    return [
        {
            name: "ISOC Lesotho Chapter",
            contributors: "Moalosi Liteboho",
            image: "https://isoc.org.ls/wp-content/uploads/2020/08/background_isoc-1.png",
            webUrl: "https://isoc.org.ls/",
            body: <>
                <p>
                    The Internet Society Lesotho Chapter's website was designed and developed by Moalosi Liteboho, a web
                    development and design professional. A website serves as an online presence for the Lesotho Chapter
                    to promote its mission and activities in the country.
                </p>
                <div className="mt-4">
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
            name: "Login & SignUp Java-Swings",
            contributors: "Moalosi Liteboho",
            image: "https://user-images.githubusercontent.com/112495633/227000232-a0b1bb49-75d8-4886-bdcd-4dadc1dd7fe1.png",
            githubUrl: "https://github.com/MoalosiLiteboho/desktop-application-logIn-and-registration-interface"
        },
        {
            name: "Student grading Shell",
            contributors: "Moalosi Liteboho",
            image: "https://source.unsplash.com/4Mw7nkQDByk",
            githubUrl: "https://github.com/MoalosiLiteboho/student-grading-using-bash"
        },
        {
            name: "University System",
            contributors: "Moalosi Liteboho",
            image: "https://nextui.org/images/card-example-6.jpeg",
            githubUrl: "https://github.com/MoalosiLiteboho/moalosi-university-web-application"
        },
    ];
}