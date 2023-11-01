import {createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Protected from "../Auth/Protected";
import DriverHomePage from "../Pages/Driver/DriverHomePage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <div><HomePage /></div>, //login , register as a driver , see the cabs nearby , Receive the subscribtions from ably
    },
    {
        path : "/driver",
        element : <Protected><DriverHomePage /></Protected> //Here you can publish location data to ably
    }
  ]);