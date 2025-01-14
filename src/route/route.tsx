import { createBrowserRouter } from "react-router";
import App from '../App'
import HomePage from "../pages/Home";
import AllJobs from "../pages/AllJobs";
import Companies from "../pages/Companies";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/log-in",
                element: <Login />,
            },
            {
                path: "/sign-up",
                element: <Signup />,
            },
            {
                path: "/all-jobs",
                element: <AllJobs />,
            },
            {
                path: "/companies",
                element: <Companies />,
            },
        ],
    },
]);

export default router;