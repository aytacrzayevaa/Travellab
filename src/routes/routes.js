import Customers from "../pages/Customers/Customers";
import Expenses from "../pages/Expenses/Expenses";
import Home from "../pages/Home/Home";
import Messages from "../pages/Messages/Messages";
import Sales from "../pages/Sales/Sales";
import Siteroot from "../pages/Siteroot/Siteroot";
import Users from "../pages/Users/Users";

export const ROUTES = [
  {
    path: "/",
    element: <Siteroot />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/customers",
        element: <Customers />
      },
      {
        path: "/sales",
        element: <Sales />
      },
      {
        path: "/expenses",
        element: <Expenses />
      },
      {
        path: "/message",
        element: <Messages />
      },
      {
        path: "/users",
        element: <Users />
      }
    ],
  },
];
