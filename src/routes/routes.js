import Home from "../pages/Home/Home";
import Siteroot from "../pages/Siteroot/Siteroot";


export const ROUTES=[{
    path:"/",
    element: <Siteroot/>,
    children:[{
        path:"",
        element:<Home/>
    }]

}]