import {Outlet, Route, Routes, useNavigate} from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import NavigationBar from "@/components/navigation/navigation-bar.tsx";
import Footer from "@/components/ui/footer.tsx";
import ErrorPage from "@/pages/error.tsx";
import HomePage from "@/pages/home/home.tsx";
import ProjectPage from "@/pages/projects/projects.tsx";
import AboutMePage from "@/pages/about/about-me.tsx";

export default function App() {
    const navigate = useNavigate();

    const RootLayout = () => {
        return (
            <>
                <NavigationBar />
                <Outlet />
                <Footer />
            </>
        );
    }

    return (
        <NextUIProvider navigate={navigate}>
            <NextThemesProvider attribute="class" defaultTheme="light">
                <Routes>
                    <Route path="/" element={<RootLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectPage />} />
                        <Route path="/about-me" element={<AboutMePage />} />
                        <Route path="/*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </NextThemesProvider>
        </NextUIProvider>
    );
}