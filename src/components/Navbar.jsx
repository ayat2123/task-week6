import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
export default function Navigation(){
    return(
        <nav className="w-[1296px]  absolute top-[42px] left-[75px] rounded-[16px] flex justify-between items-center p-[8px_24px] bg-white shadow-[0px_10px_5px_3px_rgba(30,41,59,0.04)]">
            <h1 className="bg-gradient-to-r from-[#F97316] to-[#22C55E] bg-clip-text text-transparent 
               font-['Plus_Jakarta_Sans'] font-bold text-[24px] leading-[32px] tracking-tight" >Shopedia</h1>
            <ul>
                <li className="flex space-x-[20px] pl-[600px]">
                    <NavLink to="Products" className="mr-[20px] font-['Plus_Jakarta_Sans'] font-bold text-[20px] leading-[28px] tracking-tight text-[#F06908]"
                    >
                        Products
                    </NavLink>
                    <NavLink to="Signup" className="mr-[20px] font-['Plus_Jakarta_Sans'] font-bold text-[20px] leading-[28px] tracking-tight text-[#1E293B]"
                    >
                        Signup
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="Cart">
                       <img className=" [w-24px] [h-24px]" src={logo} alt="" />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}