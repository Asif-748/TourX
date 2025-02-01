import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import About from "../Pages/About/About";
import Client from "../Pages/Client/Client";
import Travel from "../Pages/TravelInsights/Travel";


let router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[{
      path: "/",
      element: <Homepage></Homepage>
    },
    {
      path: "/about",
      element: <About></About>
    },
    {
      path: "/client",
      element:<Client></Client>
    },
    {
      path: "/travel",
      element:<Travel></Travel>
    }
  ]
  },
]);
export default router;