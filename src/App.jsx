import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Products from "./components/Products";
import Signup from "./components/signup";

export default function App(){
    return(
        <main  className="bg-[#ecedf3] w-full h-screen flex items-center justify-center">
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="products" element={<Products/>}/>
            <Route path="signup" element={<Signup/>}/>
            </Route>
        </Routes>
        </main>
    )
}