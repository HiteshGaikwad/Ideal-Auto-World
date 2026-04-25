import MainLayout from "./Components/Layout/MainLayout";

import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";


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
            }
        ]
    },
]);

export default router;