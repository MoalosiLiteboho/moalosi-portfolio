import {Button, Divider} from "@nextui-org/react";
import {IoLogoGithub, IoLogoLinkedin} from "react-icons/io5";
import {RiTwitterXFill} from "react-icons/ri";
import {FaDiscord} from "react-icons/fa6";
import {MyLogo} from "../logo/my-logo.tsx";

export const Footer = () => {
    return (
        <footer>
            <div className="px-4 my-4">
                <Divider/>
            </div>
            <div className="px-4 mb-5 flex justify-between items-center">
                <div className="flex">
                    <p>&copy; {new Date().getFullYear()}.</p>
                    <MyLogo className="text-medium" />
                </div>
                <div className="flex justify-center items-center gap-x-0">
                    <Button
                        isIconOnly
                        radius="full"
                        variant="light"
                        className="h-8 text-[#0A66C2]">
                        <IoLogoLinkedin />
                    </Button>
                    <Button
                        isIconOnly
                        radius="full"
                        variant="light"
                        className="h-8">
                        <IoLogoGithub />
                    </Button>
                    <Button
                        isIconOnly
                        radius="full"
                        variant="light"
                        className="h-8 text-[#5865F2]">
                        <FaDiscord />
                    </Button>
                    <Button
                        isIconOnly
                        radius="full"
                        variant="light"
                        className="h-8">
                        <RiTwitterXFill />
                    </Button>
                </div>
            </div>
        </footer>
    );
}