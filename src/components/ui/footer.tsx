import {Button, cn, Divider, Link} from "@nextui-org/react";
import Logo from "@/components/ui/logo.tsx";
import {SocialMediaLinks} from "@/components/navigation/navigation-links.tsx";

export default function Footer() {
    return (
        <footer>
            <div className="px-4 my-4">
                <Divider/>
            </div>
            <div className="px-4 mb-5 flex justify-between items-center">
                <div className="flex items-center">
                    <p>&copy; {new Date().getFullYear()}.</p>
                    <Logo className="text-lg" />
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
                            className={cn("h-8", socialLink.color || "")}>
                            {socialLink.icon}
                        </Button>
                    ))}
                </div>
            </div>
        </footer>
    );
}