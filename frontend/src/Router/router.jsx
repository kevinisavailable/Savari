import {createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <div><HomePage /></div>, //login , register as a driver , see the cabs nearby , Receive the subscribtions from ably
    },
    {
        path : "/register",
        element : <div>Register</div> //Here you can register as a driver or a passenger. 
    },
    {
        path : "/driver",
        element : <div>Driver</div> //Here you can publish location data to ably
    }
  ]);