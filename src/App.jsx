import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Products from "./components/Products";
import Signup from "./components/signup";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";

export default function App(){
    return(
        <main  className="bg-[#9a9eb4] w-full min-h-screen flex items-center justify-center">
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="products" element={<Products/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="login" element={<Login/>}/>
            </Route>
        </Routes>
        </main>
    )
}