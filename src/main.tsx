import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import {NavigationBar} from "./components/navigation/navigation-bar.tsx";
import {HomePage} from "./pages/home.tsx";
import {Footer} from "./components/footer/footer.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <NextUIProvider>
            <NavigationBar />
            <RouterProvider router={router} />
            <Footer />
        </NextUIProvider>
    </React.StrictMode>,
)
