import {
    Button,
    Link,
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@heroui/react";
import {useLocation} from "react-router-dom";
import {NavigationLinks} from "@/components/navigation/navigation-links.tsx";
import ThemeSwitch from "@/components/theme/theme-switch.tsx";
import Logo from "@/components/ui/logo.tsx";

export default function NavigationBar() {
    const navigationMenuLinks = NavigationLinks();
    const location = useLocation();

    return (
        <NextUINavbar
            isBordered
            maxWidth="xl"
            className="h-14">
            <NavbarContent justify="start">
                <NavbarMenuToggle className="lg:hidden" />
                <NavbarBrand className="gap-3 max-w-fit">
                    <Link className="flex justify-start items-center gap-1" href={navigationMenuLinks.shift()?.route}>
                        <Logo />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden lg:flex" justify="center">
                {navigationMenuLinks.map((navigationMenuLink) => (
                    <NavbarItem
                        key={navigationMenuLink.name}
                        isActive={navigationMenuLink.route === location.pathname}
                    >
                        <Link
                            color={navigationMenuLink.route === location.pathname ? "primary" : "foreground"}
                            href={navigationMenuLink.route}
                        >
                            {navigationMenuLink.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <ThemeSwitch />
                <NavbarItem>
                    <Button
                        as={Link}
                        className="text-sm font-normal h-8"
                        color="primary"
                        href="mailto:litebohojamesmoalosi@gmail.com"
                        variant="shadow"
                    >
                        Hire Me
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-1">
                    {navigationMenuLinks.map((navigationMenuLink, index) => (
                        <NavbarMenuItem
                            key={`${navigationMenuLink}-${index}`}
                            isActive={navigationMenuLink.route === location.pathname}
                        >
                            <Link
                                color={navigationMenuLink.route === location.pathname ? "primary" : "foreground"}
                                href={navigationMenuLink.route}
                            >
                                {navigationMenuLink.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
}