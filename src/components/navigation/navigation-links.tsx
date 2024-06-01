import {ReactNode} from "react";
import {IoLogoGithub, IoLogoLinkedin} from "react-icons/io5";
import {FaDiscord} from "react-icons/fa6";
import {RiTwitterXFill} from "react-icons/ri";

export const NavigationLinks = () => {
    return [
        {name: "Home", route: "/"},
        {name: "About", route: "/about"},
        {name: "Contacts", route: "/about"},
        {name: "Projects", route: "/about"},
    ]
}

export type SocialMediaLinksType = {
    icon: ReactNode,
    color?: string;
    route: string;
}

export const SocialMediaLinks = (): SocialMediaLinksType[] => {
    return [
        {icon: <IoLogoLinkedin />, route: "https://www.linkedin.com/in/liteboho-moalosi-64151626a/", color: "#0A66C2"},
        {icon: <IoLogoGithub/>, route: "https://github.com/MoalosiLiteboho"},
        {icon: <FaDiscord/>, route: "", color: "#5865F2"},
        {icon: <RiTwitterXFill />, route: ""}
    ];
}