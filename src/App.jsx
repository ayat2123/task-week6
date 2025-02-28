import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Products from "./components/Products";
import Signup from "./components/signup";
import Login from "./components/Login";

export default function App(){
    return(
        <main  className="bg-[#b8bac6] w-full h-screen flex items-center justify-center">
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="products" element={<Products/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="Login" element={<Login/>}/>
            </Route>
            
        </Routes>
        </main>
    )
}