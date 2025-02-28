import { Outlet } from "react-router-dom";
import Navigation from "./Navbar";
import { ToastContainer } from "react-toastify";

export default function Layout(){
    return(
        <>
        <Navigation/>
        <Outlet/>
        <ToastContainer/>
        </>
    )
}