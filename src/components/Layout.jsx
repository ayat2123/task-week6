import { Outlet } from "react-router-dom";
import Navigation from "./Navbar";

export default function Layout(){
    return(
        <>
        <Navigation/>
        <Outlet/>
        </>
    )
}