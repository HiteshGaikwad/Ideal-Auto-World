import MainLayout from "./Components/Layout/MainLayout";

import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import UsedCars from "./Components/Pages/UsedCars/UsedCars";
import Insurance from "./Components/Pages/Insurance/Insurance";
import Finance from "./Components/Pages/Finance/Finance";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <MainLayout />
        ),
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/used-cars',
                element: <UsedCars />
            },
            {
                path: '/insurance',
                element: <Insurance />
            },
            {
                path: '/finance',
                element: <Finance />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
        ]
    },
]);

export default router;