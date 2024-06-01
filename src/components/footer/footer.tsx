import {Button, cn, Divider, Link} from "@nextui-org/react";
import {MyLogo} from "../logo/my-logo.tsx";
import {SocialMediaLinks} from "../navigation/navigation-links.tsx";

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
                    {SocialMediaLinks().map((socialLink, index) => (
                        <Button
                            key={index}
                            as={Link}
                            isIconOnly
                            isExternal
                            href={socialLink.route}
                            radius="full"
                            variant="light"
                            className={cn("h-8", socialLink.color ? `text-[${socialLink.color}]` : "")}>
                            {socialLink.icon}
                        </Button>
                    ))}
                </div>
            </div>
        </footer>
    );
}