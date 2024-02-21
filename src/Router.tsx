import RootElement from "./components/RootElement";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootElement />,
        }
    ])
    return <RouterProvider router={router}/>
}