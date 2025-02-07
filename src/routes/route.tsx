import App from "@/App";
import Login from "@/pages/Login";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:'users',
                element:<Users/>
            },
            {
                path:'tasks',
                element:<Tasks/>
            }
        ]
    },
    {
        path:"/login",
        element:<Login/>
    }
])

export default routes;