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
} from "@nextui-org/react";
import {NavigationLinks} from "./navigation-links.tsx";
import {MyLogo} from "../logo/my-logo.tsx";
import {ThemeSwitch} from "../theme/theme-switch.tsx";

export const NavigationBar = () => {
    const navigationMenuLinks = NavigationLinks();

    return (
        <NextUINavbar
            isBordered
            shouldHideOnScroll
            maxWidth="xl"
            className="h-15">
            <NavbarContent justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <Link className="flex justify-start items-center gap-1" href={navigationMenuLinks.shift()?.route}>
                        <MyLogo />
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden lg:flex" justify="end">
                {navigationMenuLinks.map((navigationMenuLink) => (
                    <NavbarItem key={navigationMenuLink.name}>
                        <Link
                            color="foreground"
                            href={navigationMenuLink.route}
                        >
                            {navigationMenuLink.name}
                        </Link>
                    </NavbarItem>
                ))}
                <ThemeSwitch />
                <NavbarItem>
                    <Button
                        as={Link}
                        className="text-sm font-normal h-8"
                        color="primary"
                        href="/join-us"
                        variant="shadow"
                    >
                        Hire Me
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="lg:hidden" justify="end">
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-1">
                    {navigationMenuLinks.map((navigationMenuLink, index) => (
                        <NavbarMenuItem key={`${navigationMenuLink}-${index}`}>
                            <Link
                                color="foreground"
                                href={navigationMenuLink.route}
                                size="lg"
                            >
                                {navigationMenuLink.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                    <NavbarMenuItem>
                        <Link
                            color="foreground"
                            href=""
                            size="lg"
                        >
                            Hire Me
                        </Link>
                    </NavbarMenuItem>
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
}